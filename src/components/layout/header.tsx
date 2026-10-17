"use client";

import { siteConfig } from "@/lib/site-config";
import { PhoneNumber } from "@/components/ui/phone-number";
import { MobileCallIcon } from "@/components/ui/mobile-call-icon";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "خدمات" },
  { href: "#portfolio", label: "نمونه کارها" },
  { href: "#about", label: "درباره من" },
  { href: "/maghale/", label: "مقالات" },
  { href: "#faq", label: "سوالات" },
  { href: "#contact", label: "تماس" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2">
          <Logo size="md" className="transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">{siteConfig.name}</span>
            <span className="text-xs text-muted-foreground">تعمیرات تخصصی</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 sm:flex"
          >
            <MobileCallIcon boxed size="sm" />
            <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber>
          </a>

          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="منو"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              <MobileCallIcon boxed size="sm" />
              تماس: <PhoneNumber>{siteConfig.phoneDisplay}</PhoneNumber>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
