import type { MetadataRoute } from "next"

const siteUrl = "https://tsukemen.aizubrandhall-lp2.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}

