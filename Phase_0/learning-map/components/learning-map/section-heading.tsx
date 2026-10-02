type Props = { eyebrow: string; title: string; copy: string };
export function SectionHeading({ eyebrow, title, copy }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 font-mono text-xs font-semibold tracking-[.16em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
    </div>
  );
}
