import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com"; // TODO: Replace with your actual domain

  const staticPages = ["", "/contact", "/tours"];

  const tourSlugs = [
    "morning-birdwatching-in-native-forests",
    "nocturnal-nature-walk",
    "highland-birding-adventure",
    "coastal-trail-seabird-discovery",
    "guided-forest-ecology-tour",
    "full-day-jungle-expedition",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page === "" ? 1 : 0.8,
  }));

  const tourUrls = tourSlugs.map((slug) => ({
    url: `${baseUrl}/tours/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...tourUrls];
}
