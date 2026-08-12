import { Check, Server, Database, Cloud, BrainCircuit } from "lucide-react";
import { services } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import { paletteAt } from "@/lib/palette";

const serviceIcons = [Server, Database, Cloud, BrainCircuit];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--color-bg-soft)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can help you build"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const hue = paletteAt(i);
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Card key={service.title}>
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${hue.bg} ${hue.icon} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[var(--color-fg-muted)]">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]"
                    >
                      <Check size={14} className={`mt-0.5 shrink-0 ${hue.icon}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
