import type { CSSProperties, SVGProps } from "react";
import Image from "next/image";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projectArchive, projects, sections } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="works" className="bg-white py-20 sm:py-32 dark:bg-neutral-950">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading {...sections.projects} />
          <a
            href={projectArchive.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-neutral-950/15 bg-white/70 px-4 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10 dark:focus-visible:ring-pink-400"
          >
            {projectArchive.label}
          </a>
        </div>

        <div className="reveal reveal-delay-1 stagger-list mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
          {projects.map((project, index) => {
            const accent = projectAccent(index);

            return (
              <article
                key={`${project.company.name}-${project.title}`}
                style={
                  {
                    "--card-accent": accent.color,
                    "--card-accent-glow": accent.glow,
                    "--card-accent-shadow": accent.shadow,
                    "--card-accent-border": accent.border,
                    "--card-accent-soft": accent.soft,
                    "--card-accent-link": accent.link,
                    "--card-accent-button": accent.button,
                  } as CSSProperties
                }
                className="premium-card accent-card card-lift group flex min-h-full flex-col overflow-hidden rounded-xl border border-neutral-950/10 bg-white dark:border-white/10 dark:bg-neutral-900"
              >
                <div
                  className="h-1.5"
                  style={{ backgroundColor: accent.color }}
                />
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="accent-logo grid size-14 shrink-0 place-items-center rounded-xl border border-neutral-950/10 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white">
                      <Image
                        src={project.company.logo.src}
                        alt={project.company.logo.alt}
                        width={56}
                        height={56}
                        unoptimized
                        className="max-h-10 w-auto"
                      />
                    </div>
                    <span className="accent-pill rounded-full border border-neutral-950/10 bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600 dark:border-white/10 dark:bg-neutral-800 dark:text-neutral-300">
                      {project.company.name}
                    </span>
                  </div>
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
                        className="accent-chip rounded-lg bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-700 transition dark:bg-neutral-800 dark:text-neutral-200"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.company.name} ${link.label}`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[color:var(--card-accent-border)] bg-[color:var(--card-accent-soft)] px-3 text-sm font-semibold text-[color:var(--card-accent-button)] shadow-sm shadow-neutral-950/5 transition hover:-translate-y-0.5 hover:bg-[color:var(--card-accent)] hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--card-accent-border)] dark:bg-white/5 dark:text-[color:var(--card-accent-link)] dark:hover:bg-[color:var(--card-accent)] dark:hover:text-white"
                      >
                        <span>{link.label}</span>
                        <ExternalLinkIcon className="size-3.5 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function projectAccent(index: number) {
  const accents = [
    {
      color: "#db2777",
      glow: "rgb(219 39 119 / 0.22)",
      shadow: "rgb(219 39 119 / 0.42)",
      border: "rgb(219 39 119 / 0.45)",
      soft: "rgb(219 39 119 / 0.15)",
      link: "#f472b6",
      button: "#be185d",
    },
    {
      color: "#2563eb",
      glow: "rgb(37 99 235 / 0.22)",
      shadow: "rgb(37 99 235 / 0.42)",
      border: "rgb(37 99 235 / 0.45)",
      soft: "rgb(37 99 235 / 0.15)",
      link: "#60a5fa",
      button: "#1d4ed8",
    },
    {
      color: "#f59e0b",
      glow: "rgb(245 158 11 / 0.2)",
      shadow: "rgb(245 158 11 / 0.38)",
      border: "rgb(245 158 11 / 0.45)",
      soft: "rgb(245 158 11 / 0.15)",
      link: "#fbbf24",
      button: "#b45309",
    },
  ];

  return accents[index % accents.length];
}

function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5.25 4.25H11.75V10.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M11.5 4.5L4.25 11.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
