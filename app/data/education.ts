// Define the structure of an education entry
export interface Education {
    id: number;
    degree: string;
    institution: string;
    location: string;
    duration: string;
    description: string;
    achievements: string[];
    courses: string[];
    logo: string;
  }
  
  // Define the education data with type safety
  export const education: Education[] = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2018 - 2020",
      description: "Specialized in Distributed Systems and Database Management",
      achievements: [
        "Graduate Research Assistant in Distributed Systems Lab",
        "Teaching Assistant for Advanced Database Systems",
        "Best Graduate Research Project Award"
      ],
      courses: [
        "Advanced Database Systems",
        "Distributed Systems",
        "Cloud Computing",
        "Machine Learning"
      ],
      logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      degree: "Bachelor of Engineering in Software Engineering",
      institution: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      duration: "2014 - 2018",
      description: "Graduated with High Honors",
      achievements: [
        "Dean's List all semesters",
        "President of Computer Science Club",
        "Winner of Annual Coding Competition"
      ],
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering"
      ],
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];
  