import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AppMockup } from './AppMockup';

interface SlideItem {
  id: number;
  title: string;
  tag: string;
  screenType: 'categories' | 'filters' | 'exercise' | 'timer';
  caption: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    title: '"Escolha pelo fundamento"',
    tag: '[print da lista de fundamentos]',
    screenType: 'categories',
    caption: '1. "Escolha pelo fundamento" – [print da lista de fundamentos]',
  },
  {
    id: 2,
    title: '"Filtre pelo nível e pelo tamanho da turma"',
    tag: '[print do filtro]',
    screenType: 'filters',
    caption: '2. "Filtre pelo nível e pelo tamanho da turma" – [print do filtro]',
  },
  {
    id: 3,
    title: '"Abra o exercício e aplique"',
    tag: '[print de um exercício com o código, ex.: MAN-INI-4 = Manchete · Iniciante · 4 alunos, e o desenho da quadra]',
    screenType: 'exercise',
    caption: '3. "Abra o exercício e aplique" – [print de um exercício com o código, ex.: MAN-INI-4 = Manchete · Iniciante · 4 alunos, e o desenho da quadra]',
  },
  {
    id: 4,
    title: '"Modo Arena: a aula rodando na sua mão"',
    tag: '[print da tela do Modo Arena com timer e placar]',
    screenType: 'timer',
    caption: '4. "Modo Arena: a aula rodando na sua mão" – [print da tela do Modo Arena com timer e placar]',
  },
];

export const AppPreviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#EFE9DC]/70 border-y border-[#E2DBC9]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0E4B75] tracking-wide uppercase">
          VEJA O APP POR DENTRO
        </h2>
        
        {/* Text */}
        <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
          Cada exercício tem o seu código. Você sabe na hora o nível, o fundamento e para quantos alunos ele serve.
        </p>

        {/* Carousel Container */}
        <div className="mt-8 relative max-w-md mx-auto">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0E4B75] border border-[#E2DBC9] shadow-sm transition-colors cursor-pointer"
              aria-label="Tela anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-7 bg-[#FF9F1C]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir para tela ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white hover:bg-slate-50 text-[#0E4B75] border border-[#E2DBC9] shadow-sm transition-colors cursor-pointer"
              aria-label="Próxima tela"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Active Screen Mockup */}
          <div className="relative">
            <AppMockup activeScreen={SLIDES[currentIndex].screenType} />
          </div>

        </div>
      </div>
    </section>
  );
};
