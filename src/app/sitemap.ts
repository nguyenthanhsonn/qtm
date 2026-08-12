import type { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/data/projectsData";
import { getAbsoluteUrl } from "@/lib/seo";

const SITE_LAST_MODIFIED = new Date("2026-08-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE_LAST_MODIFIED;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: getAbsoluteUrl("/home"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: getAbsoluteUrl("/solution"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getAbsoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getAbsoluteUrl("/projects"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: getAbsoluteUrl("/missLegacy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: getAbsoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: getAbsoluteUrl(`/projects/${project.id}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
