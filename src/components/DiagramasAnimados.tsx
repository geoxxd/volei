import React, { Suspense, useEffect, useRef, useState } from 'react';

// O diagrama (motor de animação + dados da quadra) vai num arquivo separado,
// baixado só quando a seção está perto de aparecer: não pesa no carregamento inicial da página.
const DiagramaAnimado = React.lazy(() => import('./DiagramaAnimado').then((m) => ({ default: m.DiagramaAnimado })));

/** Reserva o espaço do diagrama (evita "pulo" da página) enquanto ele não foi carregado. */
const Reserva: React.FC = () => (
  <div className="rounded-3xl bg-[#F6DB8A]/60 border border-[#E2DBC9] aspect-[277.9/144.5]" aria-hidden="true" />
);

export const DiagramasAnimados: React.FC = () => {
  const alvo = useRef<HTMLDivElement>(null);
  const [perto, setPerto] = useState(false);

  useEffect(() => {
    const el = alvo.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setPerto(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setPerto(true);
        io.disconnect();
      }
    }, { rootMargin: '800px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-[#0E4B75] tracking-tight uppercase">
          CHEGA DE TENTAR ENTENDER O EXERCÍCIO OLHANDO APENAS PARA UM DESENHO
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
          Com <strong className="font-black text-[#0E4B75]">diagramas animados</strong>, você visualiza as movimentações em tempo real e entende exatamente como cada atividade acontece na quadra antes de entrar na areia com os seus alunos.
        </p>
        <div ref={alvo} className="mt-8 max-w-md mx-auto">
          {perto ? (
            <Suspense fallback={<Reserva />}>
              <DiagramaAnimado />
            </Suspense>
          ) : (
            <Reserva />
          )}
        </div>
      </div>
    </section>
  );
};
