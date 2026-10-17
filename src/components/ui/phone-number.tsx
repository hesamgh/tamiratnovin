import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Fragment } from "react";

interface PhoneNumberProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneNumber({ children, className }: PhoneNumberProps) {
  return (
    <span dir="ltr" className={cn("inline-block unicode-bidi-plaintext tabular-nums", className)}>
      {children}
    </span>
  );
}

const PHONE_DISPLAY_VALUES = [siteConfig.phoneDisplay, siteConfig.landlineDisplay];

export function TextWithPhoneNumbers({ children }: { children: string }) {
  let parts: (string | React.ReactNode)[] = [children];

  for (const phone of PHONE_DISPLAY_VALUES) {
    const next: (string | React.ReactNode)[] = [];
    for (const part of parts) {
      if (typeof part !== "string") {
        next.push(part);
        continue;
      }
      const segments = part.split(phone);
      segments.forEach((segment, i) => {
        if (segment) next.push(segment);
        if (i < segments.length - 1) {
          next.push(<PhoneNumber key={`${phone}-${next.length}`}>{phone}</PhoneNumber>);
        }
      });
    }
    parts = next;
  }

  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? <Fragment key={i}>{part}</Fragment> : part
      )}
    </>
  );
}
