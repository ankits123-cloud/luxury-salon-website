import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { BridalShowcase } from "./components/BridalShowcase";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { LuxuryConsultation } from "./components/LuxuryConsultation";
import { CTASection } from "./components/CTASection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-black font-poppins">
      <Navbar />

      {/* ✅ Navbar height offset fix */}
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <BridalShowcase />
        <Gallery />
        <Testimonials />
        <LuxuryConsultation />
        <CTASection />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}