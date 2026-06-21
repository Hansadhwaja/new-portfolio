import { skills } from "@/constants";
import Image from "next/image";
import React from "react";

const SkillsSection = () => {
  return (
    <div className="mt-10 w-full">
      <h2 className="text-2xl font-semibold text-start">My Skills</h2>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div key={skill.name} className="w-24 flex flex-col items-center">
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

            <p className="mt-2 text-center text-sm leading-4 text-slate-300 font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
