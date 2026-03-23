import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";
import websitesData from "@/public/websites.json";

const websites: WebsiteType[] = websitesData as WebsiteType[];

export async function generateStaticParams() {
  return websites.map((w: WebsiteType) => ({
    slug: w.slug,
  }));
}

type WebsitePageType = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WebsitePage({ params }: WebsitePageType) {
  const { slug } = await params;
  const currentWebsite = websites.find((w: WebsiteType) => w.slug == slug);
  console.log("currentWebsite: ", currentWebsite);

  return (
    <main>{currentWebsite && <WebsiteHeader website={currentWebsite} />}</main>
  );
}
