import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { documents, sections } from "@/lib/portfolio-data";

type DownloadsPanelProps = {
  className?: string;
  compact?: boolean;
};

export function DownloadsSection() {
  return (
    <section
      id="downloads"
      className="relative isolate overflow-hidden border-b border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-[#080807]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(118deg,rgba(219,39,119,0.065),transparent_34%,rgba(219,39,119,0.04)_74%,transparent),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px] dark:bg-[linear-gradient(118deg,rgba(244,114,182,0.11),transparent_34%,rgba(244,114,182,0.055)_74%,transparent),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container>
        <DownloadsPanel />
      </Container>
    </section>
  );
}

export function DownloadsPanel({
  className = "",
  compact = false,
}: DownloadsPanelProps) {
  const actionClassName = compact
    ? "mt-6 grid gap-3"
    : "mt-6 grid gap-3 sm:grid-cols-2";

  return (
    <div className={className}>
      <div>
        <SectionHeading {...sections.downloads} />
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-pink-600 via-pink-400 to-transparent dark:from-pink-300 dark:via-pink-200" />
      </div>

      <div className="reveal reveal-delay-1 stagger-list mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {documents.map((item) => (
          <article
            key={item.title}
            className="premium-card card-lift flex min-h-full flex-col overflow-hidden rounded-xl border border-neutral-950/10 bg-white/90 shadow-sm backdrop-blur dark:border-pink-300/25 dark:bg-[#080807]/90"
          >
            <div
              aria-hidden="true"
              className="h-1.5 bg-gradient-to-r from-pink-600 via-pink-500 to-transparent dark:from-pink-300 dark:via-pink-400"
            />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-pink-700/20 bg-pink-50 text-pink-700 shadow-sm shadow-pink-900/5 dark:border-pink-300/25 dark:bg-pink-400/10 dark:text-pink-200">
                  <DocumentIcon />
                </div>
                <span className="rounded-full border border-pink-700/20 bg-pink-50 px-3 py-1 font-mono text-xs font-semibold uppercase text-pink-700 dark:border-pink-300/25 dark:bg-pink-400/10 dark:text-pink-200">
                  {item.fileType}
                </span>
              </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="font-display text-xl font-semibold leading-7 text-neutral-950 dark:text-[#fff4e6]">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 border-l border-pink-700/20 pl-4 text-sm leading-7 text-neutral-600 dark:border-pink-300/20 dark:text-[#d7d0c8]">
                  {item.description}
                </p>

                <div className={actionClassName}>
                  <a
                    href={item.downloadHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Download ${item.title}`}
                    className="inline-flex h-11 min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#fff4e6] px-4 text-sm font-semibold text-neutral-950 shadow-lg shadow-pink-900/10 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:shadow-pink-300/10 dark:focus-visible:ring-pink-400"
                  >
                    <DownloadIcon />
                    Download
                  </a>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Preview ${item.title} in Google Drive`}
                    className="inline-flex h-11 min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-pink-700/20 bg-white/80 px-4 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:border-pink-700/35 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:border-pink-300/20 dark:bg-white/5 dark:text-[#fff4e6] dark:hover:border-pink-300/35 dark:hover:bg-[#21191d] dark:focus-visible:ring-pink-400"
                  >
                    <PreviewIcon />
                    Preview
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function PreviewIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
