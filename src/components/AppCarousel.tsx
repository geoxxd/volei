import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tela1 from '../assets/images/app/tela-1-inicio.webp';
import tela2 from '../assets/images/app/tela-2-aquecimento.webp';
import tela3 from '../assets/images/app/tela-3-como-fazer.webp';
import tela4 from '../assets/images/app/tela-4-tatica.webp';
import tela5 from '../assets/images/app/tela-5-buscar.webp';
import tela6 from '../assets/images/app/tela-6-sozinho-dupla.webp';
import tela7 from '../assets/images/app/tela-7-salvos.webp';

interface SlideItem {
  id: number;
  src: string;
  alt: string;
}

// Todas as telas aparecem dentro da mesma moldura de celular (mesmo tamanho).
const SLIDES: SlideItem[] = [
  { id: 1, src: tela1, alt: 'Tela inicial do app Código da Areia, com 240 exercícios para treinar na areia' },
  { id: 2, src: tela2, alt: 'Lista de exercícios de aquecimento, organizada por nível' },
  { id: 3, src: tela3, alt: 'Exercício aberto com a aba Como fazer: objetivo, como montar e passo a passo' },
  { id: 4, src: tela4, alt: 'Exercício de tática com o desenho da quadra, tempo, jogadores e material' },
  { id: 5, src: tela5, alt: 'Busca de exercícios com filtro por nível' },
  { id: 6, src: tela6, alt: 'Categoria Sozinho/Dupla com rotinas para treinar sem professor' },
  { id: 7, src: tela7, alt: 'Lista de exercícios salvos' },
];

/** Tempo de cada tela na troca automática. */
const AUTOPLAY_MS = 3500;

/**
 * Carrossel compacto com as telas do app, usado no topo da página.
 * As setas ficam nas laterais do celular para não ocupar altura.
 * Troca sozinho a cada 3,5 s e para de vez quando a pessoa toca nele.
 */
export const AppCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const touchStartX = useRef<number | null>(null);

  // Pré-carrega a tela anterior e a próxima para a troca ser instantânea
  useEffect(() => {
    const vizinhas = [
      SLIDES[(currentIndex + 1) % SLIDES.length],
      SLIDES[(currentIndex - 1 + SLIDES.length) % SLIDES.length],
    ];
    vizinhas.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, [currentIndex]);

  // Troca automática
  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, currentIndex]);

  const goTo = (idx: number) => {
    setAutoplay(false);
    setCurrentIndex((idx + SLIDES.length) % SLIDES.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    goTo(dx < 0 ? currentIndex + 1 : currentIndex - 1);
  };

  const arrowClass =
    'absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white text-[#0E4B75] border border-[#E2DBC9] shadow-md active:scale-95 transition cursor-pointer';

  return (
    <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[340px]">
      {/* Celular com a tela ativa */}
      <div
        className="relative mx-auto w-[clamp(140px,calc((100vh-350px)*0.514),200px)] sm:w-[230px]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute -inset-2 bg-gradient-to-tr from-[#FF9F1C]/25 via-[#0E4B75]/20 to-[#FF4A3F]/15 rounded-[40px] blur-xl opacity-70 pointer-events-none" />
        <div className="relative rounded-[30px] sm:rounded-[38px] border-[4px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden aspect-[9/17.5]">
          <img
            key={SLIDES[currentIndex].id}
            src={SLIDES[currentIndex].src}
            width={640}
            height={1316}
            alt={SLIDES[currentIndex].alt}
            loading="eager"
            fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
            decoding="async"
            draggable={false}
            className="absolute inset-0 w-full h-full object-fill select-none"
          />
        </div>
      </div>

      {/* Setas nas laterais */}
      <button onClick={() => goTo(currentIndex - 1)} className={`${arrowClass} left-0`} aria-label="Tela anterior">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => goTo(currentIndex + 1)} className={`${arrowClass} right-0`} aria-label="Próxima tela">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bolinhas */}
      <div className="mt-2.5 flex items-center justify-center gap-1.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === currentIndex ? 'w-6 bg-[#FF9F1C]' : 'w-2 bg-slate-300'
            }`}
            aria-label={`Ir para tela ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
