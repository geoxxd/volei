import React from 'react';
import { Zap, Infinity as InfinityIcon } from 'lucide-react';
import { scrollToPlanos } from '../utils/utm';

interface BonusItem {
  numberString: string;
  name: string;
  desc: string;
  originalPrice: string;
  isNew?: boolean;
  shortName: string;
}

const BONUSES: BonusItem[] = [
  {
    numberString: '01',
    name: 'Planejamento Semanal da Areia',
    shortName: 'Planejamento semanal',
    desc: 'Saiba qual fundamento trabalhar em cada dia da semana, separado por nível da turma.',
    originalPrice: 'R$ 67',
  },
  {
    numberString: '02',
    name: 'Aulas Montadas: 30 aulas de 1 hora',
    shortName: '30 aulas montadas',
    desc: 'Do aquecimento ao jogo final, na sequência certa. É só abrir e seguir.',
    originalPrice: 'R$ 47',
  },
  {
    numberString: '03',
    name: 'Turma Mista e Aula Particular',
    shortName: 'Turma mista e particular',
    desc: 'Ajuste cada exercício ao nível e ao número de alunos, de 1 aluno até a turma cheia.',
    originalPrice: 'R$ 37',
  },
  {
    numberString: '04',
    name: 'Plano de Evolução de 12 Semanas',
    shortName: 'Plano de 12 semanas',
    desc: 'Um caminho pronto para levar a turma do fundamento ao jogo, semana a semana.',
    originalPrice: 'R$ 97',
    isNew: true,
  },
  {
    numberString: '05',
    name: 'Ficha de Evolução do Aluno',
    shortName: 'Ficha de evolução',
    desc: 'Avalie cada aluno por fundamento e mostre para ele o quanto já melhorou.',
    originalPrice: 'R$ 57',
    isNew: true,
  },
];

export const Bonuses: React.FC = () => {
  return (
    <section className="px-4 py-14 sm:py-20 bg-noite text-white">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-[15px] font-semibold text-sol">Só no plano Completo</p>
          <h2 className="mt-2 text-[2.4rem] leading-[0.98] sm:text-6xl">Leve hoje +5 bônus grátis</h2>
          <p className="mt-4 text-[17px] sm:text-lg leading-relaxed text-slate-300">
            Tudo o que fecha a sua rotina de professor, do planejamento da semana à evolução de cada aluno.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Lista de bônus */}
          <ol className="border-t border-white/15">
            {BONUSES.map((bonus) => (
              <li key={bonus.numberString} className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[4.5rem_1fr] gap-3 py-5 border-b border-white/15">
                <span
                  className="titulo text-sol num text-[2.6rem] sm:text-6xl leading-[0.85]"
                  style={{ fontStretch: '72%' }}
                  aria-label={`Bônus ${bonus.numberString}`}
                >
                  {bonus.numberString}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl leading-tight">
                    {bonus.name}
                    {bonus.isNew && (
                      <span className="ml-2 align-middle inline-block text-[12px] font-bold text-noite bg-linha rounded px-1.5 py-[1px]" style={{ fontStretch: '100%' }}>
                        Novo
                      </span>
                    )}
                  </h3>
                  <p className="mt-1.5 text-[15px] sm:text-base leading-relaxed text-slate-300">{bonus.desc}</p>
                  <p className="mt-2 text-[14px] font-semibold num">
                    <span className="text-slate-400 line-through mr-2">{bonus.originalPrice}</span>
                    <span className="text-linha">Hoje grátis</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Total no formato de comprovante */}
          <div className="lg:sticky lg:top-16">
            <div className="rounded-xl bg-papel text-tinta shadow-[0_24px_40px_-20px_rgba(0,0,0,0.6)]">
              <div className="px-5 pt-5 pb-4">
                <p className="text-[13px] font-bold text-tinta-2">Seus bônus</p>
                <ul className="mt-3 space-y-2 text-[15px] num">
                  {BONUSES.map((bonus) => (
                    <li key={bonus.numberString} className="flex justify-between gap-3">
                      <span className="truncate text-tinta-2">
                        <span className="text-tinta/50 mr-1.5">{bonus.numberString}</span>
                        {bonus.shortName}
                      </span>
                      <span className="shrink-0 font-semibold text-tinta-2">{bonus.originalPrice}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mx-5 border-t-2 border-dashed border-areia-3" />
              <div className="px-5 py-4 flex items-end justify-between gap-3">
                <span className="text-[15px] font-bold text-mar leading-tight">Valor total dos bônus</span>
                <span className="text-right num">
                  <span className="block text-[15px] font-semibold text-tinta/45 line-through">R$ 305</span>
                  <span className="block titulo text-4xl text-[#0E8A5F] leading-none">R$ 0,00</span>
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button onClick={scrollToPlanos} className="btn-compra">
                Quero os 5 bônus junto
              </button>
              <ul className="mt-4 flex justify-center gap-6 text-[15px] font-semibold text-slate-300">
                <li className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-sol" aria-hidden="true" /> Acesso imediato
                </li>
                <li className="flex items-center gap-1.5">
                  <InfinityIcon className="w-4 h-4 text-sol" aria-hidden="true" /> Vitalício
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
