import { Button } from "../../@/components/ui/button";
import talitaImg from "../assets/team/talita.webp";
import argeleneImg from "../assets/team/argelene.webp";
import camilaImg from "../assets/team/camila.webp";
import kauanyImg from "../assets/team/kauany.webp";
import lidianeImg from "../assets/team/lidiane.webp";
import luizImg from "../assets/team/luiz.webp";
import marciaImg from "../assets/team/marcia.webp";
import vanessaImg from "../assets/team/vanessa.webp";
import veraImg from "../assets/team/vera-lucia.webp";
import keithImg from "../assets/team/keith.webp";
import rafaelImg from "../assets/team/rafael.webp";

export default function Team() {
  const equipe = [
    {
      nome: "Talita Silveira",
      cargo: "Proprietária & Profissional de Educação Física",
      img: talitaImg,
    },
    {
      nome: "Argelene",
      cargo: "Recepcionista",
      img: argeleneImg,
    },
    {
      nome: "Camila",
      cargo: "Fisioterapeuta",
      img: camilaImg,
    },
    {
      nome: "Kauany",
      cargo: "Profissional de Educação Física & Fisioterapeuta",
      img: kauanyImg,
    },
    {
      nome: "Keith",
      cargo: "Profissional de Educação Física",
      img: keithImg,
    },
    {
      nome: "Lidiane",
      cargo: "Profissional de Educação Física",
      img: lidianeImg,
    },
    {
      nome: "Luiz",
      cargo: "Profissional de Educação Física",
      img: luizImg,
    },
    {
      nome: "Marcia Gabriela",
      cargo: "Profissional de Educação Física",
      img: marciaImg,
    },
    {
      nome: "Rafael",
      cargo: "Estagiário",
      img: rafaelImg,
    },
    {
      nome: "Vanessa",
      cargo: "Fisioterapeuta",
      img: vanessaImg,
    },
    {
      nome: "Vera Lúcia",
      cargo: "Profissional de Educação Física",
      img: veraImg,
    },
  ];

  return (
    <section id="equipe" className="scroll-mt-10 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Nossos profissionais
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Quem vai cuidar de você
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((m) => (
            <article
              key={m.nome}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <img
                src={m.img}
                alt={`Retrato de ${m.nome}`}
                loading="lazy"
                width={800}
                height={900}
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{m.nome}</h3>
                <p className="text-sm font-medium text-primary">{m.cargo}</p>
              </div>
            </article>
          ))}
          <div className="flex flex-col justify-center rounded-3xl bg-secondary/70 p-8">
            <h3 className="font-display text-xl font-semibold">
              Equipe em crescimento
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nossos instrutores são selecionados pelo cuidado com o aluno e
              pela formação acadêmica. Venha conhecer o studio e o profissional
              que vai acompanhar o seu treino.
            </p>
            <Button asChild className="mt-6 w-fit rounded-full">
              <a href="#contato">Conhecer o studio</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
