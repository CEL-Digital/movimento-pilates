import { Button } from "../../@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../@/components/ui/sheet";

const WHATS =
  "https://wa.me/5511968165880?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20estudio.";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

import logo from "../assets/logo-movimento-pilates-icon.webp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* LOGO */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Movimento Pilates - Talita Silveira"
            width={220}
            height={150}
            className="h-10 w-auto rounded-lg sm:h-11"
          />
        </a>

        {/* NAVEGAÇÃO DESKTOP (Apenas telas grandes - lg) */}
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* AÇÕES (Desktop e Mobile) */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full px-5 sm:inline-flex"
          >
            <a href={WHATS} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>

          {/* MENU HAMBÚRGUER (Visível apenas em Mobile e Tablet - lg:hidden) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>

            {/* GAVETA QUE ABRE DA DIREITA PARA A ESQUERDA (side="right") */}
            <SheetContent
              side="right"
              className="w-[280px] bg-background border-l border-border sm:w-[350px]"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="font-display text-lg font-semibold">
                  Movimento Pilates
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 mx-4 flex flex-col gap-5">
                {/* Links de navegação mobile */}
                <nav className="flex flex-col gap-4 text-base font-medium">
                  {nav.map((n) => (
                    <a
                      key={n.href}
                      href={n.href}
                      onClick={() => setOpen(false)} // Fecha o menu ao clicar num link
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {n.label}
                    </a>
                  ))}
                </nav>

                <hr className="my-2 border-border/60" />

                {/* Botão de ação dentro da gaveta */}
                <Button asChild size="lg" className="w-full rounded-full">
                  <a href={WHATS} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
