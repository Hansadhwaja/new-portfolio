import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    mui,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    rails,
    shadcn,
} from "../assets/icons";

import {
    animevault,
    carhub,
    gofood,
    movieland,
    nike,
    promtopia,
    threads,
    summiz,
     mms,
    zentry,
    nullclass,
    pixelcompute,
    travel,
    yoom

} from '../assets/images'

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
     {
        imageUrl: rails,
        name: "Ruby On Rails",
        type: "Backend",
    },
     {
        imageUrl: shadcn,
        name: "Shadcn/ui",
        type: "Frontend",
    },
];

export const projects = [
  {
    imgUrl: zentry,
    theme: "btn-back-red",
    name: "Zentry",
    description:
      "A frontend replica of the official Zentry Gaming website featuring smooth, modern animations powered by GSAP for a dynamic user experience.",
    link: "https://zentry-umber-sigma.vercel.app",
  },
  {
    imgUrl: mms,
    theme: "btn-back-yellow",
    name: "Mess Management System",
    description:
      "A comprehensive solution for managing hostel mess operations, including meal scheduling, user roles, and billing automation.",
    link: "https://mess-management-system-umber.vercel.app",
  },
  {
    imgUrl: yoom,
    theme: "btn-back-blue",
    name: "Yoom",
    description:
      "A video conferencing app with support for real-time audio/video calls, chat, and screen sharing, inspired by platforms like Zoom.",
    link: "https://yoom-wheat-three.vercel.app",
  },
  {
    imgUrl: promtopia,
    theme: "btn-back-red",
    name: "Promptopia",
    description:
      "A community-driven platform for discovering, creating, and sharing AI-generated prompts for tools like ChatGPT.",
    link: "https://promptopia-jet-six.vercel.app",
  },
  {
    imgUrl: animevault,
    theme: "btn-back-blue",
    name: "Anime Vault",
    description:
       "A static anime listing website with infinite scroll functionality, dynamically loading 8 new anime titles as the user scrolls down.",
    link: "https://anime-vault-three-iota.vercel.app",
  },
  {
    imgUrl: gofood,
    theme: "btn-back-yellow",
    name: "Go Food",
    description:
       "An online food ordering website where users can sign up, log in, browse available food items, and place orders—focused on core ordering functionality without detailed restaurant listings.",
    link: "https://go-food-new-two.vercel.app",
  },
  {
    imgUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'A full-stack clone of Meta\'s "Threads" platform, enabling users to create accounts, post threads, and interact with discussions in real-time.',
    link: "https://threads-one-sooty.vercel.app",
  },
  {
    imgUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "An AI-powered tool that extracts key points from lengthy articles and blogs, providing clear and concise summaries instantly.",
    link: "https://summerizer-ai-two.vercel.app",
  },
  {
    imgUrl: movieland,
    theme: "btn-back-black",
    name: "Movie Finding App",
    description:
      "A simple movie search app that fetches data from the OMDB API and displays results based on the user's search term.",
    link: "https://movieland-three.vercel.app",
  },
  {
    imgUrl: nike,
    theme: "btn-back-orange",
    name: "Nike App",
    description:
      "A responsive clone of the Nike e-commerce site, showcasing products, featured collections, and a stylish shopping experience.",
    link: "https://nike-copy.vercel.app",
  },
  {
    imgUrl: travel,
    theme: "btn-back-yellow",
    name: "Travel App",
    description:
      "A visually appealing static travel website designed to showcase destinations and travel packages with a modern, responsive layout.",
    link: "https://travel-app-sage-tau.vercel.app",
  },
  {
    imgUrl: carhub,
    theme: "btn-back-blue",
    name: "Car hub",
    description:
      "A car marketplace web app to search, compare, and discover car listings with dynamic filtering and responsive design.",
    link: "https://cars-showcase-ebon.vercel.app",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer-Trainee",
    company_name: "PixelCompute",
    icon: pixelcompute,
    iconBg: "#8ad6cc",
    date: "Jan 2025 - April 2025",
    points: [
      "Gained hands-on experience in full stack web development using HTML, CSS, JavaScript, React, Ruby, SQL, and Ruby on Rails.",
      "Successfully completed multiple assignments and mini-projects covering both frontend and backend technologies.",
      "Built and styled responsive user interfaces using React and Tailwind CSS.",
      "Developed backend APIs and database interactions using Ruby on Rails and SQL",
      "Applied version control best practices using Git for managing code across assignments and projects",
      "Demonstrated consistent performance by completing all assigned tasks and projects on time.",
    ],
  },
  {
    title: "Full Stack Developer-Intern",
    company_name: "NullClass",
    icon: nullclass,
    iconBg: "#accbe1",
    date: "May 2024 - June 2024",
    points: [
      "Developed a fully functional Internshala clone as a full-stack web application using React, Node.js, Express.js, MongoDB, and Redux Toolkit.",
      "Implemented Google Login for seamless and secure user authentication.",
      "Integrated OTP-based email verification using Nodemailer to enhance account security and prevent unauthorized access.",
      "Enabled multi-language support (English, Hindi, Chinese, Portuguese, Spanish, French) to broaden global reach and improve accessibility.",
      "Followed best practices in RESTful API design, state management, and responsive UI development.",
      "Gained hands-on experience working in a collaborative, remote environment simulating real-world development workflows",
    ],
  },
];