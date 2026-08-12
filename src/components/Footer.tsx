import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-[var(--color-fg-muted)] sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
