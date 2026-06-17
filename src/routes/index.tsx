import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Menu, X, Heart, Users, Accessibility, ShieldCheck, HandHeart,
  GraduationCap, Sparkles, Briefcase, BookOpen, Phone, Mail, MapPin,
  PhoneCall, AlertTriangle, Brain, Activity, Smile, Leaf, Send,
  Megaphone, Calendar, PenTool, Share2, Compass,
} from "lucide-react";
import hero from "@/assets/hero.jpg.asset.json";
import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";
import p3 from "@/assets/p3.jpg.asset.json";
import p4 from "@/assets/p4.jpg.asset.json";
import vol from "@/assets/vol.jpg.asset.json";

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

const NAV = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Values", id: "values" },
  { label: "Mental Health Resources", id: "resources" },
  { label: "Get Help", id: "emergency" },
  { label: "Awareness Programs", id: "programs" },
  { label: "Volunteer", id: "volunteer" },
  { label: "Donate", id: "donate" },
  { label: "Impact", id: "impact" },
  { label: "Success Stories", id: "stories" },
  { label: "Contact", id: "contact" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[var(--aura-deep)]/95 backdrop-blur-md text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <button onClick={() => go("home")} className="flex items-center gap-2 text-left">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold">A</span>
            <span className="text-lg sm:text-xl font-bold tracking-wide truncate">AuraAlign</span>
          </button>
          <button
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            className="grid place-items-center h-11 w-11 rounded-md hover:bg-white/10 transition"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      {/* MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
        <aside
          className={`absolute top-0 right-0 h-full w-full sm:w-[420px] bg-[var(--aura-deep)] text-white shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
            <span className="text-xl font-bold">Menu</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid place-items-center h-11 w-11 rounded-md hover:bg-white/10">
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="px-4 py-6 overflow-y-auto h-[calc(100%-4rem)]">
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className="w-full text-left px-4 py-3 rounded-md text-lg hover:bg-[var(--aura-teal)]/20 hover:text-[var(--aura-lavender)] transition"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-16">
        <img src={hero.url} alt="People supporting each other in a warm embrace" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--aura-deep)]/80 via-[var(--aura-deep)]/70 to-[var(--aura-deep)]/85" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center text-white">
          <p className="text-sm sm:text-base tracking-[0.3em] uppercase text-[var(--aura-lavender)] mb-6">AuraAlign Mental Health Initiative</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
            Your Mental Health Matters.<br/>
            <span className="text-[var(--aura-lavender)]">Help, Hope, and Healing</span> for Everyone.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            AuraAlign Mental Health Initiative is committed to creating a mentally healthier India
            through awareness, education, support, and community action.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => go("emergency")} className="px-7 py-4 rounded-md bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold text-lg hover:bg-white transition shadow-xl">
              Get Help Now
            </button>
            <button onClick={() => go("volunteer")} className="px-7 py-4 rounded-md bg-white text-[var(--aura-deep)] font-bold text-lg hover:bg-[var(--aura-lavender)] transition shadow-xl">
              Become a Volunteer
            </button>
            <button onClick={() => go("donate")} className="px-7 py-4 rounded-md border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-[var(--aura-deep)] transition">
              Donate Today
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="Who We Are">
        <SectionHeading>ABOUT US</SectionHeading>
        <p className="mt-8 text-lg sm:text-xl leading-relaxed text-foreground/85 max-w-4xl mx-auto text-center">
          AuraAlign Mental Health Initiative was established to promote mental health awareness,
          reduce stigma, provide reliable educational resources, and connect individuals with
          support systems. We work to support students, women, teachers, IT professionals, and the
          general public by creating safe spaces for learning, awareness, and emotional well-being.
          Our goal is to build a society where mental health is understood, respected, and supported.
        </p>
      </Section>

      {/* VALUES */}
      <Section id="values" tone="muted">
        <SectionHeading>OUR VALUES</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Heart, t: "Empathy", d: "Listening deeply and responding with compassion in every interaction." },
            { icon: Users, t: "Inclusivity", d: "Welcoming every voice, identity, background and lived experience." },
            { icon: Accessibility, t: "Accessibility", d: "Making mental health support reachable for all communities." },
            { icon: ShieldCheck, t: "Integrity", d: "Acting with honesty, transparency and unwavering ethical care." },
            { icon: HandHeart, t: "Community Impact", d: "Building stronger communities through sustained, meaningful action." },
          ].map((v) => (
            <div key={v.t} className="bg-card rounded-2xl p-6 shadow-md border border-[var(--aura-grey)] hover:shadow-xl hover:-translate-y-1 transition">
              <div className="grid place-items-center h-14 w-14 rounded-xl bg-[var(--aura-deep)] text-[var(--aura-lavender)] mb-4">
                <v.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[var(--aura-deep)]">{v.t}</h3>
              <p className="mt-2 text-foreground/75 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section id="programs">
        <SectionHeading>OUR PROGRAMS</SectionHeading>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {[
            { img: p1.url, t: "Student Mental Wellness", d: "Programs supporting students with exam stress, anxiety and career pressure through workshops and peer circles." },
            { img: p2.url, t: "Women's Emotional Health", d: "Safe spaces for women to access emotional support, healing and empowerment communities." },
            { img: p3.url, t: "Workplace Mental Health", d: "Helping organisations create healthier workplaces through training, awareness and supportive policies." },
            { img: p4.url, t: "Teacher Wellness Program", d: "Equipping educators with tools to manage classroom stress and prevent burnout." },
          ].map((c) => (
            <article key={c.t} className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition border border-[var(--aura-grey)]">
              <img src={c.img} alt={c.t} loading="lazy" className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--aura-deep)]">{c.t}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* RESOURCES */}
      <Section id="resources" tone="muted">
        <SectionHeading>MENTAL HEALTH RESOURCES</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: GraduationCap, t: "Students", items: ["Exam Stress", "Social Anxiety", "Career Pressure", "Digital Addiction"] },
            { icon: Sparkles, t: "Women", items: ["Emotional Well-being", "Trauma Recovery", "Work-Life Balance", "Self-Care"] },
            { icon: BookOpen, t: "Teachers", items: ["Classroom Stress Management", "Student Mental Health Awareness", "Burnout Prevention"] },
            { icon: Briefcase, t: "IT Professionals", items: ["Workplace Burnout", "Remote Work Isolation", "Productivity Stress", "Work-Life Balance"] },
            { icon: Users, t: "General Public", items: ["Understanding Depression", "Anxiety Management", "Healthy Coping Mechanisms", "Mental Wellness Practices"] },
          ].map((g) => (
            <div key={g.t} className="bg-card rounded-2xl p-6 shadow-md border border-[var(--aura-grey)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-[var(--aura-teal)] text-[var(--aura-deep)]"><g.icon className="h-6 w-6"/></span>
                <h3 className="text-2xl font-bold text-[var(--aura-deep)]">{g.t}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/85">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--aura-lavender)] shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* EMERGENCY */}
      <Section id="emergency">
        <SectionHeading>EMERGENCY SUPPORT</SectionHeading>
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

        <h3 className="text-3xl sm:text-4xl font-bold text-center mt-20 text-[var(--aura-deep)]">QUICK SUPPORT</h3>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Brain, t: "Anxiety Help" },
            { icon: Activity, t: "Depression Support" },
            { icon: Smile, t: "Emotional Distress Guidance" },
            { icon: Leaf, t: "Burnout Management" },
            { icon: Compass, t: "Crisis Support Information" },
          ].map((q) => (
            <div key={q.t} className="bg-card rounded-xl p-5 border border-[var(--aura-grey)] text-center shadow hover:border-[var(--aura-teal)] transition">
              <q.icon className="mx-auto h-8 w-8 text-[var(--aura-teal)]" />
              <p className="mt-3 font-semibold text-[var(--aura-deep)]">{q.t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* VOLUNTEER */}
      <Section id="volunteer" tone="muted">
        <SectionHeading>VOLUNTEER WITH US</SectionHeading>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
          <img src={vol.url} alt="Volunteers working together" loading="lazy" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
          <div>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Join a growing community of changemakers. Every role brings hope, awareness and healing to those who need it most.
            </p>
            <ul className="space-y-3">
              {[
                { icon: Megaphone, t: "Awareness Ambassador" },
                { icon: Calendar, t: "Event Volunteer" },
                { icon: PenTool, t: "Content Creator" },
                { icon: Share2, t: "Social Media Volunteer" },
                { icon: HandHeart, t: "Community Outreach Volunteer" },
              ].map((r) => (
                <li key={r.t} className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm border border-[var(--aura-grey)]">
                  <span className="grid place-items-center h-11 w-11 rounded-lg bg-[var(--aura-lavender)] text-[var(--aura-deep)]"><r.icon className="h-5 w-5"/></span>
                  <span className="font-semibold text-[var(--aura-deep)]">{r.t}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => go("contact")} className="mt-8 px-7 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition shadow-lg">
              Apply to Volunteer
            </button>
          </div>
        </div>
      </Section>

      {/* IMPACT */}
      <Section id="impact">
        <SectionHeading>OUR IMPACT</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { n: "25,000+", l: "Beneficiaries Reached" },
            { n: "500+", l: "Volunteers" },
            { n: "40,000+", l: "Volunteer Hours" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-[var(--aura-deep)] text-white p-8 sm:p-10 text-center shadow-xl">
              <div className="text-4xl sm:text-5xl font-bold text-white">{s.n}</div>
              <div className="mt-3 text-lg sm:text-xl text-[var(--aura-lavender)] uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* DONATE */}
      <Section id="donate" tone="muted">
        <SectionHeading>DONATION IMPACT</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { amt: "₹500", t: "Awareness Materials", d: "Printed guides and posters distributed to schools and communities." },
            { amt: "₹1000", t: "Community Outreach Support", d: "Powers a community outreach session in underserved areas." },
            { amt: "₹5000", t: "Awareness Program Sponsorship", d: "Sponsors a full awareness program for a school or workplace." },
          ].map((d) => (
            <div key={d.amt} className="rounded-2xl bg-card border border-[var(--aura-grey)] p-8 shadow-md hover:shadow-2xl hover:-translate-y-1 transition text-center">
              <div className="text-5xl font-bold text-[var(--aura-teal)]">{d.amt}</div>
              <h3 className="mt-4 text-xl font-bold text-[var(--aura-deep)]">{d.t}</h3>
              <p className="mt-2 text-foreground/75">{d.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <button onClick={() => go("volunteer")} className="px-10 py-5 rounded-full bg-[var(--aura-deep)] text-white text-xl font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition shadow-2xl tracking-wider">
            READY TO JOIN US
          </button>
        </div>
      </Section>

      {/* STORIES */}
      <Section id="stories">
        <SectionHeading>SUCCESS STORIES</SectionHeading>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {[
            { img: p1.url, t: "Student Recovery Journey", q: "AuraAlign helped me move from exam panic to calm focus. I finally felt understood.", a: "— Priya, College Student" },
            { img: p3.url, t: "Workplace Burnout Recovery", q: "I learnt to set boundaries and rebuild balance. My team noticed the change.", a: "— Rahul, IT Professional" },
            { img: p4.url, t: "Teacher Wellness Journey", q: "The wellness program gave me tools to support both my students and myself.", a: "— Mrs. Anitha, Teacher" },
            { img: p2.url, t: "Community Awareness Success", q: "Our neighbourhood now talks about mental health openly, without shame.", a: "— Outreach Group, Chennai" },
          ].map((s) => (
            <article key={s.t} className="rounded-2xl overflow-hidden bg-card shadow-md border border-[var(--aura-grey)] flex flex-col sm:flex-row">
              <img src={s.img} alt={s.t} loading="lazy" className="h-56 sm:h-auto sm:w-48 object-cover" />
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-[var(--aura-deep)]">{s.t}</h3>
                <p className="mt-3 italic text-foreground/80 leading-relaxed">“{s.q}”</p>
                <p className="mt-3 font-semibold text-[var(--aura-teal)]">{s.a}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" tone="muted">
        <SectionHeading>CONTACT US</SectionHeading>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <InfoRow icon={Mail} label="Email" value="auraaligninitiative@gmail.com" href="mailto:auraaligninitiative@gmail.com" />
            <InfoRow icon={Phone} label="Phone" value="+91 9876543210" href="tel:+919876543210" />
            <InfoRow icon={MapPin} label="Address" value={"AuraAlign Mental Health Initiative\nNo. 123, Harmony Avenue\nChennai, Tamil Nadu, India"} />
            <div className="rounded-2xl overflow-hidden border border-[var(--aura-grey)] shadow-md">
              <iframe
                title="AuraAlign location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.20%2C13.04%2C80.30%2C13.10&layer=mapnik"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-card rounded-2xl p-6 sm:p-8 shadow-md border border-[var(--aura-grey)] space-y-4">
            {["Name","Email","Subject"].map((f) => (
              <div key={f}>
                <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">{f}</label>
                <input
                  type={f === "Email" ? "email" : "text"}
                  required
                  className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-[var(--aura-deep)] mb-1">Message</label>
              <textarea required rows={5} className="w-full rounded-md border border-[var(--aura-grey)] bg-background px-4 py-3 outline-none focus:border-[var(--aura-teal)] focus:ring-2 focus:ring-[var(--aura-teal)]/30" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
              <Send className="h-5 w-5" /> Send Message
            </button>
            {sent && <p className="text-center text-[var(--aura-teal)] font-semibold">Thank you — your message has been received.</p>}
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-[var(--aura-deep)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold">A</span>
              <span className="text-xl font-bold">AuraAlign Mental Health Initiative</span>
            </div>
            <p className="italic text-[var(--aura-lavender)]">"Creating hope, spreading awareness, and building stronger communities through mental wellness support."</p>
            <p className="mt-4 text-white/80 leading-relaxed">Together we can create a future where every individual feels heard, supported, and empowered to prioritize mental well-being.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--aura-lavender)]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { l: "Home", id: "home" },
                { l: "About Us", id: "about" },
                { l: "Resources", id: "resources" },
                { l: "Volunteer", id: "volunteer" },
                { l: "Donate", id: "donate" },
                { l: "Contact", id: "contact" },
              ].map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="hover:text-[var(--aura-teal)] transition">{l.l}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-[var(--aura-lavender)]">Newsletter</h4>
            <p className="text-white/80 mb-3">Subscribe for awareness updates and program announcements.</p>
            <form onSubmit={(e) => { e.preventDefault(); (e.target as HTMLFormElement).reset(); }} className="flex gap-2">
              <input type="email" required placeholder="Your email" className="flex-1 min-w-0 rounded-md px-4 py-2 text-foreground bg-white outline-none" />
              <button className="px-4 py-2 rounded-md bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold hover:bg-[var(--aura-lavender)] transition">Subscribe</button>
            </form>
            <div className="mt-6 flex gap-4 text-sm text-white/70">
              <a href="#" className="hover:text-[var(--aura-teal)]">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--aura-teal)]">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
          © {new Date().getFullYear()} AuraAlign Mental Health Initiative. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function Section({ id, children, tone, eyebrow }: { id: string; children: React.ReactNode; tone?: "muted"; eyebrow?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${tone === "muted" ? "bg-[var(--aura-grey)]" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {eyebrow && <p className="text-center text-sm tracking-[0.3em] uppercase text-[var(--aura-teal)] mb-4">{eyebrow}</p>}
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--aura-deep)] relative inline-block w-full">
      <span className="relative inline-block">
        {children}
        <span className="block mx-auto mt-4 h-1 w-24 bg-[var(--aura-teal)] rounded-full" />
      </span>
    </h2>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
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