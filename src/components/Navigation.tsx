import { Button } from "@/components/ui/button";
import bpdesign from '../assets/bpdesign-icon.svg';

function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <img src={bpdesign}
              alt="bpdesign logo"
              className="w-8 h-8 rounded 32px mx-auto object-cover">
            </img>
            <span className="font-semibold text-foreground">Bruno Pires</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              INÍCIO
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              SOBRE
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              PROJETOS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
              >
              CONTATO
            </button>
          </div>

          {/* Download CV Button */}
          <a           
            href="https://drive.google.com/file/d/19Hl05mimD66KaTuQhWZgUYfnXlcFS1TU/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            >
          <Button variant="outline" size="sm" className="hidden sm:flex">
            📄 CURRÍCULO
          </Button>
          </a>
          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">🇧🇷 PT-BR</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;