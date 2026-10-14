import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="px-4 pb-14 sm:pb-20">
      <div className="max-w-4xl mx-auto rounded-2xl bg-mar text-white p-6 sm:p-10 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-start">
        {/* Selo */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-sol grid place-items-center text-center">
          <div>
            <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 mx-auto text-sol" aria-hidden="true" />
            <span className="block mt-1 titulo text-[15px] sm:text-base leading-none">7 dias</span>
          </div>
        </div>

        <div>
          <h2 className="text-[2rem] leading-[1] sm:text-5xl">Teste na areia por 7 dias</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-white/85 max-w-xl">
            Aplique os exercícios nas suas aulas durante 7 dias. Se não servir para a sua turma, devolvemos 100% do valor. Sem burocracia e sem perguntas.
          </p>
          <p className="mt-6 pt-5 border-t border-white/20 flex items-start gap-3 text-[15px] text-white/85">
            <Lock className="w-4 h-4 mt-0.5 shrink-0 text-sol" aria-hidden="true" />
            <span>
              <strong className="text-white">Pagamento 100% seguro.</strong> Seus dados ficam protegidos do início ao fim da compra.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
