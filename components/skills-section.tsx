import type { CSSProperties, ReactNode } from "react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { sections, skills } from "@/lib/portfolio-data";

type SkillIconProps = {
  className?: string;
};

const skillIcons: Record<string, (props: SkillIconProps) => ReactNode> = {
  "Quality Engineering": ShieldCheckIcon,
  "Automation & Tools": WorkflowIcon,
  "Technical Background": CodeIcon,
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-y border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-[#11100f]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(219,39,119,0.06),transparent_32%,rgba(37,99,235,0.055)_68%,transparent),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px] dark:bg-[linear-gradient(115deg,rgba(244,114,182,0.12),transparent_32%,rgba(96,165,250,0.09)_68%,transparent),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container>
        <div>
          <SectionHeading {...sections.skills} />
          <div className="mt-8 h-px w-28 bg-gradient-to-r from-pink-600 via-blue-500 to-transparent dark:from-pink-300 dark:via-blue-300" />
        </div>

        <div className="reveal reveal-delay-1 stagger-list mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
          {skills.map((skillGroup, index) => {
            const Icon = skillIcons[skillGroup.group] ?? CodeIcon;
            const accent = skillAccent(index);

            return (
              <article
                key={skillGroup.group}
                style={
                  {
                    "--skill-accent": accent.color,
                    "--skill-accent-soft": accent.soft,
                    "--skill-accent-border": accent.border,
                    "--skill-accent-shadow": accent.shadow,
                  } as CSSProperties
                }
                className="premium-card card-lift overflow-hidden rounded-xl border border-neutral-950/10 bg-white/90 shadow-sm backdrop-blur dark:border-[color:var(--skill-accent-border)] dark:bg-[#080807]/90"
              >
                <div
                  aria-hidden="true"
                  className="h-1.5 bg-[color:var(--skill-accent)]"
                />
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[color:var(--skill-accent-border)] bg-[color:var(--skill-accent-soft)] text-[color:var(--skill-accent)] shadow-sm shadow-[color:var(--skill-accent-shadow)]">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-[#fff4e6]">
                      {skillGroup.group}
                    </h3>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill.label}
                        className="group/skill flex gap-3 rounded-xl border border-neutral-950/10 bg-neutral-50/90 px-4 py-3 transition hover:-translate-y-0.5 hover:border-[color:var(--skill-accent-border)] hover:bg-white dark:border-white/10 dark:bg-[#171513]/90 dark:hover:border-[color:var(--skill-accent-border)] dark:hover:bg-[#1e1b18]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[color:var(--skill-accent)] shadow-[0_0_0_4px_var(--skill-accent-soft)]"
                        />
                        <span className="text-sm leading-6 text-neutral-600 dark:text-[#d7d0c8]">
                          <span className="font-semibold text-neutral-950 dark:text-[#fff4e6]">
                            {skill.label}:
                          </span>{" "}
                          {skill.values.join(", ")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function skillAccent(index: number) {
  const accents = [
    {
      color: "#db2777",
      soft: "rgb(219 39 119 / 0.13)",
      border: "rgb(219 39 119 / 0.3)",
      shadow: "rgb(219 39 119 / 0.16)",
    },
    {
      color: "#2563eb",
      soft: "rgb(37 99 235 / 0.13)",
      border: "rgb(37 99 235 / 0.3)",
      shadow: "rgb(37 99 235 / 0.16)",
    },
    {
      color: "#059669",
      soft: "rgb(5 150 105 / 0.13)",
      border: "rgb(5 150 105 / 0.3)",
      shadow: "rgb(5 150 105 / 0.16)",
    },
  ];

  return accents[index % accents.length];
}

function ShieldCheckIcon({ className }: SkillIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

function WorkflowIcon({ className }: SkillIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect height="6" rx="2" width="6" x="3" y="4" />
      <rect height="6" rx="2" width="6" x="15" y="14" />
      <path d="M9 7h3a4 4 0 0 1 4 4v3" />
      <path d="m13 11 3 3 3-3" />
    </svg>
  );
}

function CodeIcon({ className }: SkillIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 4-4 16" />
    </svg>
  );
}
