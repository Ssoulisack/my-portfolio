import { skills } from "../data/skills";

export function SkillSection() {
  return (
    <div className="slide-in-fade-left">
      
      {/* Descriptions for Skill Levels */}
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <div className="text-sm text-gray-500 mb-6">
        <p><strong>Beginner:</strong> Basic understanding and ability to perform simple tasks.</p>
        <p><strong>Intermediate:</strong> Good working knowledge, able to handle most tasks independently.</p>
        <p><strong>Professional:</strong> Expert-level proficiency, capable of solving complex problems efficiently.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-4">
              {skillList.map((skill) => (
                <div key={skill.name} className="flex justify-between items-center p-3 bg-secondary rounded-md">
                  {/* Skill Name */}
                  <div className="flex items-center px-5 gap-4">
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  {/* Level and Progress Bar */}
                  <div className="flex flex-col items-end px-5 w-full">
                    <span className="text-sm text-gray-600">{skill.level}</span>
                    <div className="w-full h-2 bg-secondary-foreground/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
