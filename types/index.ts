import { StaticImageData } from "next/image";

export type Project = {
  imgUrl: StaticImageData;
  theme: string;
  name: string;
  description: string;
  link?: string;
  techStack?: string[];
  github?: string;
};
