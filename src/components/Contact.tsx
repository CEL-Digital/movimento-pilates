import { useState } from "react";

import { Label } from "../../@/components/ui/label";
import { Input } from "../../@/components/ui/input";
import { Textarea } from "../../@/components/ui/textarea";
import { Button } from "../../@/components/ui/button";

import {
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

export default function Contact() {

    const [form, setForm] = useState({ nome: "", tel: "", msg: "" });
    const WHATS = "https://wa.me/5511968165880?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20estudio.";

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        const texto = `Olá! Meu nome é ${form.nome}. Telefone: ${form.tel}. ${form.msg}`;
        window.open(`https://wa.me/5511968165880?text=${encodeURIComponent(texto)}`, "_blank");
    };

    return (
        <section id="contato" className="scroll-mt-10 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Contato e localização
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Agende sua aula experimental
            </h2>
            <form onSubmit={enviar} className="mt-8 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tel">Telefone / WhatsApp</Label>
                <Input
                  id="tel"
                  required
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  placeholder="(11) 90000-0000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="msg">Mensagem</Label>
                <Textarea
                  id="msg"
                  rows={4}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Conte o seu objetivo ou a dor que quer tratar"
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">
                Enviar pelo WhatsApp
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Mapa do studio de Pilates em Pirituba"
                src="https://www.google.com/maps?q=Av.+Benedito+Andrade,+345+-+Pirituba,+S%C3%A3o+Paulo+-+SP,+02936-000&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl bg-secondary/70 p-7">
              <p className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  Av. Benedito Andrade, 345 – sala 2 – Pirituba
                  <br />
                  São Paulo – SP, 02936-000
                </span>
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href="tel:+5511968165880" className="hover:text-primary">
                  (11) 96816-5880
                </a>
              </p>
              <p className="mt-4 flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Seg a sex: 7h às 21h</span>
              </p>
              <Button asChild className="mt-6 w-full rounded-full">
                <a href={WHATS} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}