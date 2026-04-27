import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { profile, sections } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32 dark:bg-neutral-950">
      <Container>
        <div className="premium-card reveal overflow-hidden rounded-2xl border border-neutral-950/10 bg-neutral-950 p-7 text-white sm:p-12 dark:border-white/10 dark:bg-neutral-900">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <SectionHeading
                eyebrow={sections.contact.eyebrow}
                title={sections.contact.title}
                description={sections.contact.description}
                tone="dark"
              />
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-neutral-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 dark:hover:bg-neutral-200"
              >
                {profile.email}
              </a>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                  >
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
