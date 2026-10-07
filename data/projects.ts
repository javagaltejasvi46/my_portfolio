export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  github?: string;
  status: string;
  problem: string;
  solution: string;
  engineering: string[];
  challenges: string[];
  result: string;
  visual: "map" | "audio" | "stems" | "route" | "vision";
};

export const projects: Project[] = [
  {
    slug: "garud-drishti", number: "01", title: "GARUD DRISHTI", eyebrow: "INTELLIGENT RISK SYSTEM",
    description: "AI-powered landslide susceptibility and dynamic risk monitoring platform.",
    technologies: ["XGBoost", "PostGIS", "FastAPI", "Redis", "Celery", "React", "React Native"],
    status: "IN DEVELOPMENT",
    problem: "Landslide risk requires context from terrain, environmental signals and changing conditions. A useful tool must make complex risk information legible to people making time-sensitive decisions.",
    solution: "GARUD DRISHTI brings susceptibility modelling, dynamic risk workflows and geospatial product surfaces into one system. It is designed as an editable, service-oriented platform rather than a static model demo.",
    engineering: ["Geospatial data modelling with PostgreSQL and PostGIS", "XGBoost-oriented susceptibility workflows", "FastAPI service boundary for product clients", "Queued background work with Redis and Celery"],
    challenges: ["Keeping spatial data and product views aligned", "Separating long-running work from request paths", "Presenting risk without overstating certainty"],
    result: "An active intelligent-systems project focused on making land-risk information more actionable.", visual: "map"
  },
  {
    slug: "auralis", number: "02", title: "AURALIS", eyebrow: "REAL-TIME CLINICAL WORKFLOW",
    description: "AI-powered real-time medical transcription and session management platform.",
    technologies: ["React Native", "FastAPI", "Faster-Whisper", "Gemini", "WebSockets", "SQLite"],
    github: "https://github.com/javagaltejasvi46/Auralis", status: "BUILT",
    problem: "Conversations produce important detail, but preserving and structuring it reliably during a live session is difficult.",
    solution: "AURALIS connects multilingual transcription, speaker-aware session handling and AI-assisted summaries in a real-time mobile experience.",
    engineering: ["Streaming updates over WebSockets", "Faster-Whisper transcription pipeline", "Speaker diarization-aware session structure", "Local SQLite session persistence"],
    challenges: ["Managing real-time state across a live session", "Making transcript output readable and reviewable", "Keeping AI assistance additive to the underlying record"],
    result: "A focused product surface for capturing, organizing and revisiting live session context.", visual: "audio"
  },
  {
    slug: "swarsanchar", number: "03", title: "SWARSANCHAR", eyebrow: "AUDIO TOOLING",
    description: "AI-powered audio processing suite for downloading, separating and transforming audio sources.",
    technologies: ["React", "Electron", "TypeScript", "Python", "Flask", "Demucs", "yt-dlp", "FFmpeg"],
    github: "https://github.com/javagaltejasvi46/SwarSanchar", status: "BUILT",
    problem: "Audio workflows often require several tools and formats, interrupting the creative flow between a source and usable stems.",
    solution: "SWARSANCHAR packages acquisition, separation and transformation tasks into a desktop-oriented workflow with a clear processing surface.",
    engineering: ["Electron desktop shell with a React interface", "Python/Flask processing service", "Demucs stem separation", "FFmpeg-compatible audio transformations"],
    challenges: ["Coordinating long-running media operations", "Representing processing states clearly", "Bridging desktop UI and local processing"],
    result: "An integrated suite for practical audio processing workflows.", visual: "stems"
  },
  {
    slug: "sanjaya", number: "04", title: "SANJAYA", eyebrow: "EXPLAINABLE MOBILITY",
    description: "Intelligent traffic analysis and routing system using explainable machine learning and graph-based routing.",
    technologies: ["TabNet", "Explainable AI", "Graph Neural Networks", "Routing", "Traffic analysis"], status: "EXPERIMENTAL",
    problem: "Traffic recommendations are hard to trust when users cannot understand the forces influencing a route or prediction.",
    solution: "SANJAYA explores traffic analysis through explainable ML and graph-based routing so prediction and decision-making remain connected.",
    engineering: ["TabNet-oriented tabular modelling", "Explainability as a first-class output", "Graph representations for routing", "System thinking across prediction and navigation"],
    challenges: ["Connecting model insights to routing decisions", "Keeping explanations useful rather than decorative", "Reasoning over a changing network"],
    result: "An intelligent-routing exploration centered on transparent system behavior.", visual: "route"
  },
  {
    slug: "netra", number: "05", title: "NETRA.ai", eyebrow: "REPOSITORY-DRIVEN PROFILE",
    description: "An AI project ready to be documented directly from its repository source of truth.",
    technologies: ["Update from README", "Project data", "Case study"], status: "READY TO UPDATE",
    problem: "This portfolio should stay accurate as projects evolve and repositories are cleaned up.",
    solution: "NETRA.ai is intentionally structured as a data-driven profile. Replace this concise source entry with verified README details before publishing.",
    engineering: ["Centralized, editable project data", "Dedicated route generated from the same source", "No unsupported technical claims"],
    challenges: ["Maintaining accurate public project documentation"],
    result: "A deliberately safe placeholder that is ready for verified repository content.", visual: "vision"
  }
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
