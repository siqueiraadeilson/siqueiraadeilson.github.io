const projectDetails = {
  squood: { label: 'PRODUTO DIGITAL / 2026', title: 'Squood', text: 'Uma plataforma social focada em comunidades e construída com privacidade como princípio. Como fundador e engenheiro de produto, Adeilson participa das decisões que vão da arquitetura à experiência.', points: ['Privacidade real: sem rastreamento invasivo ou venda de informações', 'Comunidades com regras claras e moderação transparente', 'Produto em fase de refinamento e estabilização, guiado por feedback real'] },
  gamium: { label: 'APLICAÇÃO DESKTOP / OPEN SOURCE', title: 'Gamium', text: 'Um app de comunicação descentralizada, criptografada e P2P. O projeto combina Electron, React, TypeScript, Vite, Gun.js, WebRTC e Zustand para reimaginar chat, voz e comunidades sem servidor central.', points: ['DMs com criptografia ECDH, servidores, grupos, voz e compartilhamento de tela', 'Identidade por chaves públicas e recuperação com frase BIP39 de 12 palavras', 'Atualizações automáticas e distribuição para Windows, Linux e macOS'] },
  mods: { label: 'MINECRAFT MOD / FABRIC', title: 'Auto Best Enchantments', text: 'Uma automação focada em um momento conhecido por todo jogador de Minecraft: repetir o ciclo do bibliotecário até encontrar o livro e o preço ideais.', points: ['Metas por encantamento, nível e faixa de preço via comando /autolec', 'Modos de auto trade, logs de chat, pre-break e preservação de ferramenta', 'Mais de 1,8 mil downloads e experiência client-side'] },
  librarian: { label: 'MINECRAFT MOD / FABRIC', title: 'Librarian Books Preview', text: 'Um mod pequeno e preciso: mirar no bibliotecário já revela até três trocas de livros encantados, com nome localizado e custo exato em esmeraldas.', points: ['Overlay em tempo real sem abrir a interface de comércio', 'Compatível com Fabric, Fabric API e ambientes client-side e server-side', 'Mais de 1,7 mil downloads e licença MIT'] },
  scripts: { label: 'FERRAMENTAS / WINDOWS', title: 'some-windows-scripts', text: 'Uma coleção de scripts Batch autocontidos para problemas pontuais do Windows. A proposta é quase anti-produto: sem instalação, sem dependências, só baixar e executar.', points: ['13 scripts para rede, áudio, relógio, impressão, updates, disco e arquivos temporários', 'Indicação clara de quais rotinas precisam de administrador', 'Windows 10+, MIT License e documentação com contexto para cada reparo'] }
};

