import Title from "@/components/ui/Title";
import { createClient } from "@/prismicio";
import WebsitesList from "./_components/WebsitesList";
import websitesData from "@/public/websites.json";

export default async function WebsitesPage() {
<<<<<<< HEAD
  const websites: WebsiteType[] = websitesData as WebsiteType[];
=======
  const client = createClient();
  const websites = await client.getAllByType("website", {
    orderings: [{ field: "document.first_publication_date", direction: "desc" }],
  });
>>>>>>> 0b6e01df4a6c254f545f420130654db24abf06b1

  return (
    <main className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      {websites && <WebsitesList websites={websites} />}
    </main>
  );
}
