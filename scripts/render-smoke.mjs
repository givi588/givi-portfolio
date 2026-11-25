import assert from 'node:assert/strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

// Vite transforms JSX in the same way as the production bundle. Rendering
// here catches missing React runtime imports that a syntax-only build misses.
const server = await createServer({
  appType: 'custom',
  // This server only transforms modules for SSR. Skip the client dependency scan.
  optimizeDeps: { noDiscovery: true },
  server: { middlewareMode: true },
  logLevel: 'error',
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const html = renderToString(React.createElement(App));

  assert.match(html, /Frontend developer/);
  assert.match(html, /Mira Flowers/);
  assert.match(html, /Pandora: The Forbidden Gift/);
  assert.match(html, /Download for Windows/);
  assert.match(html, /React Training Dashboard/);
  assert.match(html, /Invoice &amp; Quote Studio/);
  assert.match(html, /Category Dashboard/);
  assert.match(html, /href="#case-study"/);
  assert.match(html, /Read the technical breakdown/);
  assert.match(html, /<a href="https:\/\/www\.linkedin\.com\/in\/givi-pruidze-43929944a\/" class="button primary" target="_blank" rel="noopener noreferrer">Connect on LinkedIn<\/a>/);
  assert.ok(html.includes('Connect with me on LinkedIn for professional inquiries. GitHub project inquiries are public.'));
  for (const id of ['top', 'main', 'work', 'about', 'skills', 'contact', 'services', 'case-study']) {
    assert.ok(html.includes('id="' + id + '"'), 'Missing anchor: ' + id);
  }
  console.log('Portfolio render smoke test passed');
} finally {
  await server.close();
}
