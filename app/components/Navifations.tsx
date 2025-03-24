"use client";
import { Home, Briefcase, Code, Mail, GraduationCap } from "lucide-react";
import Dock from "../block/Components/Dock/Dock";



export default function Navigation() {
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  // Example Usage

  const navItems = [
    {
      href: "#home",
      icon: <Home />,
      label: "Home",
      isActive: hash === "#home",
      onClick: () => {
        const element = document.getElementById("home");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      href: "#projects",
      icon: <Briefcase />,
      label: "Projects",
      isActive: hash === "#projects",
      onClick: () => {
        const element = document.getElementById("projects");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      href: "#skills",
      icon: <Code />,
      label: "Skills",
      isActive: hash === "#skills",
      onClick: () => {
        const element = document.getElementById("skills");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      href: "#experience",
      icon: <Briefcase />,
      label: "Experience",
      isActive: hash === "#experience",
      onClick: () => {
        const element = document.getElementById("experience");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      href: "#education",
      icon: <GraduationCap />,
      label: "Education",
      isActive: hash === "#education",
      onClick: () => {
        const element = document.getElementById("education");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      href: "#contact",
      icon: <Mail />,
      label: "Contact",
      isActive: hash === "#contact",
      onClick: () => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  return (
    <div>
     <Dock items={navItems} />
    </div>
  );
}
