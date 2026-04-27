import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { about, sections } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32 dark:bg-neutral-950">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading {...sections.about} />

        <div className="reveal reveal-delay-1 space-y-9">
          <div className="space-y-5 text-base leading-8 text-neutral-600 sm:text-lg dark:text-neutral-300">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {about.highlights.map((highlight) => (
              <li
                key={highlight}
                className="premium-card card-lift rounded-xl border border-neutral-950/10 bg-neutral-50 p-5 text-sm font-medium leading-6 text-neutral-800 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-200"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
