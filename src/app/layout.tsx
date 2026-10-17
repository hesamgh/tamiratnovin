import { Footer } from "@/components/layout/footer";
import { FloatingCallButton } from "@/components/layout/floating-call-button";
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ItemListJsonLd,
  LocalBusinessJsonLd,
  WebPageJsonLd,
  WebSiteJsonLd,
} from "@/components/json-ld";
import { PwaInstallBanner } from "@/components/pwa-install-banner";
import { SEO } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: SEO.title,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  applicationName: siteConfig.fullName,
  referrer: "origin-when-cross-origin",
  authors: [{ name: `${siteConfig.technician} - ${siteConfig.fullName}`, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "تعمیرات لوازم خانگی",
  openGraph: {
    type: "website",
    locale: SEO.locale,
    alternateLocale: ["fa"],
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: SEO.title,
    description: SEO.description,
    countryName: "Iran",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "تعمیرات لوازم خانگی نوین — آقا محسن",
        type: "image/png",
      },
      {
        url: "/images/shakhs.png",
        width: 800,
        height: 800,
        alt: `${siteConfig.technician} — تعمیرکار لوازم خانگی`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "fa-IR": siteConfig.url,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/icon-192.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.fullName,
  },
  formatDetection: {
    telephone: true,
  },
  other: {
    "geo.region": "IR-TE",
    "geo.placename": SEO.city,
    language: "Persian",
    "revisit-after": "3 days",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`${vazirmatn.variable} font-sans antialiased`}>
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <WebPageJsonLd />
        <BreadcrumbJsonLd />
        <FaqJsonLd />
        <ItemListJsonLd />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
        <PwaInstallBanner />
        <Script src="/pwa-bootstrap.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
