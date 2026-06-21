import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[19rem] sm:w-[30rem] h-auto rounded-xl p-6 border mt-4">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.name}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.imgUrl}
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={project.name}
          />
        </CardItem>

        {project.techStack && (
          <CardItem translateZ="40" className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-neutral-300 dark:border-neutral-700 px-2 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </CardItem>
        )}

        <div className="flex items-center justify-between mt-6">
          {project.link ? (
            <Link
              href={project.link}
              target="_blank"
              className="text-indigo-500 font-semibold"
            >
              Live Demo →
            </Link>
          ) : (
            <p>Not Available Now</p>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="text-neutral-600 dark:text-neutral-300 font-semibold"
            >
              GitHub
            </Link>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
