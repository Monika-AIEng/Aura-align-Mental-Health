import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Sparkles, BookOpen, Briefcase, Users, Download } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/PageShell";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Mental Health Resources — AuraAlign" },
      { name: "description", content: "Free mental health resources for students, women, teachers, professionals and the general public." },
      { property: "og:title", content: "Mental Health Resources — AuraAlign" },
      { property: "og:description", content: "Free resources, guides and toolkits for emotional well-being." },
    ],
  }),
  component: ResourcesPage,
});

const GROUPS = [
  { icon: GraduationCap, t: "Students", items: ["Exam Stress", "Social Anxiety", "Career Pressure", "Digital Addiction"] },
  { icon: Sparkles, t: "Women", items: ["Emotional Well-being", "Trauma Recovery", "Work-Life Balance", "Self-Care"] },
  { icon: BookOpen, t: "Teachers", items: ["Classroom Stress Management", "Student Mental Health Awareness", "Burnout Prevention"] },
  { icon: Briefcase, t: "IT Professionals", items: ["Workplace Burnout", "Remote Work Isolation", "Productivity Stress", "Work-Life Balance"] },
  { icon: Users, t: "General Public", items: ["Understanding Depression", "Anxiety Management", "Healthy Coping", "Mental Wellness Practices"] },
];

const RESOURCE_TEXT = `AuraAlign Mental Health Initiative — Resource Pack\n\nThis sample resource pack contains introductory guidance on common mental health concerns including anxiety, depression, burnout and stress management. For personalised support please contact us at auraaligninitiative@gmail.com or call Tele-MANAS at 14416.`;

function ResourcesPage() {
  const download = () => {
    const blob = new Blob([RESOURCE_TEXT], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AuraAlign-Resource-Pack.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <PageShell>
      <PageHero eyebrow="Learn & Heal" title="Mental Health Resources" subtitle="Free, reliable resources curated for the communities we serve across India." />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.t} className="bg-card rounded-2xl p-6 shadow-md border border-[var(--aura-grey)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-[var(--aura-teal)] text-[var(--aura-deep)]"><g.icon className="h-6 w-6"/></span>
                <h3 className="text-xl font-bold text-[var(--aura-deep)]">{g.t}</h3>
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
      <Section tone="muted">
        <div className="rounded-2xl bg-[var(--aura-deep)] text-white p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Download our free Resource Pack</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">A starter guide covering anxiety, depression, burnout and self-care.</p>
          <button onClick={download} className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-md bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold hover:bg-white transition">
            <Download className="h-5 w-5" /> Download Resources
          </button>
        </div>
      </Section>
    </PageShell>
  );
}