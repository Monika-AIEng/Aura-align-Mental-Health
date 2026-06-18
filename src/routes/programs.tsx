import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import progStudents from "@/assets/prog-students.jpg.asset.json";
import progCounseling from "@/assets/prog-counseling.jpg.asset.json";
import progWorkshop from "@/assets/prog-workshop.jpg.asset.json";
import progTeacher from "@/assets/prog-teacher.jpg.asset.json";
import { PageShell, PageHero, Section } from "@/components/PageShell";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — AuraAlign" },
      { name: "description", content: "AuraAlign's mental health programs for students, women, workplaces and teachers across India." },
      { property: "og:title", content: "Our Programs — AuraAlign" },
      { property: "og:description", content: "Mental health programs for students, women, workplaces and teachers." },
    ],
  }),
  component: ProgramsPage,
});

const PROGRAMS = [
  {
    img: progStudents.url,
    t: "Student Mental Wellness",
    d: "Awareness workshops, peer support circles and on-campus counselling partnerships helping students cope with exam stress, anxiety and career pressure.",
    points: ["Campus workshops", "Peer support circles", "1:1 counselling referrals", "Parent awareness sessions"],
  },
  {
    img: progCounseling.url,
    t: "Women's Emotional Health",
    d: "Safe community spaces and confidential support for women navigating emotional exhaustion, trauma recovery and work-life balance.",
    points: ["Women's circles", "Trauma-informed support", "Self-care toolkits", "Referral network"],
  },
  {
    img: progWorkshop.url,
    t: "Workplace Mental Health",
    d: "Corporate workshops, leadership coaching and policy guidance helping organisations build psychologically safer workplaces.",
    points: ["Burnout prevention", "Manager training", "Employee assistance referrals", "Policy review"],
  },
  {
    img: progTeacher.url,
    t: "Teacher Wellness Program",
    d: "Six-week training equipping educators with practical tools to manage classroom stress, prevent burnout and recognise student distress.",
    points: ["Stress management", "Classroom emotional safety", "Recognising distress", "Peer mentorship"],
  },
];

function ProgramsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="What We Do" title="Our Programs" subtitle="Four flagship programs supporting India's most vulnerable mental health communities." />
      <Section>
        <div className="grid gap-10">
          {PROGRAMS.map((p, idx) => (
            <article key={p.t} className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 ? "lg:[direction:rtl]" : ""}`}>
              <img src={p.img} alt={p.t} loading="lazy" width={1280} height={832} className="rounded-2xl shadow-xl w-full object-cover h-72 sm:h-96 [direction:ltr]" />
              <div className="[direction:ltr]">
                <h2 className="text-3xl font-bold text-[var(--aura-deep)]">{p.t}</h2>
                <p className="mt-4 text-lg text-foreground/80 leading-relaxed">{p.d}</p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--aura-teal)] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--aura-deep)] text-white font-bold hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
                  Partner with us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}