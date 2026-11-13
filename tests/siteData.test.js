import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, services, links } from '../src/siteData.js';

const validUrl = (value) => {
  const url = new URL(value);
  return url.protocol === 'https:' && Boolean(url.hostname);
};

test('portfolio has seven unique featured projects', () => {
  assert.equal(projects.length, 7);
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length);
  assert.ok(projects.every((project) => project.featured));
});

test('invoice app is featured with the verified live and source URLs', () => {
  const invoice = projects.find((project) => project.id === 'invoice-quote-studio');
  assert.ok(invoice, 'missing invoice project');
  assert.equal(invoice.demo, 'https://givi588.github.io/invoice-quote-studio/');
  assert.equal(invoice.code, 'https://github.com/givi588/invoice-quote-studio');
  assert.equal(invoice.art, 'invoice');
});

test('each project has complete data and working URL formats', () => {
  for (const project of projects) {
    for (const field of ['title', 'summary', 'label', 'art', 'category']) {
      assert.ok(project[field]?.trim(), `${project.id} missing ${field}`);
    }
    assert.ok(['Websites', 'Dashboards', 'Automation'].includes(project.category));
    assert.ok(project.stack.length >= 2);
    if (project.demo !== null) assert.ok(validUrl(project.demo));
    assert.ok(validUrl(project.code));
  }
});

test('service entries are unique and complete', () => {
  assert.equal(services.length, 3);
  assert.equal(new Set(services.map((service) => service.number)).size, services.length);
  assert.ok(services.every((service) => service.description && service.title && service.detail));
});

test('external contact and profile links are HTTPS', () => {
  assert.ok(Object.values(links).every(validUrl));
});

test('Python command-line examples are clearly marked without fake live demos', () => {
  const automation = projects.filter((project) => project.category === 'Automation');
  assert.equal(automation.length, 2);
  assert.ok(automation.every((project) => project.demo === null));
  assert.ok(automation.every((project) => project.code.startsWith('https://github.com/givi588/')));
  assert.ok(automation.every((project) => project.stack.includes('Python')));
});

test('real screenshot is sourced from the published dashboard repository', () => {
  const category = projects.find((project) => project.id === 'category-dashboard');
  assert.equal(category.screenshot, 'https://raw.githubusercontent.com/givi588/category-dashboard/main/screenshots/v1-desktop.png');
  assert.ok(projects.filter((project) => project.screenshot).length === 1);
});
