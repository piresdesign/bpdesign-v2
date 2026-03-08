import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import workspace from "@/assets/workspace.png";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[80vh] flex items-center bg-subtle-gradient scroll-section relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full border border-primary/5 translate-x-1/3" />
        <div className="absolute top-1/3 right-0 w-[320px] h-[320px] rounded-full border border-primary/8 translate-x-1/3" />
        <div className="absolute bottom-20 left-10 w-2 h-2 rounded-full bg-primary/30" />
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/20" />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <div className="space-y-8 animate-slide-in-left">

            <p className="text-sm font-medium tracking-widest uppercase text-primary/70">
              Product Designer · São Paulo
            </p>

            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Bruno Pires
              </h1>
              <h2 className="text-3xl lg:text-4xl font-light text-muted-foreground leading-snug">
                Transformo complexidade em<br />
                <span className="text-foreground font-semibold">experiência com impacto mensurável.</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              5+ anos em produtos B2B SaaS. Da descoberta à entrega, conectando
              negócio, produto e tecnologia. Uso IA para acelerar sem abrir mão da
              qualidade de decisão.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={() => navigate('/case/assai')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button gap-2"
              >
                Ver case em destaque
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-border text-foreground hover:bg-accent"
              >
                Projetos & Artigos
              </Button>
            </div>
          </div>

          {/* Right — workspace illustration */}
          <div className="hidden lg:flex items-center justify-center animate-slide-in-right">
            <img
              src={workspace}
              alt="Workspace de design com monitor, teclado e ferramentas"
              className="w-full max-w-lg opacity-90"
            />
          </div>

        </div>

        {/* Scroll indicator */}
<div
  className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-80 transition-opacity"
  onClick={() => scrollToSection('about')}
>
  <span className="text-xs tracking-widest uppercase text-muted-foreground">Role</span>
  <ArrowDown className="w-4 h-4 text-muted-foreground animate-bounce" />
</div>
</div>
    </section>
  );
};

export default Hero;