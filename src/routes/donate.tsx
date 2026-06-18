import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Heart } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/PageShell";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — AuraAlign Mental Health Initiative" },
      { name: "description", content: "Support mental health awareness in India. Every donation funds workshops, counselling and outreach." },
      { property: "og:title", content: "Donate to AuraAlign" },
      { property: "og:description", content: "Fund mental health awareness and support across India." },
    ],
  }),
  component: DonatePage,
});

const TIERS = [
  { amt: 500, t: "Awareness Materials", d: "Printed guides and posters distributed to schools and communities." },
  { amt: 1000, t: "Community Outreach", d: "Powers a community outreach session in an underserved area." },
  { amt: 2500, t: "Counselling Support", d: "Sponsors counselling sessions for an individual in need." },
  { amt: 5000, t: "Program Sponsorship", d: "Sponsors a full awareness program at a school or workplace." },
];

function DonatePage() {
  const [amount, setAmount] = useState<number | "">(1000);
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };
  return (
    <PageShell>
      <PageHero eyebrow="Support the Mission" title="Make a Donation" subtitle="Your contribution directly funds awareness programs, counselling support and community outreach across India." />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((d) => (
            <button key={d.amt} onClick={() => setAmount(d.amt)} className={`text-left rounded-2xl border p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition ${amount === d.amt ? "border-[var(--aura-teal)] bg-card ring-2 ring-[var(--aura-teal)]" : "border-[var(--aura-grey)] bg-card"}`}>
              <div className="text-4xl font-bold text-[var(--aura-teal)]">₹{d.amt}</div>
              <h3 className="mt-3 text-lg font-bold text-[var(--aura-deep)]">{d.t}</h3>
              <p className="mt-2 text-sm text-foreground/75">{d.d}</p>
            </button>
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--aura-deep)] text-center">Donate Securely</h2>
          <form onSubmit={onSubmit} className="mt-8 bg-card rounded-2xl p-6 sm:p-8 shadow-md border border-[var(--aura-grey)] space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">Donation Amount (₹)</label>
              <input type="number" min={100} required value={amount} onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))} className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30" />
            </div>
            {[
              { l: "Full Name", t: "text" },
              { l: "Email", t: "email" },
              { l: "Phone (optional)", t: "tel", req: false },
            ].map((f) => (
              <div key={f.l}>
                <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">{f.l}</label>
                <input type={f.t} required={f.req !== false} className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30" />
              </div>
            ))}
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
              <Heart className="h-5 w-5" /> Donate ₹{amount || 0}
            </button>
            {sent && (
              <p className="flex items-center justify-center gap-2 text-[var(--aura-teal)] font-semibold text-center"><CheckCircle2 className="h-5 w-5" /> Thank you! Our team will email you a payment link and receipt shortly.</p>
            )}
            <p className="text-xs text-foreground/60 text-center">All donations are eligible for 80G tax exemption (where applicable).</p>
          </form>
        </div>
      </Section>
    </PageShell>
  );
}