import { ServicePageContent } from "@/components/sections/service-page";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `${siteConfig.url}/khadamat/${service.slug}/`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: url,
      languages: { "fa-IR": url },
    },
    openGraph: {
      type: "website",
      locale: "fa_IR",
      url,
      siteName: siteConfig.fullName,
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: "/logo.png",
          width: 512,
          height: 512,
          alt: `${service.title} — ${siteConfig.fullName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export default async function ServiceRoutePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServicePageContent service={service} />;
}
