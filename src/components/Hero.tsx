import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { scrollToPlanos } from '../utils/utm';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Tenta iniciar a reprodução com o áudio ativado
    video.muted = false;
    video.volume = 1;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // O navegador permitiu autoplay com áudio
          setIsMuted(false);
        })
        .catch(() => {
          // Os navegadores bloqueiam autoplay com som sem interação prévia do usuário.
          // Inicia em modo mudo para não travar o vídeo e ativa no primeiro toque/clique.
          video.muted = true;
          video.play().catch(() => {});
          setIsMuted(true);
        });
    }

    // Ativa o áudio imediatamente no primeiro clique ou toque do usuário na página
    const handleFirstInteraction = () => {
      if (video && video.muted) {
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
        setIsMuted(false);
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    if (!newMuted) {
      videoRef.current.volume = 1;
      videoRef.current.play().catch(() => {});
    }
    setIsMuted(newMuted);
  };

  return (
    <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      {/* Background subtle coastal atmosphere glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-gradient-to-b from-[#FF9F1C]/10 via-[#0E4B75]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0E4B75] leading-[1.1] max-w-3xl mx-auto text-balance">
        <span className="text-[#FF9F1C] font-black">+240</span> Exercícios de Vôlei de Areia{' '}
        <span className="underline decoration-[#0284C7] decoration-[4px] underline-offset-6 text-[#0E4B75]">
          Prontos
        </span>{' '}
        para a sua próxima aula
      </h1>

      {/* Subheadline */}
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
        App com todos os fundamentos da dupla de praia, diagramas de quadra, variações por nível e filtro por categoria, acesso direto pelo celular.
      </p>

      {/* Vídeo demonstrativo do aplicativo (Imgur a/iAOPy8W) */}
      <div className="my-8 sm:my-10 max-w-[280px] sm:max-w-[320px] mx-auto">
        <div className="relative rounded-[36px] p-2 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl border-4 border-slate-700/80 overflow-hidden group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF9F1C]/25 via-[#0E4B75]/20 to-[#FF4A3F]/20 rounded-[48px] blur-xl opacity-70 pointer-events-none -z-10" />
          
          <video
            ref={videoRef}
            src="https://i.imgur.com/4r1NGGW.mp4"
            poster="https://i.imgur.com/4r1NGGW.jpg"
            controls
            playsInline
            autoPlay
            loop
            className="w-full h-auto rounded-[28px] object-cover block shadow-inner cursor-pointer"
            onClick={toggleSound}
          >
            Seu navegador não suporta a tag de vídeo.
          </video>

          {/* Botão de destaque para ativar o som se o navegador bloqueou o áudio no autoplay */}
          {isMuted && (
            <button
              type="button"
              onClick={toggleSound}
              className="absolute top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-[#FF4A3F] hover:bg-[#FF3B2F] text-white text-[11px] sm:text-xs font-black uppercase px-3.5 py-2 rounded-full shadow-xl border border-white/30 transition-transform active:scale-95 animate-bounce cursor-pointer whitespace-nowrap"
            >
              <VolumeX className="w-3.5 h-3.5 shrink-0" />
              <span>Toque para ativar o som</span>
            </button>
          )}

          {!isMuted && (
            <button
              type="button"
              onClick={toggleSound}
              aria-label="Silenciar áudio"
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white shadow-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>


      {/* Primary CTA Button (Coral Fluorescente de Alta Conversão) */}
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={scrollToPlanos}
          className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
        >
          QUERO OS 240 EXERCÍCIOS NO MEU CELULAR
        </button>
      </div>

      {/* Badges / Selos lado a lado */}
      <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-slate-700">
        <span className="flex items-center gap-1.5 text-[#0E4B75]">
          ⚡ ACESSO IMEDIATO
        </span>
        <span className="text-slate-300">|</span>
        <span className="flex items-center gap-1.5 text-[#D97706]">
          🎁 BÔNUS GRÁTIS
        </span>
      </div>
    </section>
  );
};
