import {
  Activity,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
    
    const servicos = [
    {
        icon: HeartPulse,
        title: "Reabilitação e pós-fisioterapia",
        text: "Continuidade segura do seu tratamento, com progressão respeitando o seu tempo e o laudo do seu profissional.",
    },
    {
        icon: ShieldCheck,
        title: "Alívio de dores",
        text: "Protocolos para coluna, joelhos e ombros, fortalecendo o que sustenta o seu corpo no dia a dia.",
    },
    {
        icon: Activity,
        title: "Condicionamento e performance",
        text: "Força, mobilidade e controle para quem quer evoluir, treinar melhor e prevenir lesões.",
    },
    ];

    return (

        <section id="servicos" className="scroll-mt-15 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Serviços & modalidades
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Aulas de Pilates direcionadas ao seu objetivo
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {servicos.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}