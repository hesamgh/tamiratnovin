import { PhoneNumber, TextWithPhoneNumbers } from "@/components/ui/phone-number";
import { getSortedPosts } from "@/lib/blog-data";
import { FAQ_ITEMS, SEO } from "@/lib/seo";
import { servicePages } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function SeoContent() {
  const posts = getSortedPosts().slice(0, 4);

  return (
    <section className="border-t border-border bg-muted/20 py-12" aria-label="اطلاعات تعمیرات نوین">
      <div className="container mx-auto max-w-4xl px-4 text-sm leading-relaxed text-muted-foreground">
        <h2 className="mb-4 text-lg font-bold text-foreground">
          تعمیرات لوازم خانگی نوین — {siteConfig.technician} تعمیرکار تهران
        </h2>
        <p className="mb-6">
          {siteConfig.fullName} با مدیریت {siteConfig.technician}، ارائه‌دهنده خدمات تعمیرات
          تخصصی لوازم خانگی در {SEO.areas.join("، ")} است. تعمیر پکیج، آبگرمکن، لباسشویی،
          ظرفشویی، کولرگازی، آیفون تصویری و سیم‌کشی ساختمان با بیش از {siteConfig.experience}{" "}
          سال تجربه. وب‌سایت رسمی:{" "}
          <a href={siteConfig.url} className="text-primary hover:underline">
            {siteConfig.url}
          </a>
          . تماس: <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber> و{" "}
          <PhoneNumber>{siteConfig.landlineDisplay}</PhoneNumber>
        </p>

        <h3 className="mb-3 font-semibold text-foreground">خدمات تعمیرات لوازم خانگی</h3>
        <ul className="mb-6 list-disc space-y-2 pr-5">
          {servicePages.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/khadamat/${service.slug}/`}
                className="text-primary underline-offset-2 hover:underline"
              >
                {service.title}
              </Link>
              : {service.description}
            </li>
          ))}
        </ul>

        <h3 className="mb-3 font-semibold text-foreground">آخرین مقالات</h3>
        <ul className="mb-6 list-disc space-y-2 pr-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/maghale/${post.slug}/`}
                className="text-primary underline-offset-2 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/maghale/" className="text-primary underline-offset-2 hover:underline">
              مشاهده همه مقالات
            </Link>
            {" · "}
            <Link href="/manabe/" className="text-primary underline-offset-2 hover:underline">
              منابع معتبر و لینک‌ها
            </Link>
          </li>
        </ul>

        <h3 className="mb-3 font-semibold text-foreground">سوالات متداول</h3>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question}>
              <dt className="font-medium text-foreground">{item.question}</dt>
              <dd className="mt-1">
                <TextWithPhoneNumbers>{item.answer}</TextWithPhoneNumbers>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
