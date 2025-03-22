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
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
    }
  ];