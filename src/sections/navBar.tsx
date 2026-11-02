import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/icons/ArrowUpRight";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    // Close (and unlock scroll) if viewport grows past the mobile breakpoint
    const desktop = window.matchMedia("(min-width: 768px)");
    const onDesktop = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    desktop.addEventListener("change", onDesktop);

    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Full-screen glass overlay — sits under the floating pill */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-black/80 backdrop-blur-3xl transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } ${open ? "menu-open" : ""}`}
        aria-hidden={!open}
      >
        <span
          className="eyebrow menu-link mb-6"
          style={{ transitionDelay: open ? "60ms" : "0ms" }}
        >
          Navigation
        </span>

        {LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="menu-link font-display text-5xl font-medium tracking-tight text-ink transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-accent"
            style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className="btn btn--primary menu-link mt-10"
          style={{ transitionDelay: open ? "380ms" : "0ms" }}
        >
          Start a project
          <span className="btn__orb">
            <ArrowUpRight size={16} weight="light" />
          </span>
        </a>
      </div>

      {/* Floating glass pill — detached from the top, always above overlay */}
      <nav
        className="fixed left-1/2 top-6 z-50 w-max -translate-x-1/2"
        aria-label="Primary"
      >
        <div className="flex items-center gap-1 rounded-full bg-white/[0.04] py-1.5 pl-5 pr-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_20px_50px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10 backdrop-blur-xl">
          <a
            href="#hero"
            className="mr-3 font-display text-base font-semibold tracking-tight text-ink transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-accent"
            onClick={() => setOpen(false)}
          >
            AB<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[0.8125rem] font-medium text-muted transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="ml-1 hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-[0.8125rem] font-semibold text-void transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] active:scale-[0.98] md:inline-flex"
          >
            Hire me
            <ArrowUpRight size={14} weight="light" />
          </a>

          {/* Hamburger → X morph */}
          <button
            className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-ink ring-1 ring-white/10 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`absolute h-[1.5px] w-4 bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[3px]"
              }`}
            />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
