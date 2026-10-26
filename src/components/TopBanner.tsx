import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <aside
      aria-label="Condições de compra"
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FF9F1C] via-[#F58F00] to-[#FF9F1C] text-slate-950 py-2 px-2 text-center shadow-md font-bold text-[11px] sm:text-sm tracking-tight sm:tracking-wide border-b border-[#E07D00]/30"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-1.5 leading-snug font-extrabold">
        <span className="whitespace-nowrap">ACESSO IMEDIATO • A PARTIR DE R$ 10 • GARANTIA DE 7 DIAS</span>
      </div>
    </aside>
  );
};
