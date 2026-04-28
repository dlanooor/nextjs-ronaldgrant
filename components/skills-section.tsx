import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { sections, skills } from "@/lib/portfolio-data";

type SkillIconProps = {
  className?: string;
};

const skillIcons: Record<string, (props: SkillIconProps) => React.ReactNode> = {
  "Quality Engineering": ShieldCheckIcon,
  "Automation & Tools": WorkflowIcon,
  "Technical Background": CodeIcon,
};

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-neutral-900">
      <Container>
        <SectionHeading {...sections.skills} />

        <div className="reveal reveal-delay-1 stagger-list mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
          {skills.map((skillGroup) => {
            const Icon = skillIcons[skillGroup.group] ?? CodeIcon;

            return (
              <article
                key={skillGroup.group}
                className="premium-card card-lift rounded-xl border border-neutral-950/10 bg-white p-5 sm:p-7 dark:border-white/10 dark:bg-neutral-950 dark:hover:border-white/20"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-pink-700/15 bg-pink-50 text-pink-700 shadow-sm shadow-pink-950/5 dark:border-pink-300/15 dark:bg-pink-400/10 dark:text-pink-300">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    {skillGroup.group}
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill.label}
                      className="flex gap-3 rounded-lg border border-neutral-950/10 bg-neutral-50 px-4 py-3 transition hover:border-pink-700/20 hover:bg-pink-50 dark:border-white/10 dark:bg-neutral-900 dark:hover:border-pink-300/20 dark:hover:bg-pink-400/10"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 font-mono text-sm font-semibold text-pink-700 dark:text-pink-300"
                      >
                        &gt;
                      </span>
                      <span className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                        <span className="font-semibold text-neutral-950 dark:text-white">
                          {skill.label}:
                        </span>{" "}
                        {skill.values.join(", ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
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
