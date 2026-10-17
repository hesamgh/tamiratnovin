import { FAQ_ITEMS, SEO, businessId, websiteId, webpageId } from "@/lib/seo";
import { servicePages } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

function JsonLdScript({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "Electrician"],
    "@id": businessId,
    name: siteConfig.fullName,
    alternateName: [...SEO.alternateNames],
    description: SEO.description,
    url: siteConfig.url,
    telephone: ["+989127701231", "+982188270072"],
    image: [
      `${siteConfig.url}/logo.png`,
      `${siteConfig.url}/images/shakhs.png`,
      `${siteConfig.url}/images/hero-illustration.png`,
      `${siteConfig.url}/images/govahi.png`,
    ],
    logo: `${siteConfig.url}/logo.png`,
    priceRange: "$$",
    currenciesAccepted: "IRR",
    paymentAccepted: "Cash",
    inLanguage: "fa-IR",
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.technician,
      jobTitle: "تکنسین تعمیرات لوازم خانگی و تأسیسات",
      worksFor: { "@id": businessId },
      telephone: "+989127701231",
      image: `${siteConfig.url}/images/shakhs.png`,
      knowsAbout: [
        "تعمیر پکیج",
        "تعمیر آبگرمکن",
        "تعمیر لباسشویی",
        "تعمیر کولرگازی",
        "سیم کشی ساختمان",
      ],
    },
    employee: { "@id": `${siteConfig.url}/#person` },
    areaServed: SEO.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: SEO.city,
      addressRegion: SEO.region,
      addressCountry: SEO.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "IR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    knowsAbout: [
      "تعمیر لوازم خانگی",
      "تعمیر پکیج",
      "تعمیر آبگرمکن",
      "تعمیر لباسشویی",
      "تعمیر کولرگازی",
      "تعمیر آیفون",
      "سیم کشی ساختمان",
      "تعمیرات برقی",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات تعمیرات نوین",
      itemListElement: servicePages.map((service, i) => ({
        "@type": "Offer",
        position: i + 1,
        url: `${siteConfig.url}/khadamat/${service.slug}/`,
        itemOffered: {
          "@type": "Service",
          "@id": `${siteConfig.url}/khadamat/${service.slug}/#service`,
          name: service.title,
          description: service.description,
          url: `${siteConfig.url}/khadamat/${service.slug}/`,
          provider: { "@id": businessId },
          areaServed: SEO.city,
          serviceType: service.title,
        },
      })),
    },
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "تماس با تعمیرات نوین",
        target: [`tel:${siteConfig.phone}`, `tel:021${siteConfig.landline}`],
      },
    ],
  };

  return <JsonLdScript data={data} />;
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.fullName,
        alternateName: [...SEO.alternateNames],
        description: SEO.description,
        inLanguage: "fa-IR",
        publisher: { "@id": businessId },
      }}
    />
  );
}

export function WebPageJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": webpageId,
        url: siteConfig.url,
        name: SEO.title,
        description: SEO.description,
        inLanguage: "fa-IR",
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo.png`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2"],
        },
      }}
    />
  );
}

export function FaqJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
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
            name: "خدمات تعمیرات لوازم خانگی",
            item: `${siteConfig.url}/#services`,
          },
        ],
      }}
    />
  );
}

export function ItemListJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "خدمات تعمیرات نوین",
        description: "لیست خدمات تعمیر لوازم خانگی، پکیج، برق و تأسیسات",
        numberOfItems: servicePages.length,
        itemListElement: servicePages.map((service, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: service.title,
          url: `${siteConfig.url}/khadamat/${service.slug}/`,
        })),
      }}
    />
  );
}
