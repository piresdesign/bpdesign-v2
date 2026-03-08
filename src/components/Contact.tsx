import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Linkedin, Instagram, Rss, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-background scroll-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info - Left Side */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Vamos <span className="text-primary">Conversar</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Pronto para transformar sua ideia em uma experiência digital incrível?
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Estou aberto para discutir novos projetos, oportunidades de colaboração 
                ou simplesmente trocar ideias sobre design e tecnologia.
              </p>
              
              <p>
                Entre em contato comigo pelos canais abaixo. Responderei o mais breve possível.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="space-y-3">
                <a 
                  href="mailto:brunopires134@gmail.com"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>brunopires134@gmail.com</span>
                </a>
                
                <a 
                  href="https://wa.me/5511930193150"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp: (11) 93019-3150</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Redes sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/bruno-pires134"
                  className="p-3 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://medium.com/@brunopires134"
                  className="p-3 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Rss className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/instadopirao"
                  className="p-3 bg-accent rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;