import { useState, useEffect } from "react";
import { Button } from "../../@/components/ui/button";

// Declaração para o TypeScript reconhecer o gtag global
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fez alguma escolha anteriormente
    const consent = localStorage.getItem("cookie_consent_movimento");
    if (!consent) {
      setIsVisible(true);
    } else if (consent === "accepted") {
      // Se já aceitou anteriormente, concede o consentimento ao GA4
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_movimento", "accepted");

    // Concede permissão para o Google Analytics registrar a navegação
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent_movimento", "declined");

    // Mantém as permissões negadas
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Aviso de Privacidade e Cookies"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-2xl border border-white/30 bg-background/95 p-4 shadow-xl backdrop-blur-md transition-all sm:bottom-6 sm:p-5"
    >
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Nós utilizamos cookies e tecnologias semelhantes para melhorar a sua
          experiência de navegação em nosso site. Para saber mais, acesse{" "}
          <span className="font-medium text-foreground underline underline-offset-2">
            Política de Privacidade
          </span>{" "}
          no rodapé.
        </p>

        <div className="flex w-full shrink-0 items-center justify-center gap-2 sm:w-auto">
          <Button
            onClick={handleDecline}
            variant="outline"
            size="sm"
            className="w-1/2 sm:w-auto text-xs"
          >
            Apenas necessários
          </Button>

          <Button
            onClick={handleAccept}
            size="sm"
            className="w-1/2 sm:w-auto text-xs font-medium shadow-sm"
          >
            Aceitar todos
          </Button>
        </div>
      </div>
    </aside>
  );
}
