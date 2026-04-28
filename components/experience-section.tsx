import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience, sections } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-neutral-900">
      <Container className="grid gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading {...sections.experience} />

        <div className="reveal reveal-delay-1 stagger-list space-y-5">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="premium-card card-lift rounded-xl border border-l-4 border-neutral-950/10 border-l-pink-600/70 bg-white p-5 sm:p-6 dark:border-white/10 dark:border-l-pink-300/70 dark:bg-neutral-950"
            >
              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-7 text-neutral-950 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    {item.company}
                  </p>
                </div>
                <div className="shrink-0 sm:pt-0.5 sm:text-right">
                  <p className="font-mono text-xs font-semibold uppercase leading-6 text-pink-700 dark:text-pink-300">
                    {item.period}
                  </p>
                  <p className="text-xs font-medium leading-5 text-neutral-500 dark:text-neutral-400">
                    {item.location}
                  </p>
                </div>
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
