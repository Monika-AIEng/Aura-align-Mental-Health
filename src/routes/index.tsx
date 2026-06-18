import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart, Users, Accessibility, ShieldCheck, HandHeart,
  PhoneCall, AlertTriangle, ArrowRight,
} from "lucide-react";
import hero from "@/assets/hero.jpg.asset.json";
import progStudents from "@/assets/prog-students.jpg.asset.json";
import progCounseling from "@/assets/prog-counseling.jpg.asset.json";
import progWorkshop from "@/assets/prog-workshop.jpg.asset.json";
import progTeacher from "@/assets/prog-teacher.jpg.asset.json";
import { Section, SectionHeading } from "@/components/PageShell";
import { STORIES } from "@/data/stories";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AuraAlign Mental Health Initiative — Help, Hope, Healing" },
      { name: "description", content: "AuraAlign is an NGO working to build a mentally healthier India through awareness, education, support and community action." },
      { property: "og:title", content: "AuraAlign Mental Health Initiative" },
      { property: "og:description", content: "Your mental health matters. Join our movement of help, hope and healing." },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: Index,
});

const PROGRAMS = [
  { img: progStudents.url, t: "Student Mental Wellness", d: "Workshops, peer circles and counselling for students facing exam stress, anxiety and career pressure." },
  { img: progCounseling.url, t: "Women's Emotional Health", d: "Safe spaces for women to access compassionate support, healing and empowerment communities." },
  { img: progWorkshop.url, t: "Workplace Mental Health", d: "Training and awareness helping organisations build psychologically safer workplaces." },
  { img: progTeacher.url, t: "Teacher Wellness Program", d: "Equipping educators with practical tools to manage classroom stress and prevent burnout." },
];

