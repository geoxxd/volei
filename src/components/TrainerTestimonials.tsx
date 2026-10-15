import React from 'react';
import depoimento1 from '../assets/images/depoimentos/depoimento-1.webp';

/**
 * DEPOIMENTOS DE TREINADORES (prints reais de WhatsApp)
 *
 * Para preencher um espaço em branco: coloque o print em src/assets/images/depoimentos/,
 * importe aqui em cima e troque o `src: null` pelo import.
 * Espaços com `src: null` aparecem como cartões em branco. Para esconder os vazios
 * enquanto os prints não chegam, deixe MOSTRAR_ESPACOS_VAZIOS = false.
 */
const MOSTRAR_ESPACOS_VAZIOS = true;

interface Depoimento {
  src: string | null;
  alt: string;
}

const DEPOIMENTOS: Depoimento[] = [
  {
    src: depoimento1,
    alt: 'Conversa de WhatsApp em que um treinador agradece pelo material, diz que ficou mais fácil planejar os treinos e que já aplicou com a turma na areia',
  },
  { src: null, alt: '' },
  { src: null, alt: '' },
  { src: null, alt: '' },
  { src: null, alt: '' },
];

// Proporção do print recortado (800 x 820)
const LARGURA = 800;
const ALTURA = 820;

export const TrainerTestimonials: React.FC = () => {
  const itens = DEPOIMENTOS.filter((d) => d.src || MOSTRAR_ESPACOS_VAZIOS);

  return (
    <section id="treinadores" className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-center text-2xl sm:text-4xl font-extrabold text-[#0E4B75] tracking-wide uppercase text-balance">
        TREINADORES QUE JÁ UTILIZARAM E APROVARAM
      </h2>

      {/* Celular: carrossel de deslizar. Desktop: grade de 3 colunas. */}
      <div className="mt-8 -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible">
        {itens.map((item, idx) =>
          item.src ? (
            <figure
              key={idx}
              className="snap-center shrink-0 w-[86%] sm:w-auto rounded-2xl overflow-hidden bg-white border border-[#E2DBC9] shadow-sm"
            >
              <img
                src={item.src}
                width={LARGURA}
                height={ALTURA}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </figure>
          ) : (
            <div
              key={idx}
              aria-hidden="true"
              style={{ aspectRatio: `${LARGURA} / ${ALTURA}` }}
              className="snap-center shrink-0 w-[86%] sm:w-auto rounded-2xl bg-white border border-[#E2DBC9] shadow-sm"
            />
          )
        )}
      </div>
    </section>
  );
};
