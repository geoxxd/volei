import React from 'react';

const PARTES = [
  { codigo: 'MAN', o_que: 'Fundamento', valor: 'Manchete' },
  { codigo: 'INI', o_que: 'Nível', valor: 'Iniciante' },
  { codigo: '4', o_que: 'Alunos', valor: '4 alunos' },
];

/** Faixa que explica o Código da Areia a partir de um código real do app (MAN-INI-4) */
export const CodigoExplicado: React.FC = () => {
  return (
    <section className="bg-noite text-white px-4 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-[2rem] leading-[1.02] sm:text-5xl">Cada exercício tem o seu código</h2>
          <p className="mt-4 text-[17px] sm:text-lg leading-relaxed text-slate-300">
            Você sabe na hora o nível, o fundamento e para quantos alunos ele serve.
          </p>
        </div>

        {/* O código MAN-INI-4, decomposto em três partes */}
        <dl className="mt-10 sm:mt-14 grid grid-cols-3 gap-5 sm:gap-8" aria-label="Exemplo de código: MAN-INI-4">
          {PARTES.map((p, i) => (
            <div key={p.codigo} className="relative flex flex-col items-center text-center">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[1.9rem] sm:top-[2.9rem] left-0 -translate-x-[calc(50%+0.625rem)] sm:-translate-x-[calc(50%+1rem)] -translate-y-1/2 titulo text-3xl sm:text-5xl text-white/35"
                >
                  -
                </span>
              )}
              <span
                className="tag-codigo w-full justify-center h-[3.8rem] sm:h-[5.8rem] rounded-[10px] text-[2.4rem] sm:text-[4rem] leading-none"
                style={{ fontStretch: '78%', fontWeight: 800 }}
              >
                {p.codigo}
              </span>
              <span className="w-[2px] h-6 sm:h-9 bg-linha" aria-hidden="true" />
              <dt className="mt-2 text-[13px] sm:text-sm font-semibold text-linha">{p.o_que}</dt>
              <dd className="text-[15px] sm:text-xl font-bold text-white">{p.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
