import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AuraAlign Mental Health Initiative" },
      { name: "description", content: "Get in touch with AuraAlign for partnerships, support requests or general queries." },
      { property: "og:title", content: "Contact AuraAlign" },
      { property: "og:description", content: "Reach out for partnerships, support requests or general queries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };
  return (
    <PageShell>
      <PageHero eyebrow="We're Here for You" title="Contact AuraAlign" subtitle="Reach out for partnerships, support requests, or simply to say hello." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Info icon={Mail} label="Email" value="auraaligninitiative@gmail.com" href="mailto:auraaligninitiative@gmail.com" />
            <Info icon={Phone} label="Phone" value="+91 98765 43210" href="tel:+919876543210" />
            <Info icon={MapPin} label="Address" value={"AuraAlign Mental Health Initiative\nNo. 123, Harmony Avenue\nChennai, Tamil Nadu, India"} />
            <div className="rounded-2xl overflow-hidden border border-[var(--aura-grey)] shadow-md">
              <iframe
                title="AuraAlign location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.20%2C13.04%2C80.30%2C13.10&layer=mapnik"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 sm:p-8 shadow-md border border-[var(--aura-grey)] space-y-4 h-fit">
            {["Name", "Email", "Subject"].map((f) => (
              <div key={f}>
                <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">{f}</label>
                <input type={f === "Email" ? "email" : "text"} required className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">Message</label>
              <textarea required rows={5} className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
              <Send className="h-5 w-5" /> Send Message
            </button>
            {sent && (
              <p className="flex items-center justify-center gap-2 text-[var(--aura-teal)] font-semibold"><CheckCircle2 className="h-5 w-5" /> Thank you — your message has been received.</p>
            )}
          </form>
        </div>
      </Section>
    </PageShell>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="grid place-items-center h-12 w-12 rounded-xl bg-[var(--aura-deep)] text-[var(--aura-lavender)] shrink-0"><Icon className="h-5 w-5"/></span>
      <div className="min-w-0">
        <p className="text-sm uppercase tracking-widest text-[var(--aura-teal)] font-semibold">{label}</p>
        <p className="text-lg text-foreground/90 whitespace-pre-line break-words">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition">{inner}</a> : inner;
}