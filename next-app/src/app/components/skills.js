import { FaReact, FaNodeJs, FaGitAlt, FaBug } from "react-icons/fa";
import { MdOutlineFactCheck } from "react-icons/md";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMaterialdesign,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiJest,
  SiPostman,
  SiJsonwebtokens,
  SiFirebase,
  SiCypress,
} from "react-icons/si";
import { PlaywrightIcon } from "../icons/Playwright";

export const skills = [
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Material UI", icon: <SiMaterialdesign color="#0081CB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Nest.js", icon: <SiNestjs color="#E0234E" /> },
  { name: "Express.js", icon: <SiExpress color="#80e3ec" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#6185F1" /> },
  { name: "MySQL", icon: <SiMysql color="#ABC8DD" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "JWT", icon: <SiJsonwebtokens color="#E023A1" /> },
  { name: "AppCheck", icon: <SiFirebase color="#FFCA28" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "Jest", icon: <SiJest color="#C21325" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Cypress", icon: <SiCypress color="#69D3A7" /> },
  { name: "Playwright", icon: <PlaywrightIcon /> },
  { name: "Manual Testing", icon: <MdOutlineFactCheck color="#00838F" /> },
  { name: "Test Case Design", icon: <MdOutlineFactCheck color="#00838F" /> },
  {
    name: "Requirements Analysis",
    icon: <MdOutlineFactCheck color="#00838F" />,
  },
  { name: "Defect Tracking", icon: <FaBug color="#00838F" /> },
];
