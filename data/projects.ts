export type ArchitectureLayer = {
  step: string;
  title: string;
  subtitle: string;
  components: string[];
};

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
  image: string; // The face / UI interface image
  architectureImage: string; // The system architecture infographic
  architectureDescription: string;
  architectureFlow: ArchitectureLayer[];
};

export const projects: Project[] = [
  {
    slug: "garud-drishti",
    number: "01",
    title: "GARUD DRISHTI",
    eyebrow: "AI-POWERED LANDSLIDE INTELLIGENCE PLATFORM (SIH)",
    description: "An end-to-end system that combines satellite data, environmental intelligence, ML risk modelling and citizen reports to provide early warnings, risk mapping and actionable insights for the North Eastern Region.",
    technologies: ["React", "React Native", "TypeScript", "Vite", "FastAPI", "PostgreSQL", "PostGIS", "Redis", "Celery", "XGBoost"],
    github: "https://github.com/Ysh0910/garud-drishti",
    status: "BUILT · SIH 2026",
    problem: "Landslide risk requires consolidating disparate terrain, geology, and dynamic rainfall and soil-moisture data into unified, time-sensitive intelligence for authority-facing disaster management.",
    solution: "Engineered an end-to-end geospatial ETL pipeline integrating GSI/ISRO historical records, IMD/GPM rainfall data, and SMAP soil moisture into structured static and dynamic feature stores, driving a two-stage risk-scoring pipeline across 6h/24h/48h/72h horizons.",
    engineering: [
      "Consolidated heterogeneous geospatial feeds (GSI/ISRO, IMD/GPM, SMAP) into unified static and dynamic feature stores",
      "Designed high-performance PostgreSQL/PostGIS schema optimized for GIS spatial lookups and time-series risk queries",
      "Transformed raw satellite and sensor data into model-ready features (elevation, slope, aspect, land cover, soil moisture aggregates)",
      "FastAPI backend service with asynchronous task processing via Redis and Celery"
    ],
    challenges: [
      "Harmonizing disparate spatial resolutions and temporal frequencies across multi-source feeds",
      "Optimizing spatial joins and queries on multi-gigabyte terrain datasets",
      "Balancing pipeline maintainability with downstream model accuracy for authority-facing risk outputs"
    ],
    result: "Deployed a production-grade geospatial data pipeline powering a GIS-backed risk engine with automated multi-horizon risk scoring.",
    visual: "map",
    image: "/projects/garud-drishti.png",
    architectureImage: "/projects/garud-drishti-architecture.png",
    architectureDescription: "End-to-end landslide intelligence architecture combining satellite imagery (Sentinel-1 SAR / Sentinel-2 Optical), multi-source weather data, two-stage XGBoost risk modeling, PostgreSQL/PostGIS spatial features, Celery async queues, and citizen/authority surfaces.",
    architectureFlow: [
      {
        step: "01",
        title: "DATA SOURCES",
        subtitle: "MULTI-SOURCE ENVIRONMENTAL & GEOSPATIAL",
        components: [
          "Satellite Imagery: Sentinel-1 (SAR) & Sentinel-2 (Optical)",
          "Rainfall & Environmental: IMD / NASA / GPM soil moisture & temp",
          "GIS & Topographic Layers: GSI / Bhuvan DEM, slope & lithology",
          "Citizen Field Reports: Geo-tagged photos, videos & road blockages"
        ]
      },
      {
        step: "02",
        title: "INGESTION & PROCESSING",
        subtitle: "DATA PIPELINE & FEATURE ENGINEERING",
        components: [
          "Data Ingestion: Sentinel Hub / GEE & weather data collection",
          "Preprocessing: Cloud masking, SAR backscatter & raster alignment",
          "Feature Engineering: Slope, aspect, elevation & rainfall accumulation",
          "Proximity Analysis: Distances to roads, rivers & settlements"
        ]
      },
      {
        step: "03",
        title: "ML RISK ENGINE",
        subtitle: "TWO-STAGE XGBOOST MODELLING",
        components: [
          "Model 1: Landslide Susceptibility (Static Terrain & Geology)",
          "Model 1 Output: High-resolution Susceptibility Map (0 to 1)",
          "Model 2: Dynamic Landslide Risk (Real-time Rainfall & Time-Series)",
          "Model 2 Output: Dynamic Risk Map (Low / Moderate / High)"
        ]
      },
      {
        step: "04",
        title: "GEOSPATIAL INTELLIGENCE",
        subtitle: "REGIONAL RISK MAPPING & IMPACT ANALYSIS",
        components: [
          "Risk Mapping (GIS): Real-time risk layers & hotspot detection",
          "Exposure Analysis: Population exposure & critical infrastructure",
          "Road Connectivity Analysis: Blockage probability & alternate routes",
          "Transport Corridor Monitoring: NH-10, NH-106, NH-54"
        ]
      },
      {
        step: "05",
        title: "BACKEND & ASYNC SERVICES",
        subtitle: "SCALABLE API & ASYNC PIPELINE",
        components: [
          "FastAPI Backend API: REST APIs, Auth & WebSocket live streams",
          "PostgreSQL + PostGIS: Geospatial data storage & risk maps",
          "Redis: Cache, Celery task queue & WebSocket pub/sub",
          "Celery Workers: Model inference jobs & automated map generation"
        ]
      },
      {
        step: "06",
        title: "USER INTERFACES & ALERTS",
        subtitle: "CITIZEN APP, DASHBOARD & ALERTS",
        components: [
          "Citizen Mobile App: React Native + TypeScript with travel safety checks",
          "Authority Dashboard: React + TypeScript + Vite situational console",
          "Human-in-the-Loop: Review, verification & false report filtering",
          "Dissemination: Push notifications, SMS alerts & public advisories"
        ]
      }
    ]
  },
  {
    slug: "sanjaya",
    number: "02",
    title: "SANJAYA INSIGHT ENGINE",
    eyebrow: "AI-POWERED TRAFFIC INSIGHTS & PREDICTION SYSTEM",
    description: "Sanjaya Insight Engine uses a combination of deep learning (TabNet) and Graph Neural Networks (GNN) to analyze live and historical traffic data, predict congestion and provide actionable traffic insights through a visual dashboard.",
    technologies: ["Python", "PyTorch", "TabNet", "GNN", "OpenCV", "React", "FastAPI", "PostgreSQL", "Folium", "Docker"],
    github: "https://github.com/javagaltejasvi46/mini-project",
    status: "BUILT",
    problem: "Urban traffic prediction systems often act as black boxes with static data snapshots, failing to adapt to evolving congestion patterns or explain why a particular route was recommended.",
    solution: "Designed a multi-source traffic ingestion and transformation pipeline extracting raw traffic feeds, transforming features with TabNet deep learning and GNN spatial graph structures, and loading structured outputs into PostgreSQL and interactive visual dashboards.",
    engineering: [
      "Engineered multi-source ETL pipeline processing 10K+ traffic records per run using FastAPI",
      "Modelled relational data in PostgreSQL for historical traffic snapshots and wrote optimized aggregation queries across 50+ road segments",
      "Trained hybrid TabNet + Graph Neural Network (GNN) architecture for traffic cause and delay prediction",
      "Implemented an automated feedback loop that retrains the model every 100 samples, sustaining 75–85% prediction accuracy with zero manual intervention"
    ],
    challenges: [
      "Processing high-frequency spatial streams with sub-second latency",
      "Capturing spatial graph dependencies across intersecting road corridors",
      "Fusing tabular traffic metrics with deep graph representations in real time"
    ],
    result: "A live intelligent-routing platform with automated retraining, sub-second route evaluations, and real-time sensor node monitoring.",
    visual: "route",
    image: "/projects/sanjaya.png",
    architectureImage: "/projects/sanjaya-architecture.png",
    architectureDescription: "Hybrid ML architecture pairing TabNet (for structured/tabular traffic interactions) and Graph Neural Networks (GNN for spatial road network dependencies) with OpenCV video processing, PostgreSQL, FastAPI, and interactive Folium/Leaflet visualization.",
    architectureFlow: [
      {
        step: "01",
        title: "DATA SOURCES",
        subtitle: "MULTI-MODAL TRAFFIC DATA",
        components: [
          "Traffic Camera Feeds: Live & recorded CCTV video streams",
          "Road Network Data: GIS & OpenStreetMap topology & intersections",
          "Traffic & Sensor Data: Vehicle count, speed, occupancy, signal timing",
          "Environmental Data: Rainfall, visibility & ambient weather"
        ]
      },
      {
        step: "02",
        title: "DATA PREPROCESSING",
        subtitle: "CLEAN, TRANSFORM & FEATURE ENGINEER",
        components: [
          "Video Processing (OpenCV): Frame extraction & vehicle classification",
          "Data Cleaning: Missing value handling, outlier removal & sync",
          "Feature Engineering: Traffic flow, temporal & graph attributes",
          "Graph Construction: Road network nodes (intersections) & weighted edges"
        ]
      },
      {
        step: "03",
        title: "HYBRID ML MODELS",
        subtitle: "TABNET + GRAPH NEURAL NETWORK (GNN)",
        components: [
          "TabNet (Tabular): Learns from structured speed, flow & weather data",
          "Graph Neural Network (GNN): Models spatial flow propagation across roads",
          "Fusion & Inference Engine: Combines TabNet + GNN predictions",
          "Automated Retraining Loop: Retrains every 100 samples (75–85% accuracy)"
        ]
      },
      {
        step: "04",
        title: "OUTPUT & VISUALIZATION",
        subtitle: "REAL-TIME INSIGHTS & ACTIONABLE INFO",
        components: [
          "Traffic Prediction: Congestion levels & multi-horizon interval forecasting",
          "Interactive Map: Live traffic visualization, heatmaps & route suggestions",
          "Dashboard: Real-time detection feeds, statistical trends & alerts",
          "Actionable Insights: Dynamic traffic management & congestion warnings"
        ]
      },
      {
        step: "05",
        title: "INFRASTRUCTURE & DEPLOYMENT",
        subtitle: "FASTAPI, POSTGRESQL & DOCKER",
        components: [
          "FastAPI Async API Server with sub-second path calculations",
          "PostgreSQL Spatial Database for road segments & history",
          "Folium & Leaflet interactive dark-mode dashboard",
          "Containerized Docker microservice deployment"
        ]
      }
    ]
  },
  {
    slug: "swarsanchar",
    number: "03",
    title: "SWARSANCHAR",
    eyebrow: "AUDIO DATA ETL PIPELINE & STEM SPLITTER",
    description: "End-to-end audio processing and ETL pipeline for high-fidelity media acquisition, Demucs AI stem separation, and format transformation.",
    technologies: ["Python", "FastAPI/Flask", "Demucs", "yt-dlp", "FFmpeg", "PostgreSQL", "TypeScript", "React"],
    github: "https://github.com/javagaltejasvi46/SwarSanchar",
    status: "BUILT",
    problem: "Audio engineers and content creators must juggle disparate command-line tools, unstable scrapers, and slow stem separation scripts to isolate stems and format audio.",
    solution: "Engineered an end-to-end automated audio ETL pipeline: Extract (yt-dlp acquisition), Transform (pitch modification, Demucs 2/4 stem separation), and Load (multi-format export), with a PostgreSQL job queue.",
    engineering: [
      "Built end-to-end audio ETL pipeline processing 30+ tracks per batch with ~70% reduction in manual effort",
      "Designed PostgreSQL schema to track job statuses, transformation state, and file artifacts",
      "Integrated Demucs deep learning inference service, optimizing batch throughput for concurrent transformation requests",
      "Orchestrated FFmpeg audio transcode pipelines with robust error recovery"
    ],
    challenges: [
      "Managing GPU/CPU memory spikes during multi-track Demucs model inference",
      "Handling network drops and variable bitrates during high-volume audio downloads",
      "Synchronizing asynchronous background worker states with the user interface"
    ],
    result: "An integrated media processing suite that cut manual audio preparation time by ~70%.",
    visual: "stems",
    image: "/projects/swarsanchar.png",
    architectureImage: "/projects/swarsanchar-architecture.png",
    architectureDescription: "AI audio processing and stem separation suite featuring cross-platform frontends, Flask backend API, Redis task queues, Demucs source separation, and multi-format FFmpeg transcoding.",
    architectureFlow: [
      {
        step: "01",
        title: "CLIENTS",
        subtitle: "CROSS-PLATFORM FRONTENDS",
        components: ["Mobile App (React Native)", "Desktop App (Electron + React)", "Web Interface (Vite + React)", "Visual Waveform Controllers"]
      },
      {
        step: "02",
        title: "BACKEND API",
        subtitle: "FLASK PROCESSING SERVICE",
        components: ["File Upload & Validation", "yt-dlp Media Acquisition Engine", "Task Lifecycle Management", "HTTP REST & WebSocket Streaming"]
      },
      {
        step: "03",
        title: "QUEUE & STATE",
        subtitle: "REDIS PROCESSING QUEUE",
        components: ["Background Task Queue", "Job Status & Progress Tracking", "Concurrent Worker Orchestration", "Worker Fault Tolerance"]
      },
      {
        step: "04",
        title: "AI SEPARATION",
        subtitle: "DEMUCS & FFMPEG",
        components: ["Demucs AI Stem Separation", "4-Stem Splitting (Vocals / Drums / Bass / Other)", "Pitch & Format Transformation", "FFmpeg Transcoding Pipeline"]
      },
      {
        step: "05",
        title: "STORAGE & EXPORT",
        subtitle: "PERSISTENCE LAYER",
        components: ["PostgreSQL Schema Job Store", "Original & Processed Audio Files", "ZIP Archive Packaging", "Multi-Format Export (WAV / MP3)"]
      }
    ]
  },
  {
    slug: "auralis",
    number: "04",
    title: "AURALIS",
    eyebrow: "REAL-TIME CLINICAL VOICE WORKFLOW",
    description: "AI-powered real-time clinical voice transcription and session management platform with multilingual support and automated summaries.",
    technologies: ["Python", "FastAPI", "Faster-Whisper", "Gemini", "WebSockets", "SQLite", "React Native"],
    github: "https://github.com/javagaltejasvi46/Auralis",
    status: "BUILT",
    problem: "Healthcare professionals spend hours manually transcribing and synthesizing therapy and clinical sessions, pulling valuable time away from patient care.",
    solution: "Engineered a low-latency streaming pipeline combining Faster-Whisper transcription across 90+ languages, speaker diarization, and automated clinical summaries.",
    engineering: [
      "Real-time audio streaming and transcript push over low-latency WebSockets",
      "Optimized Faster-Whisper pipeline for near-instant multilingual transcription and translation",
      "Speaker diarization-aware session structure separating doctor and patient utterances",
      "Local SQLite session persistence with secure token authentication"
    ],
    challenges: [
      "Maintaining stream synchronization and low jitter under mobile network fluctuations",
      "Handling multi-speaker overlap without losing conversational context",
      "Structuring clinical summaries with high fidelity to session dialogue"
    ],
    result: "A production-ready mobile clinical workflow tool with real-time transcription and instant AI session synthesis.",
    visual: "audio",
    image: "/projects/auralis.png",
    architectureImage: "/projects/auralis-architecture.png",
    architectureDescription: "Real-time clinical voice transcription and AI session summarization platform combining WebRTC/WebSocket audio streaming, Faster-Whisper, speaker diarization, Google Gemini, and secure stores.",
    architectureFlow: [
      {
        step: "01",
        title: "CLIENT SURFACES",
        subtitle: "MULTI-PLATFORM INTERFACES",
        components: ["React Native Mobile App (iOS / Android)", "WebRTC & WebSocket Audio Capture", "Web Dashboard (React / Next.js)", "Live Transcript & Note Interface"]
      },
      {
        step: "02",
        title: "SERVICES",
        subtitle: "FASTAPI & WEBSOCKETS",
        components: ["FastAPI Async Server", "Real-Time WebSocket Session Manager", "Speaker Turn Detection", "Celery + Redis Task Queue"]
      },
      {
        step: "03",
        title: "SPEECH AI",
        subtitle: "FASTER-WHISPER ENGINE",
        components: ["Audio Preprocessing & Noise Reduction", "Faster-Whisper Multilingual STT (90+ langs)", "Automated English Translation", "Speaker Diarization"]
      },
      {
        step: "04",
        title: "LLM SYNTHESIS",
        subtitle: "GOOGLE GEMINI ENGINE",
        components: ["Clinical Context Processing", "SOAP Note Structuring", "Therapy Diagnosis & Treatment Plan", "Custom Clinical Prompts"]
      },
      {
        step: "05",
        title: "PERSISTENCE",
        subtitle: "STORAGE & DEPLOYMENT",
        components: ["PostgreSQL Encrypted Patient Records", "Redis Session Caching & Rate Limiting", "Docker Containerization", "Multi-Format Report Export (PDF / EMR)"]
      }
    ]
  },
  {
    slug: "netra",
    number: "05",
    title: "NETRA.ai",
    eyebrow: "EDGE AI TACTICAL COPILOT",
    description: "Autonomous battlefield edge AI copilot running entirely on Raspberry Pi 4, processing telemetry over MQTT and delivering tactical decisions with <3s latency.",
    technologies: ["Python", "TinyLlama (Quantized LLM)", "MQTT", "Raspberry Pi 4", "Edge AI", "Pydantic"],
    github: "https://github.com/Ysh0910/NetraAI",
    status: "BUILT",
    problem: "Tactical edge environments operate under strict bandwidth constraints and intermittent connectivity where cloud AI is unusable.",
    solution: "Architected an autonomous on-device copilot on Raspberry Pi 4 that ingests real-time sensor telemetry via MQTT, assesses threats, and executes localized quantized LLM inference with fallback failsafes.",
    engineering: [
      "Sub-3-second end-to-end decision latency on constrained Raspberry Pi 4 hardware",
      "Lightweight MQTT pub/sub pipeline for telemetry ingestion and tactical dispatch",
      "Quantized TinyLlama inference engine optimized for ARM CPU architecture",
      "Rule-based deterministic failsafe layer guaranteeing valid decisions if inference stalls"
    ],
    challenges: [
      "Fitting LLM inference into extreme memory constraints (Pi 4 RAM budget)",
      "Guaranteeing deterministic response times under emergency combat triggers",
      "Handling sensor packet drops without corrupting threat state"
    ],
    result: "A fully autonomous, zero-cloud edge AI system delivering real-time tactical intelligence directly on low-power edge hardware.",
    visual: "vision",
    image: "/projects/netra.png",
    architectureImage: "/projects/netra-architecture.png",
    architectureDescription: "Real-time intelligent surveillance and visual analytics architecture integrating CCTV/RTSP ingestion, edge inference on Raspberry Pi 4, YOLO detection, quantized TinyLlama, and tactical dispatch.",
    architectureFlow: [
      {
        step: "01",
        title: "VIDEO INPUT",
        subtitle: "MULTI-FEED INGESTION",
        components: ["CCTV IP / RTSP Cameras", "Live Web / Mobile Video Feeds", "Recorded Video Batch Ingestion", "RTSP & WebRTC Frame Extractors"]
      },
      {
        step: "02",
        title: "EDGE COMPUTE",
        subtitle: "RASPBERRY PI 4 / ON-DEVICE",
        components: ["Frame Extraction & Normalization", "Sub-3-second Local Decision Loop", "Low-Power ARM Optimization", "MQTT Telemetry Subscriber"]
      },
      {
        step: "03",
        title: "AI PIPELINE",
        subtitle: "YOLO & LOCAL LLM",
        components: ["YOLO Real-Time Object Detection", "Activity Recognition & Threat Analysis", "Quantized TinyLlama Tactical LLM", "Deterministic Rule-Based Failsafes"]
      },
      {
        step: "04",
        title: "DISPATCH & QUEUE",
        subtitle: "FASTAPI & REDIS",
        components: ["FastAPI Event Dispatch Server", "PostgreSQL + PostGIS Event Logs", "Redis Event Queue & Video Caching", "Encrypted Cloud / S3 Backups"]
      },
      {
        step: "05",
        title: "PRESENTATION",
        subtitle: "SURFACES & REAL-TIME ALERTS",
        components: ["Web Dashboard (React / Next.js)", "React Native Mobile Tactical App", "Instant Push & Telegram Notifications", "Live Video Surveillance Feeds"]
      }
    ]
  }
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
