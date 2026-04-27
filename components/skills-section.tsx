import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { sections, skills } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-neutral-950/10 bg-[#f3f6f1] py-24 sm:py-32 dark:border-white/10 dark:bg-neutral-900">
      <Container>
        <SectionHeading {...sections.skills} />

        <div className="reveal reveal-delay-1 mt-12 grid gap-5 md:grid-cols-3">
          {skills.map((skillGroup) => (
            <article
              key={skillGroup.group}
              className="premium-card card-lift rounded-xl border border-neutral-950/10 bg-white p-7 dark:border-white/10 dark:bg-neutral-950 dark:hover:border-white/20"
            >
              <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                {skillGroup.group}
              </h3>
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
          ))}
        </div>
      </Container>
    </section>
  );
}
