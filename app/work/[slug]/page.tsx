import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Layers, ZoomIn } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Footer } from "@/components/Footer";
import { projectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projectBySlug(slug);
    return {
      title: project ? `${project.title} — Case Study` : "Project Case Study",
      description: project ? project.description : "Project details",
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const project = projectBySlug((await params).slug);
  if (!project) notFound();

  return (
    <main>
      <Navigation />

      {/* HERO */}
      <section className="case-hero">
        <Link href="/#work" className="back">
          <ArrowLeft size={16} /> ALL WORK
        </Link>
        <span className="project-number">{project.number}</span>
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="case-lede">{project.description}</p>
        <div className="tags">
          {project.technologies.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="case-actions">
          {project.github && (
            <a
              href={project.github}
              className="button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} /> GITHUB REPO
            </a>
          )}
          <a
            href={project.architectureImage || project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <ExternalLink size={16} /> VIEW ARCHITECTURE IMAGE
          </a>
          <Link href="/#contact" className="button">
            START A CONVERSATION <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* CASE VISUAL */}
      <section className="case-visual">
        <ProjectVisual project={project} />
      </section>

      {/* 01 / CONTEXT & 02 / APPROACH */}
      <section className="case-grid">
        <aside>
          <span>01 / CONTEXT</span>
        </aside>
        <div>
          <h2>THE PROBLEM</h2>
          <p>{project.problem}</p>
        </div>
        <aside>
          <span>02 / APPROACH</span>
        </aside>
        <div>
          <h2>THE SOLUTION</h2>
          <p>{project.solution}</p>
        </div>
      </section>

      {/* 03 / SYSTEM ARCHITECTURE (REPLACED ELEMENTAL DIAGRAM) */}
      <section className="architecture-showcase" id="architecture">
        <div className="architecture-head">
          <div>
            <span className="eyebrow">03 / SYSTEM SHAPE &amp; TOPOLOGY</span>
            <h2>SYSTEM ARCHITECTURE</h2>
            <p>
              {project.architectureDescription ||
                "High-fidelity system architecture diagram and component interaction topology."}
            </p>
          </div>
          {project.architectureImage && (
            <a
              href={project.architectureImage}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <ZoomIn size={15} /> OPEN FULL RESOLUTION
            </a>
          )}
        </div>

        {/* HIGH-RES ARCHITECTURE INFOGRAPHIC / BLUEPRINT */}
        {project.architectureImage && (
          <div className="architecture-blueprint">
            <div className="blueprint-topbar">
              <div className="blueprint-dots">
                <span className="b-dot red"></span>
                <span className="b-dot yellow"></span>
                <span className="b-dot green"></span>
              </div>
              <span className="blueprint-filename">
                {project.slug}-architecture.png
              </span>
              <span className="blueprint-badge">
                <Layers size={12} /> ARCHITECTURE ARTIFACT
              </span>
            </div>
            <a
              href={project.architectureImage}
              target="_blank"
              rel="noopener noreferrer"
              className="blueprint-preview-link"
              title="Click to view full resolution"
            >
              <img
                src={project.architectureImage}
                alt={`${project.title} Architecture Diagram`}
                className="blueprint-img"
              />
              <span className="blueprint-zoom-hint">
                <ZoomIn size={14} /> Click to expand full resolution in new tab
              </span>
            </a>
          </div>
        )}

        {/* MULTI-TIER PIPELINE BREAKDOWN */}
        {project.architectureFlow && project.architectureFlow.length > 0 && (
          <div className="pipeline-flow-wrapper">
            <span className="eyebrow">DETAILED PIPELINE LAYERS</span>
            <div className="pipeline-grid">
              {project.architectureFlow.map((layer, idx) => (
                <div className="pipeline-card" key={layer.step}>
                  <div className="card-top">
                    <span className="pipeline-step">{layer.step}</span>
                    <span className="pipeline-sub">{layer.subtitle}</span>
                  </div>
                  <h3>{layer.title}</h3>
                  {layer.components && layer.components.length > 0 && (
                    <ul className="component-list">
                      {layer.components.map((comp, cIdx) => (
                        <li key={cIdx}>{comp}</li>
                      ))}
                    </ul>
                  )}
                  {idx < (project.architectureFlow?.length ?? 0) - 1 && (
                    <div className="flow-arrow" aria-hidden="true">
                      &darr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 04 / ENGINEERING, 05 / CHALLENGES, 06 / RESULT */}
      <section className="case-details">
        <div>
          <span>04 / ENGINEERING</span>
          <h2>TECHNICALLY INTERESTING</h2>
          {project.engineering.map((item) => (
            <p key={item}>— {item}</p>
          ))}
        </div>
        <div>
          <span>05 / CHALLENGES</span>
          <h2>DESIGN CONSTRAINTS</h2>
          {project.challenges.map((item) => (
            <p key={item}>— {item}</p>
          ))}
        </div>
        <div>
          <span>06 / RESULT</span>
          <h2>WHERE IT STANDS</h2>
          <p>{project.result}</p>
        </div>
      </section>

      {/* NEXT PROJECT LINK */}
      <section className="case-next">
        <span>NEXT PROJECT</span>
        <Link
          href={`/work/${
            projects[(projects.indexOf(project) + 1) % projects.length].slug
          }`}
        >
          {projects[(projects.indexOf(project) + 1) % projects.length].title}{" "}
          <ArrowUpRight />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
