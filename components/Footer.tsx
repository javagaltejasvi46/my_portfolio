import Link from "next/link";
import { site } from "@/data/site";
export function Footer() { return <footer><div><p className="brand">TEJASVI<span>_</span></p><p>Software Engineer</p></div><div className="footer-links"><a href={site.github} target="_blank">GitHub ↗</a>{site.linkedin ? <a href={site.linkedin}>LinkedIn ↗</a> : <span>LinkedIn — add link</span>}{site.email ? <a href={`mailto:${site.email}`}>Email ↗</a> : <span>Email — add address</span>}<Link href="/resume">Resume →</Link></div><small>© 2026 Tejasvi Javagal · Built with intent.</small></footer> }
