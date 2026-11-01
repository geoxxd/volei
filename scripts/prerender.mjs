// Depois do build: coloca o HTML da página já montada dentro de <div id="root">.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
const { render } = await import(pathToFileURL(path.join(ssrDir, entry)).href);

const htmlPath = path.join(dist, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const marcador = '<div id="root"></div>';
if (!html.includes(marcador)) throw new Error('Nao achei <div id="root"></div> no dist/index.html');

fs.writeFileSync(htmlPath, html.replace(marcador, `<div id="root">${render()}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('Pre-renderizado: dist/index.html');
