import { Download, Mail } from "lucide-react";
import { profile, stats } from "@/data/content";
import ToptalBadge from "./ToptalBadge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--color-bg)] px-6 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle dot-grid texture for a bit of "wallpaper" depth */}
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
          }}
        />
        <div
          className="absolute left-1/2 top-[-8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-accent-soft), transparent 70%)" }}
        />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-1.5 text-xs font-medium text-[var(--color-fg-muted)]">
          {profile.title} · {profile.location}
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--color-fg)] sm:text-6xl">
          Hi, I&apos;m {profile.name.split(" ")[0]} —{" "}
          <span className="bg-gradient-to-r from-[var(--color-accent)] via-indigo-400 to-teal-400 bg-clip-text text-transparent">
            {profile.title}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[var(--color-fg-muted)]">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.resumeFile}
            download="Syed Muhammad Qasim (Senior Full Stack Engineer).pdf"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-fg)] shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-[var(--color-accent)]/40"
          >
            <Download size={16} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-6 py-3 text-sm font-semibold text-[var(--color-fg)] transition-all hover:scale-[1.03] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-lg hover:shadow-[var(--color-accent)]/10"
          >
            <Mail size={16} />
            Get in Touch
          </a>
        </div>

        <div className="mt-12">
          <ToptalBadge />
        </div>

        <div className="mt-16 grid w-full max-w-lg grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="transition-transform hover:-translate-y-0.5">
              <p className="bg-gradient-to-r from-[var(--color-accent)] to-teal-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[var(--color-fg-muted)] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
