import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, PhoneCall, Brain, Activity, Smile, Leaf, Compass } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/PageShell";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Support — AuraAlign" },
      { name: "description", content: "If you or someone you know is in distress, reach trusted helplines and support immediately." },
      { property: "og:title", content: "Emergency Support — AuraAlign" },
      { property: "og:description", content: "Helplines and quick-support resources for mental health crises in India." },
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="You Are Not Alone" title="Emergency Support" subtitle="If you or someone you love is in distress, please reach out. Help is available 24×7." />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {[
            { label: "National Emergency", number: "112" },
            { label: "Tele-MANAS", number: "14416" },
            { label: "iCall (TISS)", number: "9152987821" },
            { label: "Vandrevala Foundation", number: "18602662345" },
          ].map((e) => (
            <a key={e.number} href={`tel:${e.number}`} className="rounded-2xl bg-[var(--aura-deep)] text-white p-7 shadow-xl hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 text-[var(--aura-lavender)]">
                <AlertTriangle className="h-5 w-5" />
                <span className="uppercase tracking-widest text-xs">{e.label}</span>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <PhoneCall className="h-7 w-7 text-[var(--aura-teal)]" />
                <span className="text-3xl sm:text-4xl font-bold">{e.number}</span>
              </div>
            </a>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <h2 className="text-3xl font-bold text-[var(--aura-deep)] text-center">Quick Support</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Brain, t: "Anxiety Help" },
            { icon: Activity, t: "Depression Support" },
            { icon: Smile, t: "Emotional Distress" },
            { icon: Leaf, t: "Burnout Management" },
            { icon: Compass, t: "Crisis Information" },
          ].map((q) => (
            <div key={q.t} className="bg-card rounded-xl p-5 border border-[var(--aura-grey)] text-center shadow hover:border-[var(--aura-teal)] transition">
              <q.icon className="mx-auto h-8 w-8 text-[var(--aura-teal)]" />
              <p className="mt-3 font-semibold text-[var(--aura-deep)]">{q.t}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-foreground/70 max-w-2xl mx-auto">
          If life is in immediate danger, call <a href="tel:112" className="font-bold text-[var(--aura-deep)] underline">112</a> right away.
        </p>
      </Section>
    </PageShell>
  );
}