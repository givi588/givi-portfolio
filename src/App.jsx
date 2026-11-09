import { useEffect, useMemo, useState } from 'react';
import { links, projects, services } from './siteData.js';

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Givi, back to top">
      <span className="brand-mark">g<span className="brand-point">.</span></span>
      <span className="brand-label">Givi <small>WEB DEVELOPER</small></span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button className="mobile-toggle" type="button" aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((current) => !current)}>
          <span /> <span /> <span />
        </button>
        <nav className={'site-nav ' + (open ? 'nav-open' : '')} id="main-nav" aria-label="Main navigation">
          <a onClick={close} href="#work">Work</a>
          <a onClick={close} href="#services">Services</a>
          <a onClick={close} href="#about">About</a>
          <a onClick={close} className="nav-contact" href="#contact">Let's talk <Arrow diagonal /></a>
        </nav>
      </div>
    </header>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-visual" aria-label="Illustrative dashboard interface, not a screenshot of a client product" role="img">
      <div className="hero-visual-glow" />
      <div className="mock-app">
        <div className="mock-topbar"><span className="mock-logo">workspace<span>.</span></span><span className="mock-ellipsis">•••</span></div>
        <div className="mock-greeting">Your work, at a glance<span className="mock-dot">●</span></div>
        <div className="mock-sub">A simple overview of what matters.</div>
        <div className="mock-tiles">
          <div className="mock-tile"><span>Active items</span><b>24</b><i>THIS WEEK</i></div>
          <div className="mock-tile dark-tile"><span>Completed</span><b>18</b><i>ON TRACK ↗</i></div>
        </div>
        <div className="mock-chart">
          <div className="mock-chart-heading"><span>Activity overview</span><span>7 days</span></div>
          <div className="mock-bars">{[34, 62, 44, 78, 54, 90, 68].map((h, i) => <div className="mock-bar-slot" key={i}><span style={{ height: h + '%' }} /></div>)}</div>
          <div className="mock-chart-footer">M <span>T</span> W <span>T</span> F <span>S</span> S</div>
        </div>
      </div>
      <div className="visual-sticker">DESIGNED TO BE<br /><strong>USEFUL.</strong></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> INDEPENDENT WEB DEVELOPER <span className="eyebrow-line" /></div>
        <h1 id="hero-title">Building digital<br />things that <em>make</em><br /><em>work easier.</em></h1>
        <p>I create clean websites, practical React apps, and small automation tools for real-world problems. Thoughtful details. Straightforward solutions.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">Explore my work <Arrow diagonal /></a>
          <a className="button button-text" href={links.inquiry} target="_blank" rel="noopener noreferrer">Discuss a project <Arrow diagonal /></a>
        </div>
        <div className="hero-bottom"><span className="availability-dot" /> Interested in small, well-defined projects <span className="hero-spark">✳</span></div>
      </div>
      <HeroIllustration />
    </section>
  );
}

function Marquee() {
  return <div className="capabilities"><div className="container capabilities-inner"><span>WHAT I WORK WITH</span><strong>React</strong><span className="cap-divider"/><strong>JavaScript</strong><span className="cap-divider"/><strong>Python</strong><span className="cap-divider"/><strong>HTML & CSS</strong></div></div>;
}

function ProjectArt({ art }) {
  if (art === 'flowers') return (
    <div className="art art-flowers" aria-hidden="true">
      <div className="art-browser"><div className="art-browser-top"><span className="browser-dots">● ● ●</span><b>MIRA <em>flowers</em></b><span>MENU ☰</span></div><div className="flower-content"><div className="flower-copy"><span>FLOWERS FOR EVERY MOMENT</span><strong>A little beauty,<br />every day.</strong><i>Explore the collection ↗</i></div><div className="flower-bouquet"><span className="flower-circle c1"/><span className="flower-circle c2"/><span className="flower-circle c3"/><span className="flower-circle c4"/><span className="flower-circle c5"/><span className="flower-stem" /></div></div></div>
    </div>
  );
  if (art === 'categories') return (
    <div className="art art-categories" aria-hidden="true">
      <div className="category-window"><div className="cat-head"><b>Category dashboard</b><span>OVERVIEW</span></div><div className="cat-kpis"><div><span>Categories</span><strong>12</strong></div><div><span>Total items</span><strong>284</strong></div><div><span>Largest</span><strong>74</strong></div></div><div className="cat-table"><div className="cat-title">Items by category</div>{[82,62,88,45].map((width,i)=><div className="cat-row" key={i}><span className="cat-rect"/><span className="cat-graph"><i style={{width:width + '%'}}/></span></div>)}</div></div>
    </div>
  );
  if (art === 'inventory') return (
    <div className="art art-inventory" aria-hidden="true">
      <div className="inventory-window"><div className="inv-head"><div><span>OPERATIONS / OVERVIEW</span><b>Inventory health</b></div><span className="inv-live">LIVE VIEW</span></div><div className="inv-stat"><div><small>Available stock</small><strong>1,240</strong></div><div><small>Low stock alerts</small><strong>08</strong></div></div><div className="inv-table"><div><span>PRODUCT</span><span>STOCK</span><span>STATUS</span></div><div><span>Product A</span><span>128</span><i>Healthy</i></div><div><span>Product B</span><span>6</span><i className="inv-warning">Low stock</i></div></div></div>
    </div>
  );
  return (
    <div className="art art-react" aria-hidden="true"><div className="task-window"><div className="task-head"><div><span>YOUR SPACE</span><strong>Make today count.</strong></div><div className="task-icon">✓</div></div><div className="task-tabs"><span>All tasks</span><span>In progress</span><span>Done</span></div><div className="task-lines"><div><i className="task-check"/><b>Review dashboard layout</b><span>HIGH</span></div><div><i className="task-check active"/><b>Test responsive views</b><span>MEDIUM</span></div><div><i className="task-check"/><b>Update documentation</b><span>LOW</span></div></div><div className="task-progress"><span>Today's progress</span><div><i/></div></div></div></div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className={'project-card ' + (index === 0 ? 'project-card-wide' : '')}>
      <ProjectArt art={project.art} />
      <div className="project-info">
        <div className="project-overline"><span>{project.number} / {project.label}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-bottom"><div className="tags">{project.stack.map((name) => <span key={name}>{name}</span>)}</div><div className="project-links"><a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={'Live demo: ' + project.title}>Live <Arrow diagonal /></a><a href={project.code} target="_blank" rel="noopener noreferrer" aria-label={'Source code: ' + project.title}>Code <Arrow diagonal /></a></div></div>
      </div>
    </article>
  );
}

