import React from 'react';

/**
 * SEÇÃO DE DEPOIMENTOS:
 * Conforme solicitado no briefing:
 * "[Espaço para prints reais de depoimentos. Enquanto não houver, deixe esta seção oculta (display:none) para eu ativar depois.]"
 * 
 * Para ativar quando tiver os prints, basta remover a classe 'hidden' ou a propriedade style={{ display: 'none' }}.
 */
export const Testimonials: React.FC = () => {
  return (
    <section 
      id="depoimentos" 
      style={{ display: 'none' }}
      className="hidden py-12 sm:py-16 px-4 max-w-4xl mx-auto text-center"
      aria-hidden="true"
    >
      <h2 className="text-[2rem] leading-[1] sm:text-5xl text-mar">
        O que os professores estão dizendo
      </h2>
      <p className="mt-2 text-sm text-slate-600 font-medium">
        [Espaço para prints reais de depoimentos. Enquanto não houver, deixe esta seção oculta (display:none) para eu ativar depois.]
      </p>

      {/* Grid placeholder para futuros prints reais de WhatsApp / Instagram */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((item) => (
          <div 
            key={item} 
            className="p-6 rounded-2xl bg-papel border border-areia-3 text-slate-500 font-mono text-xs flex flex-col items-center justify-center min-h-[160px] shadow-2xs"
          >
            <span className="font-bold text-slate-700">[Print de Depoimento {item}]</span>
            <span className="text-[10px] text-slate-500 mt-1">Cole a imagem do print do aluno/professor</span>
          </div>
        ))}
      </div>
    </section>
  );
};