const localizedProjectDetails = {
  'pt-BR': projectDetails,
  en: {
    squood: { label: 'DIGITAL PRODUCT / 2026', title: 'Squood', text: 'A social platform centered on communities and built with privacy as a principle. As founder and product engineer, Adeilson works across architecture and experience.', points: ['Real privacy: no invasive tracking or sale of personal information', 'Communities with clear rules and transparent moderation', 'A product being refined and stabilized through real feedback'] },
    gamium: { label: 'DESKTOP APP / OPEN SOURCE', title: 'Gamium', text: 'A decentralized, encrypted P2P communication app. The project combines Electron, React, TypeScript, Vite, Gun.js, WebRTC, and Zustand to rethink chat, voice, and communities without a central server.', points: ['Encrypted DMs, servers, groups, voice, and screen sharing', 'Public-key identity and recovery through a 12-word BIP39 phrase', 'Automatic updates for Windows, Linux, and macOS'] },
    mods: { label: 'MINECRAFT MOD / FABRIC', title: 'Auto Best Enchantments', text: 'Automation for a familiar Minecraft loop: repeat the librarian cycle until the ideal book and price appear.', points: ['Targets enchantment, level, and price range through /autolec', 'Auto trade, chat logs, pre-break, and tool preservation modes', 'More than 1.8k downloads and a client-side experience'] },
    librarian: { label: 'MINECRAFT MOD / FABRIC', title: 'Librarian Books Preview', text: 'A small, precise mod: aim at a librarian and instantly see up to three enchanted book trades, with localized names and exact emerald costs.', points: ['Real-time overlay without opening the trading interface', 'Compatible with Fabric, Fabric API, and client/server environments', 'More than 1.7k downloads and MIT licensed'] },
    scripts: { label: 'TOOLS / WINDOWS', title: 'some-windows-scripts', text: 'A collection of self-contained Batch scripts for focused Windows problems. Almost anti-product: no installation, no dependencies, just download and run.', points: ['13 scripts for network, audio, clock, printing, updates, disk, and temporary files', 'Clear indication of routines that need administrator access', 'Windows 10+, MIT License, and context for every repair'] }
  },
  es: {
    squood: { label: 'PRODUCTO DIGITAL / 2026', title: 'Squood', text: 'Una plataforma social centrada en comunidades y construida con la privacidad como principio. Como fundador e ingeniero de producto, Adeilson participa desde la arquitectura hasta la experiencia.', points: ['Privacidad real: sin rastreo invasivo ni venta de información personal', 'Comunidades con reglas claras y moderación transparente', 'Producto refinado y estabilizado a partir de comentarios reales'] },
    gamium: { label: 'APLICACIÓN DE ESCRITORIO / OPEN SOURCE', title: 'Gamium', text: 'Una app de comunicación descentralizada, cifrada y P2P. Combina Electron, React, TypeScript, Vite, Gun.js, WebRTC y Zustand para repensar el chat, la voz y las comunidades sin un servidor central.', points: ['DMs cifrados, servidores, grupos, voz y compartir pantalla', 'Identidad con claves públicas y recuperación mediante frase BIP39 de 12 palabras', 'Actualizaciones automáticas para Windows, Linux y macOS'] },
    mods: { label: 'MOD DE MINECRAFT / FABRIC', title: 'Auto Best Enchantments', text: 'Automatiza un ciclo conocido de Minecraft: repetir el proceso del bibliotecario hasta encontrar el libro y precio ideales.', points: ['Objetivos de encantamiento, nivel y precio mediante /autolec', 'Modos de auto trade, registros de chat, pre-break y protección de herramientas', 'Más de 1,8 K descargas y experiencia client-side'] },
    librarian: { label: 'MOD DE MINECRAFT / FABRIC', title: 'Librarian Books Preview', text: 'Un mod pequeño y preciso: apunta al bibliotecario para ver hasta tres intercambios de libros encantados, con nombres localizados y coste exacto en esmeraldas.', points: ['Overlay en tiempo real sin abrir la interfaz de comercio', 'Compatible con Fabric, Fabric API y entornos client/server', 'Más de 1,7 K descargas y licencia MIT'] },
    scripts: { label: 'HERRAMIENTAS / WINDOWS', title: 'some-windows-scripts', text: 'Una colección de scripts Batch autocontenidos para problemas concretos de Windows. Casi anti-producto: sin instalación ni dependencias, solo descargar y ejecutar.', points: ['13 scripts para red, audio, reloj, impresión, actualizaciones, disco y temporales', 'Indicación clara de las rutinas que requieren administrador', 'Windows 10+, licencia MIT y contexto para cada reparación'] }
  }
};

const projectLinks = {
  squood: 'https://squood.com',
  gamium: 'https://github.com/adessuquinho/gamium',
  mods: 'https://modrinth.com/mod/auto-best-enchantments',
  librarian: 'https://modrinth.com/mod/librarian-books-preview',
  scripts: 'https://github.com/adessuquinho/some-windows-scripts'
};

