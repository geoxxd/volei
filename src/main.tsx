import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import '@fontsource-variable/inter/wght.css';
import './index.css';

const root = document.getElementById('root')!;

// No site publicado o HTML já vem pronto (pré-renderizado no build):
// o React só "assume" a página existente. Em desenvolvimento, monta do zero.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
