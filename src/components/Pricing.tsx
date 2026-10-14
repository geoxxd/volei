import React from 'react';
import { Check, X, Gift, MessageCircle, Zap, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LINKS } from '../config/links';
import { buildUrlWithParams } from '../utils/utm';

interface PricingProps {
  onOpenUpsell: () => void;
}

const COMPLETO_ITENS = [
  'Feitos para a areia, sem adaptação de treino de quadra',
  'Código da Areia em cada exercício: nível, fundamento e nº de alunos',
  'Do iniciante ao avançado',
  '40 de manchete e passe',
  '35 de toque e levantamento',
  '30 de saque',
  '35 de ataque (cortada e largada)',
  '25 de bloqueio',
  '35 de defesa',
  '20 de side-out e transição',
  '20 jogos reduzidos e aquecimentos',
  'Modo Arena: timer, placar, sorteio de duplas e rodízio na arena',
  'Exercícios novos entram direto no app',
];

const COMPLETO_EXTRAS: { icon: LucideIcon; text: string }[] = [
  { icon: Gift, text: 'Os 5 bônus exclusivos (R$ 305)' },
  { icon: MessageCircle, text: 'Suporte direto no WhatsApp' },
  { icon: Zap, text: 'Acesso vitalício + garantia de 7 dias' },
];

const BASICO_INCLUI = [
  '+100 exercícios dos fundamentos de base',
  '40 de manchete e passe',
  '35 de toque e levantamento',
  '30 de saque',
  'Código da Areia em cada exercício',
  'Acesso vitalício + garantia de 7 dias',
];

const BASICO_NAO_INCLUI = [
  'Ataque, bloqueio, defesa e side-out',
  'Nível avançado',
  'Jogos reduzidos e aquecimentos',
  'Modo Arena: timer, placar, sorteio de duplas e rodízio',
  'Bônus exclusivos',
];

const Preco: React.FC<{ de: string; por: string; destaque?: boolean }> = ({ de, por, destaque }) => (
  <div className="num">
    <span className="block text-[15px] font-medium text-tinta/50 line-through">De {de}</span>
    <div className="flex items-baseline gap-2 mt-1">
      <span className="text-[15px] font-semibold text-tinta-2">{destaque ? 'por apenas' : 'por'}</span>
      <span
        className={`titulo leading-none ${destaque ? 'text-[4.25rem] sm:text-[5rem] text-coral' : 'text-5xl text-mar'}`}
        style={{ fontStretch: '76%' }}
      >
        {por}
      </span>
      <span className="text-[15px] text-tinta-2">à vista</span>
    </div>
  </div>
);

export const Pricing: React.FC<PricingProps> = ({ onOpenUpsell }) => {
  const checkout24Url = buildUrlWithParams(LINKS.CHECKOUT_24);

  return (
    <section id="planos" className="px-4 py-14 sm:py-20 scroll-mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-[2.4rem] leading-[0.98] sm:text-6xl text-mar">Escolha seu acesso</h2>
          <p className="mt-3 text-[17px] text-tinta-2 font-medium">Pagamento único e acesso imediato</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-6 items-start max-w-4xl mx-auto">
          {/* ================= COMPLETO ================= */}
          <article className="order-1 md:order-2 relative rounded-2xl bg-papel border-[3px] border-sol shadow-[0_30px_50px_-28px_rgba(229,138,12,0.55)]">
            <p className="absolute -top-[15px] left-6 rounded-md bg-sol px-3 py-1 text-[14px] font-bold text-[#2A1600]">
              Melhor oferta
            </p>

            <div className="p-6 sm:p-8">
              <h3 className="text-[1.9rem] sm:text-4xl leading-none text-mar">Código da Areia Completo</h3>

              <div className="mt-5 pb-6 border-b border-areia-2">
                <Preco de="R$ 97" por="R$ 24" destaque />
              </div>

              <p className="mt-6 flex items-start gap-3 text-[17px] font-bold text-tinta leading-snug">
                <Check className="w-5 h-5 mt-0.5 shrink-0 text-sol-2" strokeWidth={3} aria-hidden="true" />
                240 exercícios de vôlei de areia prontos para aplicar
              </p>
              <ul className="mt-3 space-y-2.5 text-[15px] leading-snug text-tinta-2">
                {COMPLETO_ITENS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-mar" strokeWidth={3} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 pt-5 border-t border-areia-2 space-y-2.5 text-[15px] font-bold leading-snug text-mar">
                {COMPLETO_EXTRAS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 mt-0.5 shrink-0 text-sol-2" strokeWidth={2.5} aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a href={checkout24Url} className="btn-compra text-lg">
                  Quero os 240 exercícios
                </a>
                <p className="mt-4 text-center text-[15px] font-bold text-[#0E8A5F]">Economia real de R$ 305</p>
                <p className="mt-1 flex items-center justify-center gap-1.5 text-[14px] text-tinta-2">
                  <Lock className="w-3.5 h-3.5" aria-hidden="true" /> Compra 100% segura e 7 dias de garantia
                </p>
              </div>
            </div>
          </article>

          {/* ================= BÁSICO ================= */}
          <article className="order-2 md:order-1 rounded-2xl bg-papel/70 border border-areia-3">
            <div className="p-6 sm:p-8">
              <h3 className="text-[1.9rem] sm:text-4xl leading-none text-mar">Básico</h3>

              <div className="mt-5 pb-6 border-b border-areia-2">
                <Preco de="R$ 47" por="R$ 10" />
              </div>

              <ul className="mt-6 space-y-2.5 text-[15px] leading-snug text-tinta-2">
                {BASICO_INCLUI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-mar" strokeWidth={3} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[13px] font-semibold text-tinta/50">Não inclui</p>
              <ul className="mt-2 space-y-2.5 text-[15px] leading-snug text-tinta/45">
                {BASICO_NAO_INCLUI.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                    <span className="line-through decoration-tinta/30">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {/* Abre o pop-up que oferece o Completo por R$ 15 */}
                <button
                  onClick={onOpenUpsell}
                  className="w-full min-h-[3.5rem] px-6 rounded-[14px] bg-mar hover:bg-mar-2 text-white font-bold text-[17px] transition-colors cursor-pointer"
                >
                  Começar com o Básico
                </button>
                <p className="mt-4 text-center text-[15px] font-semibold text-sol-2 leading-snug">
                  +R$ 14 e leve os 240 exercícios + Modo Arena + 5 bônus grátis
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
