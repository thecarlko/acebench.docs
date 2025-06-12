"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const src = isDark
    ? "https://argus.engineering/brand/argus-wordmark-white.svg"
    : "https://argus.engineering/brand/argus-wordmark-black.svg";
  return (
    <Image
      className="h-8"
      src={src}
      alt="Argus Logo"
      width={120}
      height={32}
      priority
    />
  );
} 