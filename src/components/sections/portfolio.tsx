"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { portfolioImages } from "@/lib/site-config";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INITIAL_ROWS = 3;
const LOAD_MORE_ROWS = 2;

function getColumnCount(width: number) {
  if (width >= 1280) return 5;
  if (width >= 1024) return 4;
  if (width >= 640) return 3;
  return 2;
}

function getGalleryLimits(width: number) {
  const columns = getColumnCount(width);
  return {
    columns,
    initial: columns * INITIAL_ROWS,
    loadMore: columns * LOAD_MORE_ROWS,
  };
}

function getInitialVisibleCount(width: number, total: number) {
  return Math.min(getGalleryLimits(width).initial, total);
}

const ASPECT_PATTERNS = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[3/4]",
  "aspect-[5/6]",
  "aspect-[4/5]",
  "aspect-square",
] as const;

function getAspectClass(index: number) {
  if (index % 9 === 0) return "aspect-[3/5]";
  if (index % 7 === 0) return "aspect-[5/4]";
  return ASPECT_PATTERNS[index % ASPECT_PATTERNS.length];
}

export function PortfolioSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ROWS * 2);

  const limits = useMemo(
    () => getGalleryLimits(windowWidth || 375),
    [windowWidth]
  );
  const visible = portfolioImages.slice(0, visibleCount);
  const hasMore = visibleCount < portfolioImages.length;

  useLayoutEffect(() => {
    const width = window.innerWidth;
    setWindowWidth(width);
    setVisibleCount(getInitialVisibleCount(width, portfolioImages.length));
  }, []);

  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const close = useCallback(() => setLightbox(null), []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightbox === null) return;
      setLightbox((lightbox + dir + portfolioImages.length) % portfolioImages.length);
    },
    [lightbox]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") navigate(1);
      if (e.key === "ArrowRight") navigate(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, navigate]);

  return (
    <section id="portfolio" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <BlurFade inView>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              نمونه‌کارهای{" "}
              <span className="bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
                نوین
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              بیش از ۹۹۹ نمونه کار در تعمیرات لوازم خانگی، پکیج، برق و تأسیسات
            </p>
          </div>
        </BlurFade>

        <div className="masonry-grid mx-auto max-w-7xl">
          {visible.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(i)}
              className="masonry-item group relative w-full cursor-pointer overflow-hidden rounded-xl ring-1 ring-border/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:ring-primary/30"
              aria-label={`مشاهده ${img.alt}`}
            >
              <div className={`relative ${getAspectClass(i)}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  loading={i < 10 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex scale-75 items-center justify-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-xl">
                    <Search className="h-5 w-5 text-primary" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + limits.loadMore, portfolioImages.length)
                )
              }
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3 text-sm font-medium transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md"
            >
              مشاهده بیشتر
              <span className="text-primary">
                ({portfolioImages.length - visibleCount} عکس)
              </span>
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
            onClick={close}
          >
            <div className="flex shrink-0 items-center justify-between p-4 sm:p-5">
              <button
                type="button"
                onClick={close}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="بستن"
              >
                <X className="h-5 w-5" />
              </button>
              <span
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm tabular-nums text-white/70"
                dir="ltr"
              >
                {lightbox + 1} / {portfolioImages.length}
              </span>
              <div className="w-11" />
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(-1);
                }}
                className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6"
                aria-label="عکس قبلی"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <motion.div
                key={lightbox}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="relative h-full max-h-[70vh] w-full max-w-5xl overflow-hidden rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={portfolioImages[lightbox].src}
                  alt={portfolioImages[lightbox].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </motion.div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(1);
                }}
                className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
                aria-label="عکس بعدی"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="shrink-0 px-4 pb-5 pt-2" onClick={(e) => e.stopPropagation()}>
              <div className="mx-auto flex max-w-4xl justify-center gap-2 overflow-x-auto pb-1">
                {portfolioImages.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setLightbox(i)}
                    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-lg transition-all sm:h-14 sm:w-14 ${
                      i === lightbox
                        ? "scale-110 ring-2 ring-primary ring-offset-2 ring-offset-black"
                        : "opacity-40 hover:opacity-80"
                    }`}
                    aria-label={`رفتن به عکس ${i + 1}`}
                  >
                    <Image src={img.src} alt="" fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
