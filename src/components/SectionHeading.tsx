export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-fg-muted)]">{description}</p>
      )}
    </div>
  );
}
