import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Qualifications from "@/components/Qualifications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <Experience />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
