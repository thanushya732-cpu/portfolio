// src/data/projects.js
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export const projects = [
  {
    id: 1,
    title: "ShopNexus – E-Commerce Platform",
    description:
      "A full-stack e-commerce web application with product management, cart, user authentication, and payment integration.",
    image: project1,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    category: "Web",
    github: "https://github.com/thanushya",
    demo: "https://shopnexus-demo.vercel.app",
  },
  {
    id: 2,
    title: "TaskFlow – Project Manager",
    description:
      "A Kanban-style task management app with drag-and-drop, team collaboration, real-time updates, and deadline tracking.",
    image: project2,
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    github: "https://github.com/thanushya",
    demo: "https://taskflow-demo.vercel.app",
  },
  {
    id: 3,
    title: "SkyPulse – Weather App",
    description:
      "A beautiful weather dashboard with location-based forecasts, animated weather icons, and 7-day predictions.",
    image: project3,
    tech: ["React", "OpenWeather API", "CSS3", "Chart.js"],
    category: "Web",
    github: "https://github.com/thanushya",
    demo: "https://skypulse-demo.vercel.app",
  },
];

export const projectCategories = ["All", "Web", "Mobile", "API"];
