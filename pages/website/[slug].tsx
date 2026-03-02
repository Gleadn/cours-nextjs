import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import { Website } from "@/types/website";

type Props = {
  website: Website;
};

export default function WebsiteDetailPage({ website }: Props) {
  return (
    <>
      <Head>
        <title>{website.title}</title>
      </Head>
      <main>
        <Link href="/websites">← Retour</Link>

        <h1>{website.title}</h1>

        <Image
          src={`/images/${website.thumbnail}`}
          alt={website.title}
          width={900}
          height={600}
          style={{ objectFit: "cover" }}
        />

        <p>{website.description}</p>

        <a href={website.url} target="_blank" rel="noopener noreferrer">
          Visiter le site
        </a>

        <p>Date : {website.date}</p>

        <ul>
          {website.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <ul>
          {website.colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul>

        <ul>
          {website.images.map((img) => (
            <li key={img}>
              <Image
                src={`/images/${img}`}
                alt={img}
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "public", "JSON_data", "websites.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const websites: Website[] = JSON.parse(fileContents);

  const paths = websites.map((website) => ({
    params: { slug: website.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const filePath = path.join(process.cwd(), "public", "JSON_data", "websites.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const websites: Website[] = JSON.parse(fileContents);

  const website = websites.find((w) => w.slug === params?.slug);

  if (!website) {
    return {
      redirect: {
        destination: "/websites",
        permanent: false,
      },
    };
  }

  return {
    props: { website },
  };
};
