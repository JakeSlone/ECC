import { SiteHeader } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
