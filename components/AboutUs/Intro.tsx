import React from "react";

const Intro = () => {
  return (
    <div className="mt-32">
      <h1 className="lg:text-6xl md:text-4xl text-2xl">
        Hi, I&apos;m{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold from-cyan-500 to-blue-500">
          Hansadhwaja Biswal
        </span>
      </h1>
      <p className="mt-5">
        I&apos;m Hansadhwaja Biswal, a Full Stack Developer from India with a
        passion for building modern web applications. I primarily work with
        Next.js, React, TypeScript, MongoDB, and Tailwind CSS to create fast,
        scalable, and user-friendly digital experiences.
      </p>
    </div>
  );
};

export default Intro;
