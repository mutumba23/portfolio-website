import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ResumeTimeline from "@/components/ResumeTimeline";
import CertificateGrid from "@/components/CertificateGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ResumeTimeline />
      <CertificateGrid />
      <Contact />
    </div>
  );
}
