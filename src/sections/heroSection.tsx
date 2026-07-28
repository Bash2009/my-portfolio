import pfp from "../../assets/pfp.png";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__container">
        <div className="hero__text">
          <h1 className="hero__name">Athekame Bashir</h1>
          <div className="hero__line" aria-hidden="true" />
          <p className="hero__role">Full-stack developer</p>
          <p className="hero__blurb">
            I build full-stack web systems — APIs, interfaces, databases —
            that are secure, tested, and ready to ship.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Work
            </a>
            <a href="#contact" className="btn btn--outline">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero__media">
          <div className="hero__portrait-frame">
            <img
              src={pfp}
              alt="Athekame Bashir"
              className="hero__portrait"
            />
            <span className="hero__status" aria-label="Available for work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
