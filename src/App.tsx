import NavBar from "./sections/navBar";
import HeroSection from "./sections/heroSection";
import AboutSection from "./sections/about";
import SkillsSection from "./sections/skills";
import ProjectSection from "./sections/projects";
import ContactSection from "./sections/contact";

const App = () => {
  return (
    <div className="relative min-h-[100dvh] bg-void text-ink">
      {/* Fixed ambient glow field + film grain (systemic layers) */}
      <div className="glow-field" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <NavBar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-display text-base font-semibold tracking-tight text-ink">
            AB<span className="text-accent">.</span>
          </p>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted">
            &copy; 2026 Athekame Bashir — Built with intent
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
