import React from 'react';
import { AppMockup } from './AppMockup';
import { scrollToPlanos } from '../utils/utm';

export const Hero: React.FC = () => {

  return (
    <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Background subtle coastal atmosphere glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-gradient-to-b from-[#FF9F1C]/10 via-[#0E4B75]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E4B75] leading-[1.15] max-w-3xl mx-auto text-balance">
        <span className="text-[#FF9F1C] font-black">+240</span> Exercícios de Vôlei de Areia{' '}
        <span className="underline decoration-[#0284C7] decoration-[4px] underline-offset-6 text-[#0E4B75]">
          Prontos
        </span>{' '}
        para a sua próxima aula
      </h1>

      {/* Subheadline */}
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
        Tudo num app no seu celular, organizado pelo Código da Areia: você abre, escolhe pelo nível e pelo número de alunos e aplica direto na arena.
      </p>

      {/* Mockup do celular com o app aberto */}
      <div className="my-8 sm:my-10">
        <AppMockup activeScreen="exercise" />
      </div>


      {/* Primary CTA Button (Coral Fluorescente de Alta Conversão) */}
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-black text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
        >
          QUERO OS 240 EXERCÍCIOS NO MEU CELULAR
        </button>
      </div>

      {/* Badges / Selos lado a lado */}
      <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-700">
        <span className="flex items-center gap-1.5 text-[#0E4B75]">
          ⚡ ACESSO IMEDIATO
        </span>
        <span className="text-slate-300">|</span>
        <span className="flex items-center gap-1.5 text-[#D97706]">
          🎁 BÔNUS GRÁTIS
        </span>
      </div>

      {/* Prova social (trocar por número real de professores quando houver) */}
      <div className="mt-6 pt-5 border-t border-slate-300/70 max-w-lg mx-auto">
        <p className="text-[#0E4B75] font-bold text-sm sm:text-base">
          🏖️ Feito para quem dá aula na praia e na arena
        </p>
      </div>
    </section>
  );
};