const uiTranslations = {
  'pt-BR': { lang: 'pt-BR', nav: ['Projetos <sup>05</sup>', 'Abordagem', 'Contato'], available: 'disponível para conversar', heroKicker: 'BRASIL ↗ MUNDO', intro: 'Engenharia de produto com curiosidade técnica.', title: 'Construo coisas<br><em>úteis</em> para a<br>vida digital.', heroText: 'Sou Adeilson, engenheiro de produto. Gosto de atravessar a ponte entre sistemas complexos e experiências que parecem simples.', explore: 'Explorar projetos', data: ['produto digital', 'software aberto', 'sistemas humanos'], footnote: ['ATENÇÃO AO DETALHE', 'IDEIA → SISTEMA → EXPERIÊNCIA'], scroll: 'deslize para ver o trabalho', workEyebrow: '01 / PROJETOS SELECIONADOS', workTitle: 'Coisas que<br><em>ganharam forma.</em>', workText: 'Uma seleção de produtos e ferramentas feitos com intenção: alguns para muita gente, outros para resolver uma terça-feira específica.', filters: ['Tudo', 'Produto', 'Open source'], approachEyebrow: '02 / COMO EU PENSO', approachTitle: 'O detalhe também<br><em>é produto.</em>', approachText: 'Projetar é tomar decisões. Meu trabalho acontece onde tecnologia, contexto e cuidado se encontram.', principles: [['Começar pela pergunta certa.', 'Antes da solução, entender o problema e para quem ele realmente importa.'], ['Diminuir a distância.', 'Sistemas robustos por baixo, interfaces honestas por cima. Complexidade não precisa vazar.'], ['Deixar espaço para evoluir.', 'Construir em ciclos curtos, ouvir o uso real e melhorar sem apego ao primeiro rascunho.']], ledger: ['UM SISTEMA DE TRABALHO', ['curiosidade', 'clareza', 'cuidado', 'entrega'], 'Da primeira pergunta ao produto em uso, cada etapa precisa diminuir a distância entre intenção e experiência.'], contactEyebrow: '03 / VAMOS CONVERSAR', contactTitle: 'Tem uma ideia<br>em <em>movimento?</em>', contactNote: 'Projetos digitais, ferramentas úteis e conversas que ainda estão procurando forma.', status: ['DISPONÍVEL PARA NOVOS PROJETOS', 'respondo em até 48h', 'BRASIL ↗ REMOTO'] },
  en: { lang: 'en', nav: ['Projects <sup>05</sup>', 'Approach', 'Contact'], available: 'available for a conversation', heroKicker: 'BRAZIL ↗ WORLD', intro: 'Product engineering with technical curiosity.', title: 'I build things<br><em>useful</em> for<br>digital life.', heroText: 'I am Adeilson, a product engineer. I like crossing the bridge between complex systems and experiences that feel simple.', explore: 'Explore projects', data: ['digital product', 'open software', 'human systems'], footnote: ['ATTENTION TO DETAIL', 'IDEA → SYSTEM → EXPERIENCE'], scroll: 'scroll to see the work', workEyebrow: '01 / SELECTED PROJECTS', workTitle: 'Things that<br><em>took shape.</em>', workText: 'A selection of products and tools made with intention: some for many people, others to solve a very specific Tuesday.', filters: ['All', 'Product', 'Open source'], approachEyebrow: '02 / HOW I THINK', approachTitle: 'Detail is also<br><em>product.</em>', approachText: 'Design is decision-making. My work happens where technology, context, and care meet.', principles: [['Start with the right question.', 'Before the solution, understand the problem and who it truly matters to.'], ['Shorten the distance.', 'Robust systems underneath, honest interfaces on top. Complexity does not need to leak.'], ['Leave room to evolve.', 'Build in short cycles, listen to real use, and improve without attachment to the first draft.']], ledger: ['A WORKING SYSTEM', ['curiosity', 'clarity', 'care', 'delivery'], 'From the first question to a product in use, every step should reduce the distance between intention and experience.'], contactEyebrow: '03 / LET’S TALK', contactTitle: 'Have an idea<br>in <em>motion?</em>', contactNote: 'Digital projects, useful tools, and conversations still looking for shape.', status: ['AVAILABLE FOR NEW PROJECTS', 'replying within 48h', 'BRAZIL ↗ REMOTE'] },
  es: { lang: 'es', nav: ['Proyectos <sup>05</sup>', 'Enfoque', 'Contacto'], available: 'disponible para conversar', heroKicker: 'BRASIL ↗ MUNDO', intro: 'Ingeniería de producto con curiosidad técnica.', title: 'Construyo cosas<br><em>útiles</em> para la<br>vida digital.', heroText: 'Soy Adeilson, ingeniero de producto. Me gusta cruzar el puente entre sistemas complejos y experiencias que parecen simples.', explore: 'Explorar proyectos', data: ['producto digital', 'software abierto', 'sistemas humanos'], footnote: ['ATENCIÓN AL DETALLE', 'IDEA → SISTEMA → EXPERIÊNCIA'], scroll: 'desliza para ver el trabajo', workEyebrow: '01 / PROYECTOS SELECCIONADOS', workTitle: 'Cosas que<br><em>tomaron forma.</em>', workText: 'Una selección de productos y herramientas hechos con intención: algunos para muchas personas, otros para resolver un martes específico.', filters: ['Todo', 'Producto', 'Open source'], approachEyebrow: '02 / CÓMO PIENSO', approachTitle: 'El detalle también<br><em>es producto.</em>', approachText: 'Diseñar es tomar decisiones. Mi trabajo ocurre donde se encuentran tecnología, contexto y cuidado.', principles: [['Empezar por la pregunta correcta.', 'Antes de la solución, entender el problema y a quién realmente le importa.'], ['Acortar la distancia.', 'Sistemas robustos por debajo, interfaces honestas por encima. La complejidad no tiene que filtrarse.'], ['Dejar espacio para evolucionar.', 'Construir en ciclos cortos, escuchar el uso real y mejorar sin apego al primer borrador.']], ledger: ['UN SISTEMA DE TRABAJO', ['curiosidad', 'claridad', 'cuidado', 'entrega'], 'Desde la primera pregunta hasta el producto en uso, cada etapa debe reducir la distancia entre intención y experiencia.'], contactEyebrow: '03 / HABLEMOS', contactTitle: '¿Tienes una idea<br>en <em>movimiento?</em>', contactNote: 'Proyectos digitales, herramientas útiles y conversaciones que todavía buscan forma.', status: ['DISPONIBLE PARA NUEVOS PROYECTOS', 'respondo en 48 h', 'BRASIL ↗ REMOTO'] }
};
uiTranslations.es.footnote[1] = 'IDEA → SISTEMA → EXPERIENCIA';

