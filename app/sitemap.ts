import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const pages = ["", "/about", "/services", "/projects", "/technologies", "/contact"]; return pages.map((path) => ({ url: `https://synxex.com${path}`, lastModified: new Date() })); }
