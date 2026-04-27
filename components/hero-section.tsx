import Image from "next/image";

import { Container } from "@/components/container";
import { hero, heroStats, profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="overflow-hidden border-b border-neutral-950/10 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7f2_100%)] dark:border-white/10 dark:bg-[linear-gradient(180deg,#080808_0%,#171717_100%)]"
    >
      <Container className="grid min-h-[calc(100svh-89px)] items-center gap-14 py-20 sm:py-24 md:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div className="animate-fade-up">
          <p className="inline-flex rounded-full border border-emerald-700/20 bg-emerald-50 px-4 py-2 font-mono text-xs font-semibold uppercase text-emerald-800 shadow-sm shadow-emerald-900/5 dark:border-emerald-300/20 dark:bg-emerald-400/10 dark:text-emerald-200">
            {hero.availability}
          </p>
          <h1 className="mt-7 max-w-3xl font-display text-6xl font-semibold leading-[0.95] text-neutral-950 sm:text-7xl lg:text-8xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-5 font-display text-2xl font-medium text-neutral-700 sm:text-3xl dark:text-neutral-200">
            {profile.role}
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-9 dark:text-neutral-300">
            {profile.shortIntro}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {profile.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={
                  cta.variant === "primary"
                    ? "inline-flex h-12 items-center justify-center rounded-xl bg-neutral-950 px-5 text-sm font-semibold text-white shadow-lg shadow-neutral-950/15 transition hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:bg-white dark:text-neutral-950 dark:shadow-white/10 dark:hover:bg-neutral-200 dark:focus-visible:ring-emerald-400"
                    : "inline-flex h-12 items-center justify-center rounded-xl border border-neutral-950/15 bg-white px-5 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-950/30 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:border-white/15 dark:bg-neutral-900 dark:text-white dark:hover:border-white/30 dark:hover:bg-neutral-800 dark:focus-visible:ring-emerald-400"
                }
              >
                {cta.label}
              </a>
            ))}
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="premium-card card-lift rounded-xl border border-neutral-950/10 bg-white/90 p-4 backdrop-blur dark:border-white/10 dark:bg-neutral-900/90"
              >
                <dt className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl dark:text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm leading-5 text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up animation-delay-100">
          <div className="premium-card group overflow-hidden rounded-2xl border border-neutral-950/10 bg-white shadow-sm dark:border-white/10 dark:bg-neutral-900">
            <Image
              src={profile.heroImage.src}
              alt={profile.heroImage.alt}
              width={900}
              height={1100}
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/60 bg-white/90 p-5 shadow-lg shadow-neutral-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/85 dark:shadow-black/30">
            <p className="font-display text-sm font-semibold text-neutral-950 dark:text-white">
              {hero.focusTitle}
            </p>
            <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              {hero.focus}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
