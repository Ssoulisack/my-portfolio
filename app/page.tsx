"use client";
import { ProfileHeader } from "./components/ui/ProfileHeader";
import { ContactSection } from "./components/ContactSection";
import { SkillSection } from "./components/SkillSection";
import { ProjectGrid } from "./components/ui/ProjectGrid";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import Navigation from "./components/Navifations";
import { Hero } from "./components/Hero";
import { ThemeProvider } from "./context/ThemeProvider";
import { LenisProvider } from "./context/LenisContext";
import SplashCursor from "./block/Animations/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <SplashCursor />
        <Hero />
        <AppContent />
      </LenisProvider>
    </ThemeProvider>
  );
}

// Main Content

const AppContent: React.FC = () => {
  return (
    <main className="relative z-10 mt-screen my-16 container max-w-4xl mx-auto px-4 py-4 sm:px-8 mt-16">
      {/* Profile Section */}
      <div id="home" className="mt-8">
        <ProfileHeader />
      </div>
      {/* Projects */}
      <div id="projects" className="mt-16">
        <ProjectGrid />
      </div>
      {/* Skills */}
      <div id="skills" className="mt-16">
        <SkillSection />
      </div>
      {/* Experience */}
      <div id="experience" className="mt-16">
        <ExperienceSection />
      </div>
      {/* Education */}
      <div id="education" className="mt-16">
        <EducationSection />
      </div>
      {/* Contact */}
      <div id="contact" className="mt-16">
        <ContactSection />
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 hidden sm:block">
        <Navigation />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-4 sm:px-8">
        <p className="text-center text-muted-foreground text-sm">
          © 2021 Soulisack Duangvilay. All rights reserved.
        </p>
      </div>
    </main>
  );
};
