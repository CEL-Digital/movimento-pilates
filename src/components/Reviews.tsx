import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../@/components/ui/carousel";
import { LuStar } from "react-icons/lu";

const reviews = [
  {
    id: 1,
    name: "Jéssica Lima",
    text: "Ótimo espaço, um professor por dupla, super atenciosos, explicam bem, atenção necessária, a recepção impecável, todo cuido pelo watts e pessoalmente não mudou, atenciosa, explica o mínimo dos detalhes possíveis, infraestrutura ótima, estão de parabéns",
    date: "há 10 meses",
  },
  {
    id: 2,
    name: "Kellynha Cadima",
    text: "Eu simplesmente amo os professores são muito queridos e carinhosos com os alunos. Lugar muito bonito, toca rock clássico amoooo. Excelente aulas. Meu corpo e saúde agradecem a cada aula.",
    date: "há 7 meses",
  },
  {
    id: 3,
    name: "Rita Cardoso",
    text: "Estou no Pilates desde 2024, estou amando... agradeço aos professores Talita, Luiz, Higor e keity pela dedicação e atenção a cada aluno em todas as aulas, Pilates é vida! Obrigada Momento Pilates...vcs são feras❤️🫶",
    date: "há 12 meses",
  },
  {
    id: 4,
    name: "Pricilla Souto",
    text: "Professores muito atenciosos, acompanham o histórico do aluno (caso tenha algum tipo de patologia, dificuldade) verificam exames. Talita proprietária é um doce de pessoa. A Ge, da recepção, super atenciosa, atenta, presente...",
    date: "há 12 meses",
  },
  {
    id: 5,
    name: "Rosana Oliveira",
    text: "Excelente o estúdio bem equipado, estou adorando treinar lá. Os professores sao um amor muito atenciosos e o ambiente muito acolhedor. Pretendo continuar por muito tempo la.... Estao de parabéns 👏👏",
    date: "há 12 meses",
  },
  {
    id: 6,
    name: "Patrícia Prici Agustini",
    text: "O Movimento Pilates - Talita Silveira é maravilhoso!!! Os professores são extremamente competentes e atenciosos! A recepção é organizada e acolhedora! Eu e minha filha estamos amando fazer pilates neste local tão receptivo...",
    date: "há 2 meses",
  },
  {
    id: 7,
    name: "Loren Moraes",
    text: "Olha, não tive tantas experiências com pilates, mas a que tive antes foi bem ruim, e eu só descobri isso quando fui a movimento pilates. Professores maravilhosos, atenciosos, lugar aconchegante. Amo demais !",
    date: "há 12 meses",
  },
  {
    id: 8,
    name: "Jerusa Leme",
    text: "Boa tarde, Talita. Eu agradeço muito a Deus, por ter encontrado um studio com esse padrão , com profissionalismo , vários equipamentos, simpatia, um ótimo lugar para se exercitar, cuidar da saúde . Sempre q posso indico...",
    date: "há 12 meses",
  },
  {
    id: 9,
    name: "Priscila Bernardino",
    text: "Eu gosto muito das aulas, os professores são bem atenciosos e o ambiente é bem descontraído e limpo, sempre que chego lá com dor eu saio sem dor e bem disposta. A recepcionista também é muito atenciosa. Recomendo as aulas.",
    date: "há 12 meses",
  },
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-card/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO COM PROVA SOCIAL DOS +100 ALUNOS */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <LuStar key={i} className="h-5 w-5 fill-current" />
            ))}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Mais de 100 alunos satisfeitos no Google
          </h2>
          <p className="mt-2 text-muted-foreground">
            Nota 5.0 estrelas · Veja o que dizem sobre nosso atendimento
          </p>
        </div>

        {/* CARROSSEL */}
        <div className="mt-12 px-4 sm:px-10">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {reviews.map((r) => (
                <CarouselItem key={r.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                    <div>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <LuStar key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        "{r.text}"
                      </p>
                    </div>
                    <div className="mt-6 border-t border-border/40 pt-4 text-xs font-semibold text-foreground">
                      {r.name}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* BOTÃO PARA O GOOGLE REVIEWS REAL */}
        <div className="mt-10 text-center">
          <a
            href="https://share.google/gQWh614YjecH3gT7c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Ver todas as 100+ avaliações diretamente no Google →
          </a>
        </div>

      </div>
    </section>
  );
}