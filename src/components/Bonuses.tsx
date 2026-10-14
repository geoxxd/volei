import React from 'react';
import { scrollToPlanos } from '../utils/utm';

interface BonusItem {
  numberString: string;
  name: string;
  desc: string;
  originalPrice: string;
  isNew?: boolean;
  icon: string;
}

const BONUSES: BonusItem[] = [
  {
    numberString: '01',
    name: 'Planejamento Semanal da Areia',
    desc: 'Saiba qual fundamento trabalhar em cada dia da semana, separado por nível da turma.',
    originalPrice: 'R$ 67',
    icon: '📅',
  },
  {
    numberString: '02',
    name: 'Aulas Montadas: 30 aulas de 1 hora',
    desc: 'Do aquecimento ao jogo final, na sequência certa. É só abrir e seguir.',
    originalPrice: 'R$ 47',
    icon: '📋',
  },
  {
    numberString: '03',
    name: 'Turma Mista e Aula Particular',
    desc: 'Ajuste cada exercício ao nível e ao número de alunos, de 1 aluno até a turma cheia.',
    originalPrice: 'R$ 37',
    icon: '👥',
  },
  {
    numberString: '04',
    name: 'Plano de Evolução de 12 Semanas',
    desc: 'Um caminho pronto para levar a turma do fundamento ao jogo, semana a semana.',
    originalPrice: 'R$ 97',
    isNew: true,
    icon: '🚀',
  },
  {
    numberString: '05',
    name: 'Ficha de Evolução do Aluno',
    desc: 'Avalie cada aluno por fundamento e mostre para ele o quanto já melhorou.',
    originalPrice: 'R$ 57',
    isNew: true,
    icon: '📈',
  },
];

export const Bonuses: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#EFE9DC]/60 border-t border-[#E2DBC9]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Selo */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-black uppercase tracking-wider mb-3 shadow-2xs">
          ⭐ BÔNUS EXCLUSIVOS
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E4B75] tracking-wide uppercase">
          LEVE HOJE + 5 BÔNUS GRÁTIS
        </h2>

        {/* Bonus Cards: um card por bônus, um embaixo do outro no celular */}
        <div className="mt-8 space-y-6 max-w-xl mx-auto">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.numberString}
              className="rounded-3xl bg-white border border-[#E2DBC9] hover:border-[#FF9F1C] transition-all overflow-hidden text-left shadow-sm flex flex-col"
            >
              {/* Espaço para imagem/mockup no topo [imagens que vou enviar depois] */}
              <div className="w-full h-36 sm:h-44 bg-gradient-to-br from-[#FAF6ED] via-[#F4EFE2] to-[#ECE4D0] border-b border-[#E2DBC9] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <span className="text-3xl sm:text-4xl mb-1">{bonus.icon}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-700 font-mono bg-white/80 px-3 py-1 rounded-full border border-[#E2DBC9] shadow-2xs">
                  [imagens que vou enviar depois]
                </span>
              </div>

              {/* Corpo do Card */}
              <div className="p-5 sm:p-6 space-y-3">
                {/* Selos / Badges */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    {bonus.isNew && (
                      <span className="text-[11px] font-black uppercase tracking-wider bg-rose-500 text-white px-2 py-0.5 rounded-full shadow-2xs">
                        NOVO
                      </span>
                    )}
                    <span className="text-xs font-black text-[#FF9F1C] uppercase tracking-wide bg-[#FF9F1C]/10 px-2.5 py-0.5 rounded-full border border-[#FF9F1C]/30">
                      BÔNUS {bonus.numberString}
                    </span>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-300">
                    R$ 0,00
                  </span>
                </div>

                {/* Nome em negrito */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0E4B75] leading-snug">
                  {bonus.name}
                </h3>

                {/* Descrição de uma linha */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {bonus.desc}
                </p>

                {/* Preço De riscado e R$ 0,00 em destaque */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">
                    De: <span className="line-through">{bonus.originalPrice}</span>
                  </span>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-bold text-slate-500 mr-1.5">→</span>
                    <span className="text-sm sm:text-base font-black text-emerald-700 uppercase tracking-wide">
                      R$ 0,00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de total (destacado) */}
        <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-2 border-[#FF9F1C] max-w-md mx-auto shadow-md">
          <div className="text-xs font-black uppercase tracking-wider text-[#0E4B75] mb-1">
            VALOR TOTAL DOS BÔNUS
          </div>
          <div className="text-lg sm:text-2xl font-black text-slate-800 flex items-center justify-center gap-2">
            <span className="line-through text-slate-400 font-bold">R$ 305</span>
            <span className="text-slate-600">→</span>
            <span className="text-emerald-700 font-black text-2xl sm:text-3xl">R$ 0,00</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 max-w-md mx-auto space-y-2">
          <button
            onClick={scrollToPlanos}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-black text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
          >
            QUERO OS 5 BÔNUS JUNTO
          </button>
          
          {/* Abaixo do botão */}
          <div className="text-xs sm:text-sm font-bold text-slate-700 flex items-center justify-center gap-4 pt-1">
            <span>⚡ Acesso imediato</span>
            <span className="text-slate-300">|</span>
            <span>♾️ Vitalício</span>
          </div>
        </div>
      </div>
    </section>
  );
};
