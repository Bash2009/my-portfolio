import NavBar from "./sections/navBar";
import HeroSection from "./sections/heroSection";
import AboutSection from "./sections/about";
import SkillsSection from "./sections/skills";
import ProjectSection from "./sections/projects";
import ContactSection from "./sections/contact";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <hr className="section-divider" aria-hidden="true" />
      <AboutSection />
      <hr className="section-divider" aria-hidden="true" />
      <SkillsSection />
      <hr className="section-divider" aria-hidden="true" />
      <ProjectSection />
      <hr className="section-divider" aria-hidden="true" />
      <ContactSection />

      <footer className="footer">
        <div className="container">
          <p className="footer__text">&copy; 2026 Athekame Bashir</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
