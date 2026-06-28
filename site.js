const APPLE_SVG = `<svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M8.18 6.37c-.01-1.3.7-1.93 1.82-2.57-.68-1-1.73-1.56-3.06-1.63C5.7 2.1 4.5 2.88 3.94 2.88c-.58 0-1.61-.84-2.66-.81C-.04 2.1-.8 3.13-.8 4.77-.8 7.6 1.2 11.2 2.86 11.2c.74.01 1.24-.5 2.22-.5.97 0 1.43.5 2.26.49 1.68-.03 3.46-3.34 3.46-3.34a3.6 3.6 0 0 1-2.62-1.48zM6.7.75C7.36.03 7.59-.82 7.54-1.6c-.76.04-1.67.5-2.2 1.2C4.8.3 4.5 1.12 4.57 1.92 5.4 1.98 6.03 1.48 6.7.75z"/></svg>`;
const GOOGLE_SVG = `<svg width="11" height="12" viewBox="0 0 11 12" fill="currentColor"><path d="M.5.6C.2.77 0 1.1 0 1.53v8.94c0 .43.2.76.5.93l.05.04 5.01-5.01v-.12L.55.56.5.6zm6.68 6.63L5.56 5.6v-.12l1.62-1.62.04.02 1.92 1.09c.55.31.55.82 0 1.13L7.22 7.2l-.04.03zM.5 11.4l5.05-5.05 1.63 1.63L1.55 11.6C1.23 11.77.84 11.73.5 11.4zM.5.6C.84.27 1.23.23 1.55.4l5.63 3.2L5.55 5.22.5.64V.6z"/></svg>`;

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderStoreBadge({ type, url }) {
  const icon = type === 'apple' ? APPLE_SVG : GOOGLE_SVG;
  const label = type === 'apple' ? 'App Store' : 'Play Store';
  return `<a href="${esc(url)}" class="store-badge" target="_blank" rel="noopener noreferrer">${icon} ${label}</a>`;
}

function renderAppCard(app) {
  return `
    <div class="app-card">
      <div class="app-card-header">
        <img class="app-icon" src="${esc(app.icon)}" alt="${esc(app.name)} icon" />
        <div class="app-meta">
          <div class="app-name">${esc(app.name)}</div>
          <div class="app-company">${esc(app.company)} · ${esc(app.platform)}</div>
        </div>
      </div>
      <div class="app-store-links">
        ${app.stores.map(renderStoreBadge).join('')}
      </div>
    </div>`;
}

function renderWorkEntry(entry, showDivider) {
  const companyInner = entry.companyUrl
    ? `<a href="${esc(entry.companyUrl)}" target="_blank" rel="noopener noreferrer">${esc(entry.company)}</a>`
    : esc(entry.company);

  const suffix = entry.companySuffix
    ? ` <span style="font-family:var(--sans);font-size:16px;color:var(--ink-faint);font-weight:400">${esc(entry.companySuffix)}</span>`
    : '';

  const bodyHtml = entry.body.map(p => `<p>${esc(p)}</p>`).join('');

  const highlightsHtml = entry.highlights.map(h => `
    <div class="highlight"><span>${h}</span></div>`).join('');

  return `
    ${showDivider ? '<div class="work-divider"></div>' : ''}
    <div class="work-entry">
      <div class="work-meta">
        <div class="work-company">${companyInner}${suffix}</div>
        <div class="work-dates">${esc(entry.dates)}</div>
      </div>
      <div class="work-role">${esc(entry.role)}</div>
      <div class="work-body">
        ${bodyHtml}
        <div class="work-highlights">${highlightsHtml}</div>
      </div>
    </div>`;
}

function renderEarlierCard(entry) {
  const companyInner = entry.companyUrl
    ? `<a href="${esc(entry.companyUrl)}" target="_blank" rel="noopener noreferrer">${esc(entry.company)}</a>`
    : esc(entry.company);

  return `
    <div class="earlier-card">
      <div class="ec-company">${companyInner}</div>
      <div class="ec-role">${esc(entry.role)}</div>
      <p>${esc(entry.description)}</p>
    </div>`;
}

Promise.all([
  fetch('apps.json').then(r => r.json()),
  fetch('work.json').then(r => r.json()),
]).then(([apps, work]) => {
  document.getElementById('app-grid').innerHTML =
    apps.map(renderAppCard).join('');

  document.getElementById('work-main').innerHTML =
    work.main.map((entry, i) => renderWorkEntry(entry, i > 0)).join('');

  document.getElementById('earlier-grid').innerHTML =
    work.earlier.map(renderEarlierCard).join('');
});
