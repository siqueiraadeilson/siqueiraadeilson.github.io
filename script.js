const projectDetails = {
  squood: { label: 'PRODUTO DIGITAL / 2026', title: 'Squood', text: 'Uma plataforma social focada em comunidades e construída com privacidade como princípio. Como fundador e engenheiro de produto, Adeilson participa das decisões que vão da arquitetura à experiência.', points: ['Privacidade real: sem rastreamento invasivo ou venda de informações', 'Comunidades com regras claras e moderação transparente', 'Produto em fase de refinamento e estabilização, guiado por feedback real'] },
  gamium: { label: 'APLICAÇÃO DESKTOP / OPEN SOURCE', title: 'Gamium', text: 'Um app de comunicação descentralizada, criptografada e P2P. O projeto combina Electron, React, TypeScript, Vite, Gun.js, WebRTC e Zustand para reimaginar chat, voz e comunidades sem servidor central.', points: ['DMs com criptografia ECDH, servidores, grupos, voz e compartilhamento de tela', 'Identidade por chaves públicas e recuperação com frase BIP39 de 12 palavras', 'Atualizações automáticas e distribuição para Windows, Linux e macOS'] },
  mods: { label: 'MINECRAFT MOD / FABRIC', title: 'Auto Best Enchantments', text: 'Uma automação focada em um momento conhecido por todo jogador de Minecraft: repetir o ciclo do bibliotecário até encontrar o livro e o preço ideais.', points: ['Metas por encantamento, nível e faixa de preço via comando /autolec', 'Modos de auto trade, logs de chat, pre-break e preservação de ferramenta', 'Mais de 1,8 mil de downloads e experiência client-side'] },
  librarian: { label: 'MINECRAFT MOD / FABRIC', title: 'Librarian Books Preview', text: 'Um mod pequeno e preciso: mirar no bibliotecário já revela até três trocas de livros encantados, com nome localizado e custo exato em esmeraldas.', points: ['Overlay em tempo real sem abrir a interface de comércio', 'Compatível com Fabric, Fabric API e ambientes client-side e server-side', 'Mais de 1,7 mil de downloads e licença MIT'] },
  scripts: { label: 'FERRAMENTAS / WINDOWS', title: 'some-windows-scripts', text: 'Uma coleção de scripts Batch autocontidos para problemas pontuais do Windows. A proposta é quase anti-produto: sem instalação, sem dependências, só baixar e executar.', points: ['13 scripts para rede, áudio, relógio, impressão, updates, disco e arquivos temporários', 'Indicação clara de quais rotinas precisam de administrador', 'Windows 10+, MIT License e documentação com contexto para cada reparo'] }
};

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('.dialog-content');
document.querySelectorAll('.details-button').forEach(button => button.addEventListener('click', event => {
  const project = event.currentTarget.closest('.project').dataset.project;
  const details = projectDetails[project];
  dialogContent.innerHTML = `<span class="eyebrow">${details.label}</span><h2 id="dialog-title">${details.title}</h2><p>${details.text}</p><ul>${details.points.map(point => `<li>${point}</li>`).join('')}</ul>`;
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
const navigation = document.querySelector('.nav-links');
document.querySelector('#menu-toggle').addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('mobile-open');
  navigation.style.display = isOpen ? 'flex' : '';
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('mobile-open');
  navigation.style.display = '';
}));
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