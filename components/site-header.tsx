import Image from "next/image";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, profile } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-950/10 bg-white/85 shadow-sm shadow-neutral-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/80 dark:shadow-black/30">
      <Container className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 py-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-x-6 sm:py-4">
        <a
          href="#home"
          aria-label={`${profile.name} home`}
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

        <div className="justify-self-end sm:col-start-3 sm:row-start-1">
          <ThemeToggle />
        </div>

        <nav
          aria-label="Primary navigation"
          className="col-span-2 -mx-5 min-w-0 overflow-x-auto px-5 pb-1 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:mx-0 sm:px-0 sm:pb-0"
        >
          <ul className="flex min-w-max items-center gap-0 text-xs font-medium text-neutral-600 sm:gap-1 sm:text-sm dark:text-neutral-300">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-2 py-2 transition hover:bg-neutral-100 hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 sm:px-3 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-emerald-400"
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
