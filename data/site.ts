export const site = {
  name: "Tejasvi A Javagal",
  role: "Aspiring Data Engineer & Software Engineer",
  tagline: "Python · SQL · ETL Pipelines · Backend Systems",
  description:
    "Portfolio of Tejasvi A Javagal, an aspiring Data Engineer and Software Engineer specializing in scalable ETL pipelines, data-intensive backend architectures, and intelligent systems.",
  github: "https://github.com/javagaltejasvi46",
  linkedin: "https://linkedin.com/in/tejasvijavagal",
  email: "tejasvijavagal@gmail.com",
  phone: "+91 8971964665",
  rawPhone: "8971964665",
  location: "Bengaluru, Karnataka, IN",
  resumeDriveUrl: "https://drive.google.com/file/d/10qxaZyDRhEJRiN9GR3brhBC3DzNRm5Uv/view?usp=sharing",
  resumeDownloadUrl: "/resume/tejasvi-javagal-resume.pdf",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.RENDER_EXTERNAL_URL ||
    "https://tejasvi-portfolio.onrender.com",
};

export const skills = {
  Languages: ["Python", "SQL", "JavaScript", "TypeScript", "C++", "C"],
  "Data & ETL": ["ETL Pipelines", "Data Pipelines", "Ingestion & Transformation", "Feature Engineering", "REST APIs", "Batch Processing"],
  Databases: ["PostgreSQL", "PostGIS", "MySQL", "SQLite3", "MongoDB (NoSQL)"],
  "Frameworks & Libraries": ["FastAPI", "Flask", "Django", "SQLAlchemy", "Pydantic", "PyTorch", "TensorFlow", "LangChain", "Pandas", "OpenCV"],
  "AI / ML": ["Deep Learning", "NLP", "LLMs", "Model Training & Inference", "TabNet", "GNN", "XGBoost", "Faster-Whisper", "Demucs"],
  "Systems / Infrastructure": ["Docker", "Git", "GitHub", "Linux", "Redis", "Celery", "WebSockets", "Vite", "React", "React Native"],
} as const;

export const education = {
  institution: "Reva University",
  degree: "B.Tech, Information Science",
  period: "Jul 2023 – Jul 2027",
  cgpa: "7.9 / 10.0",
  coursework: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems"],
};

export const certifications = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "Udemy",
  },
  {
    title: "DSA in Python",
    issuer: "Udemy",
  },
];

export const journey = [
  {
    label: "NOW",
    title: "Data & Systems Engineering",
    detail: "Designing high-throughput ETL pipelines, relational data schemas with PostgreSQL/PostGIS, and production backend services using FastAPI and Python.",
  },
  {
    label: "HACKATHONS",
    title: "Smart India Hackathon (SIH)",
    detail: "Built Garud Drishti: a multi-source geospatial data pipeline and early-warning risk scoring engine consolidating GSI/ISRO, IMD rainfall, and SMAP soil feeds.",
  },
  {
    label: "PROJECTS",
    title: "Pipelines to Deployed Systems",
    detail: "Shipped Sanjaya SmartRoute traffic ETL pipeline (10k+ records/run), SwarSanchar audio stem transformation pipeline, and Auralis real-time clinical platform.",
  },
  {
    label: "EDUCATION",
    title: "Reva University — B.Tech Information Science",
    detail: "Jul 2023 – Jul 2027 · CGPA 7.9/10.0 · Core focus in Data Structures, Database Management Systems, and Operating Systems.",
  },
];
