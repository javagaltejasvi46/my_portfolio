import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Tejasvi Javagal — Software Engineer", template: "%s — Tejasvi Javagal" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Tejasvi Javagal — Software Engineer", description: site.description, url: "/", siteName: "Tejasvi Javagal", type: "website" },
  twitter: { card: "summary_large_image", title: "Tejasvi Javagal — Software Engineer", description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
