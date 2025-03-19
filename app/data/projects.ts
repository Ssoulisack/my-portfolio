export interface Project {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lao Dictionary",
    description: "An online language dictionary system addressing challenges of word search and updates. Serves as a platform for exchanging linguistic knowledge.",
    coverImage: "/images/6B6AEB08-771A-44F6-A48C-01195915C10A_1_105_c.jpeg", // Ensure an image is available
    category: "Full Stack",
    technologies: ["PHP", "SQL", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/your-repo", // Add real GitHub link
    liveUrl: "", // Add live site if available
  },
  {
    id: 2,
    title: "Book Store Management System",
    description: "A book information management system that supports collaborative learning between frontend and backend.",
    coverImage: "/images/DFD34487-D720-4307-81C5-E729BAB28DFA_1_105_c.jpeg", // Ensure an image is available
    category: "Full Stack",
    technologies: ["React.js", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/your-repo", // Add real GitHub link
    liveUrl: "", // Add live site if available
  }
];
