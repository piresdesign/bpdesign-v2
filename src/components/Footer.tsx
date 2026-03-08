import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Linkedin, Heart, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

// ─── EMAILJS CONFIG ───────────────────────────────────────────────
// 1. Crie conta em https://www.emailjs.com
// 2. Crie um Service e um Template
// 3. Substitua as três constantes abaixo com seus dados
const EMAILJS_SERVICE_ID  = "service_09r4vvl";
const EMAILJS_TEMPLATE_ID = "template_9kyw96l";
const EMAILJS_PUBLIC_KEY  = "C9HQkhnqta-ZaOPxL";
// ──────────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate(`/#${id}`);
  }
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      toast.success("Mensagem enviada! Responderei em breve.", {
    style: {
    background: "#16a34a",
    color: "#ffffff",
    border: "none",
  },
});
    } catch {
      setStatus("error");
      toast.error("Erro ao enviar. Tente novamente ou me chame no LinkedIn.");
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left — Brand + Nav + Social */}
          <div className="space-y-10">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">BP</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">Bruno Pires</h3>
                  <p className="text-sm text-muted-foreground">Product Designer</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
                Transformando complexidade em experiência com impacto mensurável.
                Disponível para projetos, consultorias e conversas sobre produto e design.
              </p>
            </div>

            {/* Nav */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Navegação</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {[["Início", "home"], ["Sobre", "about"], ["Projetos", "projects"], ["Contato", "contact"]].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Redes</h4>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/bruno-pires134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://medium.com/@brunopires134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all font-bold text-sm"
                >
                  M
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-1">Contato</h4>
              <p className="text-foreground font-semibold text-lg">Vamos conversar?</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Nome</label>
                  <input
                    name="from_name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">Email</label>
                  <input
                    name="reply_to"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Assunto</label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Sobre o que você quer falar?"
                  className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">Mensagem</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Escreva sua mensagem..."
                  className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground gap-2 shadow-button"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {currentYear} Bruno Pires. Todos os direitos reservados.</span>
          <div className="flex items-center gap-1">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-primary fill-current" />
            <span>em São Paulo</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary hover:text-primary-hover transition-colors"
          >
            ↑ Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;