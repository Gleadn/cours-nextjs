import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";

type Frontmatter = {
  title: string;
  date: string;
  description: string;
};

type Props = {
  source: MDXRemoteSerializeResult;
  frontmatter: Frontmatter;
};

export default function MentionsPage({ source, frontmatter }: Props) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <main className="max-w-3xl mx-auto px-6 py-16 prose">
        <MDXRemote {...source} components={{ Link }} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "public", "mentions.mdx");
  const fileContents = fs.readFileSync(filePath, "utf-8");

  // Sépare le frontmatter (---) du contenu MDX
  const { content, data } = matter(fileContents);

  // Compile le MDX en un objet sérialisable (JSON-safe) pour les props
  const source = await serialize(content);

  return {
    props: {
      source,
      frontmatter: data as Frontmatter,
    },
  };
};
