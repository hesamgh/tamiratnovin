import { getSortedPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";

const pageUrl = `${siteConfig.url}/maghale/`;

export const metadata: Metadata = {
  title: "مقالات تعمیرات لوازم خانگی | راهنمای پکیج، لباسشویی و برق",
  description:
    "مقالات آموزشی تعمیرات نوین درباره پکیج، کولرگازی، لباسشویی، آیفون تصویری و سیم‌کشی ساختمان — راهنمای کاربردی برای ساکنان تهران.",
  alternates: {
    canonical: pageUrl,
    languages: { "fa-IR": pageUrl },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: pageUrl,
    siteName: siteConfig.fullName,
    title: "مقالات تعمیرات لوازم خانگی | تعمیرات نوین",
    description:
      "راهنماهای کاربردی تعمیر پکیج، کولرگازی، لباسشویی و برق ساختمان توسط تیم تعمیرات نوین.",
  },
};

export default function BlogIndexPage() {
  const posts = getSortedPosts();

  return (
    <main className="bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            مقالات{" "}
            <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
              تعمیرات نوین
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            راهنماهای کاربردی برای تشخیص خرابی، سرویس دوره‌ای و انتخاب تعمیرکار مطمئن در تهران.
            محتوا به‌صورت منظم به‌روز می‌شود تا در گوگل همیشه تازه بماند.
          </p>
        </header>

        <div className="grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/maghale/${post.slug}/`}
              className="group rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("fa-IR")}
                </time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readingMinutes} دقیقه
                </span>
              </div>
              <h2 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
