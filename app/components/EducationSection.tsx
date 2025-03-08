import { education, Education } from '../data/education';
import { EducationCard } from "./ui/EducationCard";
export function EducationSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="grid grid-cols-1 gap-6">
        {education.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </div>
  );
}
