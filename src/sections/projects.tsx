import { ArrowUpRight } from "@phosphor-icons/react/dist/icons/ArrowUpRight";
import { projects } from "../constants";
import useReveal from "../hooks/useReveal";

/* Asymmetric spans: feature card tall-left, then right stack, wide closer */
const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-12",
];

const ProjectSection = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="projects"
      ref={ref}
      className="reveal px-4 py-28 md:px-10 md:py-40"
      style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <span className="eyebrow">03 — Selected work</span>
          <p className="max-w-sm text-sm text-muted">
            Shipped products across social, mobility, and the arts — each
            with a live demo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          {projects.map((project, idx) => {
            const feature = idx === 0;
            return (
              <article
                key={project.title}
                className={`bezel group ${SPANS[idx] ?? "md:col-span-6"}`}
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="bezel__core flex h-full flex-col gap-6 p-7 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-ash md:p-9">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                      {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
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
      </div>
    </section>
  );
};

export default ProjectSection;
