import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion";

export default function Faq() {
  const faqList = [
    {
      id: "o-que-e-pilates",
      q: "O que é o Pilates?",
      a: (
        <div className="space-y-3">
          <p>
            O Pilates é um método de exercícios desenvolvido por Joseph Pilates,
            na década de 1920, originalmente chamado de “Contrologia”. O método
            tem como princípio a integração entre corpo e mente, promovendo
            maior consciência corporal, controle dos movimentos e qualidade de
            vida.
          </p>
          <p>
            Por meio de exercícios realizados de forma consciente e precisa, o
            Pilates trabalha o fortalecimento muscular, a flexibilidade, o
            equilíbrio, a mobilidade e a postura, respeitando as necessidades e
            os limites de cada pessoa.
          </p>

          <div className="pt-2">
            <p className="font-medium text-foreground text-xs uppercase tracking-wider mb-2">
              Princípios essenciais do método:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Centralização",
                "Concentração",
                "Controle",
                "Precisão",
                "Respiração",
                "Fluidez",
              ].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <p className="pt-1">
            No Studio Movimento Pilates, cada exercício é orientado de forma
            individualizada, buscando proporcionar uma prática segura,
            consciente e eficiente para diferentes objetivos e níveis de
            condicionamento. Agende sua aula experimental e venha conhecer o
            Pilates! ✨
          </p>
        </div>
      ),
    },
    {
      id: "beneficios-do-pilates",
      q: "Quais são os benefícios do Pilates?",
      a: (
        <div className="space-y-3">
          <p>
            Os benefícios do Pilates são diversos e podem contribuir para uma
            vida mais ativa, saudável e equilibrada. Entre os principais,
            destacam-se:
          </p>
          <ul className="grid gap-1.5 pl-2 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Melhora da postura e
              consciência corporal
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Aumento da flexibilidade e
              mobilidade
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Fortalecimento e
              resistência muscular
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Melhora do equilíbrio e
              coordenação
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Aprimoramento da
              respiração
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Redução de tensões e
              desconfortos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Melhora do condicionamento
              físico
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">•</span> Prevenção de lesões
            </li>
            <li className="flex items-center gap-2 sm:col-span-2">
              <span className="text-primary">•</span> Promoção do bem-estar
              físico e mental
            </li>
          </ul>
          <p className="font-medium text-primary pt-1">
            E muito mais! O Pilates respeita as características e objetivos de
            cada pessoa.
          </p>
        </div>
      ),
    },
    {
      id: "quanto-custa",
      q: "Quanto custa o Pilates?",
      a: "O valor varia conforme o plano escolhido (trimestral ou semestral) e a frequência semanal de aulas. Como o atendimento é individual, montamos um orçamento sob medida — chame no WhatsApp e conte o seu objetivo.",
    },
    {
      id: "horarios-disponiveis",
      q: "Quais são os horários disponíveis?",
      a: "Atendemos de segunda a quintas das 7h as 12h e das 14h as 21h Sexta das 7h as 11h",
    },
    {
      id: "indicacao-medica",
      q: "Preciso ter indicação médica para começar?",
      a: "Não é obrigatório. Fazemos uma avaliação inicial completa antes da primeira aula. Se você estiver em tratamento ou pós-cirúrgico, o laudo ou orientação do seu médico/fisioterapeuta nos ajuda a personalizar ainda mais o treino.",
    },
    {
      id: "wellhub",
      q: "Aceitam WellHub (Antigo Gympass)?",
      a: "Sim! Aceitamos o Wellhub em nosso estúdio.",
    },
    {
      id: "totalpass",
      q: "Aceitam TotalPass?",
      a: "Sim! Aceitamos o TotalPass em nosso estúdio.",
    },
  ];

  return (
    <section id="faq" className="bg-secondary/60 scroll-mt-20 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Perguntas frequentes
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Ainda com dúvidas?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Se a sua pergunta não estiver aqui, fale com a gente no WhatsApp — a
            resposta vem rapidinho.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqList.map((f) => (
            <AccordionItem key={f.id} value={f.id} className="border-border">
              <AccordionTrigger className="text-left font-display text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
