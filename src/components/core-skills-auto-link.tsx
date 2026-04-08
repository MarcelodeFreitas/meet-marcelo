"use client";

import { useState } from "react";

type SkillLink = {
  label: string;
  url: string;
};

type CoreSkillsAutoLinkProps = {
  skills: SkillLink[];
  holdMs?: number;
};

export function CoreSkillsAutoLink({ skills, holdMs = 1400 }: CoreSkillsAutoLinkProps) {
  const [armedIndex, setArmedIndex] = useState<number | null>(null);

  function clearHold() {
    setArmedIndex(null);
  }

  function armHold(index: number) {
    setArmedIndex(index);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <a
          key={skill.label}
          href={skill.url}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => armHold(index)}
          onMouseLeave={clearHold}
          className="group mono skill-chip relative overflow-hidden rounded-full border border-border bg-muted/80 px-3 py-1 text-xs transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          style={{ ["--hold-ms" as string]: `${holdMs}ms` }}
          title={`Click to open ${skill.label} docs`}
        >
          <span
            aria-hidden
            className={`pointer-events-none absolute inset-0 rounded-full border border-accent/70 transition-[clip-path,opacity] duration-200 ${
              armedIndex === index ? "opacity-100 skill-chip-progress" : "opacity-0 [clip-path:inset(0_100%_0_0)]"
            }`}
          />
          <span className="relative z-10">{skill.label}</span>
        </a>
      ))}
    </div>
  );
}
