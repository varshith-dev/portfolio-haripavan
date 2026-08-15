import Image from "next/image";
import { ArrowUpRight, ArrowRight, Download, Award, CheckCircle2, Mail, Sparkles, Briefcase, GraduationCap } from "lucide-react";
import { LinkedInWebIcon } from "@/components/icons";
import {
  profile,
  experience,
  skills,
  education,
  practiceAreas,
  awards,
  journey,
  caseStudies,
} from "@/lib/data";
import { Container, Block, CompanyLogos } from "@/components/chrome";
import { PostsCarousel } from "@/components/posts-carousel";
import { PortfolioSandbox } from "@/components/portfolio-sandbox";

import GradientText from "@/components/GradientText";
import RotatingText from "@/components/RotatingText";
import PixelSwap from "@/components/PixelSwap";
import { PixelGridReveal } from "@/components/pixel-grid-reveal";

const stats: {
  value: string;
  to: number;
  label: string;
  sublabel: string;
  suffix?: string;
  pad?: number;
  format?: string;
}[] = [
  { value: profile.followers, to: 49437, format: "comma", label: "LinkedIn Network", sublabel: "49K+ HR Professional Community" },
  { value: profile.connections, to: 500, suffix: "+", label: "Industry Leaders", sublabel: "Executive Connections" },
  { value: "05", to: 5, pad: 2, label: "Top Enterprises & GCCs", sublabel: "Jio, Flipkart, ANAROCK, Welspun" },
  { value: "2017", to: 2017, label: "Years of HR Excellence", sublabel: "8+ Years Domain Leadership" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden selection:bg-foreground selection:text-background">
      {/* ---------- Hero Section ---------- */}
      <section className="relative flex min-h-[75vh] flex-col justify-between pt-12 pb-12 sm:pt-20 sm:pb-20">
        <Container className="flex flex-1 flex-col justify-between">
          {/* Headline & Portrait Grid */}
          <div className="my-8 grid items-center gap-10 lg:grid-cols-[1.3fr_340px] lg:gap-16 sm:my-12">
            <div>
              {/* Main Giant Hero Headline with React Bits Animated GradientText */}
              <div className="overflow-hidden">
                <h1 data-hero>
                  <GradientText
                    colors={["var(--foreground)", "#64748b", "var(--foreground)", "#94a3b8", "var(--foreground)"]}
                    animationSpeed={6}
                    showBorder={false}
                    className="font-display text-3xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] sm:leading-[1.05] tracking-tight !m-0 !max-w-none justify-start"
                  >
                    Building Scale, Culture &amp; High-Performing Teams
                  </GradientText>
                </h1>
              </div>

              {/* Small Subtle Lowercase Byline Name & Role with React Bits RotatingText */}
              <div
                data-hero
                className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold"
              >
                <span className="lowercase font-bold text-foreground">hari pavan</span> · Senior HR Business Partner
                <span className="inline-flex items-center gap-1.5 border border-border bg-paper px-2.5 py-1 text-foreground rounded-[4px] font-mono text-[11px] normal-case font-semibold">
                  <span>Scaling @</span>
                  <RotatingText
                    texts={["Jio", "Flipkart", "ANAROCK", "Welspun"]}
                    staggerFrom="last"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%", opacity: 0 }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2200}
                    elementLevelClassName="font-semibold text-foreground"
                  />
                </span>
              </div>

              <div data-hero className="mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                <a
                  data-magnetic
                  href="#initiatives"
                  className="group inline-flex items-center justify-center gap-2 rounded-[4px] bg-primary px-5 py-3 text-xs sm:text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90"
                >
                  <span>Case Studies</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  data-magnetic
                  href="#experience"
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-border bg-card px-4 py-3 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 hover:border-foreground"
                >
                  <span>Experience</span>
                  <ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  data-magnetic
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-border bg-card px-4 py-3 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 hover:border-foreground"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  data-magnetic
                  href="/Hari-Pavan-CV.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-border bg-card px-4 py-3 text-xs sm:text-sm font-medium text-foreground transition-all duration-200 hover:border-foreground"
                >
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* React Bits PixelSwap Portrait Interactive Card */}
            <div data-hero>
              <PixelSwap
                firstContent={
                  <PixelGridReveal
                    src={profile.photo}
                    alt={profile.name}
                    className="max-w-[320px] mx-auto lg:max-w-none"
                  />
                }
                secondContent={
                  <div className="agency-card flex h-full w-full flex-col justify-between rounded-[4px] border border-border bg-card p-6 shadow-xl max-w-[320px] mx-auto lg:max-w-none">
                    <div>
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted-foreground font-semibold">
                        Executive Summary
                      </span>
                      <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                        {profile.name}
                      </h3>
                      <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">
                        {profile.currentRole} · {profile.currentCompany}
                      </p>
                      <div className="mt-6 space-y-3 border-t border-border/60 pt-4">
                        <div>
                          <p className="font-display text-lg font-bold text-foreground">49K+</p>
                          <p className="font-mono text-[10px] uppercase text-muted-foreground">LinkedIn Network</p>
                        </div>
                        <div>
                          <p className="font-display text-lg font-bold text-foreground">8+ Years</p>
                          <p className="font-mono text-[10px] uppercase text-muted-foreground">Enterprise &amp; GCC Scale</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                pixelSize={32}
                pixelScale={0.35}
                duration={1200}
                pixelDuration={400}
                pattern="random"
                trigger="hover"
                aspectRatio="4 / 5"
                className="max-w-[320px] mx-auto lg:max-w-none rounded-[4px]"
              />
            </div>
          </div>

          {/* Bottom Bar Metrics */}
          <div data-hero className="grid grid-cols-2 gap-4 border-t border-border/80 pt-6 sm:grid-cols-4">
            <div>
              <p data-count data-to={49437} data-format="comma" className="font-mono text-2xl font-semibold text-foreground">
                {profile.followers}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">LinkedIn Network</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-foreground">8+ Yrs</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">HR Leadership</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-foreground">05</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Top Brands</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-foreground">ANAROCK</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Current HRBP</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Enterprise Track Record ---------- */}
      <CompanyLogos />

      {/* ---------- Strategic Case Studies Showcase ---------- */}
      <Block id="initiatives" title="Strategic HR Case Studies">
        <PortfolioSandbox />
      </Block>

      {/* ---------- Core Practice Areas ---------- */}
      <Block id="practice" title="Core Practice Areas">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((a, i) => (
            <div
              key={a.title}
              className="agency-card rounded-[4px] border border-border bg-card p-6 sm:p-7"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-paper font-mono text-xs font-semibold text-foreground border border-border">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                {a.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted-foreground">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </Block>

      {/* ---------- Complete Career Experience History ---------- */}
      <Block id="experience" title="Career Experience">
        <div className="space-y-6">
          {experience.map((job, i) => (
            <article
              key={`${job.company}-${i}`}
              className="agency-card rounded-[4px] border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-muted-foreground">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                      {job.company}
                    </h3>
                  </div>
                  <p className="mt-2 text-[15px] font-medium text-foreground">{job.role}</p>
                  <p className="mt-1.5 font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
                    {job.period}
                  </p>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    {job.location}
                    {job.mode ? ` · ${job.mode}` : ""}
                  </p>
                </div>

                <div>
                  {job.summary && (
                    <p className="text-[15px] leading-relaxed text-foreground/90 font-normal">{job.summary}</p>
                  )}
                  {job.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {job.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-[14.5px] leading-relaxed text-muted-foreground"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground/70" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {job.highlights && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 rounded-[4px] border border-border bg-paper px-3 py-1 font-mono text-[11.5px] font-medium text-foreground/90"
                        >
                          <Award className="h-3.5 w-3.5 text-muted-foreground" />
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Block>

      {/* ---------- Honors & Key Recognition ---------- */}
      <Block id="recognition" title="Honors & Recognition">
        <div className="grid gap-4 sm:grid-cols-2">
          {awards.map((a, i) => (
            <div
              key={`${a.title}-${i}`}
              className="agency-card flex items-center gap-4 rounded-[4px] border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-paper text-foreground border border-border">
                <Award className="h-5 w-5 text-foreground/80" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-foreground">{a.title}</p>
                <p className="mt-1 font-mono text-[11.5px] uppercase tracking-wider text-muted-foreground">{a.company}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      {/* ---------- Skills & Competencies Matrix ---------- */}
      <Block title="Skills & Competencies">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="agency-card rounded-[4px] border border-border bg-card px-4 py-2 font-display text-[14.5px] font-medium text-foreground/90 transition-all duration-200 hover:border-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </Block>

      {/* ---------- Academic Qualifications ---------- */}
      <Block title="Academic Qualifications">
        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((e, i) => (
            <div
              key={i}
              className="agency-card rounded-[4px] border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-muted-foreground shrink-0" />
                <p className="font-display text-lg font-semibold text-foreground">{e.institution}</p>
              </div>
              <p className="mt-3 text-[14.5px] text-muted-foreground">{e.degree}</p>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-wider text-muted-foreground font-medium">
                {e.period}
                {e.grade ? ` · Grade ${e.grade}` : ""}
              </p>
            </div>
          ))}
        </div>
      </Block>

      {/* ---------- Media & Highlights Stream ---------- */}
      <Block id="highlights" title="Thought Leadership & Media">
        <PostsCarousel />
      </Block>

      {/* ---------- Career Journey Brand Timeline ---------- */}
      <Block title="Career Journey Timeline">
        <ol className="flex flex-col sm:flex-row gap-6 sm:gap-0">
          {journey.map((j) => (
            <li
              key={j.company}
              className="relative flex-1 border-l-2 border-border pb-8 pl-6 last:pb-0 sm:border-l-0 sm:border-t-2 sm:pb-0 sm:pl-0 sm:pr-6 sm:pt-6"
            >
              <span className="absolute left-[-7px] top-1 h-3 w-3 rounded-[1px] bg-foreground sm:left-0 sm:top-[-7px]" />
              <p className="font-mono text-[12px] font-medium text-muted-foreground">{j.years}</p>
              <div className="mt-3 flex items-center gap-3">
                <span className="relative h-7 w-7 shrink-0">
                  <Image src={j.logo} alt={j.company} fill sizes="28px" className="object-contain" />
                </span>
                <p className="font-display text-base font-semibold text-foreground">{j.company}</p>
              </div>
            </li>
          ))}
        </ol>
      </Block>

      {/* ---------- Minimal Contact Footer ---------- */}
      <section id="contact" className="relative border-t border-border py-28 sm:py-36">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
              Initiate Contact
            </p>
            <h2 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-7xl text-foreground">
              Let&apos;s talk.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-sans">
              Open for strategic HR leadership, GCC workforce setup, and executive advisory.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                data-magnetic
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-[4px] bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90"
              >
                <LinkedInWebIcon className="h-4 w-4" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}
