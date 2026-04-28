import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { profile, sections } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-y border-neutral-950/10 bg-[#f8f1f5] py-20 sm:py-32 dark:border-white/10 dark:bg-[#151014]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(118deg,rgba(219,39,119,0.08),transparent_34%,rgba(219,39,119,0.045)_74%,transparent),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px] dark:bg-[linear-gradient(118deg,rgba(244,114,182,0.13),transparent_34%,rgba(244,114,182,0.06)_74%,transparent),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container>
        <div className="premium-card reveal overflow-hidden rounded-2xl border border-pink-700/15 bg-neutral-950/95 text-white shadow-2xl shadow-pink-950/10 backdrop-blur dark:border-pink-300/20 dark:bg-[#080807]/95">
          <div
            aria-hidden="true"
            className="h-1.5 bg-gradient-to-r from-pink-600 via-pink-400 to-transparent dark:from-pink-300 dark:via-pink-400"
          />
          <div className="grid gap-10 p-6 sm:gap-12 sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <SectionHeading
                eyebrow={sections.contact.eyebrow}
                title={sections.contact.title}
                description={sections.contact.description}
                tone="dark"
              />
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-pink-300 via-pink-200 to-transparent" />
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#fff4e6] px-5 py-3 text-center text-sm font-semibold text-neutral-950 shadow-lg shadow-pink-300/10 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
              >
                <SocialIcon label="Email" />
                {profile.email}
              </a>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-pink-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-[#f2e7dc] transition hover:-translate-y-0.5 hover:border-pink-300/35 hover:bg-pink-400/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 sm:flex-none"
                  >
                    <SocialIcon label={social.label} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialIcon({ label }: { label: string }) {
  const iconClassName = "size-4 shrink-0";

  if (label === "GitHub") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={iconClassName}
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.86 8.35 6.84 9.7.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.93.85.09-.67.35-1.11.64-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={iconClassName}
        fill="currentColor"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={iconClassName}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={iconClassName}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
