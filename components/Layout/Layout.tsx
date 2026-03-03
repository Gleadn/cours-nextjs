import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
