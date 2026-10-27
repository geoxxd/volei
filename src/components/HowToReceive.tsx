import React from 'react';
import { CreditCard, Mail, Smartphone } from 'lucide-react';
import { scrollToPlanos } from '../utils/utm';

interface Step {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const STEPS: Step[] = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Faça o pagamento',
    text: 'Pix ou cartão, só com os seus dados, em ambiente seguro.',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Receba na hora',
    text: 'O acesso chega no seu e-mail e no seu WhatsApp assim que o pagamento é confirmado.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Abra o app e use na aula',
    text: 'Se você levou algum material extra no checkout, é só usar a senha que veio junto e ele libera na hora.',
  },
];

/** SEÇÃO 2: como a pessoa recebe o acesso depois da compra. */
export const HowToReceive: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-[#EFE9DC]/70 border-y border-[#E2DBC9]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-[#0E4B75] tracking-tight uppercase text-balance">
          COMO VOCÊ RECEBE O SEU ACESSO
        </h2>

        <ol className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
          {STEPS.map((step, idx) => (
            <li
              key={step.title}
              className="relative flex sm:flex-col items-start gap-4 sm:gap-3 p-4 sm:p-5 rounded-2xl bg-white border border-[#E2DBC9] shadow-sm"
            >
              <div className="relative shrink-0 w-12 h-12 rounded-xl bg-[#0E4B75] text-white flex items-center justify-center">
                {step.icon}
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#FF9F1C] text-[#0B2A44] text-xs font-black flex items-center justify-center border-2 border-white">
                  {idx + 1}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0E4B75] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed font-medium">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 w-full max-w-md mx-auto">
          <button
            onClick={scrollToPlanos}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF4A3F] via-[#FF3B2F] to-[#FF4A3F] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl hover:brightness-105 active:scale-[0.98] transition-all animate-pulse-cta cursor-pointer uppercase border-b-4 border-[#C92A20]"
          >
            QUERO MEU ACESSO AGORA
          </button>
        </div>
      </div>
    </section>
  );
};
