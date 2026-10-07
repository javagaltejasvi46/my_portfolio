import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { site, education, certifications, skills } from "@/data/site";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Resume — Tejasvi A Javagal",
  description: "Resume and experience of Tejasvi A Javagal, aspiring Data Engineer and Software Engineer.",
};

export default function ResumePage() {
  return (
    <main>
      <Navigation />
      <section className="resume">
        <Link href="/" className="back">
          <ArrowLeft size={16} /> BACK HOME
        </Link>

        <div className="resume-header">
          <p className="eyebrow">CURRICULUM VITAE / VERIFIED PROFILE</p>
          <h1>
            TEJASVI A<br />
            <em>JAVAGAL</em>
          </h1>
          <p className="intro">
            Aspiring Data Engineer &middot; Python &middot; SQL &middot; ETL Pipelines &middot; Backend Systems
          </p>

          <div className="resume-meta">
            <span><MapPin size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />{site.location}</span>
            <span>&middot;</span>
            <a href={`tel:${site.rawPhone}`}><Phone size={14} />{site.phone}</a>
            <span>&middot;</span>
            <a href={`mailto:${site.email}`}><Mail size={14} />{site.email}</a>
            <span>&middot;</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer"><Github size={14} />github.com/javagaltejasvi46</a>
            <span>&middot;</span>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={14} />linkedin.com/in/tejasvijavagal</a>
          </div>

          <div className="resume-actions-bar">
            <a
              className="button primary"
              href={site.resumeDownloadUrl}
              download="tejasvi-javagal-resume.pdf"
            >
              <Download size={16} /> DOWNLOAD PDF
            </a>
            <a
              className="button"
              href={site.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} /> OPEN IN GOOGLE DRIVE
            </a>
          </div>
        </div>

        <div className="resume-body">
          {/* CAREER OBJECTIVE */}
          <div className="resume-block">
            <h2>Career Objective</h2>
            <div className="resume-content">
              <p>
                Final-year B.Tech (Information Science) student specializing in Python and SQL, with hands-on experience designing end-to-end ETL pipelines and data-intensive backend systems as an aspiring Data Engineer. Skilled at building ingestion, transformation, and storage workflows across structured and unstructured data using PostgreSQL and SQLite. Comfortable with schema design, query optimization, and containerized deployment (Docker), backed by a track record of shipping reliable data pipelines end to end. Looking to bring this foundation to a role building scalable, production-grade data platforms.
              </p>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="resume-block">
            <h2>Education</h2>
            <div className="resume-content">
              <div className="resume-item">
                <h3>{education.institution}</h3>
                <div className="item-sub">
                  <span>{education.degree}</span>
                  <span>{education.period}</span>
                </div>
                <p>
                  <strong>CGPA:</strong> {education.cgpa}
                </p>
                <p>
                  <strong>Relevant Coursework:</strong> {education.coursework.join(", ")}
                </p>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="resume-block">
            <h2>Skills</h2>
            <div className="resume-content">
              <div className="resume-skills-group">
                {Object.entries(skills).map(([category, items]) => (
                  <div className="resume-skill-row" key={category}>
                    <strong>{category}</strong>
                    <span>{Array.isArray(items) ? items.join(", ") : String(items)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="resume-block">
            <h2>Projects</h2>
            <div className="resume-content">
              {projects.map((project) => (
                <div className="resume-item" key={project.slug}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 10 }}>
                    <h3>{project.title}</h3>
                    <div style={{ display: "flex", gap: 12 }}>
                      <Link href={`/work/${project.slug}`} style={{ color: "var(--cyan)", fontSize: "12px", fontFamily: "var(--font-mono, 'DM Mono')" }}>
                        Case Study &rarr;
                      </Link>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--cyan)", fontSize: "12px", fontFamily: "var(--font-mono, 'DM Mono')", display: "inline-flex", alignItems: "center", gap: 3 }}
                        >
                          GitHub <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="item-sub">
                    <span>{project.eyebrow}</span>
                    <span>{project.technologies.slice(0, 4).join(" &middot; ")}</span>
                  </div>
                  <p>{project.description}</p>
                  <ul>
                    {project.engineering.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="resume-block">
            <h2>Certifications</h2>
            <div className="resume-content">
              {certifications.map((cert) => (
                <div className="resume-item" key={cert.title}>
                  <h3>{cert.title}</h3>
                  <div className="item-sub">
                    <span>{cert.issuer}</span>
                    <span style={{ color: "var(--cyan)" }}>Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
