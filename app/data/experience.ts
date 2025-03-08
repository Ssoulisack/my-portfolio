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
      position: "Senior Backend Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2020 - Present",
      type: "Full-time",
      description: "Leading backend development team in building scalable microservices architecture.",
      responsibilities: [
        "Architected and implemented high-performance API services",
        "Led migration from monolithic to microservices architecture",
        "Mentored junior developers and conducted code reviews",
        "Optimized database queries improving performance by 40%"
      ],
      achievements: [
        "Reduced server response time by 60%",
        "Implemented CI/CD pipeline reducing deployment time by 75%",
        "Successfully handled 10x traffic increase during peak periods"
      ],
      technologies: ["Node.js", "Python", "MongoDB", "AWS", "Docker", "Kubernetes"],
      logo: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      position: "Backend Developer",
      company: "DataFlow Systems",
      location: "Boston, MA",
      duration: "2018 - 2020",
      type: "Full-time",
      description: "Developed and maintained data processing pipelines for financial services.",
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
    },
    {
      id: 3,
      position: "Software Engineer",
      company: "CloudNet",
      location: "Seattle, WA",
      duration: "2016 - 2018",
      type: "Full-time",
      description: "Worked on cloud infrastructure and deployment automation.",
      responsibilities: [
        "Developed automated deployment scripts",
        "Maintained cloud infrastructure",
        "Implemented monitoring and alerting systems",
        "Created internal tools for development team"
      ],
      achievements: [
        "Automated deployment process saving 10 hours/week",
        "Reduced cloud infrastructure costs by 30%",
        "Implemented zero-downtime deployment strategy"
      ],
      technologies: ["Node.js", "AWS", "Terraform", "Jenkins", "MongoDB"],
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
    }
  ];