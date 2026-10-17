import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showShadow?: boolean;
}

const sizeMap = {
  sm: 36,
  md: 40,
  lg: 48,
} as const;

export function Logo({ size = "md", className, showShadow = true }: LogoProps) {
  const px = sizeMap[size];

  return (
    <Image
      src="/logo.png"
      alt="لوگوی تعمیرات نوین"
      width={px}
      height={px}
      className={cn(
        "rounded-xl object-contain",
        showShadow && "shadow-md shadow-primary/20",
        className
      )}
      priority
    />
  );
}
