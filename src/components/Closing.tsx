import React from 'react';
import { scrollToPlanos } from '../utils/utm';

export const Closing: React.FC = () => {
  return (
    <section className="px-4 py-16 sm:py-24 bg-noite text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[2.6rem] leading-[0.98] sm:text-7xl">Sua próxima aula já pode estar pronta</h2>
        <p className="mt-5 text-[17px] sm:text-xl text-slate-300">
          240 exercícios de vôlei de areia no seu celular, a partir de R$ 10.
        </p>

        <div className="mt-8 max-w-md mx-auto">
          <button onClick={scrollToPlanos} className="btn-compra text-lg">
            Quero minha aula pronta agora
          </button>
          <p className="mt-4 text-[15px] font-semibold text-slate-300">Acesso imediato e 7 dias de garantia</p>
        </div>
      </div>
    </section>
  );
};
