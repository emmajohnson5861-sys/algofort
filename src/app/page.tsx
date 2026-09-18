"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkProcess from "@/components/WorkProcess";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

declare global {
  interface Window {
    initAlgofort?: () => void;
  }
}

export default function Home() {
  // algofort_script.js auto-inits via readyState check when it loads.
  // No extra useEffect needed — this avoids double-init and complexity.
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkProcess />
        <Services />
        <FeaturedProjects />
        <WhyUs />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
