import { MetadataRoute } from "next";
import websitesData from "@/public/websites.json";
import { WebsiteType } from "@/types/Website";
import { createClient } from "@/prismicio";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://next-formation.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createClient();
  const homeDoc = await client.getSingle("home");

  const websites = websitesData as WebsiteType[];

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(homeDoc.last_publication_date),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/websites`,
      lastModified: new Date(homeDoc.last_publication_date),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(homeDoc.last_publication_date),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/mentions`,
      lastModified: new Date(homeDoc.last_publication_date),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/pins`,
      lastModified: new Date(homeDoc.last_publication_date),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: new Date(homeDoc.last_publication_date),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const websiteRoutes: MetadataRoute.Sitemap = websites.map((w) => ({
    url: `${BASE_URL}/websites/${w.slug}`,
    lastModified: new Date(w.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...websiteRoutes];
}
