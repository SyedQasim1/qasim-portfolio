import { Briefcase, Clock, FolderKanban, Radio } from "lucide-react";
import { availability } from "@/data/content";

const icons = [Briefcase, Clock, FolderKanban];

export default function Availability() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8 sm:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />
      <div className="relative flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-teal-400 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-[var(--color-accent)]/25">
          <Radio size={14} />
          {availability.badge}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-[var(--color-fg)] sm:text-3xl">
          {availability.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-[var(--color-fg-muted)] sm:text-base">
          {availability.description}
        </p>

        <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
          {availability.options.map((option, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={option.title}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-lg"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-teal-400 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <p className="mt-4 text-sm font-semibold text-[var(--color-fg)]">
                  {option.title}
                </p>
                <p className="mt-1.5 text-xs text-[var(--color-fg-muted)]">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
