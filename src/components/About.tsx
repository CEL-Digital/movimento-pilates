import aboutImg from "../assets/studio-lateral.webp";
import { LuCalendar, LuUsers, LuSunMedium } from "react-icons/lu";

export function About() {
  const highlights = [
    { icon: LuCalendar, label: "Fundado em 2021 (35m² no Studio Atual)" },
    { icon: LuUsers, label: "Equipe de 10 Profissionais Unidos" },
    { icon: LuSunMedium, label: "Atendimento Humanizado & Climatizado" },
  ];

  return (
    <section id="sobre" className="scroll-mt-10 bg-secondary/60 py-20">
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
            Nossa História
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Uma trajetória construída com amor, dedicação e sonhos
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Toda trajetória é construída por desafios, aprendizados, sonhos e
              muita dedicação. No início, em abril de 2021, o Studio era uma
              pequena sala de apenas 35 m², com quatro equipamentos. Mal cabiam
              os alunos e a professora, mas era um espaço construído com muito
              carinho e amor pelo Pilates.
            </p>
            <p>
              Com o tempo, aquele sonho cresceu. Após um ano e seis meses,
              mudamos para uma sala maior. Hoje, somos uma equipe de dez
              profissionais unidos pelo mesmo propósito: oferecer um atendimento
              de qualidade, acolhedor e humanizado.
            </p>
          </div>

          {/* Citação destacada */}
          <blockquote className="mt-6 border-l-2 border-primary pl-4 font-display text-base font-medium italic text-foreground">
            "O que começou como um sonho, hoje é uma realidade. E esse é apenas
            o começo."
            <span className="mt-1 block text-xs font-normal non-italic text-muted-foreground">
              — Studio Movimento Pilates
            </span>
          </blockquote>

          {/* Cards de Destaque */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-start rounded-2xl border border-border/60 bg-card p-4 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-2 text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
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
