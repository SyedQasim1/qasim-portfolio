"use client";

import { Moon, Sun } from "lucide-react";

function toggle() {
  const next = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)] cursor-pointer"
    >
      <Moon size={16} className="hidden dark:block" />
      <Sun size={16} className="block dark:hidden" />
    </button>
  );
}
