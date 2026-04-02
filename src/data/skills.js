// src/data/skills.js
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPython, SiFirebase,
  SiGit, SiGithub, SiDocker, SiPostman, SiFigma, SiVscodium,
} from "react-icons/si";

export const skills = [
  // Frontend
  { name: "React", icon: SiReact, level: 90, category: "Frontend", color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, level: 88, category: "Frontend", color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, level: 95, category: "Frontend", color: "#E34F26" },
  { name: "CSS3", icon: SiCss, level: 85, category: "Frontend", color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, category: "Frontend", color: "#38B2AC" },
  { name: "Next.js", icon: SiNextdotjs, level: 75, category: "Frontend", color: "#000000" },
  // Backend
  { name: "Node.js", icon: SiNodedotjs, level: 80, category: "Backend", color: "#339933" },
  { name: "Express.js", icon: SiExpress, level: 78, category: "Backend", color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, level: 75, category: "Backend", color: "#47A248" },
  { name: "MySQL", icon: SiMysql, level: 70, category: "Backend", color: "#4479A1" },
  { name: "Python", icon: SiPython, level: 72, category: "Backend", color: "#3776AB" },
  { name: "Firebase", icon: SiFirebase, level: 68, category: "Backend", color: "#FFCA28" },
  // Tools
  { name: "Git", icon: SiGit, level: 85, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, level: 88, category: "Tools", color: "#181717" },
  { name: "Docker", icon: SiDocker, level: 60, category: "Tools", color: "#2496ED" },
  { name: "Postman", icon: SiPostman, level: 80, category: "Tools", color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, level: 65, category: "Tools", color: "#F24E1E" },
  { name: "VS Code", icon: SiVscodium, level: 92, category: "Tools", color: "#007ACC" },
];

export const skillCategories = ["All", "Frontend", "Backend", "Tools"];
