// Define type for each social link
interface SocialLink {
  name: string;
  url: string;
}

// Define the structure of the contact info
export interface ContactInfo {
  email: string;
  location: string;
  social: SocialLink[];
}

// Export the contact info with type safety
export const contactInfo: ContactInfo = {
  email: "soulisack2498@gmail.com",
  location: "Vientiane, Laos",
  social: [
    {
      name: "GitHub",
      url: "https://github.com"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com"
    },
    {
      name: "Twitter",
      url: "https://twitter.com"
    }
  ]
};
