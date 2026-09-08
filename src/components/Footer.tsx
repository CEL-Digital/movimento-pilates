import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../@/components/ui/dialog";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState<"privacy" | "terms" | null>(null);
  const WHATS = "https://wa.me/5511968165880?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações.";
  const INSTAGRAM = "https://www.instagram.com/movimentopilates2021?igsi=cHVzMDNtODFtY2Fi";
  const FACE = "https://www.facebook.com/people/movimentopilates2021/100065328676750/?mibextid=ZbWKwL";

  return (
    <footer className="border-t border-border/40 bg-card/30 py-12 text-sm text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        {/* Direitos Autorais */}
        <div className="flex gap-4 items-center">
            
            {/* Ícones Sociais Minimalistas */}
            <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Movimento Pilates - Talita Silveira. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3">
                <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Siga no Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                    <FaInstagram className="h-4 w-4" />
                </a>
                <a
                    href={FACE}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contato via WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                    <FaFacebook className="h-4 w-4" />
                </a>
                <a
                    href={WHATS}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contato via WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                    <FaWhatsapp className="h-4 w-4" />
                </a>
            </div>
        </div>
        {/* Links de Políticas e Termos */}
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => setModalOpen("privacy")}
            className="transition-colors hover:text-foreground underline-offset-4 hover:underline"
          >
            Política de Privacidade
          </button>
          <button
            onClick={() => setModalOpen("terms")}
            className="transition-colors hover:text-foreground underline-offset-4 hover:underline"
          >
            Termos de Uso
          </button>
        </div>
      </div>

      {/* MODAL: POLÍTICA DE PRIVACIDADE */}
      <Dialog open={modalOpen === "privacy"} onOpenChange={() => setModalOpen(null)}>
        <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-semibold">
              Política de Privacidade
            </DialogTitle>
            <DialogDescription>
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <p>
              O <strong>Movimento Pilates - Talita Silveira</strong> valoriza a privacidade de seus alunos e visitantes. Esta política descreve como tratamos as informações coletadas em nosso site.
            </p>

            <h4 className="font-semibold text-foreground text-base">1. Coleta de Informações</h4>
            <p>
              Coletamos informações pessoais apenas quando você nos fornece voluntariamente ao entrar em contato via WhatsApp ou formulário de agendamento (ex: nome, telefone e preferências de horário).
            </p>

            <h4 className="font-semibold text-foreground text-base">2. Uso das Informações</h4>
            <p>
              As informações fornecidas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Agendamento de aulas experimentais e avaliações posturais;</li>
              <li>Esclarecimento de dúvidas sobre os planos e serviços;</li>
              <li>Envio de lembretes ou avisos sobre o funcionamento do studio.</li>
            </ul>

            <h4 className="font-semibold text-foreground text-base">3. Compartilhamento de Dados</h4>
            <p>
              Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins de marketing.
            </p>

            <h4 className="font-semibold text-foreground text-base">4. Seus Direitos (LGPD)</h4>
            <p>
              Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você pode solicitar a alteração ou exclusão dos seus dados cadastrais a qualquer momento entrando em contato diretamente com nossa equipe.
            </p>
          </div>
        </DialogContent>
      </Dialog>


      {/* MODAL: TERMOS DE USO */}
      <Dialog open={modalOpen === "terms"} onOpenChange={() => setModalOpen(null)}>
        <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-semibold">
              Termos de Uso
            </DialogTitle>
            <DialogDescription>
              Regras gerais para navegação no site e agendamento de aulas
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <h4 className="font-semibold text-foreground text-base">1. Aceitação dos Termos</h4>
            <p>
              Ao utilizar este site, você concorda em cumprir e respeitar os termos e condições descritos nesta página.
            </p>

            <h4 className="font-semibold text-foreground text-base">2. Serviços do Studio</h4>
            <p>
              As informações sobre horários, turmas, planos e valores exibidas neste site são informativas e sujeitas a alterações sem aviso prévio. A confirmação do agendamento depende de disponibilidade de vagas no studio.
            </p>

            <h4 className="font-semibold text-foreground text-base">3. Avaliação Física e Saúde</h4>
            <p>
              A prática do Pilates exige acompanhamento profissional. Recomendamos que todos os alunos informem previamente sobre limitações físicas, cirurgias recentes ou dores crônicas durante a avaliação presencial.
            </p>

            <h4 className="font-semibold text-foreground text-base">4. Propriedade Intelectual</h4>
            <p>
              Todo o conteúdo deste site (textos, logotipos, imagens e marca) é de propriedade exclusiva do Movimento Pilates - Talita Silveira.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}