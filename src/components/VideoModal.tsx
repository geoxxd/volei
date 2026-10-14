import React, { useEffect } from 'react';
import { X, Play } from 'lucide-react';
import { LINKS } from '../config/links';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="anim-fundo fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-titulo"
        className="anim-caixa relative w-full max-w-2xl bg-noite rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 grid place-items-center rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
          aria-label="Fechar vídeo"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 id="video-titulo" className="pr-10 text-2xl leading-tight">
          Veja o Código da Areia funcionando (1 min)
        </h3>

        <div className="mt-4 relative aspect-video w-full bg-black rounded-xl overflow-hidden flex items-center justify-center">
          {LINKS.VIDEO && LINKS.VIDEO.includes('http') ? (
            <iframe
              src={LINKS.VIDEO}
              title="Demonstração do app Código da Areia"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-sol/20 text-sol grid place-items-center mx-auto">
                <Play className="w-8 h-8 ml-1 fill-current" />
              </div>
              <p className="text-sm text-slate-300">Substitua o VIDEO em src/config/links.ts</p>
            </div>
          )}
        </div>

        <div className="mt-4">
          <button
            onClick={() => {
              onClose();
              const el = document.getElementById('planos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-compra"
          >
            Quero o meu acesso
          </button>
        </div>
      </div>
    </div>
  );
};
