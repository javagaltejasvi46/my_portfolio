"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Command } from "lucide-react";
import { site } from "@/data/site";

const links = [{ label: "WORK", href: "/#work" }, { label: "ABOUT", href: "/#about" }, { label: "WRITING", href: "/#thinking" }, { label: "RESUME", href: "/resume" }, { label: "CONTACT", href: "/#contact" }];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState(false);
  useEffect(() => { const key = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPalette((v) => !v); } if (e.key === "Escape") setPalette(false); }; window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, []);
  return <>
    <header className="nav"><Link className="brand" href="/">TEJASVI<span>_</span></Link><nav>{links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}</nav><button className="command" onClick={() => setPalette(true)} aria-label="Open command palette"><Command size={14} /> <kbd>⌘ K</kbd></button><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></header>
    {open && <nav className="mobile-nav">{links.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}
    {palette && <div className="palette-backdrop" role="dialog" aria-modal="true" aria-label="Command palette" onClick={() => setPalette(false)}><div className="palette" onClick={(e) => e.stopPropagation()}><p className="eyebrow">COMMAND PALETTE</p>{links.map((link) => <Link key={link.label} href={link.href} onClick={() => setPalette(false)}>{link.label}<span>↗</span></Link>)}<a href={site.github} target="_blank">OPEN GITHUB <span>↗</span></a></div></div>}
  </>;
}
