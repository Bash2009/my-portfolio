import React from "react";
import { projects } from "../constants";
import Card from "../components/card";

const ProjectSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <Card
              title={project.title}
              demo={project.demo}
              description={project.description}
              github={project.github}
              tech={project.tech}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
