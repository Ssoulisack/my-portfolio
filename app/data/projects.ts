// Define the Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null; // Allow null values
}

// Define the project list with type safety
export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce API",
    description:
      "A RESTful API for e-commerce applications with authentication, product management, and order processing capabilities.",
    coverImage:
      "/images/2623BE56-FEE2-439D-8DB6-393202E8D9EA_1_105_c.jpeg",
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "A comprehensive task management system with real-time updates, task assignments, and progress tracking.",
    coverImage:
      "/images/54F07835-6A2C-4390-8496-1EE170704FA9_1_105_c.jpeg",
    category: "Full Stack",
    technologies: ["Python", "Django", "PostgreSQL", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description:
      "A scalable real-time chat application with private messaging, group chats, and media sharing capabilities.",
    coverImage:
      "/images/6B6AEB08-771A-44F6-A48C-01195915C10A_1_105_c.jpeg",
    category: "Backend",
    technologies: ["Node.js", "Socket.io", "Redis", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: null, // No live URL available
  },
  {
    id: 4,
    title: "Weather Data Pipeline",
    description:
      "A data pipeline for collecting, processing, and analyzing weather data from multiple sources.",
    coverImage:
      "/images/DFD34487-D720-4307-81C5-E729BAB28DFA_1_105_c.jpeg",
    category: "Data Engineering",
    technologies: ["Python", "Apache Kafka", "AWS", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Content Management System",
    description:
      "A headless CMS with a GraphQL API, content versioning, and role-based access control.",
    coverImage:
      "/images/IMG_4433.JPG",
    category: "Backend",
    technologies: ["Node.js", "GraphQL", "MongoDB", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    title: "Authentication Service",
    description:
      "A secure authentication service with OAuth2, multi-factor authentication, and SSO capabilities.",
    coverImage:
      "/images/IMG_4434.JPG",
    category: "Security",
    technologies: ["Python", "Flask", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: null, // No live URL available
  },
];
