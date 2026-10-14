import React from 'react';
import { Volleyball, Zap, Gift } from 'lucide-react';
import { AppMockup } from './AppMockup';
import { scrollToPlanos } from '../utils/utm';

/** Quadra vista de cima, desenhada atrás do celular */
const QuadraVistaDeCima: React.FC = () => (
  <div aria-hidden="true" className="absolute inset-x-2 sm:inset-x-6 top-[8%] bottom-[8%] rounded-[6px] bg-areia-2">
    {/* linhas externas */}
    <div className="absolute inset-3 sm:inset-4 border-[3px] border-papel" />
    {/* rede */}
    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[5px] bg-mar/80" />
    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-mar" />
    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-mar" />
  </div>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative px-4 pt-6 pb-14 sm:pt-10 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Marca */}
        <div className="flex items-center gap-2 text-mar">
          <Volleyball className="w-6 h-6" strokeWidth={2.2} aria-hidden="true" />
          <span className="titulo text-lg leading-none">Código da Areia</span>
        </div>

        <div className="mt-6 sm:mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center">
          {/* Texto + CTA */}
          <div>
            <h1 className="text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-[4.6rem] text-mar">
              +240 exercícios de vôlei de areia prontos para a sua próxima aula
            </h1>

            <p className="mt-5 sm:mt-6 text-[17px] sm:text-xl leading-relaxed text-tinta-2 max-w-[34rem]">
              Tudo num app no seu celular, você abre, escolhe pelo nível e pelo número de alunos e aplica direto na arena.
            </p>

            {/* No celular, o aparelho aparece aqui; no desktop ele fica na coluna da direita */}
            <div className="lg:hidden relative mt-7 py-5">
              <QuadraVistaDeCima />
              <div className="relative">
                <AppMockup activeScreen="exercise" compact />
              </div>
            </div>

            <div className="mt-8 lg:mt-10 max-w-md">
              <button onClick={scrollToPlanos} className="btn-compra text-lg">
                Quero os 240 exercícios no meu celular
              </button>

              <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] font-semibold text-tinta-2">
                <li className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-sol-2" aria-hidden="true" /> Acesso imediato
                </li>
                <li className="flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-sol-2" aria-hidden="true" /> Bônus grátis
                </li>
              </ul>
            </div>

            <p className="mt-8 pt-5 border-t border-areia-3/70 text-[15px] font-semibold text-mar max-w-md">
              Feito para quem dá aula na praia e na arena.
            </p>
          </div>

          {/* Desktop: aparelho sobre a quadra */}
          <div className="hidden lg:block relative py-10">
            <QuadraVistaDeCima />
            <div className="relative">
              <AppMockup activeScreen="exercise" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
