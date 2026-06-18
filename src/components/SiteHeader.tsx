import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/stories", label: "Success Stories" },
  { to: "/resources", label: "Resources" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[var(--aura-deep)]/95 backdrop-blur-md text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="grid place-items-center h-9 w-9 rounded-full bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold">A</span>
            <span className="text-lg sm:text-xl font-bold tracking-wide truncate">AuraAlign</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-[var(--aura-lavender)]" }}
                className="px-3 py-2 rounded-md text-sm hover:bg-white/10 hover:text-[var(--aura-lavender)] transition"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="ml-2 px-4 py-2 rounded-md bg-[var(--aura-teal)] text-[var(--aura-deep)] font-bold hover:bg-white transition"
            >
              Donate
            </Link>
          </nav>
          <button
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center h-11 w-11 rounded-md hover:bg-white/10 transition"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
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
              {NAV_LINKS.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: true }}
                    activeProps={{ className: "bg-[var(--aura-teal)]/20 text-[var(--aura-lavender)]" }}
                    className="block w-full text-left px-4 py-3 rounded-md text-lg hover:bg-[var(--aura-teal)]/20 hover:text-[var(--aura-lavender)] transition"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}