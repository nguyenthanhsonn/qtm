import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsArticleBySlug, NEWS_ARTICLES } from "@/data/newsData";
import { getAbsoluteUrl, LOGO_IMAGE, SITE_NAME, toJsonLd } from "@/lib/seo";
import NewsArticleDetailClient from "@/components/news/NewsArticleDetailClient";
import AboutBackground from "@/components/about/AboutBackground";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    return {
      title: "Bài viết không tồn tại",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const path = `/news/${article.slug}`;
  const url = getAbsoluteUrl(path);

  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.excerpt,
    keywords: [...article.tags, article.category, "QTM MediaTech", "tin tức sự kiện"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${article.title} | ${SITE_NAME}`,
      description: article.excerpt,
      url,
      siteName: SITE_NAME,
      locale: "vi_VN",
      type: "article",
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${SITE_NAME}`,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = getAbsoluteUrl(`/news/${article.slug}`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage,
    url: articleUrl,
    datePublished: article.publishedAt,
    inLanguage: "vi-VN",
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_IMAGE,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: getAbsoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tin tức & Insights",
        item: getAbsoluteUrl("/news"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <main style={{ position: "relative", minHeight: "100vh", backgroundColor: "#040C1A", overflow: "hidden" }}>
      <AboutBackground />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd) }}
      />

      <NewsArticleDetailClient article={article} />
    </main>
  );
}
