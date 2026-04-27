import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience, sections } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-neutral-950/10 bg-[#f3f6f1] py-24 sm:py-32 dark:border-white/10 dark:bg-neutral-900">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading {...sections.experience} />

        <div className="reveal reveal-delay-1 space-y-5">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="premium-card card-lift rounded-xl border border-l-4 border-neutral-950/10 border-l-emerald-600/70 bg-white p-6 dark:border-white/10 dark:border-l-emerald-300/70 dark:bg-neutral-950"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold leading-7 text-neutral-950 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    {item.company}
                  </p>
                </div>
                <p className="font-mono text-xs font-semibold uppercase text-emerald-700 dark:text-emerald-300">
                  {item.period}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
