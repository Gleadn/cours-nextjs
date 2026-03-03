import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-14 flex items-center justify-between px-8 gap-6">
      <div className="flex flex-col leading-tight">
        <Link href="/">
          <span className="font-bold text-base tracking-tight">.COM</span>
          <span className="block text-xs text-gray-400">Sub titre</span>
        </Link>
      </div>

      <nav className="flex items-center gap-8 text-sm">
        <Link href="/websites" className="hover:underline">Sites web</Link>
        <Link href="/colors" className="hover:underline">Couleurs</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>

      <div className="flex items-center gap-3">
        <div className={styles.search}>
          <input type="text" placeholder="Rechercher par tag" />
          <button aria-label="Rechercher">🔍</button>
        </div>
        <Link href="/pins" className="text-sm px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
          Épingles
        </Link>
        <Link href="/login" className="text-sm px-3 py-1.5 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
          Se connecter
        </Link>
        <Link href="/register" className="text-sm px-3 py-1.5 bg-brand-black text-white rounded hover:opacity-80 transition-opacity">
          Log in
        </Link>
      </div>
    </header>
  );
}