function Index() {
  return (
    <div className="-mt-0">
      {/* HERO */}
      <section className="relative min-h-[88svh] flex items-center justify-center pt-16">
        <img src={hero.url} alt="People supporting each other in a warm embrace" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--aura-deep)]/85 via-[var(--aura-deep)]/70 to-[var(--aura-deep)]/85" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-white">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[var(--aura-lavender)] mb-5">AuraAlign Mental Health Initiative</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Your Mental Health Matters.<br/>
            <span className="text-[var(--aura-lavender)]">Help, Hope, and Healing</span> for Everyone.
          </h1>
          <p className="mt-7 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A national NGO building a mentally healthier India through awareness,
            education, support, and community action.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/emergency" className="px-7 py-4 rounded-md bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold text-lg hover:bg-white transition shadow-xl">
              Get Help Now
            </Link>
            <Link to="/volunteer" className="px-7 py-4 rounded-md bg-white text-[var(--aura-deep)] font-bold text-lg hover:bg-[var(--aura-lavender)] transition shadow-xl">
              Become a Volunteer
            </Link>
            <Link to="/donate" className="px-7 py-4 rounded-md border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-[var(--aura-deep)] transition">
              Donate Today
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <Section>
        <SectionHeading>Who We Are</SectionHeading>
        <p className="mt-8 text-lg sm:text-xl leading-relaxed text-foreground/85 max-w-4xl mx-auto text-center">
          AuraAlign Mental Health Initiative was established to promote mental health
          awareness, reduce stigma, provide reliable educational resources and connect
          individuals with support systems across India.
        </p>
        <div className="mt-8 text-center">
          <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* VALUES */}
      <Section tone="muted">
        <SectionHeading>Our Values</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Heart, t: "Empathy", d: "Listening deeply, responding with compassion." },
            { icon: Users, t: "Inclusivity", d: "Welcoming every voice and lived experience." },
            { icon: Accessibility, t: "Accessibility", d: "Mental health support within everyone's reach." },
            { icon: ShieldCheck, t: "Integrity", d: "Honest, transparent and ethical care." },
            { icon: HandHeart, t: "Community", d: "Stronger communities through sustained action." },
          ].map((v) => (
            <div key={v.t} className="bg-card rounded-2xl p-6 shadow-md border border-[var(--aura-grey)] hover:shadow-xl hover:-translate-y-1 transition">
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-[var(--aura-deep)] text-[var(--aura-lavender)] mb-4">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--aura-deep)]">{v.t}</h3>
              <p className="mt-2 text-foreground/75 leading-relaxed text-sm">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROGRAMS PREVIEW */}
      <Section>
        <SectionHeading>Our Programs</SectionHeading>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {PROGRAMS.map((c) => (
            <article key={c.t} className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition border border-[var(--aura-grey)]">
              <img src={c.img} alt={c.t} loading="lazy" width={1280} height={832} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--aura-deep)]">{c.t}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{c.d}</p>
                <Link to="/programs" className="mt-4 inline-flex items-center gap-2 font-bold text-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EMERGENCY STRIP */}
      <Section tone="muted">
        <SectionHeading>Emergency Support</SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {[
            { label: "National Emergency", number: "112" },
            { label: "Tele-MANAS", number: "14416" },
          ].map((e) => (
            <a key={e.number} href={`tel:${e.number}`} className="rounded-2xl bg-[var(--aura-deep)] text-white p-8 shadow-xl hover:scale-[1.02] transition">
              <div className="flex items-center gap-3 text-[var(--aura-lavender)]">
                <AlertTriangle className="h-6 w-6" />
                <span className="uppercase tracking-widest text-sm">{e.label}</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <PhoneCall className="h-8 w-8 text-[var(--aura-teal)]" />
                <span className="text-4xl sm:text-5xl font-bold">{e.number}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/emergency" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
            More Emergency Resources <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* IMPACT */}
      <Section>
        <SectionHeading>Our Impact</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { n: "25,000+", l: "Beneficiaries Reached" },
            { n: "500+", l: "Volunteers" },
            { n: "40,000+", l: "Volunteer Hours" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-[var(--aura-deep)] text-white p-8 sm:p-10 text-center shadow-xl">
              <div className="text-4xl sm:text-5xl font-bold">{s.n}</div>
              <div className="mt-3 text-base sm:text-lg text-[var(--aura-lavender)] uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* STORIES PREVIEW */}
      <Section tone="muted">
        <SectionHeading>Success Stories</SectionHeading>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {STORIES.map((s) => (
            <article key={s.slug} className="rounded-2xl overflow-hidden bg-card shadow-md border border-[var(--aura-grey)] flex flex-col sm:flex-row">
              <img src={s.image} alt={s.name} loading="lazy" className="h-56 sm:h-auto sm:w-44 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[var(--aura-deep)]">{s.title}</h3>
                <p className="mt-2 font-semibold text-[var(--aura-teal)] text-sm">{s.name} · {s.role}</p>
                <p className="mt-3 text-foreground/80 leading-relaxed">{s.summary}</p>
                <Link
                  to="/stories/$slug"
                  params={{ slug: s.slug }}
                  className="mt-4 inline-flex items-center gap-2 self-start font-bold text-[var(--aura-deep)] hover:text-[var(--aura-teal)] transition"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="rounded-3xl bg-[var(--aura-deep)] text-white p-10 sm:p-14 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Join Us?</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">Volunteer your skills, donate to expand our reach, or partner with us to bring mental health awareness to your community.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/volunteer" className="px-7 py-3 rounded-md bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold hover:bg-white transition">Join as Volunteer</Link>
            <Link to="/donate" className="px-7 py-3 rounded-md bg-white text-[var(--aura-deep)] font-bold hover:bg-[var(--aura-lavender)] transition">Donate Now</Link>
            <Link to="/contact" className="px-7 py-3 rounded-md border-2 border-white text-white font-bold hover:bg-white hover:text-[var(--aura-deep)] transition">Contact Us</Link>
          </div>
        </div>
      </Section>
    </div>
  );
}