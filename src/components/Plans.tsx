import { Button } from "../../@/components/ui/button";
import { Check } from "lucide-react";

export default function Plans() {
  const WHATS =
    "https://wa.me/5511968165880?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20estúdio.";

  const planos = [
    {
      nome: "Plano Mensal",
      destaque: false,
      resumo: "3 meses de acompanhamento contínuo",
      itens: [
        "Plano com 1 aula por semana",
        "Plano com 2 aulas por semana",
        "Plano com 3 aulas por semana",
        "Pix & Dinheiro",
      ],
    },
    {
      nome: "Plano Trimestral",
      destaque: false,
      resumo: "3 meses de acompanhamento contínuo",
      itens: [
        "Plano com 1 aula por semana",
        "Plano com 2 aulas por semana",
        "Plano com 3 aulas por semana",
        "3x - Cartão de Crédito",
      ],
    },
    {
      nome: "Plano Semestral",
      destaque: true,
      resumo: "6 meses — melhor custo-benefício",
      itens: [
        "Plano com 1 aula por semana",
        "Plano com 2 aulas por semana",
        "Plano com 3 aulas por semana",
        "6x - Cartão de Crédito",
      ],
    },
    {
      nome: "Experiência Avulsa",
      destaque: false,
      resumo: "Aula avulsa",
      itens: [
        "Atendimento personalizado",
        "Experiência do pilates",
        "Plano sem fidelidade",
        "Pix & Dinheiro",
      ],
    },
  ];

  return (
    <section id="planos" className="scroll-mt-20 py-4 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-[2.5rem] bg-secondary/70 px-6 py-14 sm:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Planos em destaque
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Escolha a frequência ideal para a sua rotina
            </h2>
            <p className="mt-4 text-muted-foreground">
              Planos trimestrais e semestrais com frequência de 1x a 3x por
              semana. O valor final depende do plano e da frequência escolhida.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {planos.map((p) => (
              <div
                key={p.nome}
                className={
                  p.destaque
                    ? "relative rounded-3xl border-2 border-primary bg-card p-8 shadow-[var(--shadow-soft)]"
                    : "rounded-3xl border border-border bg-card p-8"
                }
              >
                {p.destaque && (
                  <span className="absolute -top-3 right-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Mais escolhido
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold">
                  {p.nome}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.resumo}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.itens.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={p.destaque ? "default" : "outline"}
                  className="mt-8 w-full rounded-full"
                >
                  <a href={WHATS} target="_blank" rel="noopener noreferrer">
                    Solicitar valores
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
