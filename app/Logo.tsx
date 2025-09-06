"use client";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Logo() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const src = isDark
    ? "https://acebench.co/brand/acebench-wordmark-white.svg"
    : "https://acebench.co/brand/acebench-wordmark-black.svg";
  return (
    <Image
      className="h-8"
      src={src}
      alt="Acebench Logo"
      width={120}
      height={32}
      priority
    />
  );
} 