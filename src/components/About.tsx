import { CheckCircle2, Award, HeartHandshake, Users } from "lucide-react";
import aboutImg from "../assets/studio-lateral.webp";

const highlights = [
  {
    icon: Award,
    title: "Atendimento Personalizado",
    description: "Turmas reduzidas de no máximo 3 alunos por horário para atenção total.",
  },
  {
    icon: HeartHandshake,
    title: "Foco no Aluno",
    description: "Avaliação detalhada para adaptar cada exercício às suas necessidades e objetivos.",
  },
  {
    icon: Users,
    title: "Ambiente Acolhedor",
    description: "Espaço equipado, climatizado e preparado em Pirituba para a sua melhor experiência.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-secondary/60 scroll-mt-15 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <img
            src={aboutImg}
            alt="Sala do studio de Pilates com aparelhos e luz natural"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full rounded-[2rem] object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Quem somos
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Um studio nascido do cuidado com cada aluno
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              O <strong className="text-foreground">Movimento Pilates - Talita
              Silveira</strong> nasceu em abril de 2021 com a proposta de fugir das
              turmas lotadas. Nossas aulas têm no máximo 12 alunos, com 4 alunos por
              professor — atenção real, do primeiro contato ao último exercício.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Trabalhamos na prevenção e no alívio de dores na coluna, joelhos e ombros,
              devolvendo confiança para os movimentos do dia a dia — sentar, levantar,
              carregar, correr atrás das crianças, voltar a treinar.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["2021", "Ano de fundação"],
                ["12", "Alunos por aula"],
                ["4:1", "Alunos por professor"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-border/60 bg-card p-5">
                  <p className="font-display text-2xl font-semibold text-accent">{n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}