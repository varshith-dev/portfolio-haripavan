"use client";

import { useState } from "react";
import { caseStudies, CaseStudy } from "@/lib/data";
import { CaseStudyCard } from "@/components/case-study-modal";

const categories = [
  "All",
  "Culture & Retention",
  "Talent Acquisition",
  "GCC HR Strategy",
  "HRBP & Operations",
] as const;

export function PortfolioSandbox() {
  const [selected, setSelected] = useState<string>("All");

  const filtered =
    selected === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === selected);

  return (
    <div>
      {/* Interactive Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`rounded-[4px] px-4 py-2 font-mono text-[12px] font-medium transition-all duration-200 ${
              selected === cat
                ? "bg-foreground text-background shadow-sm"
                : "border border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </div>
  );
}
