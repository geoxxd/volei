import React from 'react';
import { scrollToPlanos } from '../utils/utm';

export const Closing: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 bg-[#08090D] text-center border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF9F1C]/8 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto space-y-4 relative">
        {/* Título */}
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-wide uppercase font-heading text-balance">
          SUA PRÓXIMA AULA JÁ PODE ESTAR PRONTA
        </h2>

        {/* Texto */}
        <p className="text-base sm:text-xl text-slate-300 font-semibold">
          240 exercícios de vôlei de areia no seu celular, a partir de R$ 10.
        </p>

        {/* Botão */}
        <div className="pt-4 max-w-md mx-auto">
          <button
            onClick={scrollToPlanos}
            className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-black text-base sm:text-lg tracking-wide shadow-2xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
          >
            QUERO MINHA AULA PRONTA AGORA
          </button>
        </div>

        {/* Abaixo */}
        <div className="pt-2 text-xs sm:text-sm font-bold text-slate-400">
          Acesso imediato • 7 dias de garantia
        </div>
      </div>
    </section>
  );
};
