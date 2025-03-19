import { Languages } from "lucide-react";

// Define the Level constants
const Level = {
  BEGINNER: "Beginner",
  INTERMEDIATE: "Intermediate",
  PROFESSIONAL: "Professional",
} as const;

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

// Export the skills data based on your resume
export const skills: SkillsData = {
  ProgrammingLanguages: [
    { name: "Go", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "PHP", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "Node.js", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "TypeScript", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Java", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Bun", level: Level.BEGINNER, score: LevelData[Level.BEGINNER].score, description: LevelData[Level.BEGINNER].description },
  ],
  Databases: [
    { name: "MySQL", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    // { name: "MongoDB", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    // { name: "PostgreSQL", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "ORM", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
  ],
  Tools: [
    { name: "Git", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Rest API", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Docker", level: Level.BEGINNER, score: LevelData[Level.BEGINNER].score, description: LevelData[Level.BEGINNER].description },
    { name: "Graphql", level: Level.BEGINNER, score: LevelData[Level.BEGINNER].score, description: LevelData[Level.BEGINNER].description },
    // { name: "CI/CD", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
  ],
  Frontend: [
    { name: "Next.js", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
  ],
  SoftSkills: [
    { name: "Adaptability", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Problem-solving", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: LevelData[Level.PROFESSIONAL].description },
    { name: "Prioritization", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
    { name: "Innovation", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: LevelData[Level.INTERMEDIATE].description },
  ],
  Languages: [
    { name: "Lao", level: Level.PROFESSIONAL, score: LevelData[Level.PROFESSIONAL].score, description: "Proficient in Lao language." },
    { name: "English", level: Level.INTERMEDIATE, score: LevelData[Level.INTERMEDIATE].score, description: "Intermediate level in English." },
  ],
};
