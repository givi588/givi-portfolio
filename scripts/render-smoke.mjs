import assert from 'node:assert/strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

// Vite transforms JSX in the same way as the production bundle. Rendering
// here catches missing React runtime imports that a syntax-only build misses.
const server = await createServer({
  appType: 'custom',
  server: { middlewareMode: true },
  logLevel: 'error',
});

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const html = renderToString(React.createElement(App));

  assert.match(html, /Building digital/);
  assert.match(html, /Mira Flowers/);
  assert.match(html, /React Training Dashboard/);
  assert.match(html, /Invoice &amp; Quote Studio|Invoice & Quote Studio/);
  assert.match(html, /A clearer digital storefront/);
  assert.match(html, /href="#case-study"/);
  assert.match(html, /Read technical breakdown/);
  assert.match(html, /Start a project inquiry/);
  console.log('Portfolio render smoke test passed');
} finally {
  await server.close();
}
