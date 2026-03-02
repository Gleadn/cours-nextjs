import Image from "next/image";
import Link from "next/link";
import { Website } from "@/types/website";

type Props = {
  website: Website;
};

export default function WebsiteCard({ website }: Props) {
  return (
    <Link href={`/website/${website.slug}`}>
      <div>
        <h2>{website.title}</h2>
        <Image
          src={`/images/${website.thumbnail}`}
          alt={website.title}
          width={600}
          height={400}
          style={{ objectFit: "cover" }}
        />
      </div>
    </Link>
  );
}
