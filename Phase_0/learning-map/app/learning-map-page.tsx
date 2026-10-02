"use client";

import { useState } from "react";
import {
  BooksSection,
  HardestPhase,
  MindsetsSection,
  RelationshipsAccordion,
} from "@/components/learning-map/supporting-sections";
import { LearningPath } from "@/components/learning-map/learning-path";
import { SiteHeader } from "@/components/learning-map/site-header";
import { StageDetails } from "@/components/learning-map/stage-details";

export default function LearningMapPage() {
  const [activeStage, setActiveStage] = useState("ml");
  const selectStage = (id: string) => {
    setActiveStage(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <a
        href="#content"
        className="absolute left-4 top-3 z-50 -translate-y-20 rounded bg-primary px-4 py-2 font-semibold text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="glass-canvas">
        <section
          id="top"
          className="mx-auto max-w-7xl px-5 pb-18 pt-16 sm:px-8 sm:pt-24"
        >
          <div className="max-w-4xl border-l-2 border-primary pl-5 sm:pl-8">
            <p className="font-mono text-xs font-semibold tracking-[.17em] text-primary">
              ENGINEERING LEARNING JOURNEY / 06 STAGES
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-.055em] text-foreground sm:text-7xl">
              AI Learning
              <br />
              <span className="text-[var(--secondary-accent)]">Map</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              A grounded roadmap from machine learning fundamentals to
              multi-agent engineering, with evaluation and production awareness
              at every turn.
            </p>
          </div>
        </section>
        <LearningPath activeStage={activeStage} onSelect={selectStage} />
        <StageDetails />
        <BooksSection />
        <MindsetsSection />
        <HardestPhase />
        <RelationshipsAccordion />
      </main>
      <footer className="border-t border-border px-5 py-8 text-center font-mono text-xs text-muted-foreground">
        AI Learning Map · a progression for engineering practice
      </footer>
    </div>
  );
}
