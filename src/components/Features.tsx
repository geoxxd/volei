import React from 'react';
import { Volleyball, Tag, TrendingUp, Smartphone, Timer, Trophy, Shuffle, RefreshCw } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToPlanos } from '../utils/utm';

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    icon: Volleyball,
    title: '240 exercícios feitos para a areia',
    description: 'Nada de treino de quadra adaptado. Cada exercício foi pensado para areia, vento e turma pequena.',
  },
  {
    icon: Tag,
    title: 'O Código da Areia',
    description: 'Nível, fundamento e número de alunos em cada exercício. Você acha o certo em segundos.',
  },
  {
    icon: TrendingUp,
    title: 'Do iniciante ao avançado',
    description: 'Para a turma que ainda erra a manchete e para quem já quer treinar side-out e transição.',
  },
  {
    icon: Smartphone,
    title: 'Direto no seu celular',
    description: 'Acesso liberado na hora. Você abre na arena e aplica.',
  },
];

const ARENA = [
  { icon: Timer, label: 'Timer de cada bloco' },
  { icon: Trophy, label: 'Placar do jogo' },
  { icon: Shuffle, label: 'Sorteio de duplas' },
  { icon: RefreshCw, label: 'Rodízio' },
];

export const Features: React.FC = () => {
  return (
    <section className="px-4 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-[2rem] leading-[1.02] sm:text-5xl text-mar">Tudo que você vai receber</h2>
          <p className="mt-4 text-[17px] sm:text-lg leading-relaxed text-tinta-2">
            240 exercícios prontos para você parar de improvisar e chegar na arena com a aula na mão.
          </p>
        </div>

        <ul className="mt-10 grid sm:grid-cols-2 gap-x-10 border-t border-areia-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex gap-4 py-6 border-b border-areia-3">
              <span className="w-11 h-11 shrink-0 grid place-items-center rounded-lg bg-mar text-white">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl leading-tight text-mar">{title}</h3>
                <p className="mt-1.5 text-[15px] sm:text-base leading-relaxed text-tinta-2">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Modo Arena: só no plano Completo */}
        <div className="mt-8 rounded-2xl bg-noite text-white p-6 sm:p-9 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
          <div>
            <p className="inline-block text-[13px] font-bold text-noite bg-linha rounded px-2 py-0.5">Só no plano Completo</p>
            <h3 className="mt-3 text-3xl sm:text-4xl leading-none">Modo Arena</h3>
            <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-slate-300 max-w-md">
              O app conduz a aula com você: timer de cada bloco, placar do jogo, sorteio de duplas e rodízio. Você só olha para a turma.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-2 sm:gap-3">
            {ARENA.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 rounded-xl border border-linha/30 px-3 py-3 text-[14px] sm:text-[15px] font-semibold">
                <Icon className="w-5 h-5 shrink-0 text-linha" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 max-w-md mx-auto">
          <button onClick={scrollToPlanos} className="btn-compra">
            Quero montar minhas aulas pelo app
          </button>
        </div>
      </div>
    </section>
  );
};
