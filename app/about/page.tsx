import ContactUsPreview from "@/components/ContactUsPreview";
import { Spotlight } from "@/components/ui/Spotlight";
import { skills, experiences } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full rounded-md flex-center flex-col max-container relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="mt-32">
        <h1 className="lg:text-6xl md:text-4xl text-2xl">
          Hello, I am{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold from-cyan-500 to-blue-500">
            Hansadhwaja
          </span>
        </h1>
        <p className="mt-5">
          A Web Developer based in India, specializing in crafting modern,
          full-stack applications using the MERN stack (MongoDB, Express, React,
          Node.js). Passionate about building responsive, user-focused web
          experiences.
        </p>
      </div>
      <div className="mt-10 w-full">
        <h2 className="text-2xl font-semibold text-start">My Skills</h2>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="block-container w-20 h-20">
                <div className="btn-back bg-white rounded-xl" />
                <div className="btn-front rounded-xl flex-center">
                  <Image
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-slate-300 font-semibold text-center mt-2">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="text-2xl font-semibold text-start">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-300">
          <p>
            I want to work with all sorts of companies — startups, studios, or
            solo founders — to level up my skills and team up with smart people.
            I&apos;ve completed two internships focused on MERN stack training,
            which helped me build a solid foundation in full-stack development.
            While I haven&apos;t worked on live projects yet, I&apos;ve spent
            time building my own apps, exploring new tools, and learning how
            real-world development works. Here&apos;s the rundown:
          </p>
        </div>
        <div className="mt-12 space-y-10 relative">
          <div className="absolute top-0 left-6 w-1 bg-gray-300 h-full rounded-full" />

          {experiences.map((experience, idx) => (
            <div key={idx} className="relative pl-16">
              <div
                className="absolute top-1 left-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: experience.iconBg }}
              >
                <Image
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>

              <div
                className="bg-white p-6 rounded-md shadow-md border-l-4"
                style={{ borderColor: experience.iconBg }}
              >
                <h3 className="text-xl font-semibold text-black font-poppins">
                  {experience.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {experience.company_name} • {experience.date}
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUsPreview />
    </div>
  );
};

export default page;
