import Image from "next/image";
import { ArrowUpRight, ArrowUp } from "lucide-react";
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
        <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-7xl">
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
    <section id={id} className={`border-t border-border scroll-mt-28 ${className}`}>
      <Container className="py-16 sm:py-24">
        <h2 className="mb-10 text-3xl font-medium tracking-[-0.02em] sm:text-4xl">{title}</h2>
        {children}
      </Container>
    </section>
  );
}

// Colorful company logos — static, centered.
export function CompanyLogos() {
  return (
    <section className="border-y border-border bg-paper">
      <Container className="py-14">
        <p className="mb-8 text-center font-mono text-[11.5px] uppercase tracking-[0.24em] text-muted-foreground">
          Experience across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {journey.map((c) => (
            <div key={c.company} className="flex items-center gap-2.5">
              <span className="relative h-8 w-8 shrink-0">
                <Image
                  src={c.logo}
                  alt={c.company}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </span>
              <span className="text-lg font-medium tracking-tight">{c.company}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          {profile.fullName} · {profile.location}
        </span>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            linkedin.com/in/hari-pavan
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 transition-colors hover:border-foreground hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
