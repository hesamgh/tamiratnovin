"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedGrid } from "@/components/magicui/animated-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { siteConfig } from "@/lib/site-config";
import { PhoneNumber } from "@/components/ui/phone-number";
import { MobileCallIcon } from "@/components/ui/mobile-call-icon";
import { Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <BlurFade inView>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 md:p-12">
            <AnimatedGrid />
            <BorderBeam size={250} duration={12} />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">همین الان تماس بگیرید</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                برای تعمیرات فوری و مشاوره رایگان با {siteConfig.technician} تماس بگیرید
              </p>

              <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a href={`tel:${siteConfig.phone}`}>
                  <ShimmerButton className="gap-2 text-lg font-bold">
                    <MobileCallIcon boxed size="md" />
                    <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber>
                  </ShimmerButton>
                </a>
                <a
                  href={`tel:021${siteConfig.landline}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-lg font-medium transition-colors hover:bg-muted"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <PhoneNumber>{siteConfig.landlineDisplay}</PhoneNumber>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>پاسخگویی ۲۴ ساعته</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>اعزام سریع تکنسین</span>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
