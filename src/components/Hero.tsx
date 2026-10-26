import React from 'react';
import { AppCarousel } from './AppCarousel';
import { scrollToPlanos } from '../utils/utm';

/**
 * TOPO (HERO)
 * Tudo o que decide se a pessoa fica precisa caber na primeira tela do celular
 * (navegador do Instagram): linha de identificação, título, telas do app,
 * botão e preço.
 */
export const Hero: React.FC = () => {
  return (
    <section className="relative pt-5 pb-10 sm:pt-12 sm:pb-16 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Brilho de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-gradient-to-b from-[#FF9F1C]/10 via-[#0E4B75]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Linha de identificação */}
      <p className="text-[13px] sm:text-base font-extrabold text-[#D97706] uppercase tracking-wide text-balance">
        Para o professor de areia que não quer repetir a mesma aula
      </p>

      {/* Título */}
      <h1 className="mt-2 text-[28px] sm:text-5xl lg:text-6xl font-black text-[#0E4B75] leading-[1.1] max-w-3xl mx-auto text-balance">
        <span className="text-[#FF9F1C]">+240</span> Exercícios de Vôlei de Praia{' '}
        <span className="underline decoration-[#0284C7] decoration-[4px] underline-offset-4">Prontos</span>{' '}
        para a sua próxima aula
      </h1>

      {/* Telas do app */}
      <div className="mt-4 sm:mt-8">
        <AppCarousel />
      </div>

      {/* Botão + preço */}
      <div className="mt-4 sm:mt-6 w-full max-w-md mx-auto">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
        >
          QUERO OS 240 EXERCÍCIOS
        </button>
        <p className="mt-2 text-sm font-bold text-slate-700">
          A partir de <span className="text-[#FF4A3F]">R$ 10</span> · pagamento único
        </p>
      </div>

      {/* Subtítulo (abaixo da dobra) */}
      <p className="mt-6 text-[15px] sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
        Cada exercício tem o seu código: você sabe na hora o nível, o fundamento e para quantos alunos ele serve. Tudo no seu celular, com diagramas de quadra e filtro por nível.
      </p>
    </section>
  );
};
