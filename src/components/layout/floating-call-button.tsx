"use client";

import { siteConfig } from "@/lib/site-config";
import { MobileCallIcon } from "@/components/ui/mobile-call-icon";
import {
  PWA_DISMISSED_EVENT,
  PWA_INSTALLED_EVENT,
  PWA_READY_EVENT,
  canShowInstallBanner,
  isIosDevice,
  waitForDeferredPrompt,
} from "@/lib/pwa";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export function FloatingCallButton() {
  const [bannerVisible, setBannerVisible] = useState(false);

  const syncBanner = useCallback(() => {
    setBannerVisible(canShowInstallBanner());
  }, []);

  useEffect(() => {
    syncBanner();

    const onUpdate = () => syncBanner();
    const onInstalled = () => setBannerVisible(false);

    window.addEventListener(PWA_READY_EVENT, onUpdate);
    window.addEventListener(PWA_DISMISSED_EVENT, onUpdate);
    window.addEventListener(PWA_INSTALLED_EVENT, onInstalled);

    const media = window.matchMedia("(max-width: 1023px)");
    media.addEventListener("change", onUpdate);

    if (!isIosDevice()) {
      void waitForDeferredPrompt(12000).then(() => syncBanner());
    }

    return () => {
      window.removeEventListener(PWA_READY_EVENT, onUpdate);
      window.removeEventListener(PWA_DISMISSED_EVENT, onUpdate);
      window.removeEventListener(PWA_INSTALLED_EVENT, onInstalled);
      media.removeEventListener("change", onUpdate);
    };
  }, [syncBanner]);

  return (
    <motion.a
      href={`tel:${siteConfig.phone}`}
      className={cn(
        "fixed left-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-l from-primary to-accent text-white shadow-lg shadow-primary/30 transition-[bottom] duration-300 ease-out md:hidden",
        bannerVisible
          ? "bottom-[calc(11rem+env(safe-area-inset-bottom,0px))]"
          : "bottom-6"
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileTap={{ scale: 0.9 }}
      aria-label="تماس با ما"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MobileCallIcon boxed size="lg" className="bg-white/25" />
      </motion.div>
    </motion.a>
  );
}
