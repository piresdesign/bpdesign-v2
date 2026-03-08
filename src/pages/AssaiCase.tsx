import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Section = ({ label, title, children }: { label: string; title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{title}</h2>
    <div className="text-base text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-6 bg-card border border-border rounded-xl shadow-soft">
    <div className="text-3xl font-bold text-primary">{value}</div>
    <div className="text-sm text-muted-foreground mt-1">{label}</div>
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">{children}</span>
);

const AssaiCase = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">

          {/* Back */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>

          {/* Header */}
          <div className="space-y-6 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider">
                Case em destaque
              </span>
              <span className="text-sm text-muted-foreground">Trizy by nstech</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Projeto Assaí - Redesenho do sistema de agendamento de entregas<br />
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Como redesenhamos o processo de agendamento de um dos maiores atacadistas do Brasil,
              reduzindo o tempo de agendamento em 50% em uma operação com 65 mil agendas por mês.
            </p>

            <div className="flex flex-wrap gap-2">
              {['UX Research', 'Product Discovery', 'Prototipação', 'B2B SaaS', 'Logística'].map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden border border-border mb-16 shadow-card">
            <img
              src="/images/atacadista.png"
              alt="Sistema de agendamento Assaí"
              className="w-full object-cover"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <Stat value="48h→24h" label="Tempo de agendamento" />
            <Stat value="+65 mil" label="Agendas por mês" />
            <Stat value="+300" label="Lojas no Brasil" />
            <Stat value="9 meses" label="Duração do projeto" />
          </div>

          {/* Content sections */}
          <div className="space-y-14">

            <Section label="01 · Contexto" title="Uma operação crítica com escala nacional">
              <p>
                O Assaí Atacadista até Janeiro de 2024, operava com 2.000 fornecedores ativos, 12 centros de distribuição e
                290 lojas distribuídas por todo o Brasil. Número hoje muito maior. A gestão de abastecimento dessas lojas
                e CDs depende de um processo contínuo de agendamento de entregas. À época do projeto,
                esse processo era quase inteiramente manual.
              </p>
              <p>
                O volume era de aproximadamente 65 mil agendamentos por mês. Cada agenda envolvia
                coordenação entre vendedor, fornecedor, centro de distribuição, lojas e equipe de logística. Tudo
                via planilhas, e-mails e ligações.
              </p>
            </Section>

            <Section label="02 · Problema" title="48 horas para agendar uma entrega">
              <p>
                O processo manual de agendamento levava até 48 horas para ser concluído, gerando
                atrasos em cadeia: vendedores cobrando pedidos, fornecedores esperando confirmação, 
                centros de distribuição com capacidade ociosa ou sobrecarregada, 
                e gestores sem visibilidade real da fila.
              </p>
              <p>
                Além do tempo, havia ausência de critérios objetivos para priorização de cargas.
                Toda entrega competia pelo mesmo slot de tempo sem hierarquia clara. Isso
                amplificava conflitos operacionais e dificultava o planejamento de curto prazo.
              </p>
            </Section>

            <Section label="03 · Processo" title="9 meses de imersão, descoberta e prototipação">
              <p>
                O projeto durou 9 meses entre kick-off e o go-live e envolveu um time multidisciplinar com design, produto,
                engenharia e operações. Minha atuação cobriu todas as etapas do ciclo:
              </p>
              <ul className="list-none space-y-3 pt-2">
                {[
                  { step: 'Imersão em campo', desc: 'Visitas a 4 unidades do Assaí para entender o fluxo real de operação, além de entrevistas com operadores de logística e gestores de CD.' },
                  { step: 'Mapeamento de fluxos', desc: 'Documentação dos fluxos críticos de agendamento, identificando gargalos, handoffs problemáticos e pontos de decisão manual.' },
                  { step: 'Prototipação iterativa', desc: 'Desenvolvimento de protótipos reduzidos em ciclos curtos, com validação progressiva e rápida evolução a alta fidelidade no Figma.' },
                  { step: 'Documento de Validação', desc: 'Criei uma metodologia de validação que foi adotada como padrão em outros projetos da empresa, reduzindo retrabalho e aumentando alinhamento entre design, produto, desenvolvimento e principalmente o cliente.' },
                  { step: 'Validação com stakeholders', desc: 'Apresentações e sessões de validação diretas com a coordenação de logística do Assaí, garantindo alinhamento com as necessidades reais do negócio.' },
                ].map(({ step, desc }) => (
                  <li key={step} className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span><strong className="text-foreground">{step}:</strong> {desc}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section label="04 · Decisões de Design" title="O que aprendemos ao longo do caminho">
              <p>
                Uma das descobertas mais relevantes da imersão foi que o problema não era apenas de
                interface mas sim de processo. O sistema precisava não só facilitar o agendamento, mas
                introduzir critérios objetivos de priorização que antes não existiam.
              </p>
              <p>
                Optamos por uma abordagem progressiva: primeiro negociar a simplificação do fluxo existente para
                reduzir fricção imediata, depois introduzir regras de priorização de forma incremental,
                validando cada camada com os operadores antes de avançar. Um processo de muito entendimento e negociação 
                entre as áreas.
              </p>
              <p>
                A Metodologia de Documento de Validação nasceu nesse projeto como resposta a um problema
                recorrente: decisões de design chegavam ao cliente apenas após o desenvolvimento executar, gerando confusão com ambiguidades e, consecutivamente,
                retrabalho. O documento formalizou o alinhamento com os stakeholders antes do handoff, o que otimizou a entrega e minimizou falhas.
              </p>
            </Section>

            <Section label="05 · Resultado" title="48h → 24h no tempo de agendamento e reconhecimento público">
              <p>
                A aplicação do sistema reduziu o tempo de agendamento de 48 horas para 24 horas, ou seja,
                uma redução de 50% em uma operação crítica com dezenas de milhares de transações mensais.
              </p>
              <p>
                O resultado foi reconhecido diretamente pelo diretor de logística do Assaí e o projeto
                foi publicado como case de avanço logístico relevante para o setor na{' '}
                <a
                  href="https://epocanegocios.globo.com/empresas/inovacao-de-resultado/noticia/2025/01/assai-implanta-sistema-logistico-e-reduz-pela-metade-tempo-para-agendar-entrega-de-fornecedores.ghtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Época Negócios
                </a>{' '}
                em janeiro de 2025.
              </p>
            </Section>

          </div>

          {/* Divider */}
          <div className="my-16 h-px bg-border" />

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-semibold text-foreground">Quer ler o artigo completo?</p>
              <p className="text-sm text-muted-foreground">Publicado no Medium com mais contexto, detalhes do processo e alguns artefatos de design.</p>
            </div>
            <a
              href="https://medium.com/@brunopires134/design-thinking-aplicado-à-logística-da-complexidade-operacional-à-eficiência-em-escala-7008ad8f3e4f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground gap-2 shadow-button">
                Ver no Medium
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AssaiCase;
