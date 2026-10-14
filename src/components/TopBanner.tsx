import React, { useMemo } from 'react';

export const TopBanner: React.FC = () => {
  // Gera automaticamente a data de hoje no formato dd/mm/aaaa
  const todayFormatted = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }, []);

  return (
    <aside
      aria-label="Aviso de lançamento"
      className="fixed top-0 left-0 right-0 z-40 h-9 sm:h-10 flex items-center justify-center bg-noite text-white px-3 text-center text-[13px] sm:text-sm font-semibold leading-tight"
    >
      <p>
        Condição de lançamento válida só até hoje{' '}
        <span className="text-sol num">({todayFormatted})</span>
      </p>
    </aside>
  );
};
