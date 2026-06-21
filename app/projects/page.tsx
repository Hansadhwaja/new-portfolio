"use client";

import ContactUsPreview from "@/components/ContactUsPreview";
import ProjectLists from "@/components/Projects/ProjectLists";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { featuredProjects, otherProjects } from "@/constants";

const ProjectsPage = () => {
  return (
    <div className="max-container">
      <div className="mt-12">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
          My <span className="bg_gradient_r">Projects</span>
        </h1>
        <p className="mt-5">
          Here are some of the projects I&apos;ve built throughout my learning
          and professional journey. Each project reflects my approach to
          problem-solving, user experience, and full-stack development. They
          demonstrate my experience working with modern technologies such as
          Next.js, React, TypeScript, MongoDB, and Tailwind CSS.
        </p>
      </div>

      <div className="py-8 space-y-8">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <TracingBeam>
          <ProjectLists projects={featuredProjects} />
        </TracingBeam>

        <h2 className="mt-20 text-3xl font-bold">Other Projects</h2>
        <TracingBeam>
          <ProjectLists projects={otherProjects} />
        </TracingBeam>
      </div>

      <ContactUsPreview />
    </div>
  );
};

export default ProjectsPage;
