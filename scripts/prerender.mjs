import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const ssrBundlePath = path.join(rootDir, 'dist-ssr', 'prerender.js');

function injectIntoRoot(html, renderedApp) {
  const rootPattern = /<div id="root"><\/div>/;
  if (!rootPattern.test(html)) {
    throw new Error('Could not find root container in dist/index.html');
  }

  return html.replace(rootPattern, `<div id="root">${renderedApp}</div>`);
}

function removeNoScript(html) {
  return html.replace(/<noscript>[\s\S]*?<\/noscript>\s*/g, '');
}

function removeScripts(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>\s*/g, '');
}

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
const { renderApp } = await import(pathToFileURL(ssrBundlePath).href);
const renderedApp = renderApp('/');

const prerenderedHtml = removeNoScript(injectIntoRoot(template, renderedApp));
const snapshotHtml = removeScripts(removeNoScript(prerenderedHtml));

await fs.writeFile(path.join(distDir, 'index.html'), prerenderedHtml, 'utf8');
await fs.writeFile(path.join(distDir, 'snapshot.html'), snapshotHtml, 'utf8');
await fs.mkdir(path.join(rootDir, 'public'), { recursive: true });
await fs.writeFile(path.join(rootDir, 'public', 'snapshot.html'), snapshotHtml, 'utf8');
