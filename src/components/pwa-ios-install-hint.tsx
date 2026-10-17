"use client";

import { Share } from "lucide-react";

type PwaIosInstallHintProps = {
  open: boolean;
  onClose: () => void;
};

export function PwaIosInstallHint({ open, onClose }: PwaIosInstallHintProps) {
  if (!open) return null;

  return (
    <div
      className="pwa-sheet-backdrop fixed inset-0 z-50 flex items-end p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-install-title"
    >
      <div className="pwa-sheet-panel w-full" onClick={(event) => event.stopPropagation()}>
        <div className="mb-3 flex items-center gap-2 text-primary">
          <Share className="h-5 w-5 shrink-0" />
          <h2 id="ios-install-title" className="text-base font-semibold text-white">
            افزودن به صفحه اصلی iPhone
          </h2>
        </div>
        <ol className="list-inside list-decimal space-y-2 text-sm leading-relaxed text-white/60">
          <li>دکمه Share (مربع با فلش) را در پایین Safari بزنید</li>
          <li>گزینه «Add to Home Screen» را انتخاب کنید</li>
          <li>روی Add بزنید</li>
        </ol>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-xl bg-gradient-to-l from-primary to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:from-blue-600 hover:to-primary"
        >
          متوجه شدم
        </button>
      </div>
    </div>
  );
}
