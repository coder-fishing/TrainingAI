"use client";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  GitBranch,
  Telescope,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/glass/card";
import { books, relationships } from "@/data/learning-map";
import { SectionHeading } from "./section-heading";

export function BooksSection() {
  return (
    <section id="books" className="border-y border-white/10 bg-[#101824]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="CURRICULUM BOOKS"
          title="Five books, one deliberate sequence."
          copy="References are signposts in the journey, not decorative covers."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {books.map(([title, author, role, range]) => (
            <Card variant="glass" hover="lift"
              key={title}
              className="min-h-64 border-t-2 border-violet-300/80 bg-white/[.06] py-0 backdrop-blur-md"
            >
              <CardHeader className="p-5">
                <BookOpen aria-hidden className="size-5 text-violet-300" />
                <p className="mt-7 font-mono text-[11px] tracking-wider text-cyan-200">
                  STAGES {range}
                </p>
                <CardTitle className="mt-3 text-lg leading-6 text-white">
                  {title}
                </CardTitle>
                <p className="text-sm text-slate-400">{author}</p>
              </CardHeader>
              <CardContent className="mt-auto p-5 pt-0 text-sm leading-6 text-slate-300">
                {role}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export function MindsetsSection() {
  return (
    <section id="mindsets" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="SYSTEMS THAT LAST"
        title="Two mindsets that do different work."
        copy="The map asks not just what to build, but how to know it works and holds up."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Card variant="crystal" className="border-l-2 border-cyan-300 bg-cyan-300/[.07] py-0">
          <CardContent className="p-7">
            <Telescope aria-hidden className="size-7 text-cyan-300" />
            <h3 className="mt-8 text-2xl font-semibold text-white">
              Evaluation
            </h3>
            <p className="mt-2 text-lg text-cyan-100">
              “Does the AI system actually work well?”
            </p>
            <p className="mt-5 leading-7 text-slate-300">
              Evaluation-Driven Development defines automated benchmarks,
              including AI-as-a-judge where appropriate, before building into
              open-ended model behavior.
            </p>
          </CardContent>
        </Card>
        <Card variant="frosted" className="border-l-2 border-emerald-300 bg-emerald-300/[.07] py-0">
          <CardContent className="p-7">
            <GitBranch aria-hidden className="size-7 text-emerald-300" />
            <h3 className="mt-8 text-2xl font-semibold text-white">
              Production
            </h3>
            <p className="mt-2 text-lg text-emerald-100">
              “Can the AI system work reliably in the real world?”
            </p>
            <p className="mt-5 leading-7 text-slate-300">
              Production engineering manages latency, API cost, guardrails, and
              user feedback loops for probabilistic systems.
            </p>
          </CardContent>
        </Card>
      </div>
      <Card variant="glass" className="mt-5 border border-amber-200/25 bg-amber-200/[.08] py-0">
        <CardContent className="p-6">
          <p className="font-mono text-xs tracking-wider text-amber-100">
            THE LAST-MILE CHALLENGE
          </p>
          <p className="mt-3 max-w-3xl leading-7 text-slate-200">
            A demo can reach 60% quickly. The journey to reliable production
            behavior takes months of systematic evaluation, safeguards, and
            iteration.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
export function HardestPhase() {
  const reasons = [
    [
      "01",
      "Compounded nondeterminism",
      "Multi-agent interactions create recursive feedback loops and edge-case drift.",
    ],
    [
      "02",
      "Trajectory evaluation",
      "Assess intermediate tool choices and reasoning paths, not only final text.",
    ],
    [
      "03",
      "Last-mile bottleneck",
      "Uncovered edge cases and hallucinations need systematic iteration before enterprise reliability.",
    ],
  ];
  return (
    <section
      id="hardest"
      className="border-y border-violet-300/20 bg-[#141126]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="COMPLEXITY PEAK"
          title="RAG / single-agent → multi-agent, under pressure."
          copy="The hardest transition is keeping a chain of probabilistic systems observable, evaluable, and reliable."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {reasons.map(([number, title, copy]) => (
            <Card variant="frosted"
              key={number}
              className="border border-violet-300/25 bg-violet-300/[.08] py-0 backdrop-blur-md"
            >
              <CardContent className="p-6">
                <p className="font-mono text-xs text-violet-300">{number}</p>
                <h3 className="mt-8 text-xl font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export function RelationshipsAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="relationships"
      className="mx-auto max-w-4xl px-5 py-20 sm:px-8"
    >
      <SectionHeading
        eyebrow="CORE RELATIONSHIPS"
        title="What each concept gives to the next."
        copy="Expand a relationship to see the learning progression in plain language."
      />
      <Card variant="glass" className="mt-10 divide-y divide-white/10 border border-white/15 bg-white/[.055] py-0">
        {relationships.map(([from, to, description], index) => {
          const expanded = open === index;
          return (
            <div key={`${from}-${to}`}>
              <button
                onClick={() => setOpen(expanded ? -1 : index)}
                aria-expanded={expanded}
                className="flex min-h-16 w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-white/[.05] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cyan-300"
              >
                <span className="flex items-center gap-3 text-base font-semibold text-white">
                  <span>{from}</span>
                  <ArrowRight aria-hidden className="size-4 text-cyan-300" />
                  <span>{to}</span>
                </span>
                <ChevronDown
                  aria-hidden
                  className={`size-5 shrink-0 text-slate-300 transition-transform ${expanded ? "rotate-180" : ""}`}
                />
              </button>
              {expanded && (
                <div className="px-4 pb-5 pr-10 text-sm leading-7 text-slate-300">
                  {description}
                </div>
              )}
            </div>
          );
        })}
      </Card>
    </section>
  );
}
