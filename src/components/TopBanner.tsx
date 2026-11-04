import React, { useEffect, useState } from 'react';

/** Data de hoje no fuso de Brasília, no formato DD/MM/AA. */
const hojeBrasilia = (): string =>
  new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).format(new Date());

export const TopBanner: React.FC = () => {
  // Calculada no navegador (a página é pré-renderizada no build, então a data não pode vir do build).
  const [hoje, setHoje] = useState('');
  useEffect(() => setHoje(hojeBrasilia()), []);

  return (
    <aside
      aria-label="Oferta"
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF9F1C] via-[#F58F00] to-[#FF9F1C] text-slate-950 py-2 px-2 text-center shadow-md font-bold text-[11px] sm:text-sm tracking-tight sm:tracking-wide border-b border-[#E07D00]/30"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5 leading-snug font-extrabold">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="currentColor"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>
        <span className="whitespace-nowrap">OFERTA EXCLUSIVA</span>
        <span aria-hidden="true" className="opacity-50 px-1">|</span>
        <span className="whitespace-nowrap">VÁLIDA HOJE{hoje && ` · ${hoje}`}</span>
      </div>
    </aside>
  );
};
