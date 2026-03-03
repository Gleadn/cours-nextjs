import Link from "next/link";
import styles from "./ColorCard.module.css";

type Props = {
  name: string;
  hex: string;
};

export default function ColorCard({ name, hex }: Props) {
  return (
    <div className={styles.card} style={{ background: hex }}>
      <div className={styles.top}>
        <div className={styles.info}>
          <span className={styles.name}>{name.toUpperCase()}</span>
          <span className={styles.hex}>{hex}</span>
        </div>
        <Link href={`/colors?q=${hex.replace("#", "")}`} className={styles.icon} aria-label="Rechercher cette couleur">
          🔍
        </Link>
      </div>
      <div className={styles.bottom}>
        <span className={styles.sample}>Aa</span>
      </div>
    </div>
  );
}
