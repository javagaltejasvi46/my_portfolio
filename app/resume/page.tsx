import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = { title: "Resume" };
export default function ResumePage() { return <main><Navigation /><section className="resume"><Link href="/" className="back"><ArrowLeft size={16}/> BACK HOME</Link><p className="eyebrow">RESUME / EDITABLE ASSET</p><h1>TEJASVI<br/><em>JAVAGAL</em></h1><p>This page is ready for your resume. Add a PDF as <code>public/resume/tejasvi-javagal-resume.pdf</code>, then the download control below will work.</p><a className="button primary" href="/resume/tejasvi-javagal-resume.pdf" download><Download size={16}/> DOWNLOAD RESUME</a></section><Footer /></main> }