function Work() {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter]);
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading"><div><div className="kicker"><span>01</span> / SELECTED WORK</div><h2 id="work-title">Useful things, <em>beautifully built.</em></h2></div><p>Every project starts with a problem worth solving. Here are a few practical things I've made.</p></div>
        <div className="filter-row" role="group" aria-label="Filter projects">{['All', 'Websites', 'Dashboards'].map((name) => <button key={name} className={'filter-chip ' + (filter === name ? 'filter-active' : '')} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}{name === 'All' ? ' (' + projects.length + ')' : ''}</button>)}</div>
        <div className="project-grid">{visible.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        <p className="work-footnote">The interface previews above are stylized illustrations. Use the live links to see the actual applications.</p>
        <a className="all-repos" href={links.github} target="_blank" rel="noopener noreferrer">More projects on GitHub <Arrow diagonal /></a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title"><div className="container"><div className="section-heading service-title"><div><div className="kicker"><span>02</span> / WHAT I DO</div><h2 id="services-title">The right tool for<br /><em>the right problem.</em></h2></div><p>Small, clearly scoped projects built with simplicity, usefulness and maintainability in mind.</p></div><div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-number">{service.number} <span>↗</span></div><h3>{service.title}</h3><p>{service.description}</p><div>{service.detail}</div></article>)}</div></div></section>
  );
}

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title"><div className="container about-grid"><div className="about-symbol" aria-hidden="true"><span>g.</span><small>DESIGN · BUILD · IMPROVE</small></div><div className="about-copy"><div className="kicker"><span>03</span> / A LITTLE ABOUT ME</div><h2 id="about-title">Curiosity meets <em>craft.</em></h2><p>I'm Givi, a developer focused on practical websites, dashboards, and business automation. I like clean interfaces, clear documentation, and solutions that are easy to use.</p><p>My work spans React and vanilla JavaScript frontends, as well as Python scripts for everyday workflows. I keep scope and limitations transparent, and I test what I build.</p><a className="about-link" href={links.github} target="_blank" rel="noopener noreferrer">Find me on GitHub <Arrow diagonal /></a></div></div></section>
  );
}

function Contact() {
  return <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-content"><div className="kicker"><span>04</span> / LET'S CONNECT</div><h2 id="contact-title">Have something<br /><em>in mind?</em></h2><p>Tell me what you're building or what needs fixing. We can discuss the scope, expectations, and next steps.</p><div className="contact-links"><a className="button button-lime" href={links.inquiry} target="_blank" rel="noopener noreferrer">Start a project inquiry <Arrow diagonal /></a><a className="button button-outline" href={links.fiverr} target="_blank" rel="noopener noreferrer">Fiverr service <Arrow diagonal /></a></div><div className="contact-note">GitHub inquiries are public — please don't include private information or credentials.</div></div><div className="contact-decoration" aria-hidden="true">g.</div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><Brand /><span>© {new Date().getFullYear()} Givi. Built with React, care & coffee.</span><div><a href="#top">Back to top ↑</a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div></footer>;
}

export default function App() {
  return <><a href="#main" className="skip-link">Skip to content</a><div id="top"><Header /><main id="main"><Hero /><Marquee /><Work /><Services /><About /><Contact /></main><Footer /></div></>;
}
