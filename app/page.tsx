import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Github, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Footer } from "@/components/Footer";
import { MotionSection } from "@/components/MotionSection";
import { CinematicBackground } from "@/components/CinematicBackground";
import { projects } from "@/data/projects";
import { journey, site, skills } from "@/data/site";
import { TejasviAI } from "@/components/TejasviAI";

function SectionTitle({ number, title, copy }: { number: string; title: string; copy?: string }) { 
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
      
      {/* HERO SECTION WITH ORIGINAL SYSTEM PANEL */}
      <MotionSection className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal">HELLO, I&apos;M</p>
          <h1>TEJASVI<br /><em>JAVAGAL</em></h1>
          <div className="hero-rule"></div>
          <p className="role">SOFTWARE ENGINEER</p>
          <p className="intro">Building intelligent systems,<br />AI products and full-stack applications.</p>
          <p className="specialisms">AI/ML <i>·</i> FULL STACK <i>·</i> BACKEND <i>·</i> SYSTEMS</p>
          <div className="hero-actions">
            <Link href="#work" className="button primary">EXPLORE WORK <ArrowDownRight size={16}/></Link>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="button"><Github size={15}/> GITHUB</a>
            <Link href="/resume" className="text-link">RESUME <ArrowUpRight size={15}/></Link>
          </div>
        </div>

        <div className="system-panel">
          <div className="panel-header">
            <span>RUNTIME / 2026</span>
            <span><i className="live"></i> ONLINE</span>
          </div>
          <div className="panel-orbit">
            <div className="orbit core">TJ</div>
            <div className="orbit n1">AI</div>
            <div className="orbit n2">SYS</div>
            <div className="orbit n3">WEB</div>
          </div>
          <div className="status-list">
            {[["AI / ML","ACTIVE"],["BACKEND SYSTEMS","ACTIVE"],["PRODUCT ENGINEERING","ACTIVE"],["EXPERIMENTS","BUILDING"]].map(([name,status])=>(
              <div key={name}>
                <span>{name}</span>
                <b><i></i>{status}</b>
              </div>
            ))}
          </div>
          <div className="terminal">
            <span>tejasvi@portfolio:~$</span>
            <p>whoami</p>
            <strong>software-engineer</strong>
          </div>
        </div>
      </MotionSection>

      {/* 01 / SELECTED WORK */}
      <section className="work section" id="work">
        <SectionTitle number="01 /" title="SELECTED WORK" copy="A selection of systems and products built across AI, full-stack engineering and intelligent applications." />
        <div className="projects">
          {projects.map((project, index) => (
            <article className={`project ${index % 2 ? "reverse" : ""}`} key={project.slug}>
              <ProjectVisual project={project}/>
              <div className="project-copy">
                <span className="project-number">{project.number}</span>
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.slice(0, 5).map(tag=><span key={tag}>{tag}</span>)}
                </div>
                <div className="project-actions">
                  <Link href={`/work/${project.slug}`}>CASE STUDY <ArrowUpRight size={15}/></Link>
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={15}/></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 02 / ENGINEERING */}
      <section className="engineering section" id="engineering">
        <SectionTitle number="02 /" title="ENGINEERING" copy="Tools are chosen for the system in front of me—not collected for a logo wall." />
        <div className="engineering-grid">
          <div className="system-graph">
            <div className="node central">TEJASVI</div>
            {["AI", "BACKEND", "FRONTEND", "SYSTEMS", "DATA"].map((node, i)=>(
              <div className={`node satellite s${i+1}`} key={node}>{node}</div>
            ))}
            <svg viewBox="0 0 500 380" aria-hidden="true">
              <line x1="250" y1="190" x2="95" y2="87"/>
              <line x1="250" y1="190" x2="403" y2="88"/>
              <line x1="250" y1="190" x2="433" y2="274"/>
              <line x1="250" y1="190" x2="68" y2="283"/>
              <line x1="250" y1="190" x2="250" y2="344"/>
            </svg>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([category, items])=>(
              <div key={category}>
                <p>{category}</p>
                <span>{items.join(" · ")}</span>
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
            <p className="eyebrow">FLAGSHIP SYSTEM</p>
            <h3>GARUD DRISHTI</h3>
            <p>AI-powered landslide risk monitoring, built as an evolving system rather than a static showcase.</p>
            <Link href="/work/garud-drishti" className="text-link">VIEW SYSTEM <ArrowUpRight size={15}/></Link>
          </div>
          <div className="build-status">
            {[["AI ENGINE","ACTIVE"],["GEOSPATIAL BACKEND","IN DEVELOPMENT"],["PRODUCT CLIENTS","EXPERIMENTAL"]].map(([label,state])=>(
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
          <p className="large-copy">I&apos;m a software engineer focused on building intelligent applications and practical systems.</p>
          <p>My work spans AI/ML, backend engineering, real-time applications and full-stack development. I enjoy taking ideas from architecture and experimentation through to working software—especially when the problem crosses disciplines.</p>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-link">FOLLOW THE WORK ON GITHUB <ArrowUpRight size={15}/></a>
        </div>
      </section>

      {/* 05 / JOURNEY */}
      <section className="journey section">
        <SectionTitle number="05 /" title="JOURNEY" />
        <div className="timeline">
          {journey.map(item=>(
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
        <SectionTitle number="06 /" title="THINKING / BUILDING" copy="A space for technical notes, AI experiments, system design thinking and lessons from making things." />
        <div className="notes">
          {["Building reliable real-time AI workflows", "What makes an engineering portfolio useful?", "Notes from systems built under pressure"].map((note,i)=>(
            <div key={note}>
              <span>0{i+1} / EDITABLE NOTE</span>
              <p>{note}</p>
              <ArrowUpRight size={18}/>
            </div>
          ))}
        </div>
      </section>

      {/* 07 / CONTACT */}
      <section className="contact section" id="contact">
        <span className="eyebrow">07 / CONTACT</span>
        <h2>LET&apos;S BUILD<br /><em>SOMETHING.</em></h2>
        <p>Have a project, idea, or opportunity?</p>
        {site.email ? (
          <a className="button primary" href={`mailto:${site.email}`}><Mail size={16}/> GET IN TOUCH</a>
        ) : (
          <a className="button primary" href={site.github} target="_blank" rel="noopener noreferrer"><Github size={16}/> CONNECT ON GITHUB</a>
        )}
        <small>To add direct email and LinkedIn links, edit <code>data/site.ts</code>.</small>
      </section>

      <TejasviAI />
      <Footer />
    </main>
  );
}
