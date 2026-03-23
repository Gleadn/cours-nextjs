import Title from "@/components/ui/Title";
import { WebsiteType } from "@/types/Website";
import WebsitesList from "./_components/WebsitesList";
import websitesData from "@/public/websites.json";

export default async function WebsitesPage() {
  const websites: WebsiteType[] = websitesData as WebsiteType[];

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      {websites && <WebsitesList websites={websites} />}
    </main>
  );
}
