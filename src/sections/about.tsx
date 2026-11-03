import useReveal from "../hooks/useReveal";

const STATS = [
  { number: "4", label: "Projects shipped" },
  { number: "14", label: "Technologies" },
  { number: "3", label: "Stack layers" },
];

const AboutSection = () => {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="reveal px-4 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <span className="eyebrow" data-reveal>
          01 — Background
        </span>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {/* Statement — wide column */}
          <div className="bezel md:col-span-7" data-reveal>
            <div className="bezel__core flex h-full flex-col justify-between gap-10 p-8 md:p-12">
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink">
                Code that works today —{" "}
                <span className="text-muted">
                  and that the next developer can follow tomorrow.
                </span>
              </h2>
              <div className="space-y-5 text-[0.9375rem] leading-relaxed text-muted">
                <p>
                  On the frontend, I work with React and TypeScript to build
                  responsive interfaces. On the backend, I design RESTful
                  APIs with NestJS and Node.js, and I handle the data layer
                  with PostgreSQL and MySQL.
                </p>
                <p>
                  Every project I ship includes clear API contracts, type
                  safety, and tests — not just code that runs, but code that
                  stays maintainable.
                </p>
              </div>
            </div>
          </div>

          {/* Stats — stacked bezel mini-cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:col-span-5 md:grid-cols-1 md:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="bezel" data-reveal>
                <div className="bezel__core flex items-baseline gap-4 p-6 md:p-7">
                  <span className="font-display text-5xl font-semibold tracking-tight text-accent md:text-6xl">
                    {stat.number}
                  </span>
                  <span className="font-mono text-[0.625rem] uppercase leading-tight tracking-[0.18em] text-muted">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
