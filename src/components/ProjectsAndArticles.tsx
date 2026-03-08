import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioItems = [
  { title: "ZenIA - Estruturando memória emocional e apoiando processos de reflexão pessoal", description: "Design estratégico aplicado à IA em contextos emocionalmente sensíveis.", type: "Projeto", date: "2026-02-23", category: "Product Design", image: "/images/ZenIA.png", link: "https://brunopires134.medium.com/zenia-estruturando-memória-emocional-e-apoiando-processos-de-reflexão-pessoal-34545bac67d6" },
  { title: "Design Thinking aplicado à logística: da complexidade operacional à eficiência em escala", description: "Como atuei na transformação de processos logísticos de um dos maiores atacadistas do país.", type: "Projeto", date: "2026-02-09", category: "Product Design", image: "/images/atacadista.png", link: "https://medium.com/@brunopires134/design-thinking-aplicado-à-logística-da-complexidade-operacional-à-eficiência-em-escala-7008ad8f3e4f" },
  { title: "Micro emoções, grandes decisões: Marcadores somáticos e o UX", description: "Como cada clique, detalhe visual e interação podem gerar marcadores positivos ou afastar de vez o usuário.", type: "Artigo", date: "2025-09-25", category: "UX Collective BR", image: "/images/marcadores-somaticos.png", link: "https://medium.com/ux-user-experience-design-em-portugues/micro-emocoes-grandes-decisoes-marcadores-somaticos-e-o-ux-f97da72ef1a4" },
  { title: "Por que escolher é tão cansativo?", description: "O que a Lei de Hick e o Paradoxo da Escolha nos ensinam sobre decisões rápidas e interfaces mais eficientes.", type: "Artigo", date: "2025-08-21", category: "UX Collective BR", image: "/images/escolher.png", link: "https://medium.com/ux-user-experience-design-em-portugues/por-que-escolher-é-tão-cansativo-be1fb3e6f0b1" },
  { title: "UX, interfaces amigáveis e apostas: O que isso tem em comum?", description: "Como princípios do design e gamificação manipulam a percepção de ganho.", type: "Artigo", date: "2025-06-30", category: "UX Collective BR", image: "/images/slotmachine.png", link: "https://brasil.uxdesign.cc/ux-interfaces-amigaveis-e-apostas-o-que-isso-tem-em-comum-fb716e00856c" },
  { title: "Tempo subjetivo e UX: Quando cada segundo conta", description: "Esperar nunca é só questão de tempo. O design tem um papel fundamental nisso.", type: "Artigo", date: "2025-05-02", category: "UX Collective BR", image: "/images/tempo.png", link: "https://medium.com/ux-user-experience-design-em-portugues/tempo-subjetivo-e-ux-quando-cada-segundo-conta-e9bfdc0fcdf0" },
  { title: "Por que o cérebro adora padrões? A ciência por trás da previsibilidade no design digital", description: "Como a mente humana percebe padrões e como isso pode transformar a experiência.", type: "Artigo", date: "2025-04-07", category: "UX Collective BR", image: "/images/padroes.png", link: "https://medium.com/ux-user-experience-design-em-portugues/por-que-o-cérebro-adora-padrões-a-ciência-por-trás-da-previsibilidade-no-design-digital-626b108700cb" },
  { title: "Espaço em branco e UX: O invisível que estrutura a experiência", description: "Reflexões sobre arquitetura visual e o impacto psicológico do espaço em branco.", type: "Artigo", date: "2025-02-25", category: "UX Collective BR", image: "/images/branco.png", link: "https://medium.com/ux-user-experience-design-em-portugues/espaco-em-branco-e-ux-o-invisivel-que-estrutura-a-experiencia-3425257739de" },
  { title: "Negociando com negócio: Como falar com stakeholders", description: "Como designers podem ir além da criação de interfaces e se tornar verdadeiros negociadores.", type: "Artigo", date: "2025-01-22", category: "UX Collective BR", image: "/images/negociando.png", link: "https://medium.com/ux-user-experience-design-em-portugues/negociando-com-negócio-como-falar-com-stakeholders-b92048643c78" },
  { title: "No palco do produto: O espetáculo entre design e tecnologia", description: "O que há em comum entre designers e desenvolvedores e a importância desse relacionamento.", type: "Artigo", date: "2024-12-20", category: "UX Collective BR", image: "/images/palco-projeto.png", link: "https://medium.com/ux-user-experience-design-em-portugues/no-palco-do-produto-o-espetáculo-entre-design-e-tecnologia-fafc7098c599" },
  { title: "Melhor Gestão - Mobile App Design", description: "Atuei como UX/UI Designer na concepção do aplicativo MelhorGestão.", type: "Projeto", date: "2024-12-14", category: "UX/UI Design", image: "/images/melhor-gestao.png", link: "https://www.behance.net/gallery/214773165/Melhor-Gestao-Mobile-App-Design" },
  { title: "UX/UI Design - ShopNice", description: "Aplicativo com conceitos de gamificação para aumentar visitação em centros comerciais.", type: "Projeto", date: "2022-01-17", category: "UX/UI Design", image: "/images/shopnice.png", link: "https://www.behance.net/gallery/135321137/UXUI-Design-ShopNice" },
  { title: "Estudo de caso UX/UI Design - Organize", description: "Ajudando pessoas a organizar suas tarefas com mais de uma ferramenta dentro de um mesmo aplicativo.", type: "Projeto", date: "2021-05-18", category: "UX/UI Design", image: "/images/organize.png", link: "https://brunopires134.medium.com/estudo-de-caso-organize-b9977fec7f3b" },
  { title: "Case - Ready", description: "Ajudando leitores a encontrar recomendações e organizar suas bibliotecas. Meu primeiro estudo de caso.", type: "Projeto", date: "2021-04-16", category: "UX/UI Design", image: "/images/ready.png", link: "https://www.behance.net/gallery/117661033/UXUI-Design-Ready" },
];

