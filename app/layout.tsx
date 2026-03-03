import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/layout/ScrollTop";
import "@/styles/globals.css";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: ".COM",
  description: "Découvrez les meilleurs sites web",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={`bg-light flex flex-col min-h-dvh ${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
