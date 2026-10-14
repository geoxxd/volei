import React, { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';
import { LINKS } from '../config/links';
import { buildUrlWithParams } from '../utils/utm';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ITENS = [
  'Todos os 240 exercícios',
  'Nível avançado + jogos e aquecimentos',
  'Modo Arena completo',
  'Os 5 bônus exclusivos (R$ 305)',
];

export const UpsellModal: React.FC<UpsellModalProps> = ({ isOpen, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const checkout15Url = buildUrlWithParams(LINKS.CHECKOUT_15);
  const checkout10Url = buildUrlWithParams(LINKS.CHECKOUT_10);

  return (
    <div
      className="anim-fundo fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-noite/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="upsell-titulo"
        className="anim-caixa relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl bg-papel border-t-[3px] sm:border-[3px] border-sol shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 grid place-items-center rounded-full text-tinta-2 hover:bg-areia transition-colors cursor-pointer"
          aria-label="Fechar e continuar na página"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <p className="text-[15px] font-bold text-sol-2">Espera, olha isso antes</p>
          <h3 id="upsell-titulo" className="mt-2 pr-8 text-[2rem] leading-[1] text-mar">
            Leve os 240 exercícios por só R$ 5 a mais
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-tinta-2">
            Em vez de 100 exercícios, você leva os 240 completos, do iniciante ao avançado, com ataque, bloqueio, defesa, side-out, o Modo Arena e os 5 bônus.
          </p>

          <div className="mt-5 flex items-end justify-between gap-4 rounded-xl bg-areia px-4 py-3 num">
            <ul className="space-y-1.5 text-[14px] font-semibold text-tinta leading-snug">
              {ITENS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-mar" strokeWidth={3} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex items-baseline justify-center gap-2 num">
            <span className="text-[15px] text-tinta/50 line-through">De R$ 24</span>
            <span className="text-[15px] font-semibold text-tinta-2">por</span>
            <span className="titulo text-6xl leading-none text-coral" style={{ fontStretch: '76%' }}>
              R$ 15
            </span>
          </div>

          <a href={checkout15Url} className="btn-compra mt-5 text-lg">
            Sim, quero os 240 por R$ 15
          </a>

          <p className="mt-4 text-center">
            <a href={checkout10Url} className="text-[14px] text-tinta-2 underline underline-offset-2 hover:text-tinta">
              Não, quero só o básico de R$ 10
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
