import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsAndArticles from "@/components/ProjectsAndArticles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Add intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Fixed header */}
      <Navigation />
      
      {/* Main Content - Single page with smooth scrolling sections */}
      <main>
        {/* Hero Section - Above the fold */}
        <Hero />
        
        {/* About Section - Short bio and image */}
        <About />
        
        {/* Projects & Articles Section - 4-item grid per page with pagination */}
        <ProjectsAndArticles />
        
        {/* Contact Section - Form and call-to-action */}
        <Contact />
      </main>
      
      {/* Footer - Links, copyright, social icons */}
      <Footer />
    </div>
  );
};

export default Index;
