import aboutImg from "../assets/studio-lateral.webp";
// Importando os ícones do Lucide dentro do react-icons
import { LuUsers, LuSunMedium } from "react-icons/lu";
import { GiHealthNormal } from "react-icons/gi";

export function About() {
  const highlights = [
    {
      icon: GiHealthNormal,
      label: "avaliação postural e clínica",
    },
    {
      icon: LuUsers,
      label: "Até 4 alunos por profissional",
    },
    {
      icon: LuSunMedium,
      label: "Ambiente climatizado",
    },
  ];

  return (
    <section id="sobre" className="bg-secondary/60 scroll-mt-20 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
        <img
          src={aboutImg}
          alt="Sala do studio de Pilates com aparelhos e luz natural"
          loading="lazy"
          width={1200}
          height={900}
          className="w-full rounded-[2rem] object-cover shadow-lg"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Quem somos
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Um studio nascido do cuidado com cada aluno
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            O <strong className="text-foreground">Movimento Pilates - Talita Silveira</strong> nasceu em abril de 2021 com a proposta de aumentar a qualidade de vida e bem-estar com a prática do pilates — atenção real, do primeiro contato ao último exercício.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Trabalhamos com o Método Pilates Contemporâneo e o Pilates Funcional, nossas aulas tem duração de 45 minutos, sendo somente Pilates. A equipe é composta de dois a três professores por aula. As aulas tem por objetivo atender as necessidades do aluno, sejam elas patológicas, estéticas ou outras. Cada aluno tem um repertório de aula próprio, os professores realizam a avaliação postural e clínica na primeira aula, e com base nas informações e laudos médicos, produzimos os repertórios de aula.
          </p>

          {/* Cards com react-icons */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-start rounded-2xl border border-border/60 bg-card p-5 shadow-sm"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <p className="mt-2 text-sm font-medium leading-snug text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}