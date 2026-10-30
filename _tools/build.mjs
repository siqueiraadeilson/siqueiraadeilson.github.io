// Gera as páginas estáticas do site. Rode com: node _tools/build.mjs
// Edite _tools/home.html, content.mjs, ui.mjs e projects.mjs; não edite o HTML gerado.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { localizedProjectDetails, localizedProjectMeta, projectLinks, uiTranslations } from './content.mjs';
import { languages, seoUi } from './ui.mjs';
import { projects } from './projects.mjs';

const tools = dirname(fileURLToPath(import.meta.url));
const root = join(tools, '..');
const site = 'https://siqueiraadeilson.github.io';
const today = new Date().toISOString().slice(0, 10);
const person = `${site}/#person`;
const fonts = 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap';
const profiles = ['https://github.com/siqueiraadeilson', 'https://www.linkedin.com/in/siqueiraadeilson/', 'https://modrinth.com/user/adesdot', 'https://www.behance.net/siqueiraadeilson', 'https://www.fiverr.com/sikzgmg'];
const languageKeys = Object.keys(languages);
const projectKeys = Object.keys(projects);

const iconPaths = {
  'arrow-up': '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  'arrow-down-right': '<path d="m7 7 10 10"/><path d="M17 7v10H7"/>',
  'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  'message-circle': '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>',
  'sun-moon': '<path d="M12 2v2"/><path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/><path d="M16 12a4 4 0 0 0-4-4"/><path d="m19 5-1.256 1.256"/><path d="M20 12h2"/>',
  menu: '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
};
const icon = name => `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;

const attr = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const text = value => String(value).replace(/<[^>]+>/g, '');
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const absolute = path => site + path;
const caseUrl = (language, key) => `${languages[language].projects}${projects[key].slug}/`;
const ui = language => ({ ...uiTranslations[language], ...seoUi[language] });

// ---- head compartilhado ----
const head = ({ language, title, description, path, alternates, graph, ogType = 'website', bootScript = '' }) => {
  const t = ui(language);
  const links = languageKeys.map(key => `  <link rel="alternate" hreflang="${languages[key].code}" href="${absolute(alternates[key])}">`).join('\n');
  const ogAlternates = languageKeys.filter(key => key !== language).map(key => `  <meta property="og:locale:alternate" content="${languages[key].og}">`).join('\n');
  return `<!doctype html>
<html lang="${languages[language].code}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${attr(title)}</title>
  <meta name="description" content="${attr(description)}">
  <meta name="author" content="Adeilson Siqueira">
  <link rel="canonical" href="${absolute(path)}">
${links}
  <link rel="alternate" hreflang="x-default" href="${absolute(alternates['pt-BR'])}">
${profiles.map(url => `  <link rel="me" href="${url}">`).join('\n')}
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="google-site-verification" content="iK6BRmXtKDQc3uhSTgmrP05tfrVpTY863lTMtWScFUM" />
  <meta name="theme-color" content="#111313">
  <meta name="color-scheme" content="dark light">
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="Adeilson Siqueira">
  <meta property="og:locale" content="${languages[language].og}">
${ogAlternates}
  <meta property="og:url" content="${absolute(path)}">
  <meta property="og:title" content="${attr(title)}">
  <meta property="og:description" content="${attr(description)}">
  <meta property="og:image" content="${site}/og-cover.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:alt" content="${attr(t.ogAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${attr(title)}">
  <meta name="twitter:description" content="${attr(description)}">
  <meta name="twitter:image" content="${site}/og-cover.png">
  <meta name="twitter:image:alt" content="${attr(t.ogAlt)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${fonts}" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="${fonts}"><style>.page-loader{display:none!important}</style></noscript>
  <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" sizes="16x16 32x32 48x48">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16.png">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="stylesheet" href="/styles.css">${bootScript}
  <script type="application/ld+json">${json({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
`;
};

const languageLinks = (t, hrefs, current) => `<nav class="lang-links" aria-label="${attr(t.language)}">${languageKeys.map(key => `<a href="${hrefs[key]}" hreflang="${languages[key].code}" lang="${languages[key].code}"${key === current ? ' aria-current="true"' : ''}>${languages[key].name}</a>`).join('')}</nav>`;

// ---- home ----
const homeTemplate = readFileSync(join(tools, 'home.html'), 'utf8');
const lookup = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);

const renderCard = (language, key) => {
  const t = ui(language);
  const details = localizedProjectDetails[language][key];
  const url = caseUrl(language, key);
  const meta = localizedProjectMeta[language][key].map(item => `<span>${item}</span>`).join('');
  return `<div class="project-info"><div><span class="project-type">${details.label}</span><h3><a href="${url}">${details.title}</a></h3><p>${details.text}</p></div><div class="project-meta">${meta}</div><a class="details-button" href="${url}">${t.viewStudy}<span class="sr-only"> — ${details.title}</span> ${icon('arrow-up-right')}</a></div>`;
};

const renderFaq = t => `<section class="faq section-wrap" id="faq"><div class="section-heading"><div><span class="eyebrow">${t.faqEyebrow}</span><h2>${t.faqTitle}</h2></div><p>${t.faqText}</p></div><div class="faq-list">${t.faq.map(([question, answer], index) => `<details${index === 0 ? ' open' : ''}><summary><h3>${question}</h3></summary><p>${answer}</p></details>`).join('')}</div></section>`;

const languagePicker = (language, t, hrefs) => `<label class="language-picker" for="language-select"><span class="sr-only">${t.language}</span><span class="language-label" aria-hidden="true">${t.language}</span><span class="fi fi-${languages[language].flag} language-flag" aria-hidden="true"></span><select id="language-select" aria-label="${t.language}">${languageKeys.map(key => `<option value="${key}" data-href="${hrefs[key]}"${key === language ? ' selected' : ''}>${languages[key].short}</option>`).join('')}</select></label>`;

const fill = (template, language, hrefs) => {
  const t = ui(language);
  const tokens = {
    faq: renderFaq(t),
    languagePicker: languagePicker(language, t, hrefs),
    languageLinks: languageLinks(t, hrefs, language)
  };
  return template.replace(/\{\{([^}]+)\}\}/g, (match, token) => {
    if (token.startsWith('icon:')) return icon(token.slice(5));
    if (token.startsWith('card:')) return renderCard(language, token.slice(5));
    if (tokens[token] !== undefined) return tokens[token];
    const value = lookup(t, token);
    if (typeof value !== 'string') throw new Error(`Texto ausente: ${token} (${language})`);
    return value;
  });
};

const homeGraph = (language, t) => {
  const home = languages[language].home;
  const code = languages[language].code;
  return [
    { '@type': 'WebSite', '@id': `${site}/#website`, url: `${site}/`, name: 'Adeilson Siqueira', alternateName: 'Portfólio de Adeilson Siqueira', inLanguage: languageKeys.map(key => languages[key].code), publisher: { '@id': person } },
    { '@type': 'ProfilePage', '@id': `${absolute(home)}#webpage`, url: absolute(home), name: t.seoTitle, description: t.seoDesc, inLanguage: code, dateModified: today, isPartOf: { '@id': `${site}/#website` }, mainEntity: { '@id': person }, about: { '@id': person } },
    {
      '@type': 'Person', '@id': person, name: 'Adeilson Siqueira', alternateName: ['Adeilson', 'adesdot', 'siqueiraadeilson'], url: `${site}/`, image: `${site}/assets/adeilson-siqueira.webp`,
      jobTitle: t.jobTitle, description: t.personDesc, email: 'mailto:siqueiraadeilson@gmail.com',
      address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
      knowsAbout: ['Desenvolvimento web', 'Desenvolvimento full stack', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'Electron', 'Vite', 'WebRTC', 'Gun.js', 'Engenharia de produto', 'Software aberto', 'Minecraft modding', 'Fabric', 'Roblox', 'Lua', 'Luau'],
      knowsLanguage: languageKeys.map(key => languages[key].code), sameAs: profiles
    },
    { '@type': 'Organization', '@id': 'https://squood.com/#organization', name: 'Squood', url: 'https://squood.com', founder: { '@id': person } },
    { '@type': 'ItemList', '@id': `${absolute(home)}#projects`, name: t.workEyebrow.replace(/^\d+ \/ /, ''), numberOfItems: projectKeys.length, itemListElement: projectKeys.map((key, index) => ({ '@type': 'ListItem', position: index + 1, name: localizedProjectDetails[language][key].title, url: absolute(caseUrl(language, key)) })) },
    { '@type': 'FAQPage', '@id': `${absolute(home)}#faq`, inLanguage: code, mainEntity: t.faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: text(answer) } })) }
  ];
};

