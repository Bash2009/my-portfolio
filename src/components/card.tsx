interface CardProps {
  title: string;
  description: string;
  tech: string[];
  demo: string;
}

const Card = (project: CardProps) => {
  return (
    <article className="project">
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
  );
};

export default Card;
