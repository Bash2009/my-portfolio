const projects = [
	{
		title: "Full-Stack Chat Platform",
		description:
			"Real-time messaging application with user authentication, private and group chats, and message persistence. Features include typing indicators, read receipts, and file sharing. The repos are in my GitHub profile. Note: The backend is deployed on the Render platform, which may take a few seconds to wake up if it has been idle.",
		tech: [
			"Vite",
			"React",
			"NestJS",
			"PostgreSQL",
			"TypeScript",
			"Socket.io",
			"Redis",
		],
		demo: "https://social-media-frontend-blush.vercel.app/",
	},
	{
		title: "Art chronicles",
		description:
			"Showcase and explore modern and reconnaissance art. Technologies: React User Experience: Intuitive navigation, responsive design, high-quality image display",
		tech: ["React", "Bootstrap", "CSS", "JavaScript"],
		demo: "https://bash2009.github.io/Art-chronicles/",
	},
];

const skills = {
	frontend: [
		"HTML5",
		"CSS3",
		"Bootstrap",
		"JavaScript",
		"TypeScript",
		"React.js",
	],
	backend: ["PHP", "Node.js", "NestJS", "Express.js", "REST APIs"],
	database: ["MySQL", "PostgreSQL", "TypeORM", "Redis"],
	tools: ["Git", "Docker", "Jest", "Swagger", "Postman"],
};

export { projects, skills };
