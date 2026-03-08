import { Button } from "@/components/ui/button";
import profileImage from '../assets/bruno-perfil.webp';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content - Left Side */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-3">
              <p className="text-sm font-medium tracking-widest uppercase text-primary/70">Sobre</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Bruno Pires
              </h2>
              <p className="text-xl text-muted-foreground font-light">
                Product Designer
              </p>
            </div>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Atuo em todas as etapas do ciclo de produto, da imersão com usuários à entrega
                validada com stakeholders. Meu diferencial está em combinar rigor de discovery com
                velocidade de prototipação, potencializado pelo uso estratégico de IA no processo criativo.
              </p>
              <p>
                Influencio sem autoridade formal: conecto design, produto e desenvolvimento com
                comunicação objetiva. Contribuo para Design Systems como referência de consistência
                e escala.
              </p>
              <p>
                Aplico meu conhecimento em projetos pessoais, compartilhando insights no LinkedIn e
                escrevo artigos sobre psicologia cognitiva aplicada ao design na UX Collective BR.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Product Design', 'Product Discovery', 'UX Research',
                  'Figma · FigJam', 'Design System', 'IA aplicada ao Design',
                  'Prototipação avançada', 'UX Writing', 'Agile · Scrum'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/19Hl05mimD66KaTuQhWZgUYfnXlcFS1TU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2 block"
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                📄 Ver Currículo
              </Button>
            </a>
          </div>

          {/* Image + Stats - Right Side */}
          <div className="relative animate-slide-in-right space-y-6">
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8">
              <img
                src={profileImage}
                alt="Bruno Pires"
                className="w-72 h-72 rounded-2xl mx-auto object-cover shadow-card"
                loading="lazy"
              />
              <div className="absolute -top-3 -right-3 w-7 h-7 bg-primary rounded-full" />
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-accent rounded-full" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-4 bg-card border border-border rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-xs text-muted-foreground mt-1">Anos em produto</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground mt-1">Artigos publicados</div>
              </div>
              <div className="text-center p-4 bg-card border border-border rounded-xl shadow-soft">
                <div className="text-2xl font-bold text-primary">B2B</div>
                <div className="text-xs text-muted-foreground mt-1">Foco em SaaS</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
