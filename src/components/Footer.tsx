import { LINKS } from '../config/links';
import React, { useMemo } from 'react';

export const Footer: React.FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="py-10 px-4 bg-[#05060A] border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-3">
      <div className="max-w-3xl mx-auto space-y-2">
        {/* Suporte */}
        <p className="text-slate-400 font-bold">
          Suporte via WhatsApp: <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline text-[#FF9F1C]">falar com o suporte</a>
        </p>

        {/* Políticas */}
        <p className="text-slate-500 font-medium">
          <a href="#termos" className="hover:text-white transition-colors underline">Política de Privacidade</a>
          {' • '}
          <a href="#termos" className="hover:text-white transition-colors underline">Termos de Uso</a>
        </p>

        {/* Copyright */}
        <p className="text-slate-500 font-medium">
          © {currentYear} Código da Areia. Todos os direitos reservados.
        </p>

        {/* Aviso Legal */}
        <p className="text-[11px] text-slate-600 max-w-lg mx-auto pt-1 leading-normal font-medium">
          Aviso: os resultados dependem da aplicação de cada profissional.
        </p>
      </div>
    </footer>
  );
};
