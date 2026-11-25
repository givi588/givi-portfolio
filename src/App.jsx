import React, { useEffect, useRef, useState } from 'react';
import { links, projects, services } from './siteData.js';

const navigation = [
  ['top', 'Home'], ['work', 'Projects'], ['about', 'About'],
  ['skills', 'Skills'], ['contact', 'Contact'],
];
const filters = ['All', 'Websites', 'Dashboards', 'Automation', 'Games'];
const featured = projects.filter(project => project.study);
const asset = name => import.meta.env.BASE_URL + 'projects/' + name + (name.includes('.') ? '' : '.webp');

function ExternalLink({ href, children, className, label }) {
  return <a href={href} className={className} aria-label={label} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');
  const toggle = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    const update = () => {
      const threshold = (header.current?.offsetHeight ?? 0) + 45;
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActive('contact');
        return;
      }
      const current = navigation.findLast(([id]) => document.getElementById(id)?.getBoundingClientRect().top <= threshold);
      setActive(current?.[0] ?? 'top');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    window.addEventListener('hashchange', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('hashchange', update);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current.focus();
      }
    };
    const closeOutside = event => {
      if (!header.current.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 741px)');
    const closeAtDesktop = event => { if (event.matches) setOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeAtDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeAtDesktop);
    };
  }, [open]);

  function selectSection(id) {
    setActive(id);
    if (open) {
      setOpen(false);
      document.getElementById(id)?.focus({ preventScroll: true });
    }
  }

  return (
    <header className="header" ref={header}>
      <div className="shell header-inner">
        <a href="#top" className="brand" onClick={() => selectSection('top')}><span className="monogram" aria-hidden="true">G</span> Givi</a>
        <button ref={toggle} className="menu-toggle" type="button" aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen(value => !value)}>{open ? 'Close menu' : 'Menu'}</button>
        <nav id="main-nav" aria-label="Main navigation" className={open ? 'nav is-open' : 'nav'}>
          {navigation.map(([id, title]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => selectSection(id)}>{title}</a>)}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="shell hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div>
        <p className="eyebrow">Givi · Independent developer</p>
        <h1 id="hero-title">Frontend developer <span>&amp; software builder.</span></h1>
        <p className="hero-intro">I build responsive websites and React apps, fix frontend issues, and write Python tools for everyday business tasks. I also develop small game projects with Godot.</p>
        <div className="actions">
          <a className="button primary" href="#work">View my projects</a>
          <a className="button secondary" href="#contact">Contact me</a>
        </div>
        <p className="availability">Open to freelance projects with international clients.</p>
      </div>
      <figure className="hero-shot">
        <img src={asset('mira-home')} width="1120" height="760" alt="Mira Flowers homepage with a pink bouquet and a Georgian catalog link" fetchPriority="high" />
        <figcaption><a href="#case-study">Mira Flowers case study</a><span>Kutaisi, Georgia</span></figcaption>
      </figure>
    </section>
  );
}

function ProjectLinks({ project }) {
  return <div className="project-links">
    {project.demo && <ExternalLink href={project.demo} label={'Live demo: ' + project.title}>Live demo</ExternalLink>}
    {project.download && <ExternalLink href={project.download} label={'Download Windows game: ' + project.title}>Download for Windows</ExternalLink>}
    <ExternalLink href={project.code} label={'Source code: ' + project.title}>Source code</ExternalLink>
  </div>;
}

