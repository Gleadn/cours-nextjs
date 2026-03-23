import WebsiteHeader from "@/components/ui/WebsiteHeader";
<<<<<<< HEAD
import { WebsiteType } from "@/types/Website";
import websitesData from "@/public/websites.json";

const websites: WebsiteType[] = websitesData as WebsiteType[];

export async function generateStaticParams() {
  return websites.map((w: WebsiteType) => ({
    slug: w.slug,
=======
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import TextSlice from "@/slices/TextSlice";
import ImagesSlice from "@/slices/ImagesSlice";
import VideoSlide from "@/slices/VideoSlide";

export async function generateStaticParams() {
  const client = createClient();
  const websites = await client.getAllByType("website");

  return websites.map((w) => ({
    slug: w.uid,
>>>>>>> 0b6e01df4a6c254f545f420130654db24abf06b1
  }));
}

type WebsitePageType = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: WebsitePageType) {
  const { slug } = await params;
  const client = createClient();
  const website = await client.getByUID("website", slug);
  return {
    title: website.data.title,
    description: website.data.meta_description,
    openGraph: {
      images: [website.data.meta_image],
    },
  };
}

export default async function WebsitePage({ params }: WebsitePageType) {
  const { slug } = await params;
<<<<<<< HEAD
  const currentWebsite = websites.find((w: WebsiteType) => w.slug == slug);
  console.log("currentWebsite: ", currentWebsite);
=======
  const client = createClient();
  const website = await client.getByUID("website", slug);
>>>>>>> 0b6e01df4a6c254f545f420130654db24abf06b1

  return (
    <main>
      <WebsiteHeader website={website} />
      <SliceZone
        slices={website.data.slices}
        components={{
          text_slice: TextSlice,
          images_slice: ImagesSlice,
          video_slide: VideoSlide,
        }}
      />
    </main>
  );
}
