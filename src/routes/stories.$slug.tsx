import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { PageShell, Section } from "@/components/PageShell";
import { STORY_BY_SLUG, type Story } from "@/data/stories";

export const Route = createFileRoute("/stories/$slug")({
  head: ({ params }) => {
    const s = params ? STORY_BY_SLUG[params.slug] : undefined;
    const title = s ? `${s.name} — ${s.title} | AuraAlign` : "Story | AuraAlign";
    const description = s?.summary ?? "An AuraAlign success story.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(s ? [{ property: "og:image", content: s.image }, { name: "twitter:image", content: s.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const story = STORY_BY_SLUG[params.slug];
    if (!story) throw notFound();
    return { story };
  },
  component: StoryPage,
  notFoundComponent: () => (
    <PageShell>
      <Section>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[var(--aura-deep)]">Story not found</h1>
          <Link to="/stories" className="mt-6 inline-flex items-center gap-2 text-[var(--aura-teal)] font-bold">
            <ArrowLeft className="h-4 w-4" /> Back to Success Stories
          </Link>
        </div>
      </Section>
    </PageShell>
  ),
});

function StoryPage() {
  const { story } = Route.useLoaderData() as { story: Story };
  return (
    <PageShell>
      <section className="bg-[var(--aura-deep)] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 grid lg:grid-cols-[1fr_320px] gap-10 items-center">
          <div>
            <Link to="/stories" className="inline-flex items-center gap-2 text-[var(--aura-lavender)] hover:text-white mb-5">
              <ArrowLeft className="h-4 w-4" /> Back to Success Stories
            </Link>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--aura-lavender)]">AuraAlign Story</p>
            <h1 className="mt-2 text-3xl sm:text-5xl font-bold leading-tight">{story.title}</h1>
            <p className="mt-4 text-lg text-white/85"><span className="font-bold text-[var(--aura-teal)]">{story.name}</span> · {story.role}</p>
            <p className="mt-4 text-white/85 italic leading-relaxed max-w-2xl">"{story.summary}"</p>
          </div>
          <img src={story.image} alt={story.name} className="rounded-2xl shadow-2xl w-full h-72 lg:h-80 object-cover" />
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <article className="space-y-8">
            {story.body.map((b) => (
              <div key={b.heading}>
                <h2 className="text-2xl font-bold text-[var(--aura-deep)]">{b.heading}</h2>
                <p className="mt-3 text-lg text-foreground/85 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </article>
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <div className="bg-card rounded-2xl p-6 border border-[var(--aura-grey)] shadow-md">
              <h3 className="text-lg font-bold text-[var(--aura-deep)] mb-4">Story Timeline</h3>
              <ol className="space-y-4">
                {story.timeline.map((t, i) => (
                  <li key={t.phase} className="flex gap-3">
                    <span className="grid place-items-center h-8 w-8 shrink-0 rounded-full bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold text-sm">{i + 1}</span>
                    <div>
                      <p className="font-bold text-[var(--aura-deep)]">{t.phase}</p>
                      <p className="text-sm text-foreground/75">{t.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-[var(--aura-lavender)]/30 rounded-2xl p-6 border border-[var(--aura-grey)]">
              <div className="flex items-center gap-2 text-[var(--aura-deep)] font-bold mb-3"><Lightbulb className="h-5 w-5" /> Key Lessons</div>
              <ul className="space-y-2">
                {story.lessons.map((l) => (
                  <li key={l} className="flex items-start gap-2 text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--aura-deep)] shrink-0" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <div className="text-center">
          <Link to="/stories" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
            <ArrowLeft className="h-4 w-4" /> Back to Success Stories
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}