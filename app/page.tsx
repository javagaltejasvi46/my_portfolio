import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  ExternalLink,
  Download,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Footer } from "@/components/Footer";
import { MotionSection } from "@/components/MotionSection";
import { CinematicBackground } from "@/components/CinematicBackground";
import { projects } from "@/data/projects";
import { journey, site, skills } from "@/data/site";

function SectionTitle({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-head">
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <CinematicBackground />
      <div className="scroll-line" />

      {/* HERO SECTION */}
      <MotionSection className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal">HELLO, I&apos;M</p>
          <h1>
            TEJASVI<br />
            <em>JAVAGAL</em>
          </h1>
          <div className="hero-rule"></div>
          <p className="role">ASPIRING DATA ENGINEER &amp; SOFTWARE ENGINEER</p>
          <p className="intro">
            Designing end-to-end ETL pipelines,<br />
            data-intensive backends and intelligent systems.
          </p>
          <p className="specialisms">
            PYTHON <i>&middot;</i> SQL <i>&middot;</i> ETL PIPELINES <i>&middot;</i> POSTGRESQL <i>&middot;</i> FASTAPI
          </p>
          <div className="hero-actions">
            <Link href="#work" className="button primary">
              EXPLORE WORK <ArrowDownRight size={16} />
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <Github size={15} /> GITHUB
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <Linkedin size={15} /> LINKEDIN
            </a>
            <Link href="/resume" className="text-link">
              RESUME <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        <div className="system-panel">
          <div className="panel-header">
            <span>RUNTIME / 2026</span>
            <span>
              <i className="live"></i> ONLINE
            </span>
          </div>
          <div className="panel-orbit">
            <svg className="orbit-lines" aria-hidden="true">
              <line x1="50%" y1="46%" x2="20%" y2="22%" />
              <line x1="50%" y1="46%" x2="80%" y2="22%" />
              <line x1="50%" y1="46%" x2="82%" y2="72%" />
              <line x1="50%" y1="46%" x2="50%" y2="86%" />
              <line x1="50%" y1="46%" x2="18%" y2="72%" />
            </svg>
            <div className="orbit core">TJ</div>
            <div className="orbit n1">ETL</div>
            <div className="orbit n2">SQL</div>
            <div className="orbit n3">PYTHON</div>
            <div className="orbit n4">DOCKER</div>
            <div className="orbit n5">AI/ML</div>
          </div>
          <div className="status-list">
            {[
              ["ETL & DATA PIPELINES", "ACTIVE"],
              ["SQL & POSTGRESQL", "ACTIVE"],
              ["BACKEND ARCHITECTURE", "ACTIVE"],
              ["AI / ML INFERENCE", "ACTIVE"],
            ].map(([name, status]) => (
              <div key={name}>
                <span>{name}</span>
                <b>
                  <i></i>
                  {status}
                </b>
              </div>
            ))}
          </div>
          <div className="terminal">
            <span>tejasvi@portfolio:~$</span>
            <p>whoami</p>
            <strong>data-engineer &amp; software-builder</strong>
          </div>
        </div>
      </MotionSection>

      {/* 01 / SELECTED WORK */}
      <section className="work section" id="work">
        <SectionTitle
          number="01 /"
          title="SELECTED WORK"
          copy="End-to-end data pipelines, real-time intelligence platforms, and high-performance backend systems."
        />
        <div className="projects">
          {projects.map((project, index) => (
            <article
              className={`project ${index % 2 ? "reverse" : ""}`}
              key={project.slug}
            >
              <ProjectVisual project={project} />
              <div className="project-copy">
                <span className="project-number">{project.number}</span>
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.slice(0, 5).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <Link href={`/work/${project.slug}`}>
                    CASE STUDY <ArrowUpRight size={15} />
                  </Link>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 02 / ENGINEERING */}
      <section className="engineering section" id="engineering">
        <SectionTitle
          number="02 /"
          title="ENGINEERING"
          copy="Tools chosen for reliability, scale, and system performance — from high-throughput ETL to relational schema design."
        />
        <div className="engineering-grid">
          <div className="system-graph">
            <div className="node central">TEJASVI</div>
            {["ETL", "SQL", "PYTHON", "AI/ML", "DOCKER"].map((node, i) => (
              <div className={`node satellite s${i + 1}`} key={node}>
                {node}
              </div>
            ))}
            <svg viewBox="0 0 500 380" aria-hidden="true">
              <line x1="250" y1="190" x2="95" y2="87" />
              <line x1="250" y1="190" x2="403" y2="88" />
              <line x1="250" y1="190" x2="433" y2="274" />
              <line x1="250" y1="190" x2="68" y2="283" />
              <line x1="250" y1="190" x2="250" y2="344" />
            </svg>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p>{category}</p>
                <span>{Array.isArray(items) ? items.join(" · ") : String(items)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / CURRENTLY BUILDING */}
      <section className="current section">
        <SectionTitle number="03 /" title="CURRENTLY BUILDING" />
        <div className="current-panel">
          <div>
            <p className="eyebrow">FLAGSHIP PIPELINE</p>
            <h3>GARUD DRISHTI</h3>
            <p>
              Landslide early-warning geospatial data pipeline (Smart India Hackathon 2026). Ingests heterogeneous satellite records (GSI/ISRO, IMD rainfall, SMAP soil moisture) into PostgreSQL/PostGIS to drive multi-horizon risk scoring.
            </p>
            <Link href="/work/garud-drishti" className="text-link">
              VIEW SYSTEM <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="build-status">
            {[
              ["GEOSPATIAL INGESTION", "ACTIVE"],
              ["POSTGIS TIME-SERIES", "OPTIMIZED"],
              ["XGBOOST RISK ENGINE", "ACTIVE"],
              ["FASTAPI SERVICE", "READY"],
            ].map(([label, state]) => (
              <div key={label}>
                <span>{label}</span>
                <b>{state}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / ABOUT */}
      <section className="about section" id="about">
        <SectionTitle number="04 /" title="ABOUT" />
        <div className="about-copy">
          <p className="large-copy">
            I&apos;m an aspiring Data Engineer &amp; Software Engineer building production-ready pipelines and data platforms.
          </p>
          <p>
            Currently in my final year of B.Tech in Information Science at Reva University (Bengaluru, Karnataka) with a 7.9 CGPA. I specialize in Python and SQL, with hands-on experience designing end-to-end ETL pipelines and data-intensive backend architectures.
          </p>
          <p>
            Skilled at building ingestion, transformation, and storage workflows across structured and unstructured data using PostgreSQL, PostGIS, and SQLite. I focus on clean schema design, query optimization, and containerized deployment with Docker.
          </p>
          <div style={{ display: "flex", gap: "20px", marginTop: "25px", flexWrap: "wrap" }}>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              EXPLORE GITHUB REPOSITORIES <ArrowUpRight size={15} />
            </a>
            <a
              href={site.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              VIEW RESUME ON DRIVE <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 05 / JOURNEY */}
      <section className="journey section">
        <SectionTitle number="05 /" title="JOURNEY" />
        <div className="timeline">
          {journey.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06 / THINKING / BUILDING */}
      <section className="thinking section" id="thinking">
        <SectionTitle
          number="06 /"
          title="ENGINEERING NOTES"
          copy="Technical insights, data pipeline architectures, and lessons from building under pressure."
        />
        <div className="notes">
          {[
            "Designing resilient multi-source geospatial ETL pipelines with PostGIS",
            "Automated feedback loops: sustaining 75–85% ML prediction accuracy in live traffic",
            "Scaling audio batch transformations: Demucs deep learning inference & SQL job queues",
          ].map((note, i) => (
            <div key={note}>
              <span>0{i + 1} / TECHNICAL INSIGHT</span>
              <p>{note}</p>
              <ArrowUpRight size={18} />
            </div>
          ))}
        </div>
      </section>

      {/* 07 / CONTACT */}
      <section className="contact section" id="contact">
        <span className="eyebrow">07 / CONTACT &amp; REFERENCES</span>
        <h2>
          LET&apos;S BUILD<br />
          <em>SOMETHING.</em>
        </h2>
        <p>
          Open to Data Engineering roles, backend opportunities, and ambitious collaborations.
        </p>

        <div className="contact-grid">
          <a href={`mailto:${site.email}`} className="contact-card">
            <span className="contact-label">
              <Mail size={16} /> EMAIL
            </span>
            <span className="contact-val">{site.email}</span>
            <span className="contact-sub">Direct email address</span>
          </a>

          <a href={`tel:${site.rawPhone}`} className="contact-card">
            <span className="contact-label">
              <Phone size={16} /> PHONE
            </span>
            <span className="contact-val">{site.phone}</span>
            <span className="contact-sub">Available for calls &amp; WhatsApp</span>
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">
              <Linkedin size={16} /> LINKEDIN
            </span>
            <span className="contact-val">in/tejasvijavagal</span>
            <span className="contact-sub">Professional network &amp; recommendations</span>
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">
              <Github size={16} /> GITHUB
            </span>
            <span className="contact-val">javagaltejasvi46</span>
            <span className="contact-sub">Source code &amp; repositories</span>
          </a>

          <div className="contact-card">
            <span className="contact-label">
              <MapPin size={16} /> LOCATION
            </span>
            <span className="contact-val">{site.location}</span>
            <span className="contact-sub">Ready for on-site &amp; remote roles</span>
          </div>

          <a
            href={site.resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-label">
              <ExternalLink size={16} /> RESUME REFERENCE
            </span>
            <span className="contact-val">Google Drive Document</span>
            <span className="contact-sub">Always up-to-date verified version</span>
          </a>
        </div>

        <div className="contact-actions">
          <a className="button primary" href={`mailto:${site.email}`}>
            <Mail size={16} /> SEND EMAIL
          </a>
          <a className="button" href={`tel:${site.rawPhone}`}>
            <Phone size={16} /> CALL / MESSAGE
          </a>
          <a
            className="button"
            href={site.resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} /> VIEW RESUME (DRIVE)
          </a>
          <a
            className="button"
            href={site.resumeDownloadUrl}
            download="tejasvi-javagal-resume.pdf"
          >
            <Download size={16} /> DOWNLOAD PDF
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
