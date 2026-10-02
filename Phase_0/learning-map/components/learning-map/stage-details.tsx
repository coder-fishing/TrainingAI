import {
  BookOpen,
  BrainCircuit,
  Cpu,
  Database,
  Network,
  Wrench,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/glass/card";
import { stages } from "@/data/learning-map";
import { SectionHeading } from "./section-heading";
const icons = [BrainCircuit, BookOpen, Cpu, Database, Wrench, Network];
export function StageDetails() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="SIX CONNECTED LESSONS"
        title="The detail beneath each node."
        copy="Read the educational content as a progression of capabilities, not a strict taxonomy."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {stages.map((stage, index) => {
          const Icon = icons[index];
          return (
            <Card id={stage.id} key={stage.id} className="scroll-mt-24 py-0">
              <CardHeader className="min-h-[9rem] p-6">
                <p className="font-mono text-xs tracking-[.16em] text-primary">
                  {stage.number} / LEARNING STAGE
                </p>
                <CardTitle className="mt-3 text-2xl text-foreground">
                  {stage.title}
                </CardTitle>
                <Icon
                  aria-hidden
                  className="absolute right-6 top-6 size-6 text-[var(--secondary-accent)]"
                />
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6 pt-0">
                <p className="min-h-[4rem] leading-7 text-muted-foreground">
                  {stage.definition}
                </p>
                <dl className="mt-7 grid min-h-[7.5rem] gap-5 border-t border-border pt-6 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[11px] tracking-wider text-muted-foreground">
                      ROLE IN AI
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground/90">
                      {stage.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] tracking-wider text-muted-foreground">
                      INHERITS FROM
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground/90">
                      {stage.inherits}
                    </dd>
                  </div>
                </dl>
                <div className="mt-5 min-h-[5.25rem] border-l-2 border-[var(--secondary-accent)] bg-[color-mix(in_oklab,var(--secondary-accent)_10%,transparent)] px-4 py-3">
                  <p className="font-mono text-[11px] tracking-wider text-[var(--secondary-accent)]">
                    SIMPLE EXAMPLE
                  </p>
                  <p className="mt-1 text-sm leading-6 text-foreground/90">
                    {stage.example}
                  </p>
                </div>
                <div className="mt-5 flex min-h-[5.5rem] flex-wrap content-start gap-2">
                  {stage.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded border border-border bg-background/40 px-2.5 py-1.5 font-mono text-[11px] text-primary transition hover:border-primary/50 hover:text-primary"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-6 text-xs leading-5 text-muted-foreground">
                  <span className="font-mono text-foreground/80">SOURCE / </span>
                  {stage.source}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
