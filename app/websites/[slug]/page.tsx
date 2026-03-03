import fs from "fs";
import path from "path";
import { notFound, redirect } from "next/navigation";
import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";

async function getWebsites(): Promise<WebsiteType[]> {
  const filePath = path.join(process.cwd(), "public", "websites.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}

export async function generateStaticParams() {
  const websites = await getWebsites();
  return websites.map((w) => ({ slug: w.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function WebsitePage({ params }: Props) {
  const { slug } = await params;
  const websites = await getWebsites();
  const website = websites.find((w) => w.slug === slug);

  if (!website) redirect("/websites");

  return <WebsiteHeader website={website} />;
}