// Lê os estudos no idioma da página: o modal usa estes dados sem carregar as outras traduções.
const pageData = language => {
  const t = ui(language);
  const details = {};
  for (const key of projectKeys) details[key] = { ...localizedProjectDetails[language][key], link: projectLinks[key], caseUrl: caseUrl(language, key) };
  return { details, labels: { openProject: t.openProject, readCase: t.readCase, openMenu: t.openMenu, closeMenu: t.closeMenu }, icons: { menu: icon('menu'), x: icon('x'), arrow: icon('arrow-up-right') } };
};

// Sem flash do loader em visitas repetidas; só a home raiz respeita o idioma salvo.
const bootScript = language => `\n  <script>try{if(sessionStorage.getItem('as-intro'))document.documentElement.classList.add('no-intro');${language === 'pt-BR' ? "var l=localStorage.getItem('portfolio-language');if(l==='en'||l==='es')location.replace('/'+l+'/')" : ''}}catch(e){}</script>`;

const renderHome = language => {
  const t = ui(language);
  const hrefs = Object.fromEntries(languageKeys.map(key => [key, languages[key].home]));
  const page = head({ language, title: t.seoTitle, description: t.seoDesc, path: languages[language].home, alternates: hrefs, graph: homeGraph(language, t), bootScript: bootScript(language) });
  return `${page}<body>
${fill(homeTemplate, language, hrefs)}  <script type="application/json" id="page-data">${json(pageData(language))}</script>
  <script src="/script.js" defer></script>
</body>
</html>
`;
};

// ---- páginas de projeto ----
const visualOf = key => {
  const match = homeTemplate.match(new RegExp(`data-project="${key}">\\s*<div class="project-index">\\d+</div>(.*)\\n`));
  if (!match) throw new Error(`Visual não encontrado: ${key}`);
  return match[1];
};

const renderSection = section => {
  const parts = [`<h2>${section.h}</h2>`];
  if (section.p) parts.push(`<p>${section.p}</p>`);
  if (section.list) parts.push(`<ul class="case-list">${section.list.map(item => `<li>${item}</li>`).join('')}</ul>`);
  if (section.steps) parts.push(`<ol class="case-steps">${section.steps.map(item => `<li>${item}</li>`).join('')}</ol>`);
  if (section.code) parts.push(`<dl class="case-code">${section.code.map(([command, description]) => `<dt><code>${command}</code></dt><dd>${description}</dd>`).join('')}</dl>`);
  if (section.table) parts.push(`<div class="case-table"><table><thead><tr>${section.table.head.map(cell => `<th scope="col">${cell}</th>`).join('')}</tr></thead><tbody>${section.table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
  return `<section class="case-section">${parts.join('')}</section>`;
};

const projectGraph = (language, key, t, content, details) => {
  const url = absolute(caseUrl(language, key));
  const code = languages[language].code;
  return [
    { '@type': 'Person', '@id': person, name: 'Adeilson Siqueira', url: `${site}/`, image: `${site}/assets/adeilson-siqueira.webp`, sameAs: profiles },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: content.seoTitle, description: content.seoDesc, inLanguage: code, dateModified: today, isPartOf: { '@id': `${site}/#website` }, about: { '@id': `${url}#project` }, author: { '@id': person }, breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [{ '@type': 'ListItem', position: 1, name: t.home, item: absolute(languages[language].home) }, { '@type': 'ListItem', position: 2, name: t.projects, item: `${absolute(languages[language].home)}#work` }, { '@type': 'ListItem', position: 3, name: details.title, item: url }] },
    { ...projects[key].schema, '@id': `${url}#project`, name: details.title, description: content.seoDesc, inLanguage: code, author: { '@id': person } }
  ];
};

