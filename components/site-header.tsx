"use client";

import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, profile } from "@/lib/portfolio-data";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-950/10 bg-white/85 shadow-sm shadow-neutral-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/80 dark:shadow-black/30">
      <Container className="relative flex items-center justify-between gap-3 py-3 sm:py-4">
        <a
          href="#home"
          aria-label={`${profile.name} home`}
          onClick={() => setIsMenuOpen(false)}
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-neutral-950 shadow-lg shadow-neutral-950/15 transition group-hover:-translate-y-0.5 sm:size-10 dark:shadow-white/10">
            <Image
              src="/icon.svg"
              alt=""
              width={40}
              height={40}
              unoptimized
              aria-hidden="true"
              className="size-full"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-semibold text-neutral-950 dark:text-white">
              {profile.name}
            </span>
            <span className="block truncate text-xs text-neutral-500 dark:text-neutral-400">
              {profile.role}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden min-w-0 md:block"
        >
          <ul className="flex items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 transition hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-emerald-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-neutral-950/15 bg-neutral-100 text-neutral-950 shadow-sm transition hover:border-neutral-950/25 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 md:hidden dark:border-white/15 dark:bg-neutral-800 dark:text-white dark:hover:border-white/25 dark:hover:bg-neutral-700 dark:focus-visible:ring-emerald-400"
          >
            <span aria-hidden="true" className="relative size-5">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute left-5 right-5 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-neutral-950/10 bg-white/95 shadow-xl shadow-neutral-950/10 backdrop-blur-xl transition md:hidden dark:border-white/10 dark:bg-neutral-950/95 dark:shadow-black/30 ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <ul className="divide-y divide-neutral-950/10 p-2 text-sm font-medium text-neutral-700 dark:divide-white/10 dark:text-neutral-200">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 transition hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-emerald-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
