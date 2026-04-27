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

        <div className="reveal reveal-delay-1 mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
          {skills.map((skillGroup) => {
            const Icon = skillIcons[skillGroup.group] ?? CodeIcon;

            return (
              <article
                key={skillGroup.group}
                className="premium-card card-lift rounded-xl border border-neutral-950/10 bg-white p-5 sm:p-7 dark:border-white/10 dark:bg-neutral-950 dark:hover:border-white/20"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-emerald-700/15 bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-950/5 dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-300">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    {skillGroup.group}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-emerald-50 hover:text-emerald-800 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-200"
                    >
                      {skill}
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
