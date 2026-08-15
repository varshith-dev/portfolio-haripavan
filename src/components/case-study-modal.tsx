"use client";

import { useState } from "react";
import { X, ArrowRight, CheckCircle2, TrendingUp, Briefcase } from "lucide-react";
import { CaseStudy } from "@/lib/data";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className="agency-card group relative flex flex-col justify-between rounded-[4px] border border-border bg-card p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:border-foreground/50"
      >
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {study.company}
            </span>
            <span className="rounded-[4px] border border-border bg-paper px-3 py-1 font-mono text-[11px] font-medium text-foreground">
              {study.category}
            </span>
          </div>

          <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-foreground transition-colors group-hover:text-foreground/80">
            {study.title}
          </h3>

          <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
            {study.summary}
          </p>

          {/* Key Metric Highlights */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border/60 pt-5">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-base font-bold text-foreground">{m.value}</p>
                <p className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 font-mono text-xs font-semibold text-foreground group-hover:underline">
          <span>Read Strategy &amp; Results</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </article>

      {/* Detail Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[4px] border border-border bg-card p-6 sm:p-10 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-[4px] border border-border bg-paper text-foreground transition-colors hover:border-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {study.company}
              </span>
              <span className="rounded-[4px] border border-border bg-paper px-3 py-1 font-mono text-[11px] font-medium text-foreground">
                {study.category}
              </span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              {study.title}
            </h2>

            <div className="mt-6 grid grid-cols-3 gap-4 rounded-[4px] border border-border bg-paper p-4">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-lg font-bold text-foreground">{m.value}</p>
                  <p className="font-mono text-[11px] text-muted-foreground uppercase">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h4 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  The Business Challenge
                </h4>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  Strategic HR Execution
                </h4>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {study.strategy}
                </p>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-foreground">
                  Key Outcomes &amp; Impact
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {study.results.map((r, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {study.tags.map((t) => (
                  <span key={t} className="rounded-[4px] border border-border bg-paper px-3 py-1 font-mono text-[11px] text-muted-foreground">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
