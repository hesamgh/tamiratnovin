import { PhoneNumber } from "@/components/ui/phone-number";
import { MobileCallIcon } from "@/components/ui/mobile-call-icon";
import type { BlogPost } from "@/lib/blog-data";
import { getSortedPosts } from "@/lib/blog-data";
import { getServiceBySlug } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import { businessId } from "@/lib/seo";
import { ChevronLeft, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const url = `${siteConfig.url}/maghale/${post.slug}/`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: "fa-IR",
        mainEntityOfPage: url,
        author: {
          "@type": "Person",
          name: siteConfig.technician,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Organization",
          "@id": businessId,
          name: siteConfig.fullName,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/logo.png`,
          },
        },
        keywords: post.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "خانه",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "مقالات",
            item: `${siteConfig.url}/maghale/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const related = post.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
  const morePosts = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <ArticleJsonLd post={post} />
      <article className="bg-background pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <nav
            aria-label="مسیر صفحه"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/" className="hover:text-primary">
              خانه
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <Link href="/maghale/" className="hover:text-primary">
              مقالات
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </nav>

          <header className="mb-8">
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>
                نویسنده: {siteConfig.technician} — {siteConfig.fullName}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingMinutes} دقیقه مطالعه
              </span>
              <time dateTime={post.updatedAt}>
                به‌روزرسانی:{" "}
                {new Date(post.updatedAt).toLocaleDateString("fa-IR")}
              </time>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </header>

          <div className="prose-sm space-y-8">
            {post.content.map((block, i) => (
              <section key={i}>
                {block.heading && (
                  <h2 className="mb-3 text-xl font-bold md:text-2xl">{block.heading}</h2>
                )}
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="mb-3 leading-8 text-foreground/90">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {related.length > 0 && (
            <section className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h2 className="mb-3 text-lg font-bold">خدمات مرتبط</h2>
              <ul className="space-y-2">
                {related.map((service) =>
                  service ? (
                    <li key={service.slug}>
                      <Link
                        href={`/khadamat/${service.slug}/`}
                        className="font-medium text-primary hover:underline"
                      >
                        {service.title}
                      </Link>
                      <span className="text-sm text-muted-foreground">
                        {" "}
                        — {service.description}
                      </span>
                    </li>
                  ) : null
                )}
              </ul>
            </section>
          )}

          {post.externalLinks.length > 0 && (
            <section className="mt-8">
              <h2 className="mb-3 text-lg font-bold">منابع و لینک‌های معتبر</h2>
              <ul className="space-y-2">
                {post.externalLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      {link.title}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-10 rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 text-center">
            <h2 className="mb-3 text-xl font-bold">نیاز به تعمیر فوری دارید؟</h2>
            <p className="mb-5 text-muted-foreground">
              با {siteConfig.technician} تماس بگیرید — اعزام سریع در تهران
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-primary to-accent px-6 py-3 font-semibold text-white"
            >
              <MobileCallIcon boxed size="sm" />
              <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber>
            </a>
          </section>

          {morePosts.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold">مقالات بیشتر</h2>
              <div className="grid gap-3">
                {morePosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/maghale/${item.slug}/`}
                    className="rounded-2xl border border-border/60 bg-card px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <span className="font-medium">{item.title}</span>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                      {item.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
