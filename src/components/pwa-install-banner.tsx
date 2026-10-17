"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { PwaIosInstallHint } from "@/components/pwa-ios-install-hint";
import {
  PWA_INSTALLED_EVENT,
  PWA_READY_EVENT,
  canShowInstallBanner,
  dismissInstallBanner,
  getInstallButtonLabel,
  isIosDevice,
  runPwaInstall,
  waitForDeferredPrompt,
} from "@/lib/pwa";
import { Download, X } from "lucide-react";

export function PwaInstallBanner() {
  const [visible, setVisible] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [iosHintOpen, setIosHintOpen] = useState(false);

  const syncVisibility = useCallback(() => {
    setVisible(canShowInstallBanner());
  }, []);

  useEffect(() => {
    syncVisibility();

    const onReady = () => syncVisibility();
    const onInstalled = () => setVisible(false);

    window.addEventListener(PWA_READY_EVENT, onReady);
    window.addEventListener(PWA_INSTALLED_EVENT, onInstalled);

    const media = window.matchMedia("(max-width: 1023px)");
    const onViewportChange = () => syncVisibility();
    media.addEventListener("change", onViewportChange);

    if (!isIosDevice()) {
      void waitForDeferredPrompt(12000).then(() => syncVisibility());
    }

    return () => {
      window.removeEventListener(PWA_READY_EVENT, onReady);
      window.removeEventListener(PWA_INSTALLED_EVENT, onInstalled);
      media.removeEventListener("change", onViewportChange);
    };
  }, [syncVisibility]);

  const handleDismiss = () => {
    dismissInstallBanner();
    setVisible(false);
  };

  const handleInstall = async () => {
    if (installing) return;

    if (isIosDevice()) {
      setIosHintOpen(true);
      return;
    }

    setInstalling(true);

    try {
      const outcome = await runPwaInstall();
      if (outcome === "accepted") {
        setVisible(false);
      }
    } finally {
      setInstalling(false);
      syncVisibility();
    }
  };

  if (!visible) return null;

  const installLabel = getInstallButtonLabel();

  return (
    <>
      <div
        className="pwa-install-banner-wrap fixed inset-x-0 bottom-0 z-40 md:hidden"
        role="region"
        aria-label="نصب اپلیکیشن"
      >
        <div className="pwa-install-banner-panel">
          <div className="flex items-start gap-3">
            <div className="shrink-0 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15">
              <Image
                src="/icons/icon-192.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11"
                aria-hidden
              />
            </div>

            <div className="min-w-0 flex-1 text-right">
              <p className="text-sm font-semibold leading-snug text-white">
                نصب اپلیکیشن تعمیرات نوین
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/55">
                برای دسترسی سریع از صفحه اصلی موبایل
              </p>
            </div>

            <button
              type="button"
              onClick={handleDismiss}
              className="-ms-1 -mt-0.5 shrink-0 rounded-lg p-1.5 text-white/50 transition-colors outline-none hover:bg-white/10 hover:text-white"
              aria-label="بستن"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleInstall}
            disabled={installing}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-primary to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:from-blue-600 hover:to-primary disabled:opacity-60"
          >
            <Download className="h-4 w-4 shrink-0" />
            <span>{installing ? "در حال آماده‌سازی نصب..." : installLabel}</span>
          </button>
        </div>
      </div>

      <PwaIosInstallHint open={iosHintOpen} onClose={() => setIosHintOpen(false)} />
    </>
  );
}