const renderProject = (language, key) => {
  const t = ui(language);
  const project = projects[key];
  const content = project[language];
  const details = localizedProjectDetails[language][key];
  const home = languages[language].home;
  const path = caseUrl(language, key);
  const hrefs = Object.fromEntries(languageKeys.map(lang => [lang, caseUrl(lang, key)]));
  const page = head({ language, title: content.seoTitle, description: content.seoDesc, path, alternates: hrefs, graph: projectGraph(language, key, t, content, details), ogType: 'article' });
  const related = project.related.map(relatedKey => {
    const item = localizedProjectDetails[language][relatedKey];
    return `<a href="${caseUrl(language, relatedKey)}"><span>${item.label}</span><strong>${item.title}</strong></a>`;
  }).join('');
  const body = `<body class="case-page">
  <a class="skip-link" href="#conteudo">${t.skip}</a>
  <header class="site-header case-header">
    <a class="brand" href="${home}" aria-label="${attr(t.backHome)}"><span>AS</span><small>adeilson<br>siqueira</small></a>
    <nav class="case-nav" aria-label="${attr(t.mainNav)}"><a href="${home}#work">${t.projects}</a><a href="${home}#contact">${t.nav[2]}</a></nav>
    <div class="header-actions">${languagePicker(language, t, hrefs)}<button class="icon-button" id="theme-toggle" aria-label="${attr(t.theme)}" title="${attr(t.theme)}">${icon('sun-moon')}</button></div>
  </header>
  <main class="case section-wrap" id="conteudo">
    <nav class="breadcrumb" aria-label="${attr(t.breadcrumb)}"><ol><li><a href="${home}">${t.home}</a></li><li><a href="${home}#work">${t.projects}</a></li><li aria-current="page">${details.title}</li></ol></nav>
    <div class="case-hero">
      <div><span class="eyebrow">${details.label}</span><h1>${content.h1}</h1><p class="case-lead">${details.text}</p><a class="text-link" href="${projectLinks[key]}" target="_blank" rel="noopener">${t.openProject} ${icon('arrow-up-right')}</a></div>
      ${fill(visualOf(key), language, hrefs)}
    </div>
    <section class="case-section"><h2>${t.facts}</h2><dl class="case-facts">${content.facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl></section>
    <section class="case-section"><h2>${t.highlights}</h2><ul class="case-list">${details.points.map(point => `<li>${point}</li>`).join('')}</ul></section>
    ${content.sections.map(renderSection).join('\n    ')}
    <section class="case-section"><h2>${t.related}</h2><div class="case-related">${related}</div><a class="text-link" href="${home}#work">${t.allProjects} ${icon('arrow-up-right')}</a></section>
    <section class="case-cta"><h2>${t.caseCta}</h2><p>${t.caseCtaText}</p><a class="contact-email" href="mailto:siqueiraadeilson@gmail.com">siqueiraadeilson@gmail.com ${icon('arrow-up-right')}</a></section>
  </main>
  <footer class="case-footer section-wrap"><p>${t.madeBy}</p>${languageLinks(t, hrefs, language)}<span>© 2026 AS</span></footer>
  <script src="/script.js" defer></script>
</body>
</html>
`;
  return page + body;
};

// ---- saída ----
const output = (path, content) => {
  const file = join(root, path.endsWith('/') ? `${path}index.html` : path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

const pages = [];
for (const language of languageKeys) {
  output(languages[language].home, renderHome(language));
  pages.push({ path: languages[language].home, alternates: Object.fromEntries(languageKeys.map(key => [key, languages[key].home])) });
  for (const key of projectKeys) {
    output(caseUrl(language, key), renderProject(language, key));
    pages.push({ path: caseUrl(language, key), alternates: Object.fromEntries(languageKeys.map(lang => [lang, caseUrl(lang, key)])) });
  }
}

output('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${absolute(page.path)}</loc>
    <lastmod>${today}</lastmod>
${languageKeys.map(key => `    <xhtml:link rel="alternate" hreflang="${languages[key].code}" href="${absolute(page.alternates[key])}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(page.alternates['pt-BR'])}"/>
  </url>`).join('\n')}
</urlset>
`);

// Limites de exibição nas buscas: avisa sem interromper o build.
for (const language of languageKeys) {
  const entries = [[ui(language).seoTitle, ui(language).seoDesc], ...projectKeys.map(key => [projects[key][language].seoTitle, projects[key][language].seoDesc])];
  for (const [title, description] of entries) {
    if (title.length > 60) console.warn(`Título longo (${title.length}): ${title}`);
    if (description.length > 165) console.warn(`Descrição longa (${description.length}): ${description}`);
  }
}
console.log(`${pages.length} páginas geradas.`);
