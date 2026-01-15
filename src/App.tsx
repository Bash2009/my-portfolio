import NavBar from "./sections/navBar";
import HeroSection from "./sections/heroSection";
import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
// import ProjectSection from "./sections/projects";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <AboutSection />
      {/* <ProjectSection /> */}
      <ContactSection />

      <footer>
        <div className="container">
          <p>&copy; 2026 Athekame Bashir. Built with React</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
