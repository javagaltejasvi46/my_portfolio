import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/resume", ...projects.map((project) => `/work/${project.slug}`)].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date() })); }
