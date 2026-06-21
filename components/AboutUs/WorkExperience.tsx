import { experiences } from "@/constants";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const WorkExperience = () => {
  return (
    <div className="py-16">
      <h3 className="text-2xl font-semibold text-start">Work Experience</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-300">
        <p>
          My professional journey began through internships and hands-on
          projects, where I gained practical experience in full-stack web
          development. Working with modern technologies and real-world
          applications has helped me develop strong problem-solving skills and a
          solid understanding of the software development lifecycle.
        </p>
      </div>
      <div className="mt-12 space-y-10 relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />

        {experiences.map((experience, idx) => (
          <div
            key={idx}
            className={cn(
              "relative flex items-center mb-12",
              idx % 2 === 0 ? "justify-start" : "justify-end",
            )}
          >
            {/* Center Dot */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10"
              style={{ backgroundColor: experience.iconBg }}
            >
              <Image
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>

            {/* Card */}
            <div
              className={cn(
                "w-[45%] bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl border-l-4",
                idx % 2 === 0 ? "mr-auto" : "ml-auto",
              )}
              style={{ borderColor: experience.iconBg }}
            >
              <h3 className="text-xl font-semibold text-white">
                {experience.title}
              </h3>

              <p className="text-sm text-slate-400 mb-2">
                {experience.company_name} • {experience.date}
              </p>

              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-300">
                {experience.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="py-10">
        <h3 className="text-2xl font-semibold">Currently Learning</h3>

        <p className="mt-4 text-slate-300">
          I&apos;m currently focused on improving my expertise in scalable
          application architecture, advanced TypeScript, database design,
          performance optimization, and modern full-stack development practices.
          I also regularly solve data structures and algorithms problems to
          strengthen my problem-solving and analytical thinking skills.
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
