"use client";
import { useState } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter(project => project.category === filter);
  return <div>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-hide">
        {categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 rounded-full whitespace-nowrap ${filter === category ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
            {category}
          </button>)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>;
}