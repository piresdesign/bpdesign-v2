import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import bpdesign from '../assets/bpdesign-icon.svg';

const navLinks = [
  { label: "Início",   id: "home"     },
  { label: "Sobre",    id: "about"    },
  { label: "Projetos", id: "projects" },
  { label: "Contato",  id: "contact"  },
];

function Navigation() {
  const [active, setActive]     = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker — só ativa se os ids existirem na página
  useEffect(() => {
    const onScroll = () => {
      const offsets = navLinks.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const valid = offsets.filter(o => o.top !== Infinity);
      if (valid.length === 0) return;
      const closest = valid.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 shrink-0"
          >
            <img src={bpdesign} alt="bpdesign logo" className="w-7 h-7 object-contain" />
            <span className="font-semibold text-foreground text-sm">Bruno Pires</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  active === id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right — CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/19Hl05mimD66KaTuQhWZgUYfnXlcFS1TU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-border rounded-lg text-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Currículo
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  active === id
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {label}
              </button>
            ))}
            <div className="border-t border-border mt-2 pt-3">
              <a
                href="https://drive.google.com/file/d/19Hl05mimD66KaTuQhWZgUYfnXlcFS1TU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-4 h-4" />
                Ver Currículo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;