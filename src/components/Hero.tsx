import React from 'react';
import { AppMockup } from './AppMockup';
import { scrollToPlanos } from '../utils/utm';

export const Hero: React.FC = () => {

  return (
    <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Glow de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-[#FF9F1C]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-24 right-1/4 translate-x-1/2 w-[380px] h-[380px] bg-[#0284C7]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] max-w-3xl mx-auto text-balance tracking-tight">
        <span className="text-[#FF9F1C] font-black">+240</span> Exercícios de Vôlei de Areia{' '}
        <span className="text-[#FF9F1C] relative inline-block">
          Prontos
          <span className="absolute bottom-1 left-0 w-full h-[5px] bg-[#FF9F1C]/30 rounded-full" />
        </span>{' '}
        para a sua próxima aula
      </h1>

      {/* Subheadline */}
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
        App com todos os fundamentos da dupla de praia, diagramas de quadra, variações por nível e filtro por categoria, acesso direto pelo celular.
      </p>

      {/* Mockup do celular com o app aberto */}
      <div className="my-8 sm:my-10">
        <AppMockup activeScreen="exercise" />
      </div>

      {/* Primary CTA Button */}
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-black text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
        >
          QUERO OS 240 EXERCÍCIOS NO MEU CELULAR
        </button>
      </div>

      {/* Badges / Selos */}
      <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-300">
        <span className="flex items-center gap-1.5 text-[#FF9F1C]">
          ⚡ ACESSO IMEDIATO
        </span>
        <span className="text-slate-600">|</span>
        <span className="flex items-center gap-1.5 text-[#FF9F1C]">
          🎁 BÔNUS GRÁTIS
        </span>
      </div>

      {/* Prova social */}
      <div className="mt-6 pt-5 border-t border-slate-700/70 max-w-lg mx-auto">
        <p className="text-slate-300 font-bold text-sm sm:text-base">
          🏖️ Feito para quem dá aula na praia e na arena
        </p>
      </div>
    </section>
  );
};
