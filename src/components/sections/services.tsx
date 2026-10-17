"use client";

import { AnimatedGrid } from "@/components/magicui/animated-grid";
import { BlurFade } from "@/components/magicui/blur-fade";
import { servicePages } from "@/lib/services-data";
import { cn } from "@/lib/utils";
import {
  Flame,
  Phone,
  WashingMachine,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  WashingMachine,
  Wind,
  Phone,
  Zap,
  Wrench,
};

const serviceThemes: Record<
  string,
  {
    orb: string;
    shadow: string;
    border: string;
    topBar: string;
    iconRing: string;
    iconBg: string;
    iconText: string;
    iconGlow: string;
    titleHover: string;
  }
> = {
  Flame: {
    orb: "bg-orange-500",
    shadow: "hover:shadow-[0_24px_48px_-16px_rgba(249,115,22,0.4)]",
    border: "hover:border-orange-300/60",
    topBar: "from-orange-500 via-orange-400 to-amber-400",
    iconRing: "from-orange-500/25 to-orange-600/10",
    iconBg: "bg-orange-500/15 group-hover:bg-orange-500",
    iconText: "text-orange-600 group-hover:text-white",
    iconGlow: "group-hover:shadow-orange-500/35",
    titleHover: "group-hover:text-orange-600",
  },
  WashingMachine: {
    orb: "bg-blue-500",
    shadow: "hover:shadow-[0_24px_48px_-16px_rgba(59,130,246,0.4)]",
    border: "hover:border-blue-300/60",
    topBar: "from-blue-500 via-blue-400 to-cyan-400",
    iconRing: "from-blue-500/25 to-blue-600/10",
    iconBg: "bg-blue-500/15 group-hover:bg-blue-500",
    iconText: "text-blue-600 group-hover:text-white",
    iconGlow: "group-hover:shadow-blue-500/35",
    titleHover: "group-hover:text-blue-600",
  },
  Wind: {
    orb: "bg-sky-500",
    shadow: "hover:shadow-[0_24px_48px_-16px_rgba(14,165,233,0.4)]",
    border: "hover:border-sky-300/60",
    topBar: "from-sky-500 via-sky-400 to-cyan-300",
    iconRing: "from-sky-500/25 to-sky-600/10",
    iconBg: "bg-sky-500/15 group-hover:bg-sky-500",
    iconText: "text-sky-600 group-hover:text-white",
    iconGlow: "group-hover:shadow-sky-500/35",
    titleHover: "group-hover:text-sky-600",
  },
  Phone: {
    orb: "bg-violet-500",
    shadow: "hover:shadow-[0_24px_48px_-16px_rgba(139,92,246,0.4)]",
    border: "hover:border-violet-300/60",
    topBar: "from-violet-500 via-violet-400 to-purple-400",
    iconRing: "from-violet-500/25 to-violet-600/10",
    iconBg: "bg-violet-500/15 group-hover:bg-violet-500",
    iconText: "text-violet-600 group-hover:text-white",
    iconGlow: "group-hover:shadow-violet-500/35",
    titleHover: "group-hover:text-violet-600",
  },
  Zap: {
    orb: "bg-amber-500",
    shadow: "hover:shadow-[0_24px_48px_-16px_rgba(245,158,11,0.4)]",
    border: "hover:border-amber-300/60",
    topBar: "from-amber-500 via-amber-400 to-yellow-400",
    iconRing: "from-amber-500/25 to-amber-600/10",
    iconBg: "bg-amber-500/15 group-hover:bg-amber-500",
    iconText: "text-amber-600 group-hover:text-white",
    iconGlow: "group-hover:shadow-amber-500/35",
    titleHover: "group-hover:text-amber-600",
  },
  Wrench: {
    orb: "bg-primary",
    shadow: "hover:shadow-[0_24px_48px_-16px_rgba(37,99,235,0.4)]",
    border: "hover:border-primary/40",
    topBar: "from-primary via-blue-500 to-accent",
    iconRing: "from-primary/25 to-primary/10",
    iconBg: "bg-primary/15 group-hover:bg-primary",
    iconText: "text-primary group-hover:text-white",
    iconGlow: "group-hover:shadow-primary/35",
    titleHover: "group-hover:text-primary",
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-20">
      <AnimatedGrid className="opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.05),transparent_60%)]" />

      <div className="container relative mx-auto px-4">
        <BlurFade inView>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                خدمات
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              ارائه تمامی خدمات تعمیرات لوازم خانگی، تأسیسات گرمایشی و برقی با بالاترین کیفیت
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {servicePages.map((service, index) => {
            const Icon = iconMap[service.icon];
            const theme = serviceThemes[service.icon];

            return (
              <BlurFade key={service.slug} delay={index * 0.08} inView>
                <Link href={`/khadamat/${service.slug}/`} className="block h-full">
                  <article
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out",
                      "hover:-translate-y-2 hover:bg-card",
                      theme.shadow,
                      theme.border
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-l opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100",
                        theme.topBar
                      )}
                    />

                    <div
                      className={cn(
                        "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-15 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-35",
                        theme.orb
                      )}
                    />

                    <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <div className="relative mb-5">
                      <div
                        className={cn(
                          "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-white/50 transition-all duration-500 group-hover:scale-110 group-hover:ring-white",
                          theme.iconRing,
                          theme.iconGlow,
                          "group-hover:shadow-lg"
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500",
                            theme.iconBg,
                            theme.iconText
                          )}
                        >
                          <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                    </div>

                    <h3
                      className={cn(
                        "relative mb-2 text-lg font-bold transition-colors duration-300",
                        theme.titleHover
                      )}
                    >
                      {service.title}
                    </h3>

                    <p className="relative flex-1 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                      {service.description}
                    </p>

                    <span className="relative mt-4 text-sm font-medium text-primary opacity-80 transition-opacity group-hover:opacity-100">
                      جزئیات بیشتر ←
                    </span>

                    <div
                      className={cn(
                        "relative mt-3 h-0.5 w-0 rounded-full bg-gradient-to-l transition-all duration-500 group-hover:w-16",
                        theme.topBar
                      )}
                    />
                  </article>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
