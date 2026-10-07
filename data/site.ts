export const site = {
  name: "Tejasvi Javagal",
  role: "Software Engineer",
  description:
    "Portfolio of Tejasvi Javagal, a software engineer building intelligent systems, AI products and full-stack applications.",
  github: "https://github.com/javagaltejasvi46",
  linkedin: "", // Add your LinkedIn URL here.
  email: "", // Add your preferred contact email here.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tejasvi-portfolio.vercel.app",
};

export const skills = {
  Languages: ["Python", "C++", "JavaScript", "TypeScript"],
  Frontend: ["React", "React Native", "HTML", "CSS"],
  Backend: ["FastAPI", "Django", "Flask", "REST APIs"],
  "AI / ML": ["XGBoost", "PyTorch", "TensorFlow", "Whisper"],
  Databases: ["PostgreSQL", "SQLite", "MongoDB"],
  "Systems / Infrastructure": ["Docker", "Redis", "Celery", "Git", "Linux"],
} as const;

export const journey = [
  { label: "NOW", title: "Building intelligent software", detail: "Focused on practical AI systems, backend architecture and polished product experiences." },
  { label: "PROJECTS", title: "From experiments to working products", detail: "Turning data, models and interfaces into complete systems." },
  { label: "HACKATHONS", title: "Building under pressure", detail: "Using short feedback loops to explore ambitious technical ideas." },
  { label: "EDUCATION", title: "Add your education here", detail: "This intentionally editable entry keeps the timeline accurate as you update it." },
];
