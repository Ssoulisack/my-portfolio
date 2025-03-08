// Define the Level constants
const Level = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  PROFESSIONAL: "Professional",
} as const; // Using 'as const' to preserve the string literal types

// Define the LevelType based on the values of Level
type LevelType = typeof Level[keyof typeof Level];

// Map LevelType to scores and descriptions
const LevelData: Record<LevelType, { score: number; description: string }> = {
  [Level.BEGINNER]: {
    score: 30,
    description: "Basic understanding and ability to perform simple tasks.",
  },
  [Level.INTERMEDIATE]: {
    score: 60,
    description: "Good working knowledge, able to handle most tasks independently.",
  },
  [Level.PROFESSIONAL]: {
    score: 90,
    description: "Expert-level proficiency, capable of solving complex problems efficiently.",
  },
};

// Define the structure of a single skill
export interface Skill {
  name: string;
  level: LevelType;
  score: number;
  description: string;
}

// Define the structure for the skill categories
export interface SkillsData {
  [category: string]: Skill[];
}

// Export the skills data with mapped levels using the LevelType
export const skills: SkillsData = {
  Backend: [
    { name: "Node.js", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "Python", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "Java", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Go", level: Level.BEGINNER, score: LevelData[Level.BEGINNER].score, description: LevelData[Level.BEGINNER].description },
    { name: "Express", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "Django", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Flask", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
  ],
  Databases: [
    { name: "Prisma", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "PostgreSQL", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "MySQL", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Redis", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Elasticsearch", level: Level.BEGINNER, score: LevelData[Level.BEGINNER].score, description: LevelData[Level.BEGINNER].description },
  ],
  DevOps: [
    { name: "Docker", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "Kubernetes", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "AWS", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "CI/CD", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Terraform", level: Level.BEGINNER, score: LevelData[Level.BEGINNER].score, description: LevelData[Level.BEGINNER].description },
  ],
  Frontend: [
    { name: "HTML/CSS", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "JavaScript", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "React", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "TypeScript", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
  ],
};
