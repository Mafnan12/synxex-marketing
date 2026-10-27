import type { MetadataRoute } from "next";

const pages = [
  "",
  "/about",
  "/contact",
  "/markets",
  "/ai-agents",
  "/banking-cards",
  "/remittance",
  "/wallet",
  "/security",
  "/proof-of-reserves",
  "/services",
  "/projects",
  "/technologies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `https://synxex.com${path}`,
    lastModified: new Date(),
  }));
}
