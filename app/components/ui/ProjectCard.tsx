"use client";
import { useEffect, useState } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

// Define types for the project object
export interface Project {
  title: string;
  description: string;
  coverImage: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string | null;
}

interface ProjectCardProps {
  project: Project; // The project prop is of type Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    Aos.init({
      offset: 100, // Start animation when element is 100px from viewport
      duration: 300, // Animation duration in milliseconds
      easing: "ease-in-out",
      once: false, // Ensures animation runs every time element comes into view
    });
  }, []);

  return (
    <>
      <div
        className="aspect-square overflow-hidden relative rounded-md cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          width={500} // Adjust as needed
          height={300} // Adjust as needed
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <h3 className="text-white font-semibold">{project.title}</h3>
        </div>
      </div>
      {isOpen && (
        <div
          data-aos="zoom-in-up"
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background p-4 border-b border-border flex justify-between items-center">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-secondary"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4 rounded-md overflow-hidden">
                <Image src={project.coverImage} alt={project.title} width={500} height={300} className="w-full h-full object-center" />
              </div>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <SkillBadge key={tech} name={tech} />
                ))}
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
