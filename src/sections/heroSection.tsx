import { useEffect, useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/icons/ArrowUpRight";
import { ArrowDown } from "@phosphor-icons/react/dist/icons/ArrowDown";
import { createTimeline, splitText, stagger, utils } from "animejs";
import type { Timeline } from "animejs";
import pfp from "../../assets/pfp.png";
import useMagnetic from "../hooks/useMagnetic";
import { EASE_GLASS, EASE_SPRING, prefersReduced } from "../lib/motion";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const magnetWork = useMagnetic<HTMLSpanElement>(0.32);
  const magnetContact = useMagnetic<HTMLSpanElement>(0.32);

  // Layout effect: split + initial states applied before first paint (no flash).
  useLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root || prefersReduced()) return;

    const h1 = root.querySelector<HTMLHeadingElement>("h1");
    if (!h1) return;

    const split = splitText(h1, { words: { wrap: "clip" }, chars: true });
    utils.set(split.chars, { y: "110%" });
    utils.set(root.querySelectorAll("[data-hero], [data-hero-btn]"), {
      opacity: 0,
    });

    return () => {
      split.revert();
    };
  }, []);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root || prefersReduced()) return;

    const q = (sel: string) => root.querySelector<HTMLElement>(sel);
    const eyebrow = q("[data-hero='eyebrow']");
    const h1 = q("h1");
    const blurb = q("[data-hero='blurb']");
    const buttons = [...root.querySelectorAll<HTMLElement>("[data-hero-btn]")];
    const portrait = q("[data-hero='portrait']");
    const cue = q("[data-hero='cue']");
    const chars = h1 ? [...h1.querySelectorAll<HTMLElement>("[data-char]")] : [];
    if (!h1 || !chars.length || !eyebrow || !blurb || !portrait) return;

    let tl: Timeline | null = createTimeline({
      defaults: { ease: EASE_GLASS },
    })
      .add(eyebrow, { opacity: [0, 1], y: [24, 0], duration: 700 }, 0)
      .add(
        chars,
        { y: ["110%", "0%"], duration: 950, ease: EASE_SPRING, delay: stagger(28) },
        140,
      )
      .add(
        portrait,
        { opacity: [0, 1], y: [56, 0], scale: [0.94, 1], duration: 1200 },
        350,
      )
      .add(
        blurb,
        {
          opacity: [0, 1],
          y: [48, 0],
          filter: ["blur(8px)", "blur(0px)"],
          duration: 900,
        },
        800,
      )
      .add(
        buttons,
        { opacity: [0, 1], y: [36, 0], duration: 850, delay: stagger(100) },
        1150,
      );
    if (cue) {
      tl = tl.add(cue, { opacity: [0, 1], duration: 900 }, 1700);
    }

    return () => {
      tl?.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col justify-center px-4 pb-20 pt-36 md:px-10 md:pt-40"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Asymmetric split: massive type left, portrait right */}
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
          <div className="w-full md:max-w-[62%]">
            <span className="eyebrow" data-hero="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Available for work — 2026
            </span>

            <h1 className="mt-8 font-display text-[clamp(3rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink">
              Athekame
              <br />
              <span className="text-muted">Bashir</span>
              <span className="text-accent">.</span>
            </h1>

            <div
              className="mt-8 flex max-w-xl items-start gap-5"
              data-hero="blurb"
            >
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
              <span ref={magnetWork} className="inline-flex">
                <a href="#projects" className="btn btn--primary" data-hero-btn>
                  View work
                  <span className="btn__orb">
                    <ArrowUpRight size={16} weight="light" />
                  </span>
                </a>
              </span>
              <span ref={magnetContact} className="inline-flex">
                <a href="#contact" className="btn btn--ghost" data-hero-btn>
                  Get in touch
                  <span className="btn__orb">
                    <ArrowUpRight size={16} weight="light" />
                  </span>
                </a>
              </span>
            </div>
          </div>

          {/* Double-Bezel portrait */}
          <div
            className="shrink-0 self-center md:self-end"
            data-hero="portrait"
          >
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
        <div
          className="mt-20 hidden items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.25em] text-muted md:flex"
          data-hero="cue"
        >
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
