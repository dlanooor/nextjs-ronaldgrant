import { Container } from "@/components/container";
import { footer, profile } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-950/10 bg-white py-10 dark:border-white/10 dark:bg-neutral-950">
      <Container className="flex flex-col gap-3 text-center text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:text-left dark:text-neutral-400">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p>{footer.note}</p>
      </Container>
    </footer>
  );
}
