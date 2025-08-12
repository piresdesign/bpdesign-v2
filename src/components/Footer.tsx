import { Linkedin, Instagram, Mail, Heart, Rss } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">BP</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Bruno Pires</h3>
                <p className="text-sm text-muted-foreground">Product Designer</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Apaixonado por desafios e criando experiências digitais que melhoram a vida das pessoas através de design 
              centrado no usuário e tecnologia inovadora.
            </p>

           
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Product Design</li>
              <li className="text-muted-foreground">UX/UI Design</li>
              <li className="text-muted-foreground">User Research</li>
              <li className="text-muted-foreground">Prototyping</li>
              <li className="text-muted-foreground">Consultoria em Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Bruno Pires. Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-blue-500 fill-current" />
            <span>em São Paulo, Brasil</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="text-sm text-primary hover:text-primary-hover transition-colors"
          >
            ↑ Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;