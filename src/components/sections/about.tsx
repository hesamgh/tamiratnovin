"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Award, CheckCircle, Clock, Users, type LucideIcon } from "lucide-react";
import Image from "next/image";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  theme: {
    orb: string;
    ring: string;
    iconBg: string;
    iconText: string;
    hover: string;
    shadow: string;
  };
}[] = [
  {
    icon: Award,
    title: "تجربه و تخصص",
    description: `بیش از ${siteConfig.experience} سال سابقه تخصصی`,
    theme: {
      orb: "bg-blue-500",
      ring: "from-blue-500/20 to-blue-600/5",
      iconBg: "bg-blue-500/15 group-hover:bg-blue-500",
      iconText: "text-blue-600 group-hover:text-white",
      hover: "hover:border-blue-300/50",
      shadow: "hover:shadow-[0_16px_32px_-14px_rgba(59,130,246,0.35)]",
    },
  },
  {
    icon: CheckCircle,
    title: "ضمانت کار",
    description: "ضمانت کیفیت تمام خدمات",
    theme: {
      orb: "bg-emerald-500",
      ring: "from-emerald-500/20 to-emerald-600/5",
      iconBg: "bg-emerald-500/15 group-hover:bg-emerald-500",
      iconText: "text-emerald-600 group-hover:text-white",
      hover: "hover:border-emerald-300/50",
      shadow: "hover:shadow-[0_16px_32px_-14px_rgba(16,185,129,0.35)]",
    },
  },
  {
    icon: Clock,
    title: "سرعت عمل",
    description: "اعزام سریع تکنسین",
    theme: {
      orb: "bg-violet-500",
      ring: "from-violet-500/20 to-violet-600/5",
      iconBg: "bg-violet-500/15 group-hover:bg-violet-500",
      iconText: "text-violet-600 group-hover:text-white",
      hover: "hover:border-violet-300/50",
      shadow: "hover:shadow-[0_16px_32px_-14px_rgba(139,92,246,0.35)]",
    },
  },
  {
    icon: Users,
    title: "مشتریان راضی",
    description: "مشتریان راضی و موفق",
    theme: {
      orb: "bg-orange-500",
      ring: "from-orange-500/20 to-orange-600/5",
      iconBg: "bg-orange-500/15 group-hover:bg-orange-500",
      iconText: "text-orange-600 group-hover:text-white",
      hover: "hover:border-orange-300/50",
      shadow: "hover:shadow-[0_16px_32px_-14px_rgba(249,115,22,0.35)]",
    },
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-muted/40 via-background to-muted/30 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(37,99,235,0.07),transparent_55%)]" />
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <BlurFade inView>
            <div className="group relative mx-auto w-full max-w-md px-4 pb-6 sm:px-6 lg:max-w-lg lg:px-0 lg:pb-0">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-card/80 p-2 shadow-xl shadow-primary/10 ring-1 ring-border/50 backdrop-blur-sm">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                  <Image
                    src="/images/electrical-illustration.png"
                    alt="تعمیرات لوازم خانگی و برق"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute bottom-2 left-2 overflow-hidden rounded-2xl border-4 border-background shadow-2xl ring-2 ring-primary/20 transition-transform duration-500 group-hover:scale-105 sm:-bottom-5 sm:-left-5">
                <Image
                  src="/images/shakhs.png"
                  alt={siteConfig.technician}
                  width={100}
                  height={100}
                  className="h-20 w-20 object-cover sm:h-[100px] sm:w-[100px]"
                />
              </div>

              <div className="absolute right-2 top-4 rounded-2xl border border-primary/20 bg-card/95 px-4 py-3 text-center shadow-lg backdrop-blur-sm sm:-right-2 sm:top-6">
                <p className="text-2xl font-extrabold text-primary">{siteConfig.experience}+</p>
                <p className="text-xs font-medium text-muted-foreground">سال تجربه</p>
              </div>
            </div>
          </BlurFade>

          <div>
            <BlurFade inView>
              <h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">
                درباره{" "}
                <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                  من
                </span>
              </h2>
              <div className="mb-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  {siteConfig.technician}، متخصص تعمیرات لوازم خانگی و تأسیسات برقی با برند{" "}
                  <strong className="font-semibold text-primary">{siteConfig.name}</strong>، با
                  بیش از {siteConfig.experience} سال سابقه درخشان در زمینه تعمیرات تخصصی آماده
                  ارائه خدمات به شما عزیزان است.
                </p>
                <p>
                  از تعمیر پکیج و آبگرمکن گرفته تا لباسشویی، کولرگازی، آیفون، ماشین ظرفشویی و
                  سیم‌کشی کلی و جزئی ساختمان — هر آنچه مربوط به لوازم خانگی و برق باشد، با دقت و
                  حرفه‌ای‌گری انجام می‌شود.
                </p>
              </div>
            </BlurFade>

            <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch">
              {features.map((feature, index) => (
                <BlurFade key={feature.title} delay={index * 0.08} inView className="h-full">
                  <div
                    className={cn(
                      "group relative flex h-full gap-3 overflow-hidden rounded-2xl border border-border/50 bg-card/90 p-4 shadow-sm backdrop-blur-sm transition-all duration-500",
                      "hover:-translate-y-1",
                      feature.theme.hover,
                      feature.theme.shadow
                    )}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-35",
                        feature.theme.orb
                      )}
                    />

                    <div
                      className={cn(
                        "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/50 transition-all duration-500 group-hover:scale-110",
                        feature.theme.ring
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-500",
                          feature.theme.iconBg,
                          feature.theme.iconText
                        )}
                      >
                        <feature.icon className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="relative min-w-0">
                      <h3 className="mb-1 font-semibold transition-colors duration-300 group-hover:text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-snug text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
