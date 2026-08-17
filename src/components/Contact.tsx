"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/content";
import SectionHeading from "./SectionHeading";
import LinkedinIcon from "./icons/LinkedinIcon";
import { paletteAt } from "@/lib/palette";

const MAX_MESSAGE_LENGTH = 1000;

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: LinkedinIcon, label: "LinkedIn", value: "syed-muhammad-qasim-asif", href: profile.linkedin },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || `Portfolio inquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-bg-soft)] px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a backend, API, or AI-integration project in mind? Reach out."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const hue = paletteAt(i);
              const content = (
                <div className="group flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/60 hover:shadow-lg">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${hue.bg} ${hue.icon} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-[var(--color-fg-muted)]">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-fg)] break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-[var(--color-fg-muted)]">
                  Full name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-2 text-sm text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[var(--color-fg-muted)]">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-2 text-sm text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[var(--color-fg-muted)]">
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-2 text-sm text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-[var(--color-fg-muted)]">
                  Message
                </label>
                <span className="text-xs text-[var(--color-fg-muted)]">
                  {message.length}/{MAX_MESSAGE_LENGTH}
                </span>
              </div>
              <textarea
                required
                rows={5}
                maxLength={MAX_MESSAGE_LENGTH}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-3 py-2 text-sm text-[var(--color-fg)] outline-none transition-colors focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-fg)] shadow-lg shadow-[var(--color-accent)]/25 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-[var(--color-accent)]/40"
            >
              <Send size={16} />
              Send Message
            </button>
            <p className="text-center text-xs text-[var(--color-fg-muted)]">
              Opens your email client with this message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
