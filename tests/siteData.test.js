import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, services, links } from '../src/siteData.js';

const validUrl = (value) => {
  const url = new URL(value);
  return url.protocol === 'https:' && Boolean(url.hostname);
};

test('portfolio has four unique featured projects', () => {
  assert.equal(projects.length, 4);
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length);
  assert.ok(projects.every((project) => project.featured));
});

test('each project has complete data and working URL formats', () => {
  for (const project of projects) {
    for (const field of ['title', 'summary', 'label', 'art', 'category']) {
      assert.ok(project[field]?.trim(), `${project.id} missing ${field}`);
    }
    assert.ok(['Websites', 'Dashboards'].includes(project.category));
    assert.ok(project.stack.length >= 2);
    assert.ok(validUrl(project.demo));
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
