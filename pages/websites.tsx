import Head from "next/head";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { Website } from "@/types/website";
import WebsiteCard from "@/components/WebsiteCard";

type Props = {
  websites: Website[];
};

export default function WebsitesPage({ websites }: Props) {
  return (
    <>
      <Head>
        <title>Websites</title>
      </Head>
      <main>
        <h1>Websites</h1>
        <ul>
          {websites.map((website) => (
            <li key={website.slug}>
              <WebsiteCard website={website} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "public", "JSON_data", "websites.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const websites: Website[] = JSON.parse(fileContents);

  return {
    props: { websites },
  };
};