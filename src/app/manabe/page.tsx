import { authorityLinks, directoryLinks } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const pageUrl = `${siteConfig.url}/manabe/`;

export const metadata: Metadata = {
  title: "منابع معتبر و لینک‌ها | تعمیرات نوین",
  description:
    "لینک به مراجع معتبر فنی‌وحرفه‌ای، استاندارد، ایمنی و مسیرهای ثبت کسب‌وکار محلی برای اعتماد و دیده شدن بهتر تعمیرات نوین.",
  alternates: {
    canonical: pageUrl,
    languages: { "fa-IR": pageUrl },
  },
};

export default function ResourcesPage() {
  return (
    <main className="bg-background pt-24 pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <header className="mb-10">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            منابع معتبر و{" "}
            <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
              لینک‌ها
            </span>
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            برای اعتماد بیشتر مشتریان و اعتبار نزد گوگل، به مراجع رسمی لینک می‌دهیم و حضور
            {siteConfig.fullName} را در پلتفرم‌های محلی تقویت می‌کنیم. آدرس رسمی سایت:{" "}
            <a href={siteConfig.url} className="text-primary hover:underline">
              {siteConfig.url}
            </a>
          </p>
        </header>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">مراجع تخصصی و دولتی</h2>
          <ul className="space-y-3">
            {authorityLinks.map((link) => (
              <li
                key={link.url}
                className="rounded-2xl border border-border/60 bg-card p-4"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                >
                  {link.title}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold">ثبت در سایت‌ها و نقشه‌ها (بک‌لینک محلی)</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            ثبت کسب‌وکار در این پلتفرم‌ها باعث می‌شود سایت‌های دیگر به{" "}
            <strong className="text-foreground">{siteConfig.url}</strong> لینک بدهند و رتبه محلی
            بالا برود.
          </p>
          <ul className="space-y-3">
            {directoryLinks.map((link) => (
              <li
                key={link.url}
                className="rounded-2xl border border-border/60 bg-card p-4"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                >
                  {link.title}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <h2 className="mb-2 text-lg font-bold">لینک دادن به ما</h2>
          <p className="mb-3 text-sm text-muted-foreground">
            اگر سایت، وبلاگ یا پیج دارید، می‌توانید با این متن و لینک به ما اشاره کنید:
          </p>
          <code className="block overflow-x-auto rounded-xl bg-background p-4 text-xs leading-relaxed">
            {`<a href="${siteConfig.url}">تعمیرات لوازم خانگی نوین — تعمیر پکیج و لوازم خانگی تهران</a>`}
          </code>
          <p className="mt-4 text-sm">
            مقالات آموزشی ما:{" "}
            <Link href="/maghale/" className="text-primary hover:underline">
              /maghale/
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
