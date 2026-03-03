import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-8 py-12 flex flex-col gap-6">
      <Link href="/" className="text-4xl font-bold tracking-tighter">
        .COM
      </Link>
      <nav className="flex flex-col gap-1.5 text-sm text-gray-600">
        <Link href="/websites" className="hover:underline">Voir les sites web</Link>
        <Link href="/colors" className="hover:underline">Voir les couleurs</Link>
        <Link href="/contact" className="hover:underline">Mentions légales</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="/" className="hover:underline">Gestion des cookies</Link>
      </nav>
    </footer>
  );
}
