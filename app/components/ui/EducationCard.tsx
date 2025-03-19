"use client";
import { Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { Education } from '../../data/education';
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";


export function EducationCard({ education }: { education: Education }) {
  useEffect(() => {
    Aos.init({
      offset: 100, // Start animation when element is 100px from viewport
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out",
      once: false, // Ensures animation runs every time element comes into view
    });
  }, []);
  return (
    <div data-aos="fade-up" className="border border-border rounded-lg overflow-hidden bg-card">
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
