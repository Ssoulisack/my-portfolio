import { Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { Education } from "../../data/education";
export function EducationCard({ education }: { education: Education }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <div className="h-48 overflow-hidden">
        <img
          src={education.logo}
          alt={education.institution}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
        <div className="space-y-3">
          <p className="text-lg text-foreground">{education.institution}</p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={16} />
            <span>{education.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={16} />
            <span>{education.location}</span>
          </div>
          <p className="text-muted-foreground">{education.description}</p>
          {education.achievements.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-primary" />
                <h4 className="font-medium">Achievements</h4>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground pl-5 space-y-1">
                {education.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
          {education.courses.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-primary" />
                <h4 className="font-medium">Key Courses</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((course, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