let currentLanguage = localStorage.getItem('portfolio-language') || 'pt-BR';
const setText = (selector, value) => { const element = document.querySelector(selector); if (element) element.innerHTML = value; };
const backToTop = document.querySelector('#back-to-top');
const updateBackToTop = () => backToTop?.classList.toggle('is-visible', window.scrollY > 520);
window.addEventListener('scroll', updateBackToTop, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
updateBackToTop();
const setLanguage = language => {
  currentLanguage = uiTranslations[language] ? language : 'pt-BR';
  const t = uiTranslations[currentLanguage];
  document.documentElement.lang = t.lang;
  document.querySelector('#language-select').value = currentLanguage;
  document.querySelector('.language-flag').className = `fi fi-${currentLanguage === 'en' ? 'us' : currentLanguage === 'es' ? 'es' : 'br'} language-flag`;
  document.querySelectorAll('.nav-links a').forEach((link, index) => { link.innerHTML = t.nav[index]; });
  const whatsappLabel = currentLanguage === 'en' ? 'via WhatsApp' : currentLanguage === 'es' ? 'por WhatsApp' : 'pelo WhatsApp';
  setText('.available', `<i data-lucide="message-circle" aria-hidden="true"></i> ${t.available} <span class="sr-only">${whatsappLabel}</span>`); setText('.hero-kicker span:last-child', t.heroKicker); setText('.intro-label', t.intro); setText('.hero h1', t.title); setText('.hero-text', t.heroText); setText('.text-link', `${t.explore} <i data-lucide="arrow-down-right"></i>`); setText('.scroll-cue span', t.scroll);
  document.querySelectorAll('.hero-data span').forEach((element, index) => { element.innerHTML = `<b>0${index + 1}</b> ${t.data[index]}`; }); document.querySelectorAll('.hero-footnote span').forEach((element, index) => { if (index !== 1) element.textContent = t.footnote[index === 0 ? 0 : 1]; });
  setText('.section-heading .eyebrow', t.workEyebrow); setText('.work .section-heading h2', t.workTitle); setText('.work .section-heading > p', t.workText); document.querySelectorAll('.filter').forEach((element, index) => { element.childNodes[0].textContent = `${t.filters[index]} `; });
  setText('.approach .section-heading .eyebrow', t.approachEyebrow); setText('.approach .section-heading h2', t.approachTitle); setText('.approach .section-heading > p', t.approachText); document.querySelectorAll('.principles > div').forEach((element, index) => { element.querySelector('h3').textContent = t.principles[index][0]; element.querySelector('p').textContent = t.principles[index][1]; });
  setText('.approach-ledger > .eyebrow', t.ledger[0]); document.querySelectorAll('.approach-ledger strong').forEach((element, index) => { element.textContent = t.ledger[1][index]; }); setText('.approach-ledger p', t.ledger[2]);
  setText('.contact-top .eyebrow', t.contactEyebrow); setText('.contact h2', t.contactTitle); setText('.contact-note', t.contactNote); document.querySelector('.contact-status span').innerHTML = `<i></i> ${t.status[0]}`; setText('.contact-status strong', t.status[1]); setText('.contact-status small', t.status[2]);
  document.querySelectorAll('.project-info').forEach(info => { const project = info.closest('.project').dataset.project; const details = localizedProjectDetails[currentLanguage][project]; info.querySelector('.project-type').textContent = details.label; info.querySelector('p').textContent = details.text; info.querySelector('.details-button').childNodes[0].textContent = currentLanguage === 'en' ? 'view study ' : currentLanguage === 'es' ? 'ver estudio ' : 'ver estudo '; });
  localStorage.setItem('portfolio-language', currentLanguage); document.querySelector('#language-select').setAttribute('aria-label', currentLanguage === 'en' ? 'Language' : currentLanguage === 'es' ? 'Idioma' : 'Idioma'); if (typeof menuToggle !== 'undefined') menuToggle.setAttribute('aria-label', navigation?.classList.contains('mobile-open') ? (currentLanguage === 'en' ? 'Close menu' : currentLanguage === 'es' ? 'Cerrar menú' : 'Fechar menu') : (currentLanguage === 'en' ? 'Open menu' : currentLanguage === 'es' ? 'Abrir menú' : 'Abrir menu')); if (window.lucide?.createIcons) window.lucide.createIcons();
  if (backToTop) { const label = currentLanguage === 'en' ? 'Back to top' : currentLanguage === 'es' ? 'Volver arriba' : 'Voltar ao topo'; backToTop.setAttribute('aria-label', label); backToTop.setAttribute('title', label); }
};

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('.dialog-content');
document.querySelectorAll('.details-button').forEach(button => button.addEventListener('click', event => {
  const project = event.currentTarget.closest('.project').dataset.project;
  const details = localizedProjectDetails[currentLanguage][project];
  const linkLabel = currentLanguage === 'en' ? 'Open project' : currentLanguage === 'es' ? 'Abrir proyecto' : 'Abrir projeto';
  dialogContent.innerHTML = `<span class="eyebrow">${details.label}</span><h2 id="dialog-title">${details.title}</h2><p>${details.text}</p><ul>${details.points.map(point => `<li>${point}</li>`).join('')}</ul><a class="dialog-project-link" href="${projectLinks[project]}" target="_blank" rel="noreferrer">${linkLabel} <i data-lucide="arrow-up-right"></i></a>`;
  if (window.lucide?.createIcons) window.lucide.createIcons();
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

document.querySelectorAll('.filter').forEach(filter => filter.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.filter').forEach(item => item.setAttribute('aria-selected', String(item === filter)));
  filter.classList.add('active');
  const selected = filter.dataset.filter;
  document.querySelectorAll('.project').forEach(project => project.classList.toggle('is-hidden', selected !== 'all' && project.dataset.category !== selected));
}));

document.querySelector('#theme-toggle').addEventListener('click', () => document.body.classList.toggle('light'));

const profilePhoto = document.querySelector('.profile-photo');
const surpriseVideoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const surpriseClickCount = 7;
const surpriseClickWindow = 3000;
let profileClicks = 0;
let profileClickStartedAt = 0;
const revealProfileSurprise = () => {
  const now = Date.now();
  if (!profileClickStartedAt || now - profileClickStartedAt > surpriseClickWindow) {
    profileClicks = 0;
    profileClickStartedAt = now;
  }
  profileClicks += 1;
  if (profileClicks === surpriseClickCount) {
    window.open(surpriseVideoUrl, '_blank', 'noopener,noreferrer');
    profileClicks = 0;
    profileClickStartedAt = 0;
  }
};
profilePhoto?.addEventListener('click', revealProfileSurprise);
profilePhoto?.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    revealProfileSurprise();
  }
});
const navigation = document.querySelector('.nav-links');
const menuToggle = document.querySelector('#menu-toggle');
const closeMobileMenu = () => {
  navigation.classList.remove('mobile-open');
  navigation.style.display = '';
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', currentLanguage === 'en' ? 'Open menu' : currentLanguage === 'es' ? 'Abrir menú' : 'Abrir menu');
  menuToggle.innerHTML = '<i data-lucide="menu"></i>';
  if (window.lucide?.createIcons) window.lucide.createIcons();
};
menuToggle.setAttribute('aria-expanded', 'false');
menuToggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('mobile-open');
  navigation.style.display = isOpen ? 'grid' : '';
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? (currentLanguage === 'en' ? 'Close menu' : currentLanguage === 'es' ? 'Cerrar menú' : 'Fechar menu') : (currentLanguage === 'en' ? 'Open menu' : currentLanguage === 'es' ? 'Abrir menú' : 'Abrir menu'));
  menuToggle.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}"></i>`;
  if (window.lucide?.createIcons) window.lucide.createIcons();
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', closeMobileMenu));
document.addEventListener('click', event => { if (navigation.classList.contains('mobile-open') && !navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMobileMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('mobile-open')) closeMobileMenu(); });
document.querySelector('#language-select').addEventListener('change', event => setLanguage(event.target.value));
setLanguage(currentLanguage);
if (window.lucide?.createIcons) {
  window.lucide.createIcons();
}

const pageLoader = document.querySelector('#page-loader');
document.body.classList.add('is-loading');
const siteIntroElements = [document.querySelector('.site-header'), document.querySelector('main')].filter(Boolean);
siteIntroElements.forEach(element => element.classList.add('site-enter'));
const loaderStartedAt = performance.now();
const minimumLoaderTime = 1600;
let loadingFinished = false;
const finishLoading = () => {
  if (loadingFinished) return;
  loadingFinished = true;
  document.body.classList.remove('is-loading');
  siteIntroElements.forEach(element => element.classList.add('site-enter-visible'));
  pageLoader?.classList.add('is-done');
};
const finishAfterMinimum = () => {
  window.setTimeout(finishLoading, Math.max(0, minimumLoaderTime - (performance.now() - loaderStartedAt)));
};
window.addEventListener('load', () => {
  finishAfterMinimum();
});
window.setTimeout(finishLoading, 6000);
