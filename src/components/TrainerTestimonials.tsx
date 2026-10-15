import React from 'react';
import depoimento1 from '../assets/images/depoimentos/depoimento-1.webp';
import depoimento2 from '../assets/images/depoimentos/depoimento-2.webp';
import depoimento3 from '../assets/images/depoimentos/depoimento-3.webp';
import depoimento4 from '../assets/images/depoimentos/depoimento-4.webp';

/**
 * DEPOIMENTOS DE TREINADORES (prints reais de WhatsApp)
 *
 * Para adicionar um print: coloque o arquivo (webp) em src/assets/images/depoimentos/,
 * importe aqui em cima e inclua um novo item na lista DEPOIMENTOS
 * (w e h são a largura e a altura reais da imagem).
 */
interface Depoimento {
  src: string;
  alt: string;
  w: number;
  h: number;
}

const DEPOIMENTOS: Depoimento[] = [
  {
    src: depoimento1,
    alt: 'Conversa de WhatsApp em que um treinador agradece pelo material, diz que ficou mais fácil planejar os treinos e que já aplicou com a turma na areia',
    w: 800,
    h: 820,
  },
  {
    src: depoimento2,
    alt: 'Conversa de WhatsApp em que um professor de projeto social elogia a qualidade e a praticidade do material e diz que sentiu diferença nas crianças com os treinos',
    w: 800,
    h: 1135,
  },
  {
    src: depoimento3,
    alt: 'Conversa de WhatsApp em que um treinador de vôlei de praia agradece pelo material organizado e fácil de acessar, inclusive na quadra de areia',
    w: 800,
    h: 1329,
  },
  {
    src: depoimento4,
    alt: 'Conversa de WhatsApp em que um treinador diz que comprou o material, achou tudo organizado exercício por exercício e já aplicou no treino da turma',
    w: 800,
    h: 1276,
  },
];

export const TrainerTestimonials: React.FC = () => {
  return (
    <section id="treinadores" className="py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-center text-2xl sm:text-4xl font-extrabold text-[#0E4B75] tracking-wide uppercase text-balance">
        TREINADORES QUE JÁ UTILIZARAM E APROVARAM
      </h2>

      {/* Celular: carrossel de deslizar. Computador: 2 colunas. */}
      <div className="mt-8 -mx-4 px-4 flex items-start gap-3 overflow-x-auto snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:block sm:columns-2 sm:gap-4 sm:overflow-visible sm:pb-0">
        {DEPOIMENTOS.map((item, idx) => (
          <figure
            key={idx}
            className="snap-center shrink-0 w-[86%] sm:w-full sm:mb-4 sm:break-inside-avoid rounded-2xl overflow-hidden bg-white border border-[#E2DBC9] shadow-sm"
          >
            <img
              src={item.src}
              width={item.w}
              height={item.h}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};
