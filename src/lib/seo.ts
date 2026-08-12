import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://qtmmedia.vn").replace(/\/$/, "");
export const SITE_NAME = "QTM MediaTech";
export const LOGO_IMAGE = "https://res.cloudinary.com/s3qilvce/image/upload/v1786453565/logo.png";
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/s3qilvce/image/upload/v1786451738/talkshow.jpg";

export function getAbsoluteUrl(path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = getAbsoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

export function toJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
