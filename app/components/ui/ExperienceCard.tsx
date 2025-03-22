"use client";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle,
  Award,
  X,
} from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import Aos from "aos";
import "aos/dist/aos.css";

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

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

export function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    Aos.init({
      offset: 100, // Start animation when element is 100px from viewport
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out",
      once: false, // Ensures animation runs every time element comes into view
    });
  }, []);
  return (
    <div className="relative">
      {!isLast && (
        <div className="absolute left-5 top-[4.5rem] bottom-0 w-0.5 bg-border" />
      )}
      <div className="relative flex gap-6">
        <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary bg-background z-10">
          <Image
            src={experience.logo}
            alt={experience.company}
            width={40} // Explicit width
            height={40} // Explicit height
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 pb-8">
          <div
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-6 hover:shadow-2xl card-bd transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2">
              {experience.position}
            </h3>
            <div className="space-y-2">
              <p className="text-lg text-foreground">{experience.company}</p>
              <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={14} />
                  <span>{experience.type}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{experience.description}</p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          data-aos="flip-up"
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div className="bg-background border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background p-4 border-b border-border flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">{experience.position}</h2>
                <p className="text-muted-foreground">{experience.company}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-secondary"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={16} />
                  <span>{experience.type}</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-primary" />
                    <h4 className="font-medium">Key Responsibilities</h4>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-5">
                    {experience.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-primary" />
                    <h4 className="font-medium">Key Achievements</h4>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-5">
                    {experience.achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <SkillBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
