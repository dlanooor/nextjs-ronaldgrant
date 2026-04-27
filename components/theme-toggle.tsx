"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

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
      className="inline-flex h-10 w-24 items-center gap-1 rounded-full border border-neutral-950/15 bg-neutral-100 p-1 shadow-sm transition hover:border-neutral-950/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 dark:border-white/15 dark:bg-neutral-800 dark:hover:border-white/25 dark:focus-visible:ring-emerald-400"
    >
      <span className="sr-only">{isDark ? "Use light mode" : "Use dark mode"}</span>
      <span
        aria-hidden="true"
        className={`flex-1 rounded-full px-2 py-2 text-center text-xs font-semibold transition ${
          isDark
            ? "text-neutral-500 dark:text-neutral-500"
            : "bg-white text-neutral-950 shadow-sm"
        }`}
      >
        Light
      </span>
      <span
        aria-hidden="true"
        className={`flex-1 rounded-full px-2 py-2 text-center text-xs font-semibold shadow-sm transition ${
          isDark
            ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
            : "text-neutral-500 shadow-none"
        }`}
      >
        Dark
      </span>
    </button>
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
