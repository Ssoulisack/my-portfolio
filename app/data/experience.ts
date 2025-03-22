// Define the Experience interface
interface Experience {
    id: number;
    position: string;
    company: string;
    location: string;
    duration: string;
    type: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
    logo: string;
  }
  
  // Export the experience array with proper typing
  export const experience: Experience[] = [
    {
      id: 1,
      position: "Backend Developer",
      company: "Kolao-Group",
      location: "Vientiane, LA",
      duration: "2024 - present",
      type: "Full-time",
      description: "Developed and maintained backend services for a data processing platform.",
      responsibilities: [
        "Built real-time data processing pipelines",
        "Implemented secure payment processing systems",
        "Developed automated testing frameworks",
        "Created documentation for API endpoints"
      ],
      achievements: [
        "Reduced data processing time by 45%",
        "Implemented fraud detection system",
        "Achieved 99.99% system uptime"
      ],
      technologies: ["Python", "PostgreSQL", "Redis", "Apache Kafka", "Docker"],
      logo: "/images/IMG_0089.JPG"
    }
  ];