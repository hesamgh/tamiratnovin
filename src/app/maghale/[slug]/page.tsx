import { BlogPostContent } from "@/components/sections/blog-post";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/maghale/${post.slug}/`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: `${siteConfig.technician} - ${siteConfig.fullName}` }],
    alternates: {
      canonical: url,
      languages: { "fa-IR": url },
    },
    openGraph: {
      type: "article",
      locale: "fa_IR",
      url,
      siteName: siteConfig.fullName,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.technician],
      images: [
        {
          url: "/logo.png",
          width: 512,
          height: 512,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