function ProjectCard({ project }) {
  const flagship = project.id === 'mira-flowers';
  return (
    <article className={flagship ? 'project-card flagship' : 'project-card'}>
      <img src={asset(project.study.image)} width="1120" height="760" alt={project.study.alt} loading="lazy" decoding="async" />
      <div className="project-copy">
        <p className="project-type">{flagship ? 'Flagship · Real storefront' : project.label}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="capabilities" aria-label="Capabilities">{project.study.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <p className="stack">{project.stack.join(' · ')}</p>
        <ProjectLinks project={project} />
        <a className="case-card-link" href={'#case-study-' + project.id}>Read the case study<span className="sr-only">{': ' + project.title}</span></a>
      </div>
    </article>
  );
}

function Work() {
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    const openLinkedStudy = () => {
      const hash = window.location.hash;
      const id = hash === '#case-study' ? 'case-study-mira-flowers' : hash.slice(1);
      const study = document.getElementById(id);
      if (!(study instanceof HTMLDetailsElement)) return;
      study.open = true;
      if (hash !== '#case-study') study.scrollIntoView();
    };
    openLinkedStudy();
    window.addEventListener('hashchange', openLinkedStudy);
    return () => window.removeEventListener('hashchange', openLinkedStudy);
  }, []);
  const visible = projects.filter(project => filter === 'All' || project.category === filter);
  const major = visible.filter(project => project.study);
  const additional = visible.filter(project => !project.study);
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title" tabIndex={-1}>
      <div className="shell">
        <div className="section-head">
          <h2 id="work-title">Selected projects</h2>
          <div className="filters" role="group" aria-label="Filter projects">{filters.map(name =>
            <button type="button" key={name} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>
          )}</div>
        </div>
        <p className="sr-only" role="status">{visible.length} projects shown</p>
        {major.length > 0 && <div className="project-grid">{major.map(project => <ProjectCard key={project.id} project={project} />)}</div>}
        {additional.length > 0 && <div className="additional">
          <h3>More work</h3>
          <div className="extra-grid">{additional.map(project =>
            <article className="extra" key={project.id}>
              <h4>{project.title}</h4><p>{project.summary}</p><p className="stack">{project.stack.join(' · ')}</p><ProjectLinks project={project} />
            </article>
          )}</div>
        </div>}
        <section className="case-studies" id="case-study" aria-labelledby="case-title">
          <h3 id="case-title">Project case studies</h3>
          {featured.map(project => <details key={project.id} id={'case-study-' + project.id}>
            <summary>
              <span className="study-title">{project.title}</span>
              <span className="study-challenge">{project.study.challenge}</span>
              <span className="study-toggle" aria-hidden="true" />
            </summary>
            <div className="study-content">
              <dl>
                <div><dt>What I built</dt><dd>{project.study.contribution}</dd></div>
                <div><dt>Result</dt><dd>{project.study.result}</dd></div>
              </dl>
              {project.id === 'mira-flowers' && <ExternalLink href={project.code + '/blob/main/docs/CASE_STUDY.md'} className="case-link">Read the technical breakdown</ExternalLink>}
            </div>
          </details>)}
        </section>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section shell about" aria-labelledby="about-title" tabIndex={-1}>
      <h2 id="about-title">About me</h2>
      <div className="about-copy">
        <p>I'm Givi, a freelance developer based in Georgia. I build sites for small businesses and browser-based tools for tasks like preparing invoices or organizing inventory.</p>
        <p>I like projects with a clear scope and a useful outcome. I test the workflows people rely on and write down how to run and maintain what I build.</p>
        <p>I also directed and play-tested <a href="https://github.com/givi588/pandora-the-forbidden-gift">Pandora: The Forbidden Gift</a>, an original Godot 3D puzzle developed with Codex-assisted implementation and Blender models.</p>
      </div>
      <div id="services" className="services">{services.map(service => <article key={service.title}><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
    </section>
  );
}

function Skills() {
  return <section id="skills" className="section skill-section" aria-labelledby="skills-title" tabIndex={-1}><div className="shell">
    <h2 id="skills-title">Skills &amp; tools</h2>
    <dl className="skill-grid">
      <div><dt>Frontend</dt><dd>HTML, CSS, JavaScript, TypeScript, React</dd></div>
      <div><dt>Automation</dt><dd>Python, CSV validation and reporting</dd></div>
      <div><dt>Development</dt><dd>Git, GitHub, Vite, GitHub Actions, automated tests</dd></div>
      <div><dt>3D game projects</dt><dd>Godot, GDScript, Blender, procedural 3D models</dd></div>
      <div><dt>Implementation</dt><dd>Responsive layouts, keyboard navigation, browser storage, debugging</dd></div>
    </dl>
  </div></section>;
}

function Contact() {
  return <section id="contact" className="section shell" aria-labelledby="contact-title" tabIndex={-1}>
    <div className="contact-panel">
      <div className="contact-intro">
        <h2 id="contact-title">Have a project in mind?</h2>
        <p>Tell me what you want to build or fix. I'm open to websites, frontend improvements, and practical web applications.</p>
      </div>
      <div>
        <div className="actions contact-actions">
          <ExternalLink className="button primary" href={links.linkedin}>Connect on LinkedIn</ExternalLink>
          <ExternalLink className="button secondary" href={links.github}>GitHub profile</ExternalLink>
          <ExternalLink className="button secondary" href={links.inquiry}>Start a project inquiry</ExternalLink>
        </div>
        <p className="contact-note">Connect with me on LinkedIn for professional inquiries. GitHub project inquiries are public.</p>
      </div>
    </div>
  </section>;
}

export default function App() {
  useEffect(() => {
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
  }, []);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}><Hero /><Work /><About /><Skills /><Contact /></main>
    <footer className="shell footer"><span>© {new Date().getFullYear()} Givi</span><a href="#top">Back to top</a></footer>
  </>;
}
