import type { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/data/projectsData";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://qtmmedia.vn";

function getUrl(path = "") {
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: getUrl("/home"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getUrl("/solution"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getUrl("/projects"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: getUrl("/missLegacy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: getUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: getUrl(`/projects/${project.id}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
