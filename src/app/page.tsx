import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Work from "@/components/Work";
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
      <Services />
      <Work />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
