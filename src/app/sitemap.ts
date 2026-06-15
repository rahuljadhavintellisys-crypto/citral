import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://citral-uganda.org";

  const staticPages = [
    "",
    "/about",
    "/programs",
    "/impact",
    "/news",
    "/partners",
    "/get-involved",
    "/contact",
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
