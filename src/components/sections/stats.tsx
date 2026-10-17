"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { stats } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Award, Clock, Images, Users, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  Users,
  Images,
  Clock,
};

const cardThemes: Record<
  string,
  {
    orb: string;
    shadow: string;
    border: string;
    topBar: string;
    iconRing: string;
    iconGlow: string;
  }
> = {
  Award: {
    orb: "bg-blue-500",
    shadow: "hover:shadow-[0_20px_44px_-14px_rgba(59,130,246,0.45)]",
    border: "hover:border-blue-300/70",
    topBar: "from-blue-500 via-blue-400 to-cyan-400",
    iconRing: "from-blue-500/20 to-blue-600/5",
    iconGlow: "group-hover:shadow-blue-500/40",
  },
  Users: {
    orb: "bg-emerald-500",
    shadow: "hover:shadow-[0_20px_44px_-14px_rgba(16,185,129,0.45)]",
    border: "hover:border-emerald-300/70",
    topBar: "from-emerald-500 via-emerald-400 to-teal-400",
    iconRing: "from-emerald-500/20 to-emerald-600/5",
    iconGlow: "group-hover:shadow-emerald-500/40",
  },
  Images: {
    orb: "bg-orange-500",
    shadow: "hover:shadow-[0_20px_44px_-14px_rgba(249,115,22,0.45)]",
    border: "hover:border-orange-300/70",
    topBar: "from-orange-500 via-orange-400 to-amber-400",
    iconRing: "from-orange-500/20 to-orange-600/5",
    iconGlow: "group-hover:shadow-orange-500/40",
  },
  Clock: {
    orb: "bg-violet-500",
    shadow: "hover:shadow-[0_20px_44px_-14px_rgba(139,92,246,0.45)]",
    border: "hover:border-violet-300/70",
    topBar: "from-violet-500 via-violet-400 to-purple-400",
    iconRing: "from-violet-500/20 to-violet-600/5",
    iconGlow: "group-hover:shadow-violet-500/40",
  },
};

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-gradient-to-b from-muted/40 via-background to-muted/30 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.06),transparent_55%)]" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            const theme = cardThemes[stat.icon];

            return (
              <BlurFade key={stat.label} delay={index * 0.1} inView>
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border/50 bg-card/90 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-500 ease-out",
                    "hover:-translate-y-2 hover:bg-card",
                    theme.shadow,
                    theme.border,
                    "md:p-6"
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
                      "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-40",
                      theme.orb
                    )}
                  />
                  <div
                    className={cn(
                      "pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-25",
                      theme.orb
                    )}
                  />

                  <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <div
                    className={cn(
                      "relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-white/60 transition-all duration-500 group-hover:scale-110 group-hover:ring-white",
                      theme.iconRing,
                      theme.iconGlow,
                      "group-hover:shadow-lg"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-500 group-hover:rotate-3",
                        stat.iconBg
                      )}
                    >
                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "relative text-3xl font-extrabold tracking-tight transition-transform duration-500 group-hover:scale-105 md:text-4xl",
                      stat.accent
                    )}
                  >
                    <NumberTicker
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      delay={0.2 + index * 0.1}
                    />
                  </div>

                  <p className="relative mt-2 text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    {stat.label}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
