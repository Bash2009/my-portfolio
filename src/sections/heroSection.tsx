import { ArrowUpRight } from "@phosphor-icons/react/dist/icons/ArrowUpRight";
import { ArrowDown } from "@phosphor-icons/react/dist/icons/ArrowDown";
import pfp from "../../assets/pfp.png";
import useReveal from "../hooks/useReveal";

const HeroSection = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="hero"
      ref={ref}
      className="reveal relative flex min-h-[100dvh] flex-col justify-center px-4 pb-20 pt-36 md:px-10 md:pt-40"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Asymmetric split: massive type left, portrait right */}
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="w-full md:max-w-[62%]">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Available for work — 2026
            </span>

            <h1 className="mt-8 font-display text-[clamp(3rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink">
              Athekame
              <br />
              <span className="text-muted">Bashir</span>
              <span className="text-accent">.</span>
            </h1>

            <div className="mt-8 flex max-w-xl items-start gap-5">
              <span className="mt-3 hidden h-px w-16 shrink-0 bg-gradient-to-r from-accent to-transparent md:block" />
              <div>
                <p className="font-display text-xl font-medium leading-snug text-ink md:text-2xl">
                  Full-stack developer building secure, tested web systems.
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  APIs, interfaces, databases — engineered end to end with
                  type safety, clear contracts, and patterns the next
                  developer can follow.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn btn--primary">
                View work
                <span className="btn__orb">
                  <ArrowUpRight size={16} weight="light" />
                </span>
              </a>
              <a href="#contact" className="btn btn--ghost">
                Get in touch
                <span className="btn__orb">
                  <ArrowUpRight size={16} weight="light" />
                </span>
              </a>
            </div>
          </div>

          {/* Double-Bezel portrait */}
          <div className="shrink-0 self-center md:self-end">
            <div className="bezel">
              <div className="bezel__core relative overflow-hidden p-0">
                <img
                  src={pfp}
                  alt="Athekame Bashir"
                  className="h-56 w-56 object-cover grayscale-[35%] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:grayscale-0 md:h-72 md:w-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              Lagos · Remote
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 hidden items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted md:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-white/10">
            <ArrowDown size={14} weight="light" className="animate-bounce" />
          </span>
          Scroll
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
