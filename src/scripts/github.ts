type Repo = { name: string; description: string | null; html_url: string; language: string | null; pushed_at: string; fork: boolean; archived: boolean };

const list = document.querySelector<HTMLUListElement>('[data-gh-list]');
const status = document.querySelector<HTMLElement>('[data-gh-status]');

function ago(iso: string): string {
  const days = Math.round((new Date(iso).getTime() - Date.now()) / 86400000);
  const f = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  if (Math.abs(days) >= 30) return f.format(Math.round(days / 30), 'month');
  return f.format(days, 'day');
}

function render(repos: Repo[]) {
  if (!list) return;
  if (!repos.length) { if (status) status.textContent = 'No public repositories to show yet.'; return; }
  for (const r of repos) {
    if (!r.html_url.startsWith('https://github.com/')) continue;
    const li = document.createElement('li'); li.className = 'row';
    const h = document.createElement('h3'); const a = document.createElement('a');
    a.href = r.html_url; a.textContent = r.name; h.append(a);
    const box = document.createElement('div');
    const p = document.createElement('p'); p.textContent = r.description ?? 'No description yet.';
    const m = document.createElement('p'); m.className = 'meta';
    m.textContent = [r.language, `updated ${ago(r.pushed_at)}`].filter(Boolean).join(', ');
    box.append(p, m); li.append(h, box); list.append(li);
  }
}

async function load() {
  if (!list) return;
  const user = list.dataset.user ?? '';
  const key = `gh:${user}`;
  try {
    let data: Repo[] | null = null;
    const cached = sessionStorage.getItem(key);
    if (cached) { const c = JSON.parse(cached); if (Date.now() - c.t < 600000) data = c.d; }
    if (!data) {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=pushed&per_page=12&type=owner`, { headers: { Accept: 'application/vnd.github+json' } });
      if (!res.ok) throw new Error(String(res.status));
      data = (await res.json()) as Repo[];
      try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d: data })); } catch {}
    }
    render(data.filter((r) => !r.fork && !r.archived).slice(0, 4));
  } catch {
    if (status) status.textContent = 'Could not load repositories right now. Use the link below.';
  }
}

if (list) {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { io.disconnect(); load(); } }, { rootMargin: '200px' });
    io.observe(list);
  } else load();
}
