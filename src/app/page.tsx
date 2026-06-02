import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Commendations from "@/components/Commendations";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <Stats />
      <Services />
      <Gallery />
      <Projects />
      <Commendations />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
