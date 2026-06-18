import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--aura-deep)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="grid place-items-center h-9 w-9 rounded-full bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold">A</span>
            <span className="text-lg font-bold">AuraAlign</span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            Building a mentally healthier India through awareness, education and community support.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-3 text-[var(--aura-lavender)] uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-1.5 text-sm">
            {[
              { to: "/about", l: "About Us" },
              { to: "/programs", l: "Programs" },
              { to: "/stories", l: "Success Stories" },
              { to: "/volunteer", l: "Volunteer" },
              { to: "/donate", l: "Donate" },
              { to: "/contact", l: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[var(--aura-teal)] transition">{l.l}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-3 text-[var(--aura-lavender)] uppercase tracking-widest">Contact</h4>
          <ul className="space-y-1.5 text-sm text-white/85">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:auraaligninitiative@gmail.com" className="hover:text-[var(--aura-teal)]">auraaligninitiative@gmail.com</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+919876543210" className="hover:text-[var(--aura-teal)]">+91 98765 43210</a></li>
          </ul>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid place-items-center h-9 w-9 rounded-full bg-white/10 hover:bg-[var(--aura-teal)] hover:text-[var(--aura-deep)] transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 px-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} AuraAlign Mental Health Initiative. All rights reserved.
      </div>
    </footer>
  );
}