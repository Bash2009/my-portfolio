import { projects } from "../constants";

const ProjectSection = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-label">Projects</h2>
        <div className="projects__list">
          {projects.map((project, idx) => (
            <article key={idx} className="project">
              <div className="project__header">
                <h3 className="project__title">{project.title}</h3>
                <div className="project__tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project__tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project__desc">{project.description}</p>
              <a
                href={project.demo}
                className="project__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
