import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate full-stack web developer with expertise in building
            scalable, user-friendly applications. With a strong foundation in
            both frontend and backend technologies, I create seamless digital
            experiences that solve real-world problems.
          </p>
          <p style={{ marginTop: "1rem" }}>
            I specialize in modern JavaScript frameworks, RESTful API
            development, and database design. Whether it's crafting responsive
            interfaces with React or architecting robust backends with NestJS, I
            bring ideas to life with clean, maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
