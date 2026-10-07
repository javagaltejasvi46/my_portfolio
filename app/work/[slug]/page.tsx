import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Footer } from "@/components/Footer";
import { projectBySlug, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { return params.then(({ slug }) => { const project = projectBySlug(slug); return { title: project ? project.title : "Project" }; }); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = projectBySlug((await params).slug); if (!project) notFound();
  return <main><Navigation /><section className="case-hero"><Link href="/#work" className="back"><ArrowLeft size={16}/> ALL WORK</Link><span className="project-number">{project.number}</span><p className="eyebrow">{project.eyebrow}</p><h1>{project.title}</h1><p className="case-lede">{project.description}</p><div className="tags">{project.technologies.map(tag => <span key={tag}>{tag}</span>)}</div><div className="case-actions">{project.github && <a href={project.github} className="button primary" target="_blank"><Github size={16}/> GITHUB</a>}<Link href="/#contact" className="button">START A CONVERSATION <ArrowUpRight size={16}/></Link></div></section>
    <section className="case-visual"><ProjectVisual project={project}/></section>
    <section className="case-grid"><aside><span>01 / CONTEXT</span></aside><div><h2>THE PROBLEM</h2><p>{project.problem}</p></div><aside><span>02 / APPROACH</span></aside><div><h2>THE SOLUTION</h2><p>{project.solution}</p></div></section>
    <section className="architecture"><div><span className="eyebrow">03 / SYSTEM SHAPE</span><h2>ARCHITECTURE</h2><p>A concise representation of the major product boundaries. Adapt this diagram as the implementation evolves.</p></div><div className="architecture-flow"><div>DATA<br/>SOURCES</div><i>↓</i><div>PREPROCESSING<br/>&amp; MODELS</div><i>↓</i><div>API &amp;<br/>SERVICES</div><i>↓</i><div>PRODUCT<br/>CLIENTS</div></div></section>
    <section className="case-details"><div><span>04 / ENGINEERING</span><h2>TECHNICALLY INTERESTING</h2>{project.engineering.map(item => <p key={item}>— {item}</p>)}</div><div><span>05 / CHALLENGES</span><h2>DESIGN CONSTRAINTS</h2>{project.challenges.map(item => <p key={item}>— {item}</p>)}</div><div><span>06 / RESULT</span><h2>WHERE IT STANDS</h2><p>{project.result}</p></div></section>
    <section className="case-next"><span>NEXT PROJECT</span><Link href={`/work/${projects[(projects.indexOf(project)+1)%projects.length].slug}`}>{projects[(projects.indexOf(project)+1)%projects.length].title} <ArrowUpRight /></Link></section><Footer /></main>;
}
