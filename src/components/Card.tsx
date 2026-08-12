import type { ReactNode } from "react";

const toneClasses = {
  base: "bg-[var(--color-bg)]",
  soft: "bg-[var(--color-bg-soft)]",
} as const;

export default function Card({
  children,
  className = "",
  tone = "base",
}: {
  children: ReactNode;
  className?: string;
  tone?: keyof typeof toneClasses;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] ${toneClasses[tone]} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/60 hover:shadow-xl ${className}`}
    >
      {/* Top accent bar — grows in on hover */}
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--color-accent)] via-fuchsia-500 to-teal-400 transition-transform duration-300 group-hover:scale-x-100" />
      {children}
    </div>
  );
}
