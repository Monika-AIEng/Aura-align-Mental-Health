import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/PageShell";
import { STORIES } from "@/data/stories";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Success Stories — AuraAlign" },
      { name: "description", content: "Real recovery journeys from individuals supported by AuraAlign across India." },
      { property: "og:title", content: "Success Stories — AuraAlign" },
      { property: "og:description", content: "Real journeys of healing through AuraAlign's programs." },
    ],
  }),
  component: StoriesIndex,
});

function StoriesIndex() {
  return (
    <PageShell>
      <PageHero eyebrow="Real Journeys" title="Success Stories" subtitle="Every story here belongs to someone who once felt stuck — and chose to ask for help." />
      <Section>
        <div className="grid gap-8 sm:grid-cols-2">
          {STORIES.map((s) => (
            <article key={s.slug} className="rounded-2xl overflow-hidden bg-card shadow-md border border-[var(--aura-grey)] flex flex-col">
              <img src={s.image} alt={s.name} loading="lazy" className="h-72 w-full object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[var(--aura-deep)]">{s.title}</h3>
                <p className="mt-1 font-semibold text-[var(--aura-teal)] text-sm">{s.name} · {s.role}</p>
                <p className="mt-3 text-foreground/80 leading-relaxed">{s.summary}</p>
                <Link to="/stories/$slug" params={{ slug: s.slug }} className="mt-4 inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}