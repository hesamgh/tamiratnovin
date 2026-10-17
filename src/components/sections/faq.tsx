"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { TextWithPhoneNumbers } from "@/components/ui/phone-number";
import { FAQ_ITEMS } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-muted/30 py-20" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-3xl px-4">
        <BlurFade inView>
          <div className="mb-10 text-center">
            <h2 id="faq-heading" className="mb-4 text-3xl font-bold md:text-4xl">
              سوالات{" "}
              <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                متداول
              </span>
            </h2>
            <p className="text-muted-foreground">
              پاسخ سوالات رایج درباره تعمیرات لوازم خانگی، پکیج و برق
            </p>
          </div>
        </BlurFade>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <BlurFade key={item.question} delay={i * 0.05} inView>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-primary/30 bg-card shadow-md shadow-primary/5"
                      : "border-border/60 bg-card/80 hover:border-primary/20"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-3 p-5 text-right outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors",
                        isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-medium">{item.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="border-t border-border/50 px-5 pb-5 pt-4 text-sm leading-relaxed text-muted-foreground">
                          <TextWithPhoneNumbers>{item.answer}</TextWithPhoneNumbers>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
