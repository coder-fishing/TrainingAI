import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Cpu,
  Database,
  Gauge,
  Network,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import {  CardContent } from "@/components/ui/card";
import { Card } from "@/components/ui/glass/card";
import { stages } from "@/data/learning-map";
import { SectionHeading } from "./section-heading";

const icons = [BrainCircuit, BookOpen, Cpu, Database, Wrench, Network];
type Props = { activeStage: string; onSelect: (id: string) => void };
export function LearningPath({ activeStage, onSelect }: Props) {
  return (
    <section id="path" className="">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <SectionHeading
          eyebrow="THE PRIMARY VISUAL"
          title="Build capability, then pressure-test it."
          copy="Each stage makes the next possible. Select a node to move to its lesson."
        />
        <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {stages.map((stage, index) => {
            const Icon = icons[index];
            const active = activeStage === stage.id;
            return (
              <div key={stage.id} className="flex min-w-0 flex-1 items-center">
                <Card className="min-h-28 flex-1 py-0">
                  <CardContent className="p-0">
                    <button
                      aria-current={active ? "step" : undefined}
                      onClick={() => onSelect(stage.id)}
                      className="min-h-28 w-full p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      <span className="flex justify-between">
                        <span className="font-mono text-xs text-muted-foreground">
                          {stage.number}
                        </span>
                        <Icon
                          aria-hidden
                          className={
                            active
                              ? "size-5 text-primary"
                              : "size-5 text-[var(--secondary-accent)]"
                          }
                        />
                      </span>
                      <strong className="mt-5 block text-base text-foreground">
                        {stage.short}
                      </strong>
                      <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                        {stage.title}
                      </span>
                    </button>
                  </CardContent>
                </Card>
                {index < stages.length - 1 && (
                  <ArrowRight
                    aria-hidden
                    className="mx-2 hidden shrink-0 text-primary/70 lg:block"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-8 grid gap-3">
          <Card className="py-0">
            <CardContent className="flex gap-4 p-4">
              <ShieldCheck
                aria-hidden
                className="mt-.5 size-5 shrink-0 text-primary"
              />
              <div>
                <p className="font-mono text-xs font-semibold tracking-wider text-primary">
                  EVALUATION MINDSET · ALL SIX STAGES
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Evaluate · benchmark · analyze errors before declaring a
                  system capable.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="py-0">
            <CardContent className="flex gap-4 p-4">
              <Gauge
                aria-hidden
                className="mt-.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-300"
              />
              <div>
                <p className="font-mono text-xs font-semibold tracking-wider text-emerald-700 dark:text-emerald-200">
                  PRODUCTION MINDSET · ALL SIX STAGES
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Latency · cost · guardrails · feedback loops shape real use.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
