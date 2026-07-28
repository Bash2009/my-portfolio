const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-label">Background</h2>
        <div className="about__layout">
          <div className="about__text">
            <p>
              I build full-stack web systems. On the frontend, I work with
              React and TypeScript to create responsive interfaces. On the
              backend, I design RESTful APIs with NestJS and Node.js. I handle
              the database layer with PostgreSQL and MySQL.
            </p>
            <p>
              I believe in code that's tested, documented, and maintainable —
              not just code that works today. Every project I ship includes
              clear API contracts, type safety, and patterns the next developer
              can follow without head-scratching.
            </p>
          </div>
          <div className="about__stats">
            <div className="stat">
              <span className="stat__number">3</span>
              <span className="stat__label">Projects shipped</span>
            </div>
            <div className="stat">
              <span className="stat__number">14</span>
              <span className="stat__label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat__number">3</span>
              <span className="stat__label">Stack layers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
