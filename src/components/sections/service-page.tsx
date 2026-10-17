import { PhoneNumber } from "@/components/ui/phone-number";
import { MobileCallIcon } from "@/components/ui/mobile-call-icon";
import { Logo } from "@/components/ui/logo";
import type { ServicePage } from "@/lib/services-data";
import { servicePages } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import { businessId } from "@/lib/seo";
import { CheckCircle2, Phone, ChevronLeft } from "lucide-react";
import Link from "next/link";

function ServiceJsonLd({ service }: { service: ServicePage }) {
  const url = `${siteConfig.url}/khadamat/${service.slug}/`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        description: service.metaDescription,
        url,
        provider: { "@id": businessId },
        areaServed: {
          "@type": "City",
          name: "تهران",
        },
        serviceType: service.title,
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
            name: "خدمات",
            item: `${siteConfig.url}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: service.metaTitle,
        description: service.metaDescription,
        inLanguage: "fa-IR",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${url}#service` },
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

export function ServicePageContent({ service }: { service: ServicePage }) {
  const others = servicePages.filter((s) => s.slug !== service.slug);

  return (
    <>
      <ServiceJsonLd service={service} />
      <article className="bg-background pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          <nav aria-label="مسیر صفحه" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              خانه
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <Link href="/#services" className="hover:text-primary">
              خدمات
            </Link>
            <ChevronLeft className="h-3.5 w-3.5" />
            <span className="text-foreground">{service.title}</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <Logo size="md" />
              <span className="text-sm font-medium text-primary">{siteConfig.fullName}</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
              {service.title}{" "}
              <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                در تهران
              </span>
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {service.intro}
            </p>
          </header>

          <div className="mb-10 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-primary to-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-transform hover:scale-105"
            >
              <MobileCallIcon boxed size="sm" />
              تماس فوری: <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber>
            </a>
            <a
              href={`tel:021${siteConfig.landline}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:border-primary/40"
            >
              <Phone className="h-4 w-4 text-primary" />
              <PhoneNumber>{siteConfig.landlineDisplay}</PhoneNumber>
            </a>
          </div>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">چرا {siteConfig.fullName}؟</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/80 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">مشکلات رایج {service.shortTitle}</h2>
            <p className="mb-4 text-muted-foreground">
              اگر با هر یک از این موارد روبه‌رو هستید، همین امروز تماس بگیرید:
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {service.problems.map((item) => (
                <li key={item} className="rounded-xl bg-muted/50 px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">سوالات متداول</h2>
            <div className="space-y-3">
              {service.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-border/60 bg-card p-5"
                >
                  <h3 className="mb-2 font-semibold">{item.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold">نیاز به {service.title} دارید؟</h2>
            <p className="mb-6 text-muted-foreground">
              با {siteConfig.technician} تماس بگیرید — اعزام سریع در تهران
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
            >
              <MobileCallIcon boxed size="sm" />
              <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber>
            </a>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">سایر خدمات</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {others.map((item) => (
                  <Link
                  key={item.slug}
                  href={`/khadamat/${item.slug}/`}
                  className="rounded-2xl border border-border/60 bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
