import type { MetadataRoute } from "next"

const siteUrl = "https://tsukemen.aizubrandhall-lp2.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}