const AUTOPLAY_INTERVAL = 3500;
const VISIBLE_CARDS = 3;

const ProjectsAndArticles = () => {
  const [filter, setFilter] = useState<"Todos" | "Artigo" | "Projeto">("Todos");
const [visible, setVisible] = useState(true);
const [current, setCurrent] = useState(0);
const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filtered = filter === "Todos" ? portfolioItems : portfolioItems.filter(i => i.type === filter);
  const total = filtered.length;
  const maxIndex = Math.max(0, total - VISIBLE_CARDS);

  const next = useCallback(() => {
    setCurrent(c => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = () => setCurrent(c => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
  setVisible(false);
  const t = setTimeout(() => {
    setCurrent(0);
    setVisible(true);
  }, 200);
  return () => clearTimeout(t);
}, [filter]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("pt-BR", { year: "numeric", month: "short" });

  const totalItems = portfolioItems.length;
  const totalArticles = portfolioItems.filter(i => i.type === "Artigo").length;
  const totalProjects = portfolioItems.filter(i => i.type === "Projeto").length;

  return (
    <section id="projects" className="py-20 bg-subtle-gradient scroll-section">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Projetos & <span className="text-primary">Artigos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2x2">
            Uma coleção dos meus trabalhos, estudos e reflexões sobre design de produto.
          </p>
        </div>

        {/* Featured Case */}
        <div className="mb-16">
          <a href="/case/assai" className="block group">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-button">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-56 lg:h-auto overflow-hidden">
                  <img src="/images/atacadista.png" alt="Case Assaí Atacadista" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 lg:block hidden" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">Case em destaque</span>
                    <span className="text-xs text-muted-foreground">9 meses · B2B SaaS · Logística</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground leading-snug mb-2">Assaí Atacadista — Redesenho do sistema de agendamento de entregas</h3>
                    <p className="text-muted-foreground leading-relaxed">Reduzimos o tempo de agendamento de 48h para 24h com imersão em campo, prototipação iterativa e validação direta com os principais stakeholders.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {["UX Research", "Product Discovery", "Prototipação", "B2B SaaS"].map(t => (
                      <span key={t} className="px-3 py-1 bg-accent rounded-full text-accent-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Ver case completo <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Filter */}
<div className="flex mb-10">
  <div className="flex border-b border-border">
    {([["Todos", totalItems], ["Artigo", totalArticles], ["Projeto", totalProjects]] as const).map(([label, count]) => {
      const active = filter === label;
      const displayLabel = label === "Artigo" ? "Artigos" : label === "Projeto" ? "Projetos" : label;
      return (
        <button
          key={label}
          onClick={() => setFilter(label as "Todos" | "Artigo" | "Projeto")}
          className={`relative px-6 py-3 text-sm font-medium transition-all duration-300
            ${active ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          {displayLabel}
          <span className={`ml-1.5 text-xs transition-all duration-300 ${active ? "opacity-100" : "opacity-50"}`}>
            {count}
          </span>
          <span
            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ transformOrigin: "left" }}
          />
        </button>
      );
    })}
  </div>
</div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${current * (100 / VISIBLE_CARDS)}% - ${current * (24 / VISIBLE_CARDS)}px))` }}
            >
              {filtered.map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-[calc(33.333%-16px)] flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:border-primary/20 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${item.type === "Artigo" ? "bg-blue-100 text-blue-700" : "bg-primary text-primary-foreground"}`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-3">
  <div className="flex items-center justify-between">
    <span className="text-xs text-muted-foreground">{formatDate(item.date)}</span>
    <span className="text-xs text-primary font-medium">{item.category}</span>
  </div>
  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">{item.title}</h3>
  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">{item.description}</p>
  <a href={item.link} target="_blank" rel="noopener noreferrer">
    <Button variant="secondary" size="sm" className="w-full gap-2">
      <ExternalLink className="w-3.5 h-3.5" />
      Ver {item.type}
    </Button>
  </a>
</div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-soft flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-soft flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-primary/40"}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          {current + 1}–{Math.min(current + VISIBLE_CARDS, total)} de {total} itens
        </p>

      </div>
    </section>
  );
};

export default ProjectsAndArticles;