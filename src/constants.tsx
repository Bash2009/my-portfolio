const projects = [
  {
    title: "Full-Stack Auth Platform",
    description:
      "Secure authentication system with JWT tokens, refresh tokens, and role-based access control. Features user registration, login, and protected routes.",
    tech: ["React", "NestJS", "PostgreSQL", "TypeScript", "JWT"],
    demo: "https://auth-demo.example.com",
  },
  {
    title: "Enterprise REST API",
    description:
      "RESTful API with comprehensive CRUD operations, role-based permissions, and data validation. Includes Swagger documentation and automated testing.",
    tech: ["NestJS", "MySQL", "TypeORM", "Jest", "Swagger"],
    demo: "https://api-docs.example.com",
  },
  {
    title: "Responsive Admin Dashboard",
    description:
      "Modern admin panel with data visualization, user management, and real-time updates. Fully responsive design with dark mode support.",
    tech: ["React", "Bootstrap", "Chart.js", "Node.js", "Socket.io"],
    demo: "https://dashboard-demo.example.com",
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
  database: ["MySQL", "PostgreSQL", "TypeORM"],
};

export { projects, skills };
