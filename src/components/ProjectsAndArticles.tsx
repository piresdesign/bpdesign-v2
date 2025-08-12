import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Tag } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "UX, interfaces amigáveis e apostas: O que isso tem em comum?",
    description:
      "Como princípios do design e gamificação manipulam a percepção de ganho e influenciam no comportamento de usuários em plataformas de apostas.",
    type: "Artigo",
    date: "2025-06-30",
    category: "UX Collective BR",
    image: "/images/slotmachine.png",
    link: "https://brasil.uxdesign.cc/ux-interfaces-amigaveis-e-apostas-o-que-isso-tem-em-comum-fb716e00856c",
  },
  {
    id: 2,
    title: "Tempo subjetivo e UX: Quando cada segundo conta",
    description: "Esperar nunca é só questão de tempo. Relaciona-se diretamente como nos sentimos enquanto esperamos. O design tem um papel fundamental nisso.",
    type: "Artigo",
    date: "2025-05-02",
    category: "UX Collective BR",
    image: "/images/tempo.png",
    link: "https://medium.com/ux-user-experience-design-em-portugues/tempo-subjetivo-e-ux-quando-cada-segundo-conta-e9bfdc0fcdf0",
  },
  {
    id: 3,
    title: "Por que o cérebro adora padrões? A ciência por trás da previsibilidade no design digital",
    description: "Como a mente humana percebe padrões e como isso pode transformar a experiência.",
    type: "Artigo",
    date: "2025-04-07",
    category: "UX Collective BR",
    image: "/images/padroes.png",
    link: "https://medium.com/ux-user-experience-design-em-portugues/por-que-o-cérebro-adora-padrões-a-ciência-por-trás-da-previsibilidade-no-design-digital-626b108700cb",
  },
  {
    id: 4,
    title: "Espaço em branco e UX: O invisível que estrutura a experiência",
    description: "Reflexões, estudos, impactos, aspectos psicológicos e cognitivos que relacionam a arquitetura visual e o espaço em branco.",
    type: "Artigo",
    date: "2025-02-25",
    category: "UX Collective BR",
    image: "/images/branco.png",
    link: "https://medium.com/ux-user-experience-design-em-portugues/espaco-em-branco-e-ux-o-invisivel-que-estrutura-a-experiencia-3425257739de",
  },
  {
    id: 5,
    title: "Negociando com negócio: Como falar com stakeholders",
    description: "Como designers podem ir além da criação de interfaces e se tornar verdadeiros negociadores nas equipes de produto.",
    type: "Artigo",
    date: "2025-01-22",
    category: "UX Collective BR",
    image: "/images/negociando.png",
    link: "https://medium.com/ux-user-experience-design-em-portugues/negociando-com-negócio-como-falar-com-stakeholders-b92048643c78",
  },
  {
    id: 6,
    title: "No palco do produto: O espetáculo entre design e tecnologia",
    description: "O que há em comum entre designers e desenvolvedores? Por que se relacionam no fluxo de um produto digital? Qual a importância desse relacionamento?",
    type: "Artigo",
    date: "2024-12-20",
    category: "UX Collective BR",
    image: "/images/palco-projeto.png",
    link: "https://medium.com/ux-user-experience-design-em-portugues/no-palco-do-produto-o-espetáculo-entre-design-e-tecnologia-fafc7098c599",
  },
  {
    id: 7,
    title: "Melhor Gestão - Mobile App Design",
    description: "Atuei como UX/UI Designer na concepção do aplicativo MelhorGestão. O app está atualmente em desenvolvimento e deve ser disponibilizado nas lojas de aplicativo em breve.",
    type: "Projeto",
    date: "2024-12-14",
    category: "UX/UI Design",
    image: "/images/melhor-gestao.png",
    link: "https://www.behance.net/gallery/214773165/Melhor-Gestao-Mobile-App-Design",
  },
  {
    id: 8,
    title: "UX/UI Design - ShopNice",
    description: "Aplicativo com conceitos de gamificação que busca aumentar a visitação e consumo em centros comerciais. Desenvolvido durante o curso de UI Design da Awari.",
    type: "Projeto",
    date: "2022-01-17",
    category: "UX/UI Design",
    image: "/images/shopnice.png",
    link: "https://www.behance.net/gallery/135321137/UXUI-Design-ShopNice",
  },
  {
    id: 9,
    title: "Estudo de caso UX/UI Design - Organize",
    description: "Ajudando pessoas a organizar as suas tarefas com mais de uma ferramenta dentro de um mesmo aplicativo.",
    type: "Projeto",
    date: "2021-05-18",
    category: "UX/UI Design",
    image: "/images/organize.png",
    link: "https://brunopires134.medium.com/estudo-de-caso-organize-b9977fec7f3b",
  },
  {
    id: 10,
    title: "Case - Ready",
    description: "Ajudando leitores a encontrarem recomendações, registrar leituras, organizar suas bibliotecas e conhecer pessoas que compartilhem do mesmo interesse. Meu primeiro estudo de caso, desenvolvido em 2021.",
    type: "Projeto",
    date: "2021-04-16",
    category: "UX/UI Design",
    image: "/images/ready.png",
    link: "https://www.behance.net/gallery/117661033/UXUI-Design-Ready",
  }
  // ...restante do array
];

const ProjectsAndArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = portfolioItems.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const goToPrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section id="projects" className="py-20 bg-subtle-gradient scroll-section">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Projetos & <span className="text-primary">Artigos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma coleção dos meus trabalhos, estudos e reflexões sobre design de produto em formato de artigo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentItems.map((item) => (
            <Card key={item.id} className="bg-card border-border animate-slide-up">
              {/* Imagem direta */}
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />

              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary font-medium">{item.category}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm" className="mt-4">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver {item.type}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" onClick={goToPrevious} disabled={currentPage === 1}>
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </Button>

          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                onClick={() => goToPage(page)}
                className={`w-10 h-10 ${currentPage === page ? "bg-primary text-primary-foreground" : "hover:bg-accent"}`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button variant="outline" size="sm" onClick={goToNext} disabled={currentPage === totalPages}>
            <span>Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Mostrando {startIndex + 1}-{Math.min(endIndex, portfolioItems.length)} de {portfolioItems.length} itens
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsAndArticles;
