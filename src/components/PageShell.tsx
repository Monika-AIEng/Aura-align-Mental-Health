import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="pt-16 min-h-screen bg-background text-foreground" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {children}
    </main>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-[var(--aura-deep)] text-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {eyebrow && <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[var(--aura-lavender)] mb-3">{eyebrow}</p>}
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 text-base sm:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({ children, tone, className = "" }: { children: ReactNode; tone?: "muted"; className?: string }) {
  return (
    <section className={`py-14 sm:py-20 ${tone === "muted" ? "bg-[var(--aura-grey)]" : "bg-background"} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aura-deep)]">
      <span className="relative inline-block">
        {children}
        <span className="block mx-auto mt-3 h-1 w-20 bg-[var(--aura-teal)] rounded-full" />
      </span>
    </h2>
  );
}