const pageData = JSON.parse(document.querySelector('#page-data')?.textContent || '{}');
const readStorage = (storage, key) => { try { return storage.getItem(key); } catch { return null; } };
const writeStorage = (storage, key, value) => { try { storage.setItem(key, value); } catch { /* armazenamento bloqueado */ } };

const backToTop = document.querySelector('#back-to-top');
const updateBackToTop = () => backToTop?.classList.toggle('is-visible', window.scrollY > 520);
window.addEventListener('scroll', updateBackToTop, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
updateBackToTop();

document.querySelector('#language-select')?.addEventListener('change', event => {
  const option = event.target.selectedOptions[0];
  writeStorage(localStorage, 'portfolio-language', option.value);
  window.location.href = option.dataset.href;
});
document.querySelectorAll('a[hreflang]').forEach(link => link.addEventListener('click', () => writeStorage(localStorage, 'portfolio-language', link.hreflang)));

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('.dialog-content');
document.querySelectorAll('.details-button').forEach(button => button.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const details = pageData.details[event.currentTarget.closest('.project').dataset.project];
  dialogContent.innerHTML = `<span class="eyebrow">${details.label}</span><h2 id="dialog-title">${details.title}</h2><p>${details.text}</p><ul>${details.points.map(point => `<li>${point}</li>`).join('')}</ul><div class="dialog-links"><a class="dialog-project-link" href="${details.caseUrl}">${pageData.labels.readCase} ${pageData.icons.arrow}</a><a class="dialog-project-link" href="${details.link}" target="_blank" rel="noopener">${pageData.labels.openProject} ${pageData.icons.arrow}</a></div>`;
  dialog.showModal();
}));
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

document.querySelectorAll('.filter').forEach(filter => filter.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
  document.querySelectorAll('.filter').forEach(item => item.setAttribute('aria-selected', String(item === filter)));
  filter.classList.add('active');
  const selected = filter.dataset.filter;
  document.querySelectorAll('.project').forEach(project => { const categories = (project.dataset.category || '').split(' '); project.classList.toggle('is-hidden', selected !== 'all' && !categories.includes(selected)); });
}));

if (readStorage(localStorage, 'portfolio-theme') === 'light') document.body.classList.add('light');
document.querySelector('#theme-toggle')?.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  writeStorage(localStorage, 'portfolio-theme', isLight ? 'light' : 'dark');
});

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
if (navigation && menuToggle) {
  const closeMobileMenu = () => {
    navigation.classList.remove('mobile-open');
    navigation.style.display = '';
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', pageData.labels.openMenu);
    menuToggle.innerHTML = pageData.icons.menu;
  };
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('mobile-open');
    navigation.style.display = isOpen ? 'grid' : '';
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? pageData.labels.closeMenu : pageData.labels.openMenu);
    menuToggle.innerHTML = isOpen ? pageData.icons.x : pageData.icons.menu;
  });
  document.querySelectorAll('.nav-links > a').forEach(link => link.addEventListener('click', closeMobileMenu));
  document.addEventListener('click', event => { const eventPath = event.composedPath(); if (navigation.classList.contains('mobile-open') && !eventPath.includes(navigation) && !eventPath.includes(menuToggle)) closeMobileMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('mobile-open')) closeMobileMenu(); });
}

const pageLoader = document.querySelector('#page-loader');
if (pageLoader && !document.documentElement.classList.contains('no-intro')) {
  document.body.classList.add('is-loading');
  const siteIntroElements = [document.querySelector('.site-header'), document.querySelector('main')].filter(Boolean);
  siteIntroElements.forEach(element => element.classList.add('site-enter'));
  const loaderStartedAt = performance.now();
  const minimumLoaderTime = 900;
  let loadingFinished = false;
  const finishLoading = () => {
    if (loadingFinished) return;
    loadingFinished = true;
    document.body.classList.remove('is-loading');
    siteIntroElements.forEach(element => element.classList.add('site-enter-visible'));
    pageLoader.classList.add('is-done');
    writeStorage(sessionStorage, 'as-intro', '1');
  };
  const finishAfterMinimum = () => {
    window.setTimeout(finishLoading, Math.max(0, minimumLoaderTime - (performance.now() - loaderStartedAt)));
  };
  if (document.readyState === 'complete') finishAfterMinimum();
  else window.addEventListener('load', finishAfterMinimum);
  window.setTimeout(finishLoading, 3000);
}
