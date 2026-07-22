import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/produtos", changeFrequency: "monthly", priority: 0.8 },
    { path: "/sobre", changeFrequency: "yearly", priority: 0.6 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
