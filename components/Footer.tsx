import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer>
      <div>
        <p className="brand">
          TEJASVI<span>_</span>
        </p>
        <p>{site.role}</p>
      </div>
      <div className="footer-links">
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a href={`mailto:${site.email}`}>Email ↗</a>
        <a href={`tel:${site.rawPhone}`}>Phone ↗</a>
        <a href={site.resumeDriveUrl} target="_blank" rel="noopener noreferrer">
          Resume (Drive) ↗
        </a>
        <Link href="/resume">Resume (Local) →</Link>
      </div>
      <small>© 2026 Tejasvi A Javagal · Built with intent.</small>
    </footer>
  );
}
