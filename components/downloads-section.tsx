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
      className="border-b border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-neutral-900"
    >
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
      <SectionHeading {...sections.downloads} />

      <div className="reveal reveal-delay-1 stagger-list mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {documents.map((item) => (
          <article
            key={item.title}
            className="premium-card card-lift flex min-h-full flex-col rounded-xl border border-neutral-950/10 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-neutral-950"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-pink-50 text-pink-700 shadow-sm shadow-pink-900/5 dark:bg-pink-400/10 dark:text-pink-200">
                <DocumentIcon />
              </div>
              <span className="rounded-full border border-neutral-950/10 bg-neutral-100 px-3 py-1 font-mono text-xs font-semibold uppercase text-neutral-600 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300">
                {item.fileType}
              </span>
            </div>

            <div className="mt-6 flex flex-1 flex-col">
              <h3 className="font-display text-xl font-semibold leading-7 text-neutral-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>

              <div className={actionClassName}>
                <a
                  href={item.downloadHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Download ${item.title}`}
                  className="inline-flex h-11 min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-neutral-950 px-4 text-sm font-semibold text-white shadow-lg shadow-neutral-950/15 transition hover:-translate-y-0.5 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:bg-white dark:text-neutral-950 dark:shadow-white/10 dark:hover:bg-neutral-200 dark:focus-visible:ring-pink-400"
                >
                  <DownloadIcon />
                  Download
                </a>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Preview ${item.title} in Google Drive`}
                  className="inline-flex h-11 min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-neutral-950/15 bg-white px-4 text-sm font-semibold text-neutral-950 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-950/30 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:border-white/15 dark:bg-neutral-900 dark:text-white dark:hover:border-white/30 dark:hover:bg-neutral-800 dark:focus-visible:ring-pink-400"
                >
                  <PreviewIcon />
                  Preview
                </a>
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
