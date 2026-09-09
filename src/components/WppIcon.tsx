import { FaWhatsapp } from "react-icons/fa";

export default function WppIcon() {
  const WHATS =
    "https://wa.me/5511968165880?text=Ol%C3%A1!%20Quero%20agendar%20uma%20aula%20experimental%20de%20Pilates.";

  return (
    <a
      href={WHATS}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
    >
      <FaWhatsapp className="h-5 w-5" />
    </a>
  );
}
