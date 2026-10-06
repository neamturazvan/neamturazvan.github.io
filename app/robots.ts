import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/profile";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.origin}/sitemap.xml`,
  };
}
