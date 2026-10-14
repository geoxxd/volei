import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AppMockup } from './AppMockup';

interface SlideItem {
  id: number;
  title: string;
  /** Descrição do print real que vai entrar no lugar da tela provisória */
  printPendente: string;
  screenType: 'categories' | 'filters' | 'exercise' | 'timer';
}

const SLIDES: SlideItem[] = [
  { id: 1, title: 'Escolha pelo fundamento', printPendente: '[print da lista de fundamentos]', screenType: 'categories' },
  { id: 2, title: 'Filtre pelo nível e pelo tamanho da turma', printPendente: '[print do filtro]', screenType: 'filters' },
  {
    id: 3,
    title: 'Abra o exercício e aplique',
    printPendente: '[print de um exercício com o código, ex.: MAN-INI-4 = Manchete · Iniciante · 4 alunos, e o desenho da quadra]',
    screenType: 'exercise',
  },
  { id: 4, title: 'Modo Arena: a aula rodando na sua mão', printPendente: '[print da tela do Modo Arena com timer e placar]', screenType: 'timer' },
];

export const AppPreviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slide = SLIDES[currentIndex];

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));

  return (
    <section className="px-4 py-14 sm:py-20 bg-areia-2/60" aria-roledescription="carrossel" aria-label="Telas do app">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div>
          <h2 className="text-[2rem] leading-[1.02] sm:text-5xl text-mar">Veja o app por dentro</h2>

          {/* Passos: no desktop viram uma lista clicável */}
          <ol className="hidden md:block mt-8 border-t border-areia-3">
            {SLIDES.map((s, idx) => (
              <li key={s.id}>
                <button
                  onClick={() => setCurrentIndex(idx)}
                  aria-current={idx === currentIndex}
                  className={`w-full flex items-baseline gap-4 py-4 border-b border-areia-3 text-left text-lg font-semibold transition-colors cursor-pointer ${
                    idx === currentIndex ? 'text-mar' : 'text-tinta-2/70 hover:text-mar'
                  }`}
                >
                  <span className={`num text-sm w-6 shrink-0 ${idx === currentIndex ? 'text-sol-2' : ''}`}>{s.id}</span>
                  {s.title}
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <div className="relative" aria-live="polite">
            <AppMockup activeScreen={slide.screenType} />
          </div>

          {/* Legenda + navegação (celular) */}
          <div className="mt-6 flex items-center justify-between gap-3 max-w-sm mx-auto">
            <button
              onClick={prevSlide}
              className="w-11 h-11 shrink-0 grid place-items-center rounded-full bg-papel text-mar border border-areia-3 hover:border-mar transition-colors cursor-pointer"
              aria-label="Tela anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <p className="text-center text-[15px] font-semibold text-mar leading-snug">
              <span className="num text-sol-2 mr-1.5">
                {slide.id}/{SLIDES.length}
              </span>
              {slide.title}
            </p>
            <button
              onClick={nextSlide}
              className="w-11 h-11 shrink-0 grid place-items-center rounded-full bg-papel text-mar border border-areia-3 hover:border-mar transition-colors cursor-pointer"
              aria-label="Próxima tela"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
