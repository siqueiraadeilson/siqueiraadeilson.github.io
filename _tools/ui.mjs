// Textos de SEO e de interface que complementam uiTranslations (content.mjs).
const whatsapp = text => `https://wa.me/5511974770648?text=${encodeURIComponent(text)}`;

export const languages = {
  'pt-BR': { code: 'pt-BR', short: 'PT', flag: 'br', name: 'Português', og: 'pt_BR', home: '/', projects: '/projetos/' },
  en: { code: 'en', short: 'EN', flag: 'us', name: 'English', og: 'en_US', home: '/en/', projects: '/en/projects/' },
  es: { code: 'es', short: 'ES', flag: 'es', name: 'Español', og: 'es_ES', home: '/es/', projects: '/es/proyectos/' }
};

export const seoUi = {
  'pt-BR': {
    seoTitle: 'Adeilson Siqueira | Desenvolvedor Full Stack em São Paulo',
    seoDesc: 'Desenvolvedor full stack e engenheiro de produto em São Paulo. React, TypeScript e Node.js em projetos como Squood, Luable, Gamium e mods de Minecraft.',
    ogAlt: 'Adeilson Siqueira — Desenvolvedor Full Stack e Product Engineer, portfólio.',
    jobTitle: 'Desenvolvedor Full Stack e Engenheiro de Produto',
    personDesc: 'Desenvolvedor full stack e engenheiro de produto baseado em São Paulo, Brasil. Constrói produtos digitais, software aberto e ferramentas — de plataformas web a apps desktop, mods de Minecraft e jogos no Roblox.',
    h1: 'Adeilson Siqueira — desenvolvedor full stack e engenheiro de produto em São Paulo',
    aboutText: 'Sou desenvolvedor full stack e engenheiro de produto em São Paulo. Trabalho da arquitetura à interface: produtos web com React, TypeScript e Node.js, apps desktop com Electron, mods de Minecraft e jogos no Roblox.',
    skip: 'Pular para os projetos', backTop: 'Voltar ao topo', loading: 'Carregando portfólio', portfolioTag: 'PORTFÓLIO / 2026',
    loader: ['iniciando núcleo', 'carregando projetos', 'calibrando órbitas', 'abrindo portfólio'],
    backHome: 'Voltar ao início', mainNav: 'Navegação principal', theme: 'Alternar tema', openMenu: 'Abrir menu', closeMenu: 'Fechar menu', language: 'Idioma',
    whatsappUrl: whatsapp('Olá, Adeilson! Conheci seu site e gostaria de conversar sobre um projeto.'), whatsappTitle: 'Conversar pelo WhatsApp', whatsappLabel: 'pelo WhatsApp',
    heroAlt: 'Logo de Adeilson Siqueira cercado por órbitas', logoAlt: 'Logo de Adeilson Siqueira', logoLabel: 'Logo de Adeilson Siqueira. Clique sete vezes para uma surpresa.',
    noteTop: '01 — PRINCÍPIO<br><strong>clareza antes<br>de complexidade</strong>', noteBottom: 'LOCALIZAÇÃO ATUAL<br><strong>São Paulo, BR</strong>',
    dataLabel: 'Áreas de atuação', filterLabel: 'Filtrar projetos', location: 'São Paulo, Brasil', closeDetails: 'Fechar detalhes',
    faqEyebrow: '04 / PERGUNTAS FREQUENTES', faqTitle: 'Antes de<br><em>conversarmos.</em>', faqText: 'O essencial sobre quem eu sou, como trabalho e como entrar em contato.',
    faq: [
      ['Quem é Adeilson Siqueira?', 'Adeilson Siqueira é desenvolvedor full stack e engenheiro de produto em São Paulo, Brasil. É fundador do Squood e criador do Luable, do Gamium, do Ponteiro Studio, do jogo Steal Mutant Pet e dos mods de Minecraft Auto Best Enchantments e Librarian Books Preview.'],
      ['Quais tecnologias você usa?', 'React, TypeScript, JavaScript e Node.js no dia a dia, com Vite e Zustand. Electron para apps desktop, Gun.js e WebRTC para comunicação em tempo real, Java com Fabric para mods de Minecraft e Batch para automação no Windows.'],
      ['Você está disponível para freelance?', 'Sim. Estou disponível para novos projetos, trabalho de forma remota a partir do Brasil e respondo em até 48 horas por e-mail, WhatsApp ou Fiverr.'],
      ['Que tipo de projeto você desenvolve?', 'Produtos digitais do início ao fim: plataformas web, aplicativos desktop, ferramentas para desenvolvedores e criadores, mods de Minecraft e jogos no Roblox.'],
      ['Onde posso ver seu código?', 'Os repositórios públicos estão no <a href="https://github.com/siqueiraadeilson">GitHub</a> e os mods no <a href="https://modrinth.com/user/adesdot">Modrinth</a>. Cada projeto também tem uma página própria aqui no portfólio.']
    ],
    contactEyebrow: '05 / VAMOS CONVERSAR',
    alt: { squood: 'Ícone do Squood', gamium: 'Ícone do Gamium', mods: 'Ícone do mod Auto Best Enchantments', librarian: 'Ícone do mod Librarian Books Preview', roblox: 'Miniatura do jogo Steal Mutant Pet', cursor: 'Cursor pixelado verde-lima', palette: 'Paleta de cores', lumi: 'Lumi, mascote do Luable' },
    visual: { squood: 'a internet pode<br>ser mais humana.', gamium: 'conversa sem<br>intermediários.', roblox: 'mutant pets.<br>impérios de ovos.', check: 'desafio corrigido na hora', lesson: 'LIÇÃO 12 / 132', module: 'MÓDULO 03 / 16', cert: 'CERTIFICADO PDF' },
    viewStudy: 'ver estudo', openProject: 'Abrir projeto', readCase: 'Ler estudo completo', home: 'Início', projects: 'Projetos', breadcrumb: 'Trilha de navegação', highlights: 'Destaques', related: 'Outros projetos', facts: 'Ficha do projeto', caseCta: 'Quer construir algo assim?', caseCtaText: 'Estou disponível para novos projetos e respondo em até 48h.', allProjects: 'Ver todos os projetos', madeBy: 'Projeto de Adeilson Siqueira, desenvolvedor full stack em São Paulo.'
  },
  en: {
    seoTitle: 'Adeilson Siqueira | Full Stack Developer & Product Engineer',
    seoDesc: 'Full stack developer and product engineer from Brazil. React, TypeScript and Node.js across projects like Squood, Luable, Gamium and Minecraft mods.',
    ogAlt: 'Adeilson Siqueira — Full Stack Developer and Product Engineer, portfolio.',
    jobTitle: 'Full Stack Developer and Product Engineer',
    personDesc: 'Full stack developer and product engineer based in São Paulo, Brazil. Builds digital products, open software, and tools — from web platforms to desktop apps, Minecraft mods, and Roblox games.',
    h1: 'Adeilson Siqueira — full stack developer and product engineer in São Paulo, Brazil',
    aboutText: 'I am a full stack developer and product engineer based in São Paulo, Brazil. I work from architecture to interface: web products with React, TypeScript, and Node.js, desktop apps with Electron, Minecraft mods, and Roblox games.',
    skip: 'Skip to projects', backTop: 'Back to top', loading: 'Loading portfolio', portfolioTag: 'PORTFOLIO / 2026',
    loader: ['starting core', 'loading projects', 'calibrating orbits', 'opening portfolio'],
    backHome: 'Back to start', mainNav: 'Main navigation', theme: 'Toggle theme', openMenu: 'Open menu', closeMenu: 'Close menu', language: 'Language',
    whatsappUrl: whatsapp('Hi, Adeilson! I found your website and would like to talk about a project.'), whatsappTitle: 'Chat on WhatsApp', whatsappLabel: 'via WhatsApp',
    heroAlt: 'Adeilson Siqueira logo surrounded by orbits', logoAlt: 'Adeilson Siqueira logo', logoLabel: 'Adeilson Siqueira logo. Click seven times for a surprise.',
    noteTop: '01 — PRINCIPLE<br><strong>clarity before<br>complexity</strong>', noteBottom: 'CURRENT LOCATION<br><strong>São Paulo, BR</strong>',
    dataLabel: 'Areas of work', filterLabel: 'Filter projects', location: 'São Paulo, Brazil', closeDetails: 'Close details',
    faqEyebrow: '04 / FREQUENT QUESTIONS', faqTitle: 'Before<br><em>we talk.</em>', faqText: 'The essentials about who I am, how I work, and how to get in touch.',
    faq: [
      ['Who is Adeilson Siqueira?', 'Adeilson Siqueira is a full stack developer and product engineer based in São Paulo, Brazil. He is the founder of Squood and the creator of Luable, Gamium, Ponteiro Studio, the game Steal Mutant Pet, and the Minecraft mods Auto Best Enchantments and Librarian Books Preview.'],
      ['What technologies do you use?', 'React, TypeScript, JavaScript, and Node.js every day, with Vite and Zustand. Electron for desktop apps, Gun.js and WebRTC for real-time communication, Java with Fabric for Minecraft mods, and Batch for Windows automation.'],
      ['Are you available for freelance work?', 'Yes. I am available for new projects, work remotely from Brazil, and reply within 48 hours by email, WhatsApp, or Fiverr.'],
      ['What kind of projects do you build?', 'Digital products from start to finish: web platforms, desktop apps, tools for developers and creators, Minecraft mods, and Roblox games.'],
      ['Where can I see your code?', 'Public repositories are on <a href="https://github.com/siqueiraadeilson">GitHub</a> and the mods are on <a href="https://modrinth.com/user/adesdot">Modrinth</a>. Each project also has its own page in this portfolio.']
    ],
    contactEyebrow: '05 / LET’S TALK',
    alt: { squood: 'Squood icon', gamium: 'Gamium icon', mods: 'Auto Best Enchantments mod icon', librarian: 'Librarian Books Preview mod icon', roblox: 'Steal Mutant Pet game thumbnail', cursor: 'Lime green pixel cursor', palette: 'Color palette', lumi: 'Lumi, the Luable mascot' },
    visual: { squood: 'the internet can<br>be more human.', gamium: 'talk without<br>middlemen.', roblox: 'mutant pets.<br>egg empires.', check: 'challenge checked instantly', lesson: 'LESSON 12 / 132', module: 'MODULE 03 / 16', cert: 'PDF CERTIFICATE' },
    viewStudy: 'view study', openProject: 'Open project', readCase: 'Read full case study', home: 'Home', projects: 'Projects', breadcrumb: 'Breadcrumb', highlights: 'Highlights', related: 'More projects', facts: 'Project facts', caseCta: 'Want to build something like this?', caseCtaText: 'I am available for new projects and reply within 48h.', allProjects: 'See all projects', madeBy: 'A project by Adeilson Siqueira, full stack developer in Brazil.'
  },
  es: {
    seoTitle: 'Adeilson Siqueira | Desarrollador Full Stack en Brasil',
    seoDesc: 'Desarrollador full stack e ingeniero de producto en São Paulo. React, TypeScript y Node.js en proyectos como Squood, Luable, Gamium y mods de Minecraft.',
    ogAlt: 'Adeilson Siqueira — Desarrollador Full Stack e Ingeniero de Producto, portafolio.',
    jobTitle: 'Desarrollador Full Stack e Ingeniero de Producto',
    personDesc: 'Desarrollador full stack e ingeniero de producto en São Paulo, Brasil. Construye productos digitales, software abierto y herramientas — de plataformas web a apps de escritorio, mods de Minecraft y juegos en Roblox.',
    h1: 'Adeilson Siqueira — desarrollador full stack e ingeniero de producto en São Paulo, Brasil',
    aboutText: 'Soy desarrollador full stack e ingeniero de producto en São Paulo, Brasil. Trabajo de la arquitectura a la interfaz: productos web con React, TypeScript y Node.js, apps de escritorio con Electron, mods de Minecraft y juegos en Roblox.',
    skip: 'Saltar a los proyectos', backTop: 'Volver arriba', loading: 'Cargando portafolio', portfolioTag: 'PORTAFOLIO / 2026',
    loader: ['iniciando núcleo', 'cargando proyectos', 'calibrando órbitas', 'abriendo portafolio'],
    backHome: 'Volver al inicio', mainNav: 'Navegación principal', theme: 'Cambiar tema', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', language: 'Idioma',
    whatsappUrl: whatsapp('¡Hola, Adeilson! Vi tu sitio y me gustaría hablar sobre un proyecto.'), whatsappTitle: 'Conversar por WhatsApp', whatsappLabel: 'por WhatsApp',
    heroAlt: 'Logo de Adeilson Siqueira rodeado de órbitas', logoAlt: 'Logo de Adeilson Siqueira', logoLabel: 'Logo de Adeilson Siqueira. Haz clic siete veces para una sorpresa.',
    noteTop: '01 — PRINCIPIO<br><strong>claridad antes<br>de complejidad</strong>', noteBottom: 'UBICACIÓN ACTUAL<br><strong>São Paulo, BR</strong>',
    dataLabel: 'Áreas de actuación', filterLabel: 'Filtrar proyectos', location: 'São Paulo, Brasil', closeDetails: 'Cerrar detalles',
    faqEyebrow: '04 / PREGUNTAS FRECUENTES', faqTitle: 'Antes de<br><em>conversar.</em>', faqText: 'Lo esencial sobre quién soy, cómo trabajo y cómo ponerse en contacto.',
    faq: [
      ['¿Quién es Adeilson Siqueira?', 'Adeilson Siqueira es desarrollador full stack e ingeniero de producto en São Paulo, Brasil. Es fundador de Squood y creador de Luable, Gamium, Ponteiro Studio, el juego Steal Mutant Pet y los mods de Minecraft Auto Best Enchantments y Librarian Books Preview.'],
      ['¿Qué tecnologías utilizas?', 'React, TypeScript, JavaScript y Node.js a diario, con Vite y Zustand. Electron para apps de escritorio, Gun.js y WebRTC para comunicación en tiempo real, Java con Fabric para mods de Minecraft y Batch para automatización en Windows.'],
      ['¿Estás disponible para trabajos freelance?', 'Sí. Estoy disponible para nuevos proyectos, trabajo en remoto desde Brasil y respondo en 48 horas por correo, WhatsApp o Fiverr.'],
      ['¿Qué tipo de proyectos desarrollas?', 'Productos digitales de principio a fin: plataformas web, aplicaciones de escritorio, herramientas para desarrolladores y creadores, mods de Minecraft y juegos en Roblox.'],
      ['¿Dónde puedo ver tu código?', 'Los repositorios públicos están en <a href="https://github.com/siqueiraadeilson">GitHub</a> y los mods en <a href="https://modrinth.com/user/adesdot">Modrinth</a>. Cada proyecto también tiene su propia página en este portafolio.']
    ],
    contactEyebrow: '05 / HABLEMOS',
    alt: { squood: 'Icono de Squood', gamium: 'Icono de Gamium', mods: 'Icono del mod Auto Best Enchantments', librarian: 'Icono del mod Librarian Books Preview', roblox: 'Miniatura del juego Steal Mutant Pet', cursor: 'Cursor pixelado verde lima', palette: 'Paleta de colores', lumi: 'Lumi, la mascota de Luable' },
    visual: { squood: 'internet puede<br>ser más humana.', gamium: 'conversa sin<br>intermediarios.', roblox: 'mutant pets.<br>imperios de huevos.', check: 'desafío corregido al instante', lesson: 'LECCIÓN 12 / 132', module: 'MÓDULO 03 / 16', cert: 'CERTIFICADO PDF' },
    viewStudy: 'ver estudio', openProject: 'Abrir proyecto', readCase: 'Leer estudio completo', home: 'Inicio', projects: 'Proyectos', breadcrumb: 'Ruta de navegación', highlights: 'Aspectos destacados', related: 'Otros proyectos', facts: 'Ficha del proyecto', caseCta: '¿Quieres construir algo así?', caseCtaText: 'Estoy disponible para nuevos proyectos y respondo en 48 h.', allProjects: 'Ver todos los proyectos', madeBy: 'Proyecto de Adeilson Siqueira, desarrollador full stack en Brasil.'
  }
};
