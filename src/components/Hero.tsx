import { Button } from "@/components/ui/button";
import workspaceIllustration from "@/assets/workspace-illustration.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-subtle-gradient scroll-section">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="space-y-8 animate-slide-in-left">
            {/* ===================================================================
                CONTENT BLOCK: Main Hero Headline
                ================================================================= */}
            {/* Primary hero headline with name emphasis */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Olá, sou <span className="text-primary">Bruno Pires</span>. {/* Main greeting with name highlighted */}
              </h1>
              
              {/* Job title and location subtitle */}
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Product Designer de São Paulo/SP {/* Professional title and location */}
              </p>
            </div>

            {/* ===================================================================
                CONTENT BLOCK: Mission Statement
                ================================================================= */}
            {/* Personal mission and approach description */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha missão no Design é <span className="font-semibold text-foreground">melhorar a vida das pessoas</span>, {/* Mission statement with key phrase highlighted */}
                otimizando experiências e criando projetos que beneficiem a sociedade. Sempre com foco no usuário, {/* Description of approach and values */}
                garantindo a funcionalidade, usabilidade e significância dos produtos. {/* Core principles */}
              </p>
            </div>

            {/* ===================================================================
                CONTENT BLOCK: Call-to-Action Buttons
                ================================================================= */}
            {/* Primary and secondary action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-button"
              >
                SOBRE MIM {/* Primary CTA button text - leads to About section */}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('projects')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                PROJETOS E ARTIGOS{/* Secondary CTA button text - leads to Projects section */}
              </Button>
            </div>
          </div>

          {/* Illustration - Right Side */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src={workspaceIllustration}
                alt="Workspace illustration showing design tools and modern setup"
                className="w-full max-w-lg mx-auto opacity-80"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-primary/10 rounded-full animate-bounce-gentle"></div>
              <div className="absolute bottom-12 left-8 w-8 h-8 bg-accent/20 rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 right-4 w-6 h-6 bg-secondary/30 rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            CONTENT BLOCK: Scroll Indicator
            ================================================================= */}
        {/* Animated scroll indicator at bottom of hero section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div> {/* Animated scroll dot */}
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">Role para baixo</p> {/* "Scroll down" instruction text */}
        </div>
      </div>
    </section>
  );
};

export default Hero;