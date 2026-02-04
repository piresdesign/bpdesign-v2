import { Button } from "@/components/ui/button";
import profileImage from '../assets/bruno-perfil.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background scroll-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Sobre <span className="text-primary">Mim</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Product Designer apaixonado por criar experiências digitais significativas.
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Com mais de 5 anos de experiência em Design de Produto e UX/UI, sou especializado em 
                transformar ideias complexas em soluções digitais intuitivas e impactantes.
              </p>
              
              <p>
                Product Designer com atuação estratégica em produtos digitais, conectando experiência do usuário, objetivos de negócio e 
                soluções orientadas por dados e inteligência artificial. Atuo na transformação de problemas complexos em experiências claras, 
                eficientes e com impacto mensurável para usuários e negócios.
              </p>

              <p>
                Me especializo através de cursos de Produto na PM3 e compartilho aprendizados por meio de artigos sobre UX, Product Design e 
                aplicações práticas de IA, com foco em aspectos cognitivos e emocionais da experiência, incluindo publicações na UX Collective BR.
              </p>
              <p><a 
            href="https://drive.google.com/file/d/19Hl05mimD66KaTuQhWZgUYfnXlcFS1TU/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              📄 VEJA MEU CV
            </Button>
            </a>
            </p>
            </div>

            {/* Skills/Expertise */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Especialidades</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Product Design', 'UX/UI Design', 'Product Strategy', 'Product Discovery',
                  'Figma/FigJam', 'UX Research', 'Design Thinking', 'Agile/Scrum', 'HTML e CSS', 'Comunicação e Escrita'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
          
          </div>
          </div>
          </div>

          {/* Image/Visual - Right Side */}
          <div className="relative animate-slide-in-right">
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8">
          <img src={profileImage}
          alt="Bruno Pires"
          className="w-90 h-90 rounded 32px mx-auto object-cover">
          </img>
              
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"></div>
            </div>

            {/* Stats or Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>

              <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
              </div>

              <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Artigos Publicados</div>
              </div>

              <div className="text-center p-4 bg-card rounded-lg shadow-soft">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Certificados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
