// Define type for Core Skills
export type CoreSkill = string;

// Define the structure of the developer data
export interface DeveloperData {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  coreSkills: CoreSkill[];
}

// Export the developer data with type safety
export const developerData: DeveloperData = {
  name: "Soulisack DUANGVILAY",
  role: "Back-end Developer",
  avatar: "/images/849F76EA-3652-48DF-8CA7-10DFFEF59600.jpeg",
  bio: `Yaho!!~ 私はバックデベロッパーです ~ alex desu yoroshikune.🙂‍↕️ •without any talent, so that’s why I have to work hard. @al.ninety_eight`,
  coreSkills: ["Node.js", "Go", "TypeScript", "PHP", "SQL", "ORM", "Java"]
};
