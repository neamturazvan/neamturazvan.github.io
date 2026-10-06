import type { Metadata } from "next";
import { profile, siteConfig } from "@/data/profile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";
export const metadata: Metadata = {
  ...(siteConfig.origin ? { metadataBase: new URL(siteConfig.origin) } : {}),
  title: { default: siteConfig.title, template: `%s — ${profile.name}` },
  description: profile.description,
  alternates: { canonical: `${siteConfig.origin}/` },
  openGraph: {
    title: siteConfig.title,
    description: profile.description,
    type: "website",
    locale: "en_GB",
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: profile.description,
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
