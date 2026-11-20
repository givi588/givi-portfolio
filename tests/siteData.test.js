import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { projects, services, links } from '../src/siteData.js';

const https = value => new URL(value).protocol === 'https:';

test('the catalog retains seven unique projects and three case studies', () => {
  assert.equal(projects.length, 7);
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length);
  assert.deepEqual(projects.filter(project => project.study).map(project => project.id),
    ['mira-flowers', 'invoice-quote-studio', 'category-dashboard']);
});

test('project and contact destinations are HTTPS', () => {
  for (const project of projects) {
    assert.ok(https(project.code));
    assert.ok(project.demo === null || https(project.demo));
    assert.ok(project.title && project.summary && project.stack.length >= 2);
    assert.ok(['Websites', 'Dashboards', 'Automation'].includes(project.category));
  }
  assert.deepEqual(links, {
    github: 'https://github.com/givi588',
    linkedin: 'https://www.linkedin.com/in/givi-pruidze-43929944a/',
    inquiry: 'https://github.com/givi588/givi588/issues/new?template=project-inquiry.yml',
  });
  assert.ok(Object.values(links).every(https));
});

test('featured projects point to their verified deployments and have local screenshots', () => {
  for (const project of projects.filter(project => project.study)) {
    assert.equal(project.demo, 'https://givi588.github.io/' + project.id + '/');
    const { image, alt, challenge, contribution, result, features } = project.study;
    assert.ok(alt && challenge && contribution && result && features.length);
    assert.ok(existsSync(new URL('../public/projects/' + image + '.webp', import.meta.url)));
  }
  assert.ok(existsSync(new URL('../public/projects/mira-home.webp', import.meta.url)));
});

test('the two Python command-line projects are source-only', () => {
  const automation = projects.filter(project => project.category === 'Automation');
  assert.equal(automation.length, 2);
  assert.ok(automation.every(project => project.demo === null && project.stack.includes('Python')));
});

test('services have unique titles and descriptions', () => {
  assert.equal(new Set(services.map(service => service.title)).size, 3);
  assert.ok(services.every(service => service.description && service.detail));
});
