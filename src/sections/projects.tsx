import { useEffect, useRef } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/icons/ArrowUpRight";
import { createTimeline, onScroll, utils } from "animejs";
import { projects } from "../constants";
import useReveal from "../hooks/useReveal";
import useMediaQuery from "../hooks/useMediaQuery";
import useReducedMotion from "../hooks/useReducedMotion";
import { EASE_GLASS, prefersReduced } from "../lib/motion";

/* Asymmetric spans: feature card tall-left, then right stack, wide closer */
const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-12",
];

/* Scrub timeline beats (ms on the timeline's own clock) */
const RISE_DUR = 1200;
const LID_START = 700;
const LID_DUR = 1100;
const PANEL_START = 2400;
const SLOT = 1900;
const IN_DUR = 650;
const OUT_DUR = 500;

const pad = (n: number) => String(n).padStart(2, "0");

const ProjectSection = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reduced = useReducedMotion();
  const useLaptop = isDesktop && !reduced;

  const headerRef = useReveal<HTMLDivElement>();
  const cardsRef = useReveal<HTMLDivElement>([useLaptop]);
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll-scrubbed laptop showcase (desktop, motion allowed).
  useEffect(() => {
    if (!useLaptop) return;
    const track = trackRef.current;
    if (!track || prefersReduced()) return;

    const laptop = track.querySelector<HTMLElement>(".laptop");
    const lid = track.querySelector<HTMLElement>(".laptop__lid");
    const panels = [...track.querySelectorAll<HTMLElement>("[data-panel]")];
    const dots = [...track.querySelectorAll<HTMLButtonElement>("[data-rail]")];
    const label = track.querySelector<HTMLElement>("[data-rail-label]");
    if (!laptop || !lid || !panels.length) return;

    const N = panels.length;
    const TOTAL = PANEL_START + (N - 1) * SLOT + IN_DUR;

    // Applied at mount (section is far below the fold — never seen mid-set).
    utils.set(laptop, { opacity: 0, y: 140, rotateX: -18 });
    utils.set(lid, { rotateX: -92 });
    utils.set(panels, { opacity: 0, y: 24 });

    let active = -2;
    const setActive = (idx: number) => {
      if (idx === active) return;
      active = idx;
      panels.forEach((p, i) => p.classList.toggle("is-active", i === idx));
      dots.forEach((d, i) => d.classList.toggle("is-on", i === idx));
      if (label) {
        label.textContent =
          idx < 0 ? `— / ${pad(N)}` : `${pad(idx + 1)} / ${pad(N)}`;
      }
    };
    setActive(-1);

    const tl = createTimeline({
      defaults: { ease: EASE_GLASS },
      autoplay: onScroll({
        target: track,
        enter: "top top",
        leave: "bottom bottom",
        sync: true,
        axis: "y",
      }),
      onUpdate: (self) => {
        const p = self.progress;
        let idx = -1;
        for (let i = 0; i < N; i++) {
          const start = (PANEL_START + i * SLOT) / TOTAL;
          const end = i < N - 1 ? (PANEL_START + (i + 1) * SLOT) / TOTAL : 1;
          if (p >= start && p < end) {
            idx = i;
            break;
          }
        }
        setActive(idx);
      },
    })
      .add(
        laptop,
        { opacity: [0, 1], y: [140, 0], rotateX: [-18, 0], duration: RISE_DUR },
        0,
      )
      .add(lid, { rotateX: [-92, 0], duration: LID_DUR }, LID_START);

    panels.forEach((panel, i) => {
      const start = PANEL_START + i * SLOT;
      tl.add(panel, { opacity: [0, 1], y: [24, 0], duration: IN_DUR }, start);
      if (i < N - 1) {
        tl.add(
          panel,
          { opacity: 0, y: -16, duration: OUT_DUR },
          start + SLOT - OUT_DUR,
        );
      }
    });

    // Rail dots: jump the scroll position to a panel's slot.
    const dotHandlers = dots.map((dot, i) => {
      const handler = () => {
        const rect = track.getBoundingClientRect();
        const trackTop = window.scrollY + rect.top;
        const range = track.offsetHeight - window.innerHeight;
        const progress =
          (PANEL_START + i * SLOT + IN_DUR / 2) / TOTAL;
        window.scrollTo({ top: trackTop + progress * range });
      };
      dot.addEventListener("click", handler);
      return () => dot.removeEventListener("click", handler);
    });

    return () => {
      dotHandlers.forEach((off) => off());
      tl.revert();
    };
  }, [useLaptop]);

  return (
    <section id="projects" className="px-4 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className="reveal flex flex-wrap items-end justify-between gap-4"
        >
          <span className="eyebrow" data-reveal>
            03 — Selected work
          </span>
          <p className="max-w-sm text-sm text-muted" data-reveal>
            Shipped products across social, mobility, and the arts — each
            with a live demo.
          </p>
        </div>

        {useLaptop ? (
          /* ══ Scroll-scrubbed laptop (desktop) ══ */
          <div ref={trackRef} className="laptop-track mt-10">
            <div className="laptop-stage">
              <div className="laptop">
                <div className="laptop__lid">
                  <div className="laptop__screen">
                    <span className="laptop__camera" aria-hidden="true" />
                    <div className="laptop__chrome" aria-hidden="true">
                      <span className="laptop__dot" />
                      <span className="laptop__dot" />
                      <span className="laptop__dot" />
                      <span className="laptop__url">
                        athekame.dev / selected-work
                      </span>
                    </div>

                    {projects.map((project, idx) => (
                      <article
                        key={project.title}
                        className="project-panel"
                        data-panel={idx}
                      >
                        <div className="project-panel__body">
                          <div className="flex items-center justify-between gap-4">
                            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                              {pad(idx + 1)} / {pad(projects.length)}
                            </span>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} live demo`}
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-ink ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 hover:bg-accent/15 hover:text-accent hover:ring-accent/40"
                            >
                              <ArrowUpRight size={15} weight="light" />
                            </a>
                          </div>

                          <h3 className="font-display font-semibold leading-tight tracking-[-0.02em] text-ink text-[clamp(1.35rem,3vw,2.25rem)]">
                            {project.title}
                          </h3>

                          <p className="max-w-xl text-[0.85rem] leading-relaxed text-muted line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full px-3 py-1.5 font-mono text-[0.6rem] tracking-wide text-muted ring-1 ring-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="laptop__base" />
              </div>

              {/* Progress rail */}
              <div className="laptop-rail" aria-hidden="false">
                {projects.map((project, i) => (
                  <button
                    key={project.title}
                    type="button"
                    data-rail={i}
                    className="laptop-rail__dot"
                    aria-label={`Jump to project ${i + 1}`}
                  />
                ))}
                <span className="laptop-rail__label" data-rail-label>
                  — / {pad(projects.length)}
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* ══ Bento fallback — mobile + reduced motion ══ */
          <div
            ref={cardsRef}
            className="reveal mt-10 grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            {projects.map((project, idx) => {
              const feature = idx === 0;
              return (
                <article
                  key={project.title}
                  className={`bezel group ${SPANS[idx] ?? "md:col-span-6"}`}
                  data-reveal
                >
                  <div className="bezel__core flex h-full flex-col gap-6 p-7 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-ash md:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                        {pad(idx + 1)} / {pad(projects.length)}
                      </span>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title} live demo`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-ink ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 group-hover:bg-accent/15 group-hover:text-accent group-hover:ring-accent/40"
                      >
                        <ArrowUpRight size={16} weight="light" />
                      </a>
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`font-display font-semibold leading-tight tracking-[-0.02em] text-ink ${
                          feature
                            ? "text-3xl md:text-[2.75rem]"
                            : "text-2xl md:text-[1.75rem]"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`mt-4 leading-relaxed text-muted ${
                          feature ? "text-[0.9375rem] md:text-base" : "text-sm"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 border-t border-white/[0.07] pt-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full px-3 py-1.5 font-mono text-[0.625rem] tracking-wide text-muted ring-1 ring-white/10 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-ink/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
