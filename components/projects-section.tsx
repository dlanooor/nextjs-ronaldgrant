import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projectArchive, projects, sections } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-32 dark:bg-neutral-950">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading {...sections.projects} />
          <a
            href={projectArchive.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-neutral-950/15 bg-white/70 px-4 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10 dark:focus-visible:ring-emerald-400"
          >
            {projectArchive.label}
          </a>
        </div>

        <div className="reveal reveal-delay-1 mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="premium-card card-lift group flex min-h-full flex-col overflow-hidden rounded-xl border border-neutral-950/10 bg-white dark:border-white/10 dark:bg-neutral-900 dark:hover:border-white/20"
            >
              <div
                className="h-1.5"
                style={{ backgroundColor: projectAccent(index) }}
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold leading-7 text-neutral-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-700 transition group-hover:bg-neutral-200/70 dark:bg-neutral-800 dark:text-neutral-200 dark:group-hover:bg-neutral-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-md text-sm font-semibold text-emerald-700 transition hover:text-emerald-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:text-emerald-300 dark:hover:text-emerald-200 dark:focus-visible:ring-emerald-400"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function projectAccent(index: number) {
  const accents = ["#0f9f76", "#2563eb", "#f59e0b"];

  return accents[index % accents.length];
}
