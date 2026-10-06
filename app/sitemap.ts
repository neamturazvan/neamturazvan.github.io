import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/profile";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.origin}/` },
    ...projects.map((p) => ({
      url: `${siteConfig.origin}/projects/${p.slug}/`,
    })),
  ];
}
