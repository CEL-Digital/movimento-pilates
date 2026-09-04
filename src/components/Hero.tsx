import { Button } from "../../@/components/ui/button";
import {
  Phone,
  Users,
  Check,
} from "lucide-react";
import studioImage from "../assets/studio.webp";

export default function Hero() {

    const WHATS = "https://wa.me/5511968165880?text=Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20de%20Pilates.";

    return (
        <section id="inicio" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <Users className="h-3.5 w-3.5" /> Estúdio de pilates em pirituba
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Recupere sua mobilidade e viva{" "}
              <span className="text-primary">sem dores</span> com acompanhamento
              de perto
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Pilates para condicionamento físico, pós-fisioterapia e alta performance.
              Turmas reduzidas de até 12 alunos, com no máximo 4 alunos por professor —
              treino personalizado, no seu ritmo, em um ambiente calmo e exclusivo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7 text-base shadow-[var(--shadow-soft)]">
                <a href={WHATS} target="_blank" rel="noopener noreferrer">
                  Agende sua aula experimental
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 text-base">
                <a href="tel:+5511968165880">
                  <Phone className="mr-2 h-4 w-4" /> (11) 96816-5880
                </a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" /> Equilíbrio
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" /> Força
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" /> Bem-estar
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 hidden h-32 w-32 rounded-3xl bg-accent sm:block" />
            <img
              src={studioImage}
              alt="Instrutora orientando aluna em aparelho de Pilates no studio"
              width={1408}
              height={1008}
              className="relative w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>
    )
}