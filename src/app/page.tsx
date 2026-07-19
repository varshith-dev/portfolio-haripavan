import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  profile,
  experience,
  skills,
  education,
  practiceAreas,
  awards,
  journey,
} from "@/lib/data";
import { Container, Block, CompanyLogos } from "@/components/chrome";
import { PostsCarousel } from "@/components/posts-carousel";
import { HeroPhoto } from "@/components/hero-photo";

const stats = [
  { value: profile.followers, label: "Followers" },
  { value: profile.connections, label: "Connections" },
  { value: "05", label: "Organizations" },
  { value: "2017", label: "In HR since" },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section>
        <Container className="pb-12 pt-10 sm:pb-16 sm:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                People &amp; Culture Partner · HR Domain Expert
              </p>
              <h1 className="mt-4 text-5xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl">
                Hari Pavan
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80 sm:text-xl sm:leading-relaxed">
                People &amp; Culture partner with{" "}
                <span className="text-foreground">8+ years</span> across talent
                acquisition, HR business partnering, and employee engagement —
                building high-performing teams at Jio, Flipkart, and ANAROCK.
              </p>

              {/* Current role — trust signal */}
              <div className="mt-7 flex items-center gap-3">
                <span className="relative h-9 w-9 shrink-0 rounded-md border border-border">
                  <Image
                    src="/logos/anarock.png"
                    alt="ANAROCK"
                    fill
                    sizes="36px"
                    className="object-contain p-1.5"
                  />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Currently
                  </p>
                  <p className="text-[14px] font-medium leading-tight">
                    {profile.currentRole} · {profile.currentCompany}
                  </p>
                </div>
              </div>

              {/* Previously — credibility */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Previously
                </span>
                {journey
                  .filter((c) => c.company !== "ANAROCK")
                  .map((c) => (
                    <span key={c.company} className="flex items-center gap-2">
                      <span className="relative h-5 w-5 shrink-0">
                        <Image
                          src={c.logo}
                          alt={c.company}
                          fill
                          sizes="20px"
                          className="object-contain"
                        />
                      </span>
                      <span className="text-[13px] text-foreground/70">{c.company}</span>
                    </span>
                  ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#highlights"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-foreground"
                >
                  View highlights
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Photo with orbiting tagline flowers */}
            <div className="order-1 lg:order-2">
              <HeroPhoto />
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="border-y border-border">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-border py-8 lg:py-10 lg:pl-8 lg:first:pl-0 ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              } ${i % 2 === 1 ? "border-l pl-6 lg:pl-8" : ""} lg:border-l lg:first:border-l-0`}
            >
              <p className="text-3xl font-medium tracking-tight tabular-nums sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 font-mono text-[11.5px] uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Companies ---------- */}
      <CompanyLogos />

      {/* ---------- About ---------- */}
      <Block id="about" title="About">
        <div className="max-w-3xl space-y-6">
          {profile.about.map((p, i) => (
            <p key={i} className="text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-2 pt-4">
            {profile.focus.map((f) => (
              <span
                key={f}
                className="rounded-full border border-border px-3.5 py-1.5 text-[13px] text-muted-foreground"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </Block>

      {/* ---------- Areas of practice ---------- */}
      <Block title="Areas of Practice">
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((a, i) => (
            <div key={a.title}>
              <p className="font-mono text-[12px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">{a.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* ---------- Experience ---------- */}
      <Block id="experience" title="Experience">
        <div className="border-t border-border">
          {experience.map((job, i) => (
            <article
              key={`${job.company}-${i}`}
              className="grid gap-5 border-b border-border py-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[12px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                    {job.company}
                  </h3>
                </div>
                <p className="mt-2 pl-8 text-[15px] text-foreground/70">{job.role}</p>
                <p className="mt-1 pl-8 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                  {job.period}
                </p>
                <p className="mt-1 pl-8 text-[13px] text-muted-foreground">
                  {job.location}
                  {job.mode ? ` · ${job.mode}` : ""}
                </p>
              </div>
              <div>
                {job.summary && (
                  <p className="text-[15px] leading-relaxed text-foreground/80">{job.summary}</p>
                )}
                {job.bullets && (
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-foreground/40" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {job.highlights && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-border px-2.5 py-1 text-[12px] text-foreground/70"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Block>

      {/* ---------- Recognition ---------- */}
      <Block id="recognition" title="Recognition">
        <div className="border-t border-border">
          {awards.map((a, i) => (
            <div
              key={`${a.title}-${i}`}
              className="flex items-baseline justify-between gap-6 border-b border-border py-5"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono text-[12px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] sm:text-lg">{a.title}</p>
              </div>
              <p className="shrink-0 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                {a.company}
              </p>
            </div>
          ))}
        </div>
      </Block>

      {/* ---------- Highlights carousel ---------- */}
      <Block id="highlights" title="Highlights & Posts">
        <PostsCarousel />
      </Block>

      {/* ---------- Expertise ---------- */}
      <Block title="Expertise">
        <div className="flex flex-wrap gap-x-2 gap-y-3">
          {skills.map((s) => (
            <span key={s} className="text-lg text-foreground/70 sm:text-xl">
              {s}
              <span className="ml-2 text-border">·</span>
            </span>
          ))}
        </div>
      </Block>

      {/* ---------- Education ---------- */}
      <Block title="Education">
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {education.map((e, i) => (
            <div key={i} className="border-t border-border pt-5">
              <p className="text-lg font-medium tracking-tight">{e.institution}</p>
              <p className="mt-1 text-[14.5px] text-muted-foreground">{e.degree}</p>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.1em] text-muted-foreground">
                {e.period}
                {e.grade ? ` · Grade ${e.grade}` : ""}
              </p>
            </div>
          ))}
        </div>
      </Block>

      {/* ---------- Career journey timeline ---------- */}
      <Block title="Career Journey">
        <ol className="flex flex-col sm:flex-row">
          {journey.map((j) => (
            <li
              key={j.company}
              className="relative flex-1 border-l border-border pb-8 pl-6 last:pb-0 sm:border-l-0 sm:border-t sm:pb-0 sm:pl-0 sm:pr-6 sm:pt-6"
            >
              <span className="absolute left-[-4.5px] top-1 h-2 w-2 rounded-full bg-foreground sm:left-0 sm:top-[-4.5px]" />
              <p className="font-mono text-[12px] text-muted-foreground">{j.years}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="relative h-5 w-5 shrink-0">
                  <Image src={j.logo} alt={j.company} fill sizes="20px" className="object-contain" />
                </span>
                <p className="text-[15px] font-medium tracking-tight">{j.company}</p>
              </div>
            </li>
          ))}
        </ol>
      </Block>

      {/* ---------- Contact ---------- */}
      <section id="contact" className="border-t border-border scroll-mt-28">
        <Container className="py-24 sm:py-32">
          <p className="font-mono text-[12px] uppercase tracking-[0.24em] text-muted-foreground">
            Get in touch
          </p>
          <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-7xl">
            Let&apos;s build great teams together.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Open to conversations on people, hiring, and HR strategy.
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-85"
          >
            Connect on LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Container>
      </section>
    </>
  );
}
