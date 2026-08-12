import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById, PROJECTS_DATA } from "@/data/projectsData";
import { getAbsoluteUrl, LOGO_IMAGE, SITE_NAME, toJsonLd } from "@/lib/seo";
import ProjectDetailClient from "./ProjectDetailClient";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getProjectDescription(project: NonNullable<ReturnType<typeof getProjectById>>) {
  return project.sapo ?? project.summary;
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Dự án không tồn tại",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = getProjectDescription(project);
  const path = `/projects/${project.id}`;
  const url = getAbsoluteUrl(path);

  return {
    title: project.title,
    description,
    keywords: [project.title, project.category, project.client, "QTM MediaTech", "case study truyền thông"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "vi_VN",
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${SITE_NAME}`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const projectUrl = getAbsoluteUrl(`/projects/${project.id}`);
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: getProjectDescription(project),
    image: project.image,
    url: projectUrl,
    inLanguage: "vi-VN",
    about: project.category,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
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
      "@id": projectUrl,
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
        name: "Dự án",
        item: getAbsoluteUrl("/projects"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: projectUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd) }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}
