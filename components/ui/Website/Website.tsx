import Image from "next/image";
import Link from "next/link";
import { WebsiteType } from "@/types/website";
import styles from "./Website.module.css";

type Props = Pick<WebsiteType, "slug" | "title" | "thumbnail">;

export default function Website({ title, thumbnail, slug }: Props) {
  return (
    <Link href={`/websites/${slug}`} className="flex flex-col gap-2 group">
      <div className={styles.imageWrapper}>
        <Image
          src={`/images/${thumbnail}`}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-sm font-medium">{title}</p>
    </Link>
  );
}
