import type { MetadataRoute } from "next";

const baseUrl = "https://www.accotomate.com";

const routes = [
  { path: "/", priority: 1 },
  { path: "/bookkeeping", priority: 0.9 },
  { path: "/quickbooks", priority: 0.9 },
  { path: "/taxes", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacypolicy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
