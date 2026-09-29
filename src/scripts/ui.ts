const root = document.documentElement;

// Theme toggle
const btn = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const isDark = () => root.dataset.theme === 'dark';
const sync = () => btn?.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme');
btn?.addEventListener('click', () => {
  const next = isDark() ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch {}
  sync();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  let saved: string | null = null;
  try { saved = localStorage.getItem('theme'); } catch {}
  if (!saved) { root.dataset.theme = e.matches ? 'dark' : 'light'; sync(); }
});
sync();

// Active section in dock
const links = [...document.querySelectorAll<HTMLAnchorElement>('.dock a[href^="/#"]')];
if (links.length && 'IntersectionObserver' in window) {
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      links.forEach((l) => l.removeAttribute('aria-current'));
      byId.get(e.target.id)?.setAttribute('aria-current', 'true');
    }
  }, { rootMargin: '-40% 0px -55% 0px' });
  byId.forEach((_, id) => { const el = document.getElementById(id); if (el) io.observe(el); });
}

// Live clock (seconds)
const clocks = document.querySelectorAll<HTMLElement>('[data-clock]');
if (clocks.length) {
  const tick = () => clocks.forEach((el) => {
    try {
      el.textContent = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', timeZone: el.dataset.clock }).format(new Date());
      el.closest('[data-clock-wrap]')?.setAttribute('data-ready', '');
    } catch {}
  });
  tick();
  setInterval(tick, 1000);
}
