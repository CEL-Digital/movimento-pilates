import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion";

export default function Faq() {

    const faq = [
        {
            q: "Quanto custa o Pilates?",
            a: "O valor varia conforme o plano escolhido (trimestral ou semestral) e a frequência semanal de aulas. Como o atendimento é individual, montamos um orçamento sob medida — chame no WhatsApp e conte o seu objetivo.",
        },
        {
            q: "Quais são os horários disponíveis?",
            a: "Atendemos de segunda a sexta, em horários da manhã, tarde e início da noite, além de sábados pela manhã. Como as vagas são individuais, confirmamos a disponibilidade do horário desejado no momento do agendamento.",
        },
        {
            q: "Preciso ter indicação médica para começar?",
            a: "Não é obrigatório. Fazemos uma avaliação inicial completa antes da primeira aula. Se você estiver em tratamento ou pós-cirúrgico, o laudo ou orientação do seu médico/fisioterapeuta nos ajuda a personalizar ainda mais o treino.",
        },
    ];

    return (
        <section id="faq" className="bg-secondary/60 scroll-mt-15 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
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
            {faq.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
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
    )
}