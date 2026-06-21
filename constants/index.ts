import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  react,
  tailwindcss,
  typescript,
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
  yoom,
  rhf,
  zod,
  qit,
  storepilot,
  paintpro,
} from "../assets/images";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
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
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: shadcn,
    name: "Shadcn/ui",
    type: "Frontend",
  },
  {
    imageUrl: rhf,
    name: "React Hook Form",
    type: "Frontend",
  },
  {
    imageUrl: zod,
    name: "Zod",
    type: "Validation",
  },
];

export const featuredProjects = [
  {
    imgUrl: paintpro,
    theme: "btn-back-orange",
    name: "Paint Pro",
    description:
      "A professional paint estimation and calculation tool designed to help homeowners, contractors, and painters estimate paint requirements, project costs, wall area coverage, and material quantities with accuracy.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Zod",
    ],
    github: "https://github.com/Hansadhwaja/paintpro",
    link: "https://paintpros.vercel.app",
  },
  {
    imgUrl: storepilot,
    theme: "btn-back-green",
    name: "StorePilot",
    description:
      "A full-stack paint store management system built for a real business. Features inventory management, sales tracking, purchase records, dealer management, cash flow monitoring, and business analytics.",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn UI",
      "React Hook Form",
      "Zod",
    ],
  },

  {
    imgUrl: mms,
    theme: "btn-back-yellow",
    name: "Mess Management System",
    description:
      "A QR-based hostel mess management platform with role-based access control, attendance tracking, meal management, and administrative dashboards.",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Clerk", "QR Code"],
    github: "https://github.com/Hansadhwaja/mess-management-system",
    link: "https://mess-management-system-umber.vercel.app",
  },

  // {
  //   imgUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     "A social media platform inspired by Threads with authentication, threaded discussions, user profiles, and community interactions.",
  //   techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Clerk"],
  //   github: "https://github.com/Hansadhwaja/threads-clone",
  //   link: "https://threads-one-sooty.vercel.app",
  // },

  {
    imgUrl: gofood,
    theme: "btn-back-yellow",
    name: "Go Food",
    description:
      "A full-stack food ordering application featuring authentication, menu browsing, cart management, and order placement.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    github: "https://github.com/Hansadhwaja/go-food-new",
    link: "https://go-food-new-two.vercel.app",
  },

  {
    imgUrl: zentry,
    theme: "btn-back-red",
    name: "Zentry",
    description:
      "A pixel-perfect recreation of the Zentry website focused on advanced GSAP animations and immersive frontend interactions.",
    techStack: ["React", "GSAP", "Tailwind CSS", "Vite"],
    github: "https://github.com/Hansadhwaja/zentry",
    link: "https://zentry-umber-sigma.vercel.app",
  },
];

export const otherProjects = [
  {
    imgUrl: yoom,
    theme: "btn-back-blue",
    name: "Yoom",
    description:
      "A real-time video conferencing application with screen sharing, chat, and meeting management.",
    techStack: ["Next.js", "TypeScript", "Stream"],
    github: "",
    link: "https://yoom-wheat-three.vercel.app",
  },

  {
    imgUrl: promtopia,
    theme: "btn-back-red",
    name: "Promptopia",
    description:
      "A platform for discovering, creating, and sharing AI prompts.",
    techStack: ["Next.js", "MongoDB", "NextAuth"],
    github: "",
    link: "https://promptopia-jet-six.vercel.app",
  },

  {
    imgUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer",
    description:
      "An AI-powered application that generates concise summaries from lengthy articles.",
    techStack: ["React", "Redux Toolkit", "Rapid API"],
    github: "",
    link: "https://summerizer-ai-two.vercel.app",
  },
  {
    imgUrl: animevault,
    theme: "btn-back-blue",
    name: "Anime Vault",
    description:
      "An anime discovery website with infinite scrolling and dynamic content loading.",
    techStack: ["Next.js", "TypeScript", "Server Actions"],
    github: "",
    link: "https://anime-vault-three-iota.vercel.app",
  },

  {
    imgUrl: nike,
    theme: "btn-back-orange",
    name: "Nike App",
    description: "A responsive e-commerce landing page inspired by Nike.",
    techStack: ["React", "Tailwind CSS"],
    github: "",
    link: "https://nike-copy.vercel.app",
  },

  {
    imgUrl: travel,
    theme: "btn-back-yellow",
    name: "Travel App",
    description:
      "A modern travel landing page showcasing destinations and travel packages.",
    techStack: ["React", "Tailwind CSS"],
    github: "",
    link: "https://travel-app-sage-tau.vercel.app",
  },

  {
    imgUrl: movieland,
    theme: "btn-back-black",
    name: "Movie Finder",
    description: "A movie search application powered by the OMDb API.",
    techStack: ["React", "OMDb API"],
    github: "",
    link: "https://movieland-three.vercel.app",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Quantum IT Innovation",
    icon: qit,
    iconBg: "#f5c542",
    date: "Sep 2025 - Present",
    points: [
      "Working on full-stack web applications using modern JavaScript technologies and industry-standard development practices.",
      "Participating in daily standups, sprint planning, code reviews, and client meetings as part of an agile development team.",
      "Developing and maintaining frontend features with React and backend functionality through REST APIs.",
      "Collaborating with team members to implement new features, fix bugs, and improve application performance.",
      "Using Git and GitHub for version control, code collaboration, and deployment workflows.",
      "Gaining hands-on experience working on real-world client projects in a professional software development environment.",
    ],
  },
  {
    title: "Full Stack Developer Trainee",
    company_name: "PixelCompute",
    icon: pixelcompute,
    iconBg: "#8ad6cc",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Completed intensive training in full-stack web development covering HTML, CSS, JavaScript, React, SQL, Ruby, and Ruby on Rails.",
      "Built multiple frontend and backend projects to strengthen practical software development skills.",
      "Developed responsive and user-friendly interfaces using React and modern CSS frameworks.",
      "Implemented backend functionality, database operations, and RESTful APIs using Ruby on Rails and SQL.",
      "Used Git and GitHub for version control, collaboration, and project management.",
      "Delivered assignments and projects within deadlines while following software development best practices.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "NullClass",
    icon: nullclass,
    iconBg: "#accbe1",
    date: "May 2024 - Jun 2024",
    points: [
      "Built a full-stack Internshala clone using React, Node.js, Express.js, MongoDB, and Redux Toolkit.",
      "Implemented Google Authentication to provide a secure and seamless login experience.",
      "Integrated OTP-based email verification using Nodemailer to improve account security.",
      "Added multilingual support across six languages to enhance accessibility for a wider audience.",
      "Designed and consumed RESTful APIs while managing application state with Redux Toolkit.",
      "Worked in a remote team environment, following industry-standard development workflows and version control practices.",
    ],
  },
];
