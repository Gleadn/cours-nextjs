import fs from "fs";
import path from "path";
import { Button } from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import Website from "@/components/ui/Website";
import { WebsiteType } from "@/types/Website";

async function getWebsites(): Promise<WebsiteType[]> {
  const filePath = path.join(process.cwd(), "public", "websites.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}

export default async function WebsitesPage() {
  const websites = await getWebsites();

  return (
    <div className="px-6 py-12">
      <Title tag="h1" topLine="Découvrez de nouveaux">
        Sites web
      </Title>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
        {websites.map((w) => (
          <Website key={w.slug} website={w} />
        ))}
      </div>
      <footer className="pt-12 flex justify-center">
        <Button>Charger plus de sites web</Button>
      </footer>
    </div>
  );
}
