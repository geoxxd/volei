// Linha do tempo do exercício 123 (Explorando as mãos altas e laterais do bloqueio), igual à do app.
import type { Animacao } from '../lib/diagrama/tipos';

export const NOME_EXERCICIO = "Explorando as mãos altas e laterais do bloqueio ('block-out' técnico)";

export const PASSOS = [
  'Levantamento perto da rede (80 cm a 1 m) e bloqueador fechando os espaços: tentar passar por baixo dele dá ponto de bloqueio.',
  'A1 sobe equilibrado, mantém o olhar nas mãos de B1 e escolhe uma das duas técnicas de explorar o bloqueio.',
  'Técnica 1: mira nos últimos 5 cm da ponta dos dedos de B1; a bola raspa na mão e sai pelo fundo.',
  'Técnica 2: gira o punho para fora e bate na borda externa da mão de B1; a bola ricocheteia para fora da lateral.',
  'Só vale ponto se a bola tocar em B1 e cair fora da quadra (ou se B1 encolher a mão e a bola cair na linha).',
];

export const ANIMACAO: Animacao = {
  bolaInicial: { ref: 'L1', dx: 0, dy: -6 },
  passos: [
    { texto: 1, acoes: [{ tipo: 'pausa', dur: 1.4 }] },
    {
      texto: 2,
      acoes: [
        { tipo: 'bola', para: 'seta1.b', alta: true, dur: 1.8 },
        { tipo: 'seta', id: 'seta1', dur: 1.8 },
        { tipo: 'jogador', id: 'A1', para: 'seta2.b', dur: 1.4, atraso: 0.6 },
        { tipo: 'seta', id: 'seta2', dur: 1.4, atraso: 0.6 },
      ],
    },
    {
      texto: 3,
      acoes: [
        { tipo: 'bola', para: [145.6, 31], dur: 0.7 },
        { tipo: 'bola', de: [145.6, 32.2], para: 'seta5.b', dur: 1.8, atraso: 0.7 },
        { tipo: 'seta', id: 'seta5', dur: 1.8, atraso: 0.7 },
      ],
    },
    { texto: 4, acoes: [{ tipo: 'bola', de: 'seta4.a', para: 'seta4.b', dur: 1.3 }, { tipo: 'seta', id: 'seta4', dur: 1.3 }] },
    { texto: 5, acoes: [{ tipo: 'seta', id: 'seta3', dur: 0.8 }] },
  ],
};
