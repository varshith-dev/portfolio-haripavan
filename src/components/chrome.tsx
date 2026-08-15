import Image from "next/image";
import { ArrowUpRight, ArrowUp, Sparkles } from "lucide-react";
import { profile, journey } from "@/lib/data";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section>
      <Container className="pb-10 pt-16 sm:pb-14 sm:pt-24">
        <p className="font-mono text-[11.5px] uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}

export function Block({
  title,
  children,
  id,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`relative border-t border-border scroll-mt-28 ${className}`}>
      <Container className="py-20 sm:py-28">
        <div data-reveal>
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] sm:text-4xl text-foreground">
              {title}
            </h2>
            <div className="hidden h-px flex-1 bg-border/60 ml-8 sm:block" />
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}

export function CompanyLogos() {
  return (
    <section className="relative border-y border-border bg-card py-10 sm:py-14">
      <Container>
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
          Enterprise Track Record
        </p>
        <div data-reveal className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
          {journey.map((c) => (
            <div
              key={c.company}
              className="agency-card flex items-center gap-3 rounded-[4px] border border-border bg-paper px-5 py-3"
            >
              <span className="relative h-6 w-6 shrink-0">
                <Image
                  src={c.logo}
                  alt={c.company}
                  fill
                  sizes="24px"
                  className="object-contain"
                />
              </span>
              <span className="font-display text-[14.5px] font-semibold text-foreground">
                {c.company}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 text-[13.5px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          {profile.fullName} · {profile.location}
        </span>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium transition-colors hover:text-foreground"
          >
            linkedin.com/in/hari-pavan
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-[4px] border border-border bg-paper px-4 py-1.5 font-medium text-foreground transition-all duration-200 hover:border-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
