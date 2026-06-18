import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Megaphone, Calendar, PenTool, Share2, HandHeart, CheckCircle2 } from "lucide-react";
import vol from "@/assets/vol.jpg.asset.json";
import { PageShell, PageHero, Section } from "@/components/PageShell";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer with AuraAlign" },
      { name: "description", content: "Join AuraAlign as a volunteer and help bring mental health awareness to communities across India." },
      { property: "og:title", content: "Volunteer with AuraAlign" },
      { property: "og:description", content: "Join our movement for a mentally healthier India." },
    ],
  }),
  component: VolunteerPage,
});

const ROLES = [
  { icon: Megaphone, t: "Awareness Ambassador" },
  { icon: Calendar, t: "Event Volunteer" },
  { icon: PenTool, t: "Content Creator" },
  { icon: Share2, t: "Social Media Volunteer" },
  { icon: HandHeart, t: "Community Outreach Volunteer" },
];

function VolunteerPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };
  return (
    <PageShell>
      <PageHero eyebrow="Join the Movement" title="Volunteer with AuraAlign" subtitle="Every role you take brings hope, awareness and healing to someone who needs it." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <img src={vol.url} alt="AuraAlign volunteers working together" loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
          <div>
            <h2 className="text-2xl font-bold text-[var(--aura-deep)] mb-4">Volunteer Roles</h2>
            <ul className="space-y-3">
              {ROLES.map((r) => (
                <li key={r.t} className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm border border-[var(--aura-grey)]">
                  <span className="grid place-items-center h-11 w-11 rounded-lg bg-[var(--aura-lavender)] text-[var(--aura-deep)]"><r.icon className="h-5 w-5"/></span>
                  <span className="font-semibold text-[var(--aura-deep)]">{r.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="muted">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--aura-deep)] text-center">Volunteer Registration</h2>
          <form onSubmit={onSubmit} className="mt-8 bg-card rounded-2xl p-6 sm:p-8 shadow-md border border-[var(--aura-grey)] space-y-4">
            {[
              { l: "Full Name", t: "text" },
              { l: "Email", t: "email" },
              { l: "Phone", t: "tel" },
              { l: "City", t: "text" },
            ].map((f) => (
              <div key={f.l}>
                <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">{f.l}</label>
                <input type={f.t} required className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">Preferred Role</label>
              <select required className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30">
                <option value="">Select a role…</option>
                {ROLES.map((r) => <option key={r.t}>{r.t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">Why do you want to volunteer?</label>
              <textarea required rows={4} className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30" />
            </div>
            <button type="submit" className="w-full px-6 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">Submit Application</button>
            {sent && (
              <p className="flex items-center justify-center gap-2 text-[var(--aura-teal)] font-semibold"><CheckCircle2 className="h-5 w-5" /> Thank you — we'll be in touch within 3 working days.</p>
            )}
          </form>
        </div>
      </Section>
    </PageShell>
  );
}