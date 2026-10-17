import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { servicePages } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/maghale/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/manabe/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...servicePages.map((service) => ({
      url: `${siteConfig.url}/khadamat/${service.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/maghale/${post.slug}/`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];
}
