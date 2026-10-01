type Props = { eyebrow: string; title: string; copy: string };
export function SectionHeading({ eyebrow, title, copy }: Props) {
  return <div className="max-w-2xl"><p className="mb-3 font-mono text-xs font-semibold tracking-[.16em] text-cyan-300">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2><p className="mt-4 leading-7 text-slate-300">{copy}</p></div>;
}
