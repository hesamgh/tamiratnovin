"use client";

import { siteConfig } from "@/lib/site-config";
import { servicePages } from "@/lib/services-data";
import { PhoneNumber } from "@/components/ui/phone-number";
import { MobileCallIcon } from "@/components/ui/mobile-call-icon";
import { Logo } from "@/components/ui/logo";
import { PwaFooterInstall } from "@/components/pwa-footer-install";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [licenseOpen, setLicenseOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-right">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <Logo size="md" />
              <span className="text-xl font-bold text-primary">
                {siteConfig.fullName}
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:max-w-none">
              {siteConfig.description}
            </p>
            <button
              type="button"
              onClick={() => setLicenseOpen(true)}
              className="group mt-4 cursor-zoom-in overflow-hidden rounded-lg border border-border/60 bg-white shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              aria-label="مشاهده گواهینامه مهارت"
            >
              <Image
                src="/images/govahi.png"
                alt={`گواهینامه مهارت ${siteConfig.technician}`}
                width={472}
                height={669}
                className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">خدمات</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {servicePages.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/khadamat/${service.slug}/`}
                    className="transition-colors hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/maghale/" className="transition-colors hover:text-primary">
                  مقالات آموزشی
                </Link>
              </li>
              <li>
                <Link href="/manabe/" className="transition-colors hover:text-primary">
                  منابع و لینک‌ها
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-semibold">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
                <MobileCallIcon size="sm" className="text-primary" />
                <span>
                  همراه:{" "}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-primary no-underline transition-colors hover:text-primary/80 hover:no-underline"
                  >
                    <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber>
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>
                  ثابت:{" "}
                  <a
                    href={`tel:021${siteConfig.landline}`}
                    className="text-primary no-underline transition-colors hover:text-primary/80 hover:no-underline"
                  >
                    <PhoneNumber>{siteConfig.landlineDisplay}</PhoneNumber>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-border pt-8 text-center text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-right">
          <p className="sm:text-right">
            © {new Date().getFullYear()} {siteConfig.fullName} —{" "}
            {siteConfig.technician}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <PwaFooterInstall />
            <p className="sm:text-left">
              طراحی و توسعه وب توسط{" "}
              <a
                href="https://hyperoffice.ir/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:no-underline"
              >
                <span className="bg-gradient-to-l from-primary to-accent bg-clip-text font-medium text-transparent opacity-60 transition-opacity duration-300 hover:opacity-100">
                  هایپرآفیس
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {licenseOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setLicenseOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/images/govahi.png"
                alt={`گواهینامه مهارت ${siteConfig.technician}`}
                width={472}
                height={669}
                className="max-h-[90vh] w-auto rounded-lg object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
