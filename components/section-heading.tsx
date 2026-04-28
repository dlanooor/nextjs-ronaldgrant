type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="reveal max-w-3xl">
      <p
        className={`font-mono text-xs font-semibold uppercase ${
          isDark ? "text-pink-300" : "text-pink-700 dark:text-pink-300"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 max-w-3xl font-display text-2xl font-semibold leading-tight sm:text-4xl ${
          isDark ? "text-white" : "text-neutral-950 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${
            isDark ? "text-white/75" : "text-neutral-600 dark:text-neutral-300"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
