import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import SectionNav from "@/components/SectionNav";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Hero from "@/components/section/Hero";
import Project from "@/components/section/Project";

export default function Home() {
  return (
    <>
      <Header />
      <SectionNav />
      <div className="relative">
        <Hero />
      </div>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Project />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}
