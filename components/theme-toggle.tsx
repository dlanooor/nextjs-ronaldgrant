"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
type IconProps = {
  className?: string;
};

const storageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    window.localStorage.setItem(storageKey, nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="grid h-10 w-32 shrink-0 grid-cols-2 gap-1 overflow-hidden rounded-full border border-neutral-950/15 bg-neutral-100 p-1 shadow-sm transition hover:border-neutral-950/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 sm:w-36 dark:border-white/15 dark:bg-neutral-800 dark:hover:border-white/25 dark:focus-visible:ring-emerald-400"
    >
      <span className="sr-only">{isDark ? "Use light mode" : "Use dark mode"}</span>
      <span
        aria-hidden="true"
        className={`flex h-full min-w-0 items-center justify-center gap-1 overflow-hidden rounded-full px-1 text-[11px] font-semibold leading-none transition sm:px-2 sm:text-xs ${
          isDark
            ? "text-neutral-500 dark:text-neutral-500"
            : "bg-white text-neutral-950 shadow-sm"
        }`}
      >
        <SunIcon className="size-3.5 shrink-0" />
        <span className="truncate">Light</span>
      </span>
      <span
        aria-hidden="true"
        className={`flex h-full min-w-0 items-center justify-center gap-1 overflow-hidden rounded-full px-1 text-[11px] font-semibold leading-none shadow-sm transition sm:px-2 sm:text-xs ${
          isDark
            ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
            : "text-neutral-500 shadow-none"
        }`}
      >
        <MoonIcon className="size-3.5 shrink-0" />
        <span className="truncate">Dark</span>
      </span>
    </button>
  );
}

function SunIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a7 7 0 1 0 11 11Z" />
    </svg>
  );
}

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getThemeSnapshot(): Theme {
  const savedTheme = window.localStorage.getItem(storageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}
