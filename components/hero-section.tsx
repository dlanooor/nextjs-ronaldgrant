import Image from "next/image";

import { AnimatedStatValue } from "@/components/animated-stat-value";
import { Container } from "@/components/container";
import { hero, heroStats, profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-neutral-950/10 bg-[linear-gradient(180deg,#ffffff_0%,#f4f7f2_100%)] dark:border-white/10 dark:bg-[linear-gradient(180deg,#070706_0%,#11100f_58%,#171717_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(115deg,transparent_0%,rgba(219,39,119,0.08)_38%,transparent_70%),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:100%_100%,56px_56px,56px_56px] opacity-70 dark:bg-[linear-gradient(115deg,transparent_0%,rgba(244,114,182,0.12)_38%,transparent_70%),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container className="grid items-center gap-10 py-16 sm:py-20 md:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24 xl:py-28">
        <div className="animate-fade-up">
          <p className="inline-flex rounded-full border border-pink-700/20 bg-pink-50 px-4 py-2 font-mono text-xs font-semibold uppercase text-pink-800 shadow-sm shadow-pink-900/5 dark:border-[#f2b7d1]/25 dark:bg-[#4b1730]/45 dark:text-[#f7c9dc]">
            {hero.availability}
          </p>
          <h1 className="mt-6 max-w-3xl bg-[linear-gradient(135deg,#171717_0%,#9f1239_54%,#334155_100%)] bg-clip-text font-display text-5xl font-semibold leading-[0.95] text-transparent sm:mt-7 sm:text-7xl lg:text-8xl dark:bg-[linear-gradient(135deg,#fff8ed_0%,#f4bdd6_46%,#cfe9dc_100%)]">
            {profile.name}
          </h1>
          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-10 bg-pink-700/55 dark:bg-[#f0b7cf]/70" />
            <p className="font-display text-2xl font-medium text-neutral-700 sm:text-3xl dark:text-[#f2e7dc]">
              {profile.role}
            </p>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:mt-7 sm:text-xl sm:leading-9 dark:text-[#d7d0c8]">
            {profile.shortIntro}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {profile.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={
                  cta.variant === "primary"
                    ? "inline-flex h-12 items-center justify-center rounded-xl bg-neutral-950 px-5 text-sm font-semibold text-white shadow-lg shadow-neutral-950/15 transition hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:bg-[#fff4e6] dark:text-neutral-950 dark:shadow-[#f0b7cf]/15 dark:hover:bg-white dark:focus-visible:ring-pink-400"
                    : "inline-flex h-12 items-center justify-center rounded-xl border border-neutral-950/15 bg-white px-5 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-950/30 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:border-[#f0b7cf]/25 dark:bg-[#161313]/80 dark:text-[#f2e7dc] dark:hover:border-[#f0b7cf]/45 dark:hover:bg-[#21191d] dark:focus-visible:ring-pink-400"
                }
              >
                {cta.label}
              </a>
            ))}
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="premium-card card-lift rounded-xl border border-neutral-950/10 bg-white/90 p-4 backdrop-blur dark:border-[#f0b7cf]/15 dark:bg-[#141111]/85"
              >
                <dt className="font-display text-2xl font-semibold text-neutral-950 sm:text-3xl dark:text-[#fff4e6]">
                  <AnimatedStatValue value={stat.value} />
                </dt>
                <dd className="mt-1 text-sm leading-5 text-neutral-500 dark:text-[#bdb2aa]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up animation-delay-100">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] border border-pink-700/10 bg-[linear-gradient(135deg,rgba(244,114,182,0.08),transparent_48%,rgba(16,185,129,0.08))] dark:border-[#f0b7cf]/10 dark:bg-[linear-gradient(135deg,rgba(244,114,182,0.16),transparent_48%,rgba(167,243,208,0.08))]"
          />
          <div className="premium-card group overflow-hidden rounded-2xl border border-neutral-950/10 bg-white shadow-sm dark:border-[#f0b7cf]/15 dark:bg-neutral-900">
            <Image
              src={profile.heroImage.src}
              alt={profile.heroImage.alt}
              width={900}
              height={1100}
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="aspect-[4/3] h-full w-full object-cover contrast-105 saturate-90 transition duration-700 group-hover:scale-[1.03] sm:aspect-[4/5]"
            />
          </div>
          <div className="mt-3 rounded-xl border border-white/60 bg-white/90 p-4 shadow-lg shadow-neutral-950/10 backdrop-blur-xl sm:absolute sm:bottom-4 sm:left-4 sm:right-4 sm:mt-0 sm:p-5 dark:border-[#f0b7cf]/15 dark:bg-[#080808]/85 dark:shadow-black/30">
            <p className="font-display text-sm font-semibold text-neutral-950 dark:text-[#fff4e6]">
              {hero.focusTitle}
            </p>
            <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-[#d7d0c8]">
              {hero.focus}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
