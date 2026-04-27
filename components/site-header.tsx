import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigation, profile } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-950/10 bg-white/85 shadow-sm shadow-neutral-950/5 backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/80 dark:shadow-black/30">
      <Container className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#home"
          aria-label={`${profile.name} home`}
          className="group flex items-center gap-3"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-neutral-950 text-sm font-semibold text-white shadow-lg shadow-neutral-950/15 transition group-hover:-translate-y-0.5 dark:bg-white dark:text-neutral-950 dark:shadow-white/10">
            {profile.initials}
          </span>
          <span>
            <span className="block font-display text-sm font-semibold text-neutral-950 dark:text-white">
              {profile.name}
            </span>
            <span className="block text-xs text-neutral-500 dark:text-neutral-400">
              {profile.role}
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="overflow-x-auto">
          <ul className="flex min-w-max items-center gap-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
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

        <ThemeToggle />
      </Container>
    </header>
  );
}
