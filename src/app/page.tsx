import {
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  ChevronDown,
  Cpu,
  Download,
  Layers,
  Network,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { InteractiveScene } from "@/components/interactive-scene";

const impact = [
  {
    title: "POS Modernization",
    detail: "Contributing to migration from monolith to modular C++ architecture at Tlantic.",
    icon: Layers,
  },
  {
    title: "Build + Tooling",
    detail: "Bazel build workflows, static analysis tools, and formatting automation for engineering consistency.",
    icon: Wrench,
  },
  {
    title: "Service Contracts",
    detail: "gRPC and Protobuf integration across modular components for reliable backend communication.",
    icon: Network,
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "Tlantic",
    period: "Feb 2026 - Present",
    bullets: [
      "Backend and systems work on large-scale retail POS modernization.",
      "Focus on modular C++ components and build reliability.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Tlantic",
    period: "Mar 2025 - Feb 2026",
    bullets: [
      "Contributed to the Unifo Modularization Project for Sonae POS.",
      "Maintained Bazel builds, protobuf contracts, and gRPC integrations.",
      "Built internal static analysis and formatting tooling.",
    ],
  },
  {
    role: "Trainee Software Developer",
    company: "Tlantic",
    period: "Jul 2024 - Mar 2025",
    bullets: [
      "Delivered customer data feature across UI and API layers.",
      "Resolved QA and production issues in retail POS workflows.",
    ],
  },
  {
    role: "3D Printing Engineer",
    company: "Braga3DPrint",
    period: "Apr 2023 - Jun 2024",
    bullets: [
      "Published 200+ models with 100,000+ downloads.",
      "Ranked 6th most-followed designer on MakerWorld (Feb 19, 2024).",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Tlantic",
    period: "Sep 2020 - Aug 2021",
    bullets: [
      "Co-developed a mobile POS app using React Native.",
      "Integrated existing Tlantic services for retail flows.",
    ],
  },
];

const tlanticJourney = experience.filter((item) => item.company === "Tlantic").slice(0, 3);
const otherExperience = experience.filter((item) => !(item.company === "Tlantic" && tlanticJourney.includes(item)));

const skills = ["C++", "Bazel", "gRPC", "Protobuf", "Distributed Systems", "SQLite", "POS Systems", "Developer Tooling"];

export default function Page() {
  return (
    <InteractiveScene>
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div aria-hidden className="aurora-bg pointer-events-none absolute inset-0 opacity-55" />
      <div aria-hidden className="mesh-bg pointer-events-none absolute inset-0 opacity-35" />
      <div aria-hidden className="neon-vignette pointer-events-none absolute inset-0 opacity-45" />
      <div aria-hidden className="parallax-dots pointer-events-none absolute inset-0 opacity-35" />
      <div aria-hidden className="animate-rotate-slow pointer-events-none absolute -left-32 -top-28 h-80 w-80 rounded-full border border-accent/30" />
      <div aria-hidden className="animate-float-y pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.35),transparent_65%)] blur-2xl" />
      <div aria-hidden className="animate-float-x pointer-events-none absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-[radial-gradient(circle,hsl(280_80%_60%/0.24),transparent_65%)] blur-2xl" />
      <div aria-hidden className="animate-sweep pointer-events-none absolute -left-1/3 top-1/4 h-px w-[160%] bg-gradient-to-r from-transparent via-accent/70 to-transparent blur-[1px]" />
      <div aria-hidden className="animate-sweep-reverse pointer-events-none absolute -left-1/4 top-2/3 h-px w-[150%] bg-gradient-to-r from-transparent via-violet-400/70 to-transparent blur-[1px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-12 sm:px-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <p className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Engineering CV</p>
          </div>
          <a
            href="https://www.linkedin.com/in/marcelo-marreiros/"
            className="mono inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs transition-colors hover:border-accent/70"
          >
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </header>

        <section className="alive-section alive-glow animate-pulse-border mb-12 grid gap-6 rounded-3xl border bg-card/70 p-6 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div>
            <p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-accent">Marcelo Marreiros</p>
            <h1 className="text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-6xl">
              <span className="block animated-gradient-text">Software Developer</span>
              <span className="mt-2 block text-xl font-medium text-muted-foreground sm:text-2xl">
                C++ | Bazel | gRPC | Distributed Systems | POS Modernization
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Backend and systems engineer focused on modernizing large retail POS platforms with modular architecture,
              build tooling, and production-grade service integration.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="mono rounded-full border border-border bg-muted/80 px-3 py-1 text-xs">Braga, Portugal</span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/marcelo-marreiros/"
                className="magnetic inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Contact on LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/MarcelodeFreitas"
                className="magnetic inline-flex items-center gap-2 rounded-lg border border-border bg-muted/80 px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/70"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/cv/marcelo-marreiros-cv-2026.pdf"
                download
                className="magnetic relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/70"
              >
                <span className="animate-shimmer pointer-events-none absolute inset-0 opacity-50" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Download CV (PDF)
                  <Download className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="animate-pulse-glow relative rounded-2xl border border-border bg-background/70 p-2">
              <Image
                src="https://github.com/MarcelodeFreitas.png"
                alt="Marcelo Marreiros"
                width={304}
                height={304}
                className="h-64 w-64 rounded-xl object-cover sm:h-72 sm:w-72"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,transparent_20%,hsl(var(--accent)/0.2)_100%)]" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5 flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Impact Snapshot</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {impact.map((item, index) => (
              <article
                key={item.title}
                className="alive-card tilt-card group rounded-xl border border-border bg-card/85 p-5"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-3 inline-flex rounded-md bg-muted p-2 transition-colors group-hover:bg-accent/20">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5 flex items-center gap-2">
            <BriefcaseBusiness className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Experience</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="alive-section tilt-card rounded-xl border border-border bg-card/85 p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold">Tlantic - Continuous Journey</p>
                  <p className="text-sm text-muted-foreground">Trainee to Software Developer progression</p>
                </div>
                <span className="mono animate-float-x rounded-full border border-accent/40 bg-accent/10 px-2 py-1 text-[10px] text-accent">
                  Click cards for details
                </span>
              </div>
              <div className="relative pl-8">
                <div className="absolute bottom-3 left-3 top-3 w-px bg-gradient-to-b from-accent/80 via-accent/30 to-transparent" />
                {tlanticJourney.map((item, index) => (
                  <details
                    key={`${item.company}-${item.role}`}
                    open={index === 0}
                    className="alive-card tilt-card group relative mb-4 rounded-lg border border-border bg-background/50"
                  >
                    <summary className="list-none cursor-pointer p-4">
                      <span className="absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full border border-accent/70 bg-accent transition-transform duration-300 group-hover:scale-125" />
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-base font-semibold">{item.role}</p>
                        <p className="mono text-xs text-muted-foreground">{item.period}</p>
                      </div>
                      <div className="mt-1 flex items-center justify-between gap-3">
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                        <span className="mono inline-flex items-center gap-1 text-[11px] text-accent">
                          Expand
                          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-open:rotate-180" />
                        </span>
                      </div>
                    </summary>
                    <ul className="mx-4 mb-4 mt-0 space-y-1 rounded-md border border-accent/25 bg-background/70 p-3 text-sm text-muted-foreground">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            </article>

            <div className="space-y-4">
              {otherExperience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="alive-card tilt-card rounded-xl border border-border bg-card/85 p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-lg font-semibold">{item.role}</p>
                    <p className="mono text-xs text-muted-foreground">{item.period}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="alive-section tilt-card mb-12 rounded-2xl border border-border bg-card/80 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <Cpu className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Core Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="mono animate-float-y rounded-full border border-border bg-muted/80 px-3 py-1 text-xs"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="alive-section tilt-card rounded-2xl border border-border bg-card/80 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <Blocks className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Education</h2>
          </div>
          <p className="text-sm text-muted-foreground sm:text-base">
            Integrated Master&apos;s in Biomedical Engineering (Medical Informatics), University of Minho.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-border bg-card/80 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-semibold sm:text-3xl">Featured Project Mention</h2>
          </div>
          <p className="text-sm text-muted-foreground sm:text-base">
            One of my 3D designs was featured in the Bambu Lab A1 announcement context.
          </p>
          <details className="group mt-4 rounded-xl border border-border bg-background/40 p-3 video-stable">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg border border-border bg-muted/70 px-4 py-3 text-sm font-semibold transition-colors hover:border-accent/70">
              <span className="inline-flex items-center gap-2">
                Watch video proof
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <div className="mt-3 overflow-hidden rounded-lg border border-border bg-black">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/bLf7CNtLCJc?start=115"
                  title="Bambu Lab A1 mention"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </details>
        </section>

        <footer className="mt-12 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-5 h-px w-full bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-accent">Marcelo Marreiros</p>
              <p className="mt-2 text-sm text-muted-foreground">Software Developer focused on C++, Bazel, gRPC, and distributed backend systems.</p>
            </div>
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-accent">Links</p>
              <div className="mt-2 flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="https://www.linkedin.com/in/marcelo-marreiros/" className="transition-colors hover:text-foreground">LinkedIn</a>
                <a href="https://github.com/MarcelodeFreitas" className="transition-colors hover:text-foreground">GitHub</a>
                <a href="/cv/marcelo-marreiros-cv-2026.pdf" download className="transition-colors hover:text-foreground">Download CV (PDF)</a>
              </div>
            </div>
            <div>
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-accent">Availability</p>
              <p className="mt-2 text-sm text-muted-foreground">Open to full remote Software Engineer and Platform Engineer opportunities.</p>
              <p className="mono mt-3 text-xs text-muted-foreground">Last updated: 2026-04-08</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
    </InteractiveScene>
  );
}
