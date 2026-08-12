// Rotating accent hues used for icon badges across the site — keeps the
// dominant brand color (indigo) for buttons/headings/links, while giving
// cards and icons some variety instead of one flat color everywhere.
export const accentPalette = [
  { icon: "text-indigo-500 dark:text-indigo-400", bg: "bg-indigo-500/10", ring: "group-hover:shadow-indigo-500/20" },
  { icon: "text-teal-600 dark:text-teal-400", bg: "bg-teal-500/10", ring: "group-hover:shadow-teal-500/20" },
  { icon: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/10", ring: "group-hover:shadow-amber-500/20" },
  { icon: "text-rose-600 dark:text-rose-400", bg: "bg-rose-500/10", ring: "group-hover:shadow-rose-500/20" },
  { icon: "text-sky-600 dark:text-sky-400", bg: "bg-sky-500/10", ring: "group-hover:shadow-sky-500/20" },
] as const;

export function paletteAt(i: number) {
  return accentPalette[i % accentPalette.length];
}
