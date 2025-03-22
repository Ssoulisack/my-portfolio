import { Mail, Download } from "lucide-react";
import { developerData } from "../../data/developer";
import { SkillBadge } from "./SkillBadge";
import Image from "next/image";
export function ProfileHeader() {
  function downloadResume() {
    const link = document.createElement("a");
    link.href = "SoulisackDOUANGLIVILAY_Resume.pdf";
    link.download = "SoulisackDOUANGLIVILAY_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const { name, role, avatar, bio, coreSkills } = developerData;
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6">
      <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
        <Image
          src={avatar}
          alt={name}
          width={100} // Adjust as needed
          height={100} // Adjust as needed
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex gap-3 mt-4 md:mt-0 justify-center md:justify-start">
            <button
              className="flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-md transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              onClick={() => window.open("https://wa.me/2055168040", "_blank")}
            >
              <Mail size={18} />
              <span>Whatsapp</span>
            </button>
            <button
              onClick={() => downloadResume()}
              className="hover:bg-muted transition-delay-150 duration-700 ease-in-out hover:text-black flex items-center gap-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-md"
            >
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-muted-foreground">{role}</p>
          <p className="mt-2">{bio}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {coreSkills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
