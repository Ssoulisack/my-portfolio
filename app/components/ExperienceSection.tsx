import React from "react";
import { experience } from "../data/experience";
import { ExperienceCard } from "../components/ui/ExperienceCard";
export function ExperienceSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="pl-4">
        {experience.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
