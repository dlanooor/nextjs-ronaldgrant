import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { education, sections } from "@/lib/portfolio-data";

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-b border-neutral-950/10 bg-white py-20 sm:py-32 dark:border-white/10 dark:bg-neutral-950"
    >
      <Container className="grid gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading {...sections.education} />

        <div className="reveal reveal-delay-1 stagger-list space-y-5">
          {education.map((item) => (
            <article
              key={item.school}
              className="premium-card card-lift rounded-xl border border-l-4 border-neutral-950/10 border-l-pink-600/70 bg-white p-5 sm:p-6 dark:border-white/10 dark:border-l-pink-300/70 dark:bg-neutral-900"
            >
              <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold leading-7 text-neutral-950 dark:text-white">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                    {item.major}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs font-semibold uppercase leading-6 text-pink-700 sm:pt-0.5 sm:text-right dark:text-pink-300">
                  {item.period}
                </p>
              </div>

              <div className="mt-5 inline-flex rounded-xl border border-neutral-950/10 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-700 dark:border-white/10 dark:bg-neutral-950 dark:text-neutral-200">
                Grade: {item.grade}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
