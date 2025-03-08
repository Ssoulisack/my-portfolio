"use client";

import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import { ProfileHeader } from "./components/ui/ProfileHeader";
import { ContactSection } from "./components/ContactSection";
import { SkillSection } from "./components/SkillSection";
import { ProjectGrid } from "./components/ui/ProjectGrid";
import { EducationSection } from "./components/EducationSection";
import { Briefcase, Code, GraduationCap, Mail } from "lucide-react";
import Navigation from "./components/Navifations";
import { ExperienceSection } from "./components/ExperienceSection";

// Interface for NavLink component
interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
}

// Home Page
export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-background w-full">
        <AppContent />
      </div>
    </ThemeProvider>
  );
}

// Main Content
const AppContent: React.FC = () => {
  return (
    <main className="mt-16 flex-1 container max-w-4xl mx-auto px-4 py-4 sm:px-8">
      {/* Profile Section */}
      <div id="home" className="mt-8">
        <ProfileHeader />
      </div>

      {/* Navigation Section */}
      <nav className="sticky top-0 z-50 px-4 py-2 border-border bg-background w-full">
        <Navigation />
      </nav>

      {/* Who Am I Section */}
      <SectionWithAnimation>
        <h2 className="text-4xl border-t border-border pt-4 font-bold">Who am i?</h2>
        <p className="my-4 text-lg">
          I'm a passionate web developer. Explore my work and get in touch.
        </p>
      </SectionWithAnimation>

      {/* Projects Section */}
      <div id="projects" className="mt-6">
        <SectionWithAnimation>
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <ProjectGrid />
          {/* Debug: Add fallback if empty */}
          {false && <p>No projects loaded yet (check console)</p>}
        </SectionWithAnimation>
      </div>

      {/* Skills Section */}
      <div id="skills" className="mt-16">
        <SkillSection />
      </div>

      {/* Experience Section */}
      <div id="experience" className="mt-16">
        <SectionWithAnimation>
        <ExperienceSection />
        </SectionWithAnimation>
      </div>

      {/* Education Section */}
      <div id="education" className="mt-16">
        <SectionWithAnimation>
        <EducationSection />
        </SectionWithAnimation>
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-16">
        <ContactSection />
      </div>
    </main>
  );
};

// Navigation Link Component
// Section Wrapper with Animation
const SectionWithAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`transition-all ${inView ? "slide-in-fade" : ""}`}>
      {children}
    </div>
  );
};