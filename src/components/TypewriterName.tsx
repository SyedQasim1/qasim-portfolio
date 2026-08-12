"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/content";

const WORDS = [
  { text: profile.name, lang: "en", dir: "ltr" as const, font: "" },
  { text: profile.nameUrdu, lang: "ur", dir: "rtl" as const, font: "font-urdu" },
];

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1600;
const GAP_MS = 400;

const sizes = {
  sm: { text: "text-lg sm:text-xl", box: "h-8 sm:h-9", caret: "w-[2px]" },
  lg: { text: "text-3xl sm:text-4xl", box: "h-14 sm:h-16", caret: "w-[3px]" },
};

export default function TypewriterName({
  size = "lg",
  align = "center",
}: {
  size?: keyof typeof sizes;
  align?: "center" | "start";
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subLength, setSubLength] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  const current = WORDS[wordIndex];
  const s = sizes[size];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (subLength < current.text.length) {
        timeout = setTimeout(() => setSubLength((n) => n + 1), TYPE_MS);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), HOLD_MS);
      }
    } else {
      if (subLength > 0) {
        timeout = setTimeout(() => setSubLength((n) => n - 1), DELETE_MS);
      } else {
        timeout = setTimeout(() => {
          setWordIndex((i) => (i + 1) % WORDS.length);
          setPhase("typing");
        }, GAP_MS);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, subLength, current.text.length]);

  return (
    <div
      className={`flex items-center ${align === "center" ? "justify-center" : "justify-start"} ${s.box}`}
    >
      <p
        dir={current.dir}
        lang={current.lang}
        className={`${current.font} ${s.text} inline-flex items-center bg-gradient-to-r from-[var(--color-accent)] via-fuchsia-500 to-teal-400 bg-clip-text font-bold leading-relaxed text-transparent`}
      >
        {current.text.slice(0, subLength)}
        <span
          aria-hidden
          className={`caret-blink ml-1 inline-block ${s.caret} self-stretch bg-[var(--color-accent)]`}
        />
      </p>
    </div>
  );
}
