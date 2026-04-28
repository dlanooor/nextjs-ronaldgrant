"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { profile } from "@/lib/portfolio-data";

const welcomeStorageKey = "portfolio-welcome-seen";
const exitAnimationMs = 360;
const socialLinks = profile.socials.filter((social) => social.label !== "Email");

export function WelcomePopup() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const dismissTimeout = useRef<number | null>(null);

  const dismiss = useCallback(() => {
    window.sessionStorage.setItem(welcomeStorageKey, "true");
    setIsOpen(false);

    if (dismissTimeout.current) {
      window.clearTimeout(dismissTimeout.current);
    }

    dismissTimeout.current = window.setTimeout(() => {
      setShouldRender(false);
    }, exitAnimationMs);
  }, []);

  useEffect(() => {
    if (window.sessionStorage.getItem(welcomeStorageKey) === "true") {
      return;
    }

    const showTimer = window.setTimeout(() => {
      setShouldRender(true);
      window.requestAnimationFrame(() => {
        setIsOpen(true);
        dialogRef.current?.focus();
      });
    }, 650);

    return () => window.clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!shouldRender) {
      return;
    }

    document.body.style.overflow = isOpen ? "hidden" : "";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        dismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismiss, isOpen, shouldRender]);

  useEffect(() => {
    return () => {
      if (dismissTimeout.current) {
        window.clearTimeout(dismissTimeout.current);
      }
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      aria-labelledby="welcome-popup-title"
      aria-modal="true"
      role="dialog"
      className={`fixed inset-0 z-[80] grid place-items-center overflow-y-auto px-5 py-8 transition duration-500 ease-out ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close welcome message"
        className="absolute inset-0 cursor-default bg-neutral-950/30 backdrop-blur-md transition dark:bg-black/55"
        onClick={dismiss}
      />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`premium-card relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/70 bg-[#fffaf3]/95 p-6 text-neutral-950 shadow-2xl shadow-neutral-950/20 outline-none transition duration-500 ease-out sm:p-8 dark:border-[#f0b7cf]/20 dark:bg-[#10100f]/95 dark:text-[#fff4e6] dark:shadow-black/50 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-5 scale-[0.97] opacity-0"
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-64 rounded-full bg-pink-300/25 blur-3xl dark:bg-pink-400/20"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-20 size-60 rounded-full bg-emerald-200/35 blur-3xl dark:bg-emerald-300/10"
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="inline-flex rounded-full border border-pink-700/15 bg-white/65 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-pink-800 shadow-sm dark:border-[#f0b7cf]/20 dark:bg-white/5 dark:text-[#f7c9dc]">
                Welcome
              </p>
              <h2
                id="welcome-popup-title"
                className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl"
              >
                Glad you made it here.
              </h2>
            </div>

            <button
              type="button"
              aria-label="Close welcome message"
              onClick={dismiss}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-neutral-950/10 bg-white/70 text-neutral-500 transition hover:-translate-y-0.5 hover:border-neutral-950/20 hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:border-white/10 dark:bg-white/5 dark:text-[#d7d0c8] dark:hover:border-white/20 dark:hover:text-white dark:focus-visible:ring-pink-400"
            >
              <svg
                aria-hidden="true"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-[#d7d0c8]">
            I am {profile.name}—a lifelong learner who believes being a little different is better than being a little better.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                onClick={dismiss}
                aria-label={`Visit ${profile.name} on ${social.label}`}
                className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:focus-visible:ring-pink-400 ${getSocialLinkClass(
                  social.label,
                )}`}
              >
                <SocialLogo label={social.label} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getSocialLinkClass(label: string) {
  if (label === "GitHub") {
    return "border-neutral-950/10 bg-white/75 text-neutral-800 hover:border-neutral-950/20 hover:bg-neutral-950 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-[#f2e7dc] dark:hover:border-[#fff4e6]/35 dark:hover:bg-[#fff4e6] dark:hover:text-neutral-950";
  }

  if (label === "LinkedIn") {
    return "border-pink-700/15 bg-pink-50/80 text-pink-800 shadow-pink-900/5 hover:border-pink-700/35 hover:bg-pink-100 dark:border-[#f0b7cf]/20 dark:bg-[#4b1730]/35 dark:text-[#f7c9dc] dark:shadow-[#f0b7cf]/10 dark:hover:border-[#f0b7cf]/40 dark:hover:bg-[#4b1730]/55";
  }

  if (label === "Instagram") {
    return "border-emerald-700/15 bg-emerald-50/80 text-emerald-900 shadow-emerald-900/5 hover:border-emerald-700/30 hover:bg-emerald-100 dark:border-emerald-200/15 dark:bg-emerald-300/10 dark:text-[#d9f8e8] dark:shadow-emerald-300/10 dark:hover:border-emerald-200/30 dark:hover:bg-emerald-300/15";
  }

  return "border-neutral-950/10 bg-white/65 text-neutral-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-[#f2e7dc] dark:hover:bg-white/10";
}

function SocialLogo({ label }: { label: string }) {
  const className = "size-4 shrink-0";

  if (label === "GitHub") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.82c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.56V8.98h3.56v11.47ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
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
        <rect width="18" height="18" x="3" y="3" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    );
  }

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
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
}
