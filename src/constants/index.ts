import {
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  vzou,
  tripguide,
  graduation,
  award,
  code,
  vision,
  sce,
  gilo,
  helpo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "B.Sc. in Software Engineering",
    icon: graduation,
  },
  {
    title: `Valedictorian & Summa cum laude`,
    icon: award,
  },
  {
    title: "Full-Stack Developer",
    icon: code,
  },
  {
    title: "Computer Vision",
    icon: vision,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
];

const experiences = [
  {
    title: "Teaching Assitant",
    company_name: "SCE",
    icon: sce,
    iconBg: "#f3f3f3",
    date: "2022 - Present",
    points: [
      "Introduction to Compilation.",
      "Data Structures & Algorithms.",
      "Introduction to Databases.",
      "Teaching, creating exercises, and tests, and gaining deep knowledge in the courses above.",
    ],
  },
  {
    title: "Business Owner",
    company_name: "Gilo",
    icon: gilo,
    iconBg: "#E6DEDD",
    date: "2017 - 2022",
    points: [
      "Multitasking.",
      "Self-management initiative.",
      "Self-driven.",
      "Working with customers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Vzou",
    description:
      "Web-based simulator with interactive animations to visualize data structures and complex algorithms with seamless animation and precise control over algorithm steps. soon to be integrated into SCE study program.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Framer-Motion",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: vzou,
    source_code_link: "https://github.com/",
  },
  {
    name: "Helpo",
    description: `As a member of an agile team in a project management course, we successfully
        developed a centralized website that connects registered associations, managers,
        volunteers, and those in need in Israel.`,
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "pink-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "REST-API",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
    ],
    image: helpo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Delivery Simulator",
    description: `App that simulates tracking system of packages between several post offices and
      distribution centers. Includes use of Multi-Threading, GUI and various design patterns.`,
    tags: [
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
