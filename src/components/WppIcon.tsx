import { Phone } from "lucide-react"

export default function WppIcon() {

    const WHATS = "https://wa.me/5511968165880?text=Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20de%20Pilates.";

    return (
        <a
        href={WHATS}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
      >
        <Phone className="h-4 w-4" /> WhatsApp
      </a>
    )
}