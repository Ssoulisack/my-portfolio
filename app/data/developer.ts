// Define type for Core Skills
export type CoreSkill = string;

// Define the structure of the developer data
export interface DeveloperData {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  coreSkills: CoreSkill[];
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    address: string;
  };
}

// Export the developer data with type safety
export const developerData: DeveloperData = {
  name: "Soulisack DUANGVILAY",
  role: "Back-end Developer",
  avatar: "/images/849F76EA-3652-48DF-8CA7-10DFFEF59600.jpeg",
  bio: `Yaho!!~ 私はバックデベロッパーです ~ alex desu yoroshikune.🙂‍↕️`,

  coreSkills: ["Node.js", "Go", "TypeScript", "PHP", "SQL", "ORM", "Java"],

  contact: {
    phone: "+8562055168040",
    email: "soulisack2498@gmail.com",
    linkedin: "www.linkedin.com/in/sackdvl/",
    address: "Xaysettha District, Vientiane Capital.",
  }
};
