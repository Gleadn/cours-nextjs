import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export const metadata = {
  title: "Mentions légales",
};

export default async function MentionsPage() {
  const filePath = path.join(process.cwd(), "public", "mentions.mdx");
  const fileContents = fs.readFileSync(filePath, "utf-8");

  // Sépare le frontmatter du contenu MDX
  const { content } = matter(fileContents);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 prose">
      {/* MDXRemote/rsc est un Server Component : pas besoin de serialize() */}
      <MDXRemote source={content} components={{ Link }} />
    </div>
  );
}
