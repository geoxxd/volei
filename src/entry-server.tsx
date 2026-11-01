import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Usado só no build: gera o HTML da página já montada, para o celular
 * mostrar o topo sem esperar o JavaScript baixar e rodar.
 */
export function render(): string {
  return renderToString(<App />);
}
