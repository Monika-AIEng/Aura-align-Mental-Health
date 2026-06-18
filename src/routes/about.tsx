import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Users, ShieldCheck, HandHeart, Accessibility } from "lucide-react";
import { PageShell, PageHero, Section, SectionHeading } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AuraAlign Mental Health Initiative" },
      { name: "description", content: "Learn about AuraAlign — our mission, vision, values and the team building a mentally healthier India." },
      { property: "og:title", content: "About Us — AuraAlign" },
      { property: "og:description", content: "Our mission, vision and values for a mentally healthier India." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Who We Are" title="About AuraAlign" subtitle="A national NGO building a mentally healthier India through awareness, education, support and community action." />

      <Section>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/85 leading-relaxed">
          <p>AuraAlign Mental Health Initiative was established to promote mental health awareness, reduce stigma, provide reliable educational resources and connect individuals with support systems across India.</p>
          <p>We work alongside students, women, teachers, IT professionals and the wider public — creating safe spaces for learning, awareness and emotional well-being. Our goal is a society where mental health is understood, respected and supported.</p>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-card rounded-2xl p-8 border border-[var(--aura-grey)] shadow-md">
            <div className="flex items-center gap-3 mb-3"><Target className="h-7 w-7 text-[var(--aura-teal)]" /><h3 className="text-2xl font-bold text-[var(--aura-deep)]">Our Mission</h3></div>
            <p className="text-foreground/80 leading-relaxed">To make mental health support accessible, stigma-free and culturally relevant for every community in India through awareness, education and direct outreach.</p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-[var(--aura-grey)] shadow-md">
            <div className="flex items-center gap-3 mb-3"><Eye className="h-7 w-7 text-[var(--aura-teal)]" /><h3 className="text-2xl font-bold text-[var(--aura-deep)]">Our Vision</h3></div>
            <p className="text-foreground/80 leading-relaxed">An India where every person feels heard, supported and empowered to prioritise their emotional well-being — without shame and without delay.</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading>Our Values</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Heart, t: "Empathy" },
            { icon: Users, t: "Inclusivity" },
            { icon: Accessibility, t: "Accessibility" },
            { icon: ShieldCheck, t: "Integrity" },
            { icon: HandHeart, t: "Community" },
          ].map((v) => (
            <div key={v.t} className="bg-card rounded-2xl p-6 shadow-md border border-[var(--aura-grey)] text-center">
              <div className="mx-auto grid place-items-center h-14 w-14 rounded-xl bg-[var(--aura-deep)] text-[var(--aura-lavender)] mb-4"><v.icon className="h-7 w-7" /></div>
              <h3 className="font-bold text-[var(--aura-deep)]">{v.t}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="rounded-2xl bg-[var(--aura-deep)] text-white p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Want to be part of our work?</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="px-6 py-3 rounded-md bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold hover:bg-white transition">Volunteer</Link>
            <Link to="/donate" className="px-6 py-3 rounded-md bg-white text-[var(--aura-deep)] font-bold hover:bg-[var(--aura-lavender)] transition">Donate</Link>
            <Link to="/contact" className="px-6 py-3 rounded-md border-2 border-white font-bold hover:bg-white hover:text-[var(--aura-deep)] transition">Contact</Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}