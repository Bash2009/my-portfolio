import { skills } from "../constants";
import useReveal from "../hooks/useReveal";

const GROUPS = [
  { key: "frontend", label: "Frontend", items: skills.frontend, span: "md:col-span-8" },
  { key: "backend", label: "Backend", items: skills.backend, span: "md:col-span-4" },
  { key: "database", label: "Database", items: skills.database, span: "md:col-span-4" },
  { key: "tools", label: "Tools", items: skills.tools, span: "md:col-span-8" },
];

const SkillsSection = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="skills"
      ref={ref}
      className="reveal px-4 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="flex flex-wrap items-end justify-between gap-4"
          data-reveal
        >
          <span className="eyebrow">02 — Stack</span>
          <p className="max-w-sm text-sm text-muted">
            The tools I reach for across the full stack — chosen for
            reliability, not novelty.
          </p>
        </div>

        {/* Asymmetrical bento — mobile collapses to one column */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          {GROUPS.map((group, i) => (
            <div
              key={group.key}
              className={`bezel ${group.span}`}
              data-reveal
            >
              <div className="bezel__core flex h-full flex-col gap-6 p-7 md:p-9">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.625rem] text-accent">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted">
                    {group.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/[0.04] px-4 py-2 text-[0.8125rem] font-medium text-ink/85 ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-accent/10 hover:text-accent hover:ring-accent/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
