import React, { useState } from 'react';
import { Plus, MessageCircle } from 'lucide-react';
import { LINKS } from '../config/links';
import { buildUrlWithParams } from '../utils/utm';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: 'Como recebo o acesso?',
    answer: 'Assim que o pagamento é confirmado, o acesso chega no seu e-mail [e no seu WhatsApp]. É só abrir no celular e começar.',
  },
  {
    question: 'É de areia mesmo ou é treino de quadra adaptado?',
    answer: 'É de areia. Os exercícios foram pensados para a areia, para turma pequena e para o espaço que você tem na praia ou na arena.',
  },
  {
    question: 'Serve para turma de 2, 4 ou 6 alunos?',
    answer: 'Serve. O código de cada exercício mostra para quantos alunos ele funciona, e você filtra pelo tamanho da turma do dia.',
  },
  {
    question: 'Preciso de muito equipamento?',
    answer: 'Não. [A maioria dos exercícios usa só bola, rede e cones ou fita de marcação.]',
  },
  {
    question: 'Já dou aula há anos. Serve para mim?',
    answer: 'Serve. O app não vem te ensinar vôlei. Ele economiza o tempo de montar a aula e traz variações para a sua turma não enjoar.',
  },
  {
    question: 'Funciona em qualquer celular?',
    answer: '[Sim, funciona em Android e iPhone.]',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias para testar. Se não gostar, é só chamar o suporte e devolvemos todo o valor.',
  },
];

export const Faq: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const whatsappUrl = buildUrlWithParams(LINKS.WHATSAPP);

  return (
    <section className="px-4 py-14 sm:py-20 bg-areia-2/60">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14">
        <div>
          <h2 className="text-[2rem] leading-[1] sm:text-5xl text-mar">Perguntas frequentes</h2>

          {/* Dúvida fora da lista: WhatsApp (no desktop fica ao lado das perguntas) */}
          <div className="hidden lg:block mt-8">
            <p className="text-lg font-bold text-mar">Ainda ficou com alguma dúvida?</p>
            <p className="mt-1 text-[15px] text-tinta-2">Fale direto com o nosso suporte antes de começar.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 min-h-[3.25rem] px-5 rounded-[14px] bg-[#1FAF55] hover:bg-[#1A9A4A] text-white font-bold text-[16px] transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>

        <div>
          <ul className="border-t border-areia-3">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndices.includes(idx);
              const id = `faq-${idx}`;
              return (
                <li key={idx} className="border-b border-areia-3">
                  <h3 className="text-inherit" style={{ fontStretch: '100%', letterSpacing: 0 }}>
                    <button
                      onClick={() => toggleIndex(idx)}
                      className="w-full py-5 flex items-center justify-between gap-4 text-left text-[17px] font-bold text-mar cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={id}
                    >
                      <span>{item.question}</span>
                      <Plus
                        className={`w-5 h-5 shrink-0 text-sol-2 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <p id={id} className="pb-5 pr-8 -mt-1 text-[16px] leading-relaxed text-tinta-2">
                      {item.answer}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Celular: WhatsApp abaixo das perguntas */}
          <div className="lg:hidden mt-10">
            <p className="text-xl font-bold text-mar">Ainda ficou com alguma dúvida?</p>
            <p className="mt-1 text-[15px] text-tinta-2">Fale direto com o nosso suporte antes de começar.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 min-h-[3.5rem] px-5 rounded-[14px] bg-[#1FAF55] hover:bg-[#1A9A4A] text-white font-bold text-[17px] transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
