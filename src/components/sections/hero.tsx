"use client";

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AuroraBackground } from "@/components/magicui/aurora-background";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ParticlesCanvas } from "@/components/magicui/particles-canvas";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { siteConfig } from "@/lib/site-config";
import { PhoneNumber } from "@/components/ui/phone-number";
import { MobileCallIcon } from "@/components/ui/mobile-call-icon";
import { cn } from "@/lib/utils";
import { Shield, Star, Zap } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <AuroraBackground />
      <ParticlesCanvas className="opacity-60" />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        )}
        glow
      />

      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center gap-6 px-4 py-8 lg:min-h-[calc(100vh-4rem)] lg:flex-row lg:gap-12 lg:py-12">
        <BlurFade delay={0.1} className="relative order-1 w-full max-w-xs flex-1 sm:max-w-sm lg:order-2 lg:max-w-lg">
          <motion.div
            className="relative mx-auto w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 shadow-2xl">
              <Image
                src="/images/hero-illustration.png"
                alt="تعمیرات لوازم خانگی نوین"
                fill
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              className="absolute -bottom-3 -right-3 overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:-bottom-4 sm:-right-4"
              initial={{ opacity: 0.8, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <Image
                src="/images/shakhs.png"
                alt={siteConfig.technician}
                width={96}
                height={96}
                className="object-cover sm:h-[120px] sm:w-[120px]"
              />
            </motion.div>
          </motion.div>
        </BlurFade>

        <div className="order-2 flex flex-1 flex-col items-center text-center lg:order-1 lg:items-start lg:text-right">
          <BlurFade delay={0.1}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
              <Star className="h-4 w-4 fill-primary" />
              <span>بیش از {siteConfig.experience} سال تجربه حرفه‌ای</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="mb-4 text-4xl font-extrabold leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground/90">تعمیرات تخصصی </span>
              <span className="relative inline-block px-1">
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 scale-110 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-md"
                />
                <AnimatedGradientText className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                  نوین
                </AnimatedGradientText>
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 right-0 h-1 w-full rounded-full bg-gradient-to-l from-primary via-accent to-primary"
                />
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.technician} با بیش از {siteConfig.experience} سال سابقه در تعمیرات
              لوازم خانگی، پکیج، آبگرمکن، لباسشویی، کولرگازی، آیفون و سیم‌کشی ساختمان
              در خدمت شماست.
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href={`tel:${siteConfig.phone}`}>
                <ShimmerButton className="gap-2 text-base font-bold shadow-xl shadow-primary/25">
                  <MobileCallIcon boxed size="md" />
                  تماس فوری: <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber>
                </ShimmerButton>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-base font-medium transition-colors hover:bg-muted"
              >
                مشاهده نمونه کارها
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {[
                { icon: Shield, text: "ضمانت کار" },
                { icon: Zap, text: "سرعت عمل" },
                { icon: Star, text: "کیفیت بالا" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
