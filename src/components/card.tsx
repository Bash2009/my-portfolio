import { ExternalLink } from "lucide-react";

interface CardProps {
	title: string;
	description: string;
	tech: string[];
	demo: string;
}

const Card = (project: CardProps) => {
	return (
		<div className="project-card">
			<h3>{project.title}</h3>
			<p>{project.description}</p>
			<div className="project-tech">
				{project.tech.map((tech) => (
					<span key={tech} className="tech-badge">
						{tech}
					</span>
				))}
			</div>
			<div className="project-links">
				{/* <a
          href={project.github}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={18} />
          <span>Code</span>
        </a> */}
				<a
					href={project.demo}
					className="project-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<ExternalLink size={18} />
					<span>Live Demo</span>
				</a>
			</div>
		</div>
	);
};

export default Card;
