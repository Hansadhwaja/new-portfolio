import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

interface Props {
  projects: Project[];
}

const ProjectLists = ({ projects }: Props) => {
  return (
    <div className="mt-10 space-y-16">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};
export default ProjectLists;
