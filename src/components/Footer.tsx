import React, { useMemo } from 'react';
import { Volleyball } from 'lucide-react';
import { LINKS } from '../config/links';

export const Footer: React.FC = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="px-4 py-10 bg-areia text-[14px] text-tinta-2">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div>
          <p className="flex items-center gap-2 text-mar">
            <Volleyball className="w-5 h-5" aria-hidden="true" />
            <span className="titulo text-lg leading-none">Código da Areia</span>
          </p>
          <p className="mt-3">© {currentYear} Código da Areia. Todos os direitos reservados.</p>
          <p className="mt-1 text-[13px] text-tinta/55">Aviso: os resultados dependem da aplicação de cada profissional.</p>
        </div>

        <ul className="space-y-2 font-semibold">
          <li>
            Suporte via WhatsApp:{' '}
            <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-mar underline underline-offset-2">
              falar com o suporte
            </a>
          </li>
          <li>
            <a href="#termos" className="underline underline-offset-2 hover:text-mar">Política de Privacidade</a>
          </li>
          <li>
            <a href="#termos" className="underline underline-offset-2 hover:text-mar">Termos de Uso</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
