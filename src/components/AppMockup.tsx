import React from 'react';
import { Volleyball, Shuffle } from 'lucide-react';
import mockupImage from '../assets/images/mockup_app_manchete.webp';

interface AppMockupProps {
  activeScreen?: 'exercise' | 'filters' | 'categories' | 'timer';
  caption?: string;
  /** Versão menor no celular (usada no topo para o botão aparecer mais cedo) */
  compact?: boolean;
}

export const AppMockup: React.FC<AppMockupProps> = ({ activeScreen = 'exercise', caption, compact = false }) => {
  // Tela principal: print do exercício MAN-INI-4 (imagem já com o aparelho, fundo transparente)
  if (activeScreen === 'exercise') {
    return (
      <figure className={`relative mx-auto w-full ${compact ? 'max-w-[230px]' : 'max-w-[268px]'} sm:max-w-[300px]`}>
        <img
          src={mockupImage}
          width={667}
          height={1322}
          alt="App Código da Areia aberto no exercício MAN-INI-4, Manchete Cruzada com Deslocamento em V, com o desenho da quadra"
          className="block w-full h-auto drop-shadow-[0_28px_30px_rgba(10,34,54,0.35)]"
          loading="eager"
        />
        {caption && <figcaption className="mt-3 text-sm font-semibold text-tinta-2 text-center">{caption}</figcaption>}
      </figure>
    );
  }

  // Telas provisórias do carrossel (filtros, categorias, Modo Arena) até chegarem os prints reais
  return (
    <figure className="relative mx-auto w-full max-w-[268px] sm:max-w-[300px]">
      <div className="relative rounded-[42px] p-[7px] bg-[#1B1F24] shadow-[0_28px_40px_-12px_rgba(10,34,54,0.45)] ring-1 ring-black/40">
        <div className="relative rounded-[35px] overflow-hidden bg-[#0A1424] aspect-[9/18.5] flex flex-col text-slate-100">
          {/* Ilha */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />

          {/* Barra de status */}
          <div className="pt-3 px-6 pb-1 flex justify-between items-center text-[11px] text-slate-300 font-semibold z-20 num">
            <span>09:41</span>
            <span>5G</span>
          </div>

          {/* Cabeçalho do app */}
          <div className="mt-3 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volleyball className="w-5 h-5 text-sol" aria-hidden="true" />
              <div className="leading-tight">
                <div className="text-[12px] font-bold text-white">Código da Areia</div>
                <div className="text-[10px] text-slate-400">240 exercícios prontos</div>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-linha text-noite">PRO</span>
          </div>

          <div className="flex-1 overflow-hidden p-3 text-left">
            {activeScreen === 'categories' && (
              <div className="space-y-2">
                <div className="text-[12px] font-bold text-slate-200 mb-1">Fundamentos</div>
                {[
                  { name: 'Manchete e passe', count: 40, code: 'MAN' },
                  { name: 'Toque e levantamento', count: 35, code: 'TOQ' },
                  { name: 'Saque', count: 30, code: 'SAQ' },
                  { name: 'Ataque (cortada e largada)', count: 35, code: 'ATQ' },
                  { name: 'Bloqueio', count: 25, code: 'BLQ' },
                  { name: 'Defesa', count: 35, code: 'DEF' },
                ].map((item) => (
                  <div key={item.code} className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                    <div>
                      <div className="text-[12px] font-semibold text-white">{item.name}</div>
                      <div className="text-[10px] text-slate-400 num">{item.count} exercícios</div>
                    </div>
                    <span className="tag-codigo text-[10px] px-1.5 py-0.5">{item.code}</span>
                  </div>
                ))}
              </div>
            )}

            {activeScreen === 'filters' && (
              <div className="space-y-4">
                <div className="text-[12px] font-bold text-slate-200">Filtrar exercícios</div>
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 font-semibold">Alunos na aula</span>
                  <div className="grid grid-cols-4 gap-1">
                    {['2', '4', '6', '8+'].map((t, idx) => (
                      <div key={t} className={`text-center py-1.5 rounded-md text-[11px] font-bold num ${idx === 1 ? 'bg-sol text-[#2A1600]' : 'bg-white/[0.06] text-slate-300'}`}>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 font-semibold">Nível</span>
                  <div className="grid grid-cols-3 gap-1">
                    {['Iniciante', 'Intermediário', 'Avançado'].map((lvl, idx) => (
                      <div key={lvl} className={`text-center py-1.5 rounded-md text-[10px] font-bold ${idx === 0 ? 'bg-linha text-noite' : 'bg-white/[0.06] text-slate-300'}`}>
                        {lvl}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400 font-semibold">Fundamento</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-sol text-[#2A1600]">Manchete</span>
                    {['Toque', 'Saque', 'Ataque'].map((f) => (
                      <span key={f} className="px-2 py-1 rounded-md text-[10px] font-semibold bg-white/[0.06] text-slate-300">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-1 text-[11px] text-slate-300">
                  <span className="tag-codigo text-[10px] px-1.5 py-0.5 mr-1.5">MAN-INI-4</span>
                  exercícios encontrados
                </div>
              </div>
            )}

            {activeScreen === 'timer' && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-white">Modo Arena</span>
                  <span className="text-[10px] text-linha font-semibold">Rodízio ativo</span>
                </div>
                <div className="rounded-xl border border-linha/40 bg-black/30 py-4 text-center">
                  <div className="text-4xl font-black text-linha num tracking-tight">03:45</div>
                  <div className="text-[10px] text-slate-400 mt-1">Bloco 2 de 4</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { dupla: 'Dupla 1', pts: 18, cor: 'text-sol' },
                    { dupla: 'Dupla 2', pts: 16, cor: 'text-linha' },
                  ].map((d) => (
                    <div key={d.dupla} className="rounded-lg bg-white/[0.05] border border-white/[0.08] p-2 text-center">
                      <span className="text-[10px] text-slate-400 font-semibold block">{d.dupla}</span>
                      <span className={`text-2xl font-black num ${d.cor}`}>{d.pts}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg bg-white/[0.05] border border-white/[0.08] p-2 text-[10px] text-slate-300 flex items-center gap-2">
                  <Shuffle className="w-3.5 h-3.5 text-sol shrink-0" aria-hidden="true" />
                  Sorteio da próxima rodada: 4 duplas
                </div>
              </div>
            )}
          </div>

          <div className="py-2 flex justify-center">
            <div className="w-24 h-1 bg-slate-600 rounded-full" />
          </div>
        </div>
      </div>
      {caption && <figcaption className="mt-3 text-sm font-semibold text-tinta-2 text-center">{caption}</figcaption>}
    </figure>
  );
};
