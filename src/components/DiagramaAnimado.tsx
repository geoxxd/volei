import React, { useEffect, useMemo, useRef, useState } from 'react';
import { animate } from 'motion';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { compilar, estadoEm } from '../lib/diagrama/linhaDoTempo';
import { montarCena } from '../lib/diagrama/cena';
import { CENA_123 } from '../data/diagrama123';
import { ANIMACAO, NOME_EXERCICIO, PASSOS } from '../data/animacao123';

/** Diagrama animado do exercício 123, o mesmo do app: quadra, jogadores e bola em movimento. */
export const DiagramaAnimado: React.FC = () => {
  const quadro = useRef<HTMLDivElement>(null);
  const relogio = useRef<ReturnType<typeof animate> | null>(null);
  const [tocando, setTocando] = useState(true);
  const [passo, setPasso] = useState(1);
  const compilada = useMemo(() => compilar(ANIMACAO, CENA_123), []);

  useEffect(() => {
    const el = quadro.current;
    if (!el) return;
    const montada = montarCena(CENA_123, new Set(compilada.desenhos.keys()), 'landing123', [
      ...(compilada.bolaInicial ? [compilada.bolaInicial] : []),
      ...compilada.voos.flatMap((v) => [v.de, v.para]),
    ]);
    el.replaceChildren(montada.svg);
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desenhar = (t: number) => {
      const e = estadoEm(compilada, t);
      montada.aplicar(e);
      setPasso((p) => (e.passo && e.passo !== p ? e.passo : p));
    };
    desenhar(reduzir ? compilada.duracao : 0);
    if (reduzir) {
      setTocando(false);
      return;
    }
    const a = animate(0, compilada.duracao, { duration: compilada.duracao, ease: 'linear', repeat: Infinity, onUpdate: desenhar });
    relogio.current = a;
    // só anima enquanto aparece na tela (poupa bateria e processamento)
    const io = new IntersectionObserver(([ent]) => {
      if (ent.isIntersecting) a.play();
      else a.pause();
    }, { threshold: 0.3 });
    io.observe(el);
    return () => {
      io.disconnect();
      a.stop();
    };
  }, [compilada]);

  const alternar = () => {
    const a = relogio.current;
    if (!a) return;
    if (tocando) a.pause();
    else a.play();
    setTocando(!tocando);
  };
  const repetir = () => {
    const a = relogio.current;
    if (!a) return;
    a.time = 0;
    a.play();
    setTocando(true);
  };

  return (
    <div className="rounded-3xl bg-white border border-[#E2DBC9] shadow-xl overflow-hidden">
      <div ref={quadro} className="bg-[#F6DB8A] [&>svg]:block [&>svg]:w-full [&>svg]:h-auto" role="img" aria-label="Diagrama animado do exercício: bloqueio e block-out técnico" />
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#0E4B75] text-white">
        <button onClick={alternar} className="w-11 h-11 rounded-xl bg-[#FF4A3F] flex items-center justify-center cursor-pointer" aria-label={tocando ? 'Pausar animação' : 'Reproduzir animação'}>
          {tocando ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button onClick={repetir} className="h-11 px-3 rounded-xl bg-white/15 flex items-center gap-1.5 text-sm font-bold cursor-pointer" aria-label="Repetir do começo">
          <RotateCcw className="w-4 h-4" /> Repetir
        </button>
        <span className="ml-auto text-xs font-bold opacity-80">Passo {passo} de {PASSOS.length}</span>
      </div>
      <div className="px-4 py-3 text-left bg-[#F7F4EE] border-t border-[#E2DBC9]">
        <p className="text-[11px] font-black tracking-wider text-[#0284C7] uppercase">Exercício 123 · {NOME_EXERCICIO}</p>
        <p className="mt-1 text-sm font-semibold text-slate-700 min-h-[2.75rem]">
          <span className="text-[#FF9F1C] font-black">{passo}.</span> {PASSOS[passo - 1]}
        </p>
      </div>
    </div>
  );
};
