// ============================================================
// ICONS (Lucide SVG strings)
// ============================================================
const ICONS = {
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  play: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>',
  disc: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 12h.01"/></svg>',
  users: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  'trending-up': '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>',
  hash: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>',
  crown: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>',
  skull: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="m12.5 17-.5-1-.5 1h1z"/><path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"/></svg>',
  flame: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
};

// ============================================================
// STATE
// ============================================================
const state = {
  search: '',
  typeFilter: 'all',
  yearFilter: null,
  albumFilter: null,
  view: 'list',
  selectedTrack: null,
};

// ============================================================
// UTILITIES
// ============================================================
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(track, full = false) {
  if (track.date && !track.date.endsWith('-01-01')) {
    const d = new Date(track.date);
    return d.toLocaleDateString('es-AR', {
      day: '2-digit',
      month: full ? 'long' : 'short',
      year: 'numeric',
    });
  }
  return String(track.year);
}

function injectIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.getAttribute('data-icon');
    if (ICONS[name] && !el.dataset.iconRendered) {
      el.innerHTML = ICONS[name];
      el.dataset.iconRendered = '1';
    }
  });
}

// ============================================================
// FILTERING & STATS
// ============================================================
function getFilteredTracks() {
  return DUKI_DATA.filter((t) => {
    if (state.typeFilter !== 'all' && t.type !== state.typeFilter) return false;
    if (state.yearFilter && t.year !== state.yearFilter) return false;
    if (state.albumFilter && t.album !== state.albumFilter) return false;
    if (state.search) {
      const q = state.search.toLowerCase();
      const inTitle = t.title.toLowerCase().includes(q);
      const inCollabs = t.collabs.some((c) => c.toLowerCase().includes(q));
      const inAlbum = t.album ? t.album.toLowerCase().includes(q) : false;
      if (!inTitle && !inCollabs && !inAlbum) return false;
    }
    return true;
  }).sort((a, b) => {
    if (a.date !== b.date) return b.date.localeCompare(a.date);
    return b.id - a.id;
  });
}

function getStats() {
  const total = DUKI_DATA.length;
  const singles = DUKI_DATA.filter((t) => t.type === 'single').length;
  const albumTracks = DUKI_DATA.filter((t) => t.type === 'album').length;
  const feats = DUKI_DATA.filter((t) => t.type === 'feat').length;
  const uniqueCollabs = new Set(DUKI_DATA.flatMap((t) => t.collabs)).size;
  const albums = Object.keys(ALBUMS_INFO).length;
  const years = new Set(DUKI_DATA.map((t) => t.year)).size;
  return { total, singles, albumTracks, feats, uniqueCollabs, albums, years };
}

function hasFilters() {
  return Boolean(state.search) || state.typeFilter !== 'all' || state.yearFilter || state.albumFilter;
}

// ============================================================
// RENDER: TYPE BADGE
// ============================================================
function typeBadgeHTML(type) {
  const labels = { single: 'SINGLE', album: 'DISCO', feat: 'FEAT' };
  return `<span class="type-badge type-badge--${type}">${labels[type]}</span>`;
}

// ============================================================
// RENDER: TRACK LIST
// ============================================================
function renderTrackList() {
  const list = document.getElementById('trackList');
  const tracks = getFilteredTracks();

  if (tracks.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon" data-icon="skull"></div>
        <div class="empty-state-title">SIN RESULTADOS</div>
        <div class="empty-state-sub">Probá otra búsqueda, campeón</div>
      </div>
    `;
    injectIcons(list);
    return;
  }

  list.innerHTML = tracks
    .map((t) => {
      const idStr = String(t.id).padStart(3, '0');
      const dateStr = formatDate(t);
      const albumTag = t.album
        ? `<span class="track-album-tag">◆ ${escapeHtml(t.album)}</span>`
        : '';
      const collabs = t.collabs.length
        ? `<div class="track-collabs"><span class="feat">feat.</span> ${escapeHtml(
            t.collabs.join(' × ')
          )}</div>`
        : '';
      return `
        <div class="track-row" data-id="${t.id}">
          <div class="track-id">#${idStr}</div>
          <div class="track-info">
            <div class="track-meta-row">
              ${typeBadgeHTML(t.type)}
              ${albumTag}
            </div>
            <div class="track-title">${escapeHtml(t.title)}</div>
            ${collabs}
          </div>
          <div class="track-right">
            <div class="track-date">${escapeHtml(dateStr)}</div>
            <div class="track-play-icon"><span data-icon="play"></span></div>
          </div>
        </div>
      `;
    })
    .join('');

  injectIcons(list);

  list.querySelectorAll('.track-row').forEach((row) => {
    row.addEventListener('click', () => {
      const id = Number(row.dataset.id);
      const track = DUKI_DATA.find((t) => t.id === id);
      if (track) openModal(track);
    });
  });
}

// ============================================================
// RENDER: STATS CARDS
// ============================================================
function renderStatCards() {
  const s = getStats();
  const map = {
    headerTotal: s.total,
    statTotal: s.total,
    statAlbums: s.albums,
    statCollabs: s.uniqueCollabs,
    statYears: s.years,
    statTotal2: s.total,
    statSingles: s.singles,
    statAlbumTracks: s.albumTracks,
    statFeats: s.feats,
  };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}

function renderCounter() {
  const counter = document.getElementById('viewCounter');
  const s = getStats();
  counter.textContent = `${getFilteredTracks().length}/${s.total}`;
}

// ============================================================
// RENDER: FILTER CHIPS + ACTIVE
// ============================================================
function renderFilters() {
  // Type chips
  document.querySelectorAll('#typeFilters .chip[data-type]').forEach((chip) => {
    const t = chip.dataset.type;
    chip.classList.toggle('chip--active', state.typeFilter === t);
  });

  // Clear all button
  const clearBtn = document.getElementById('clearAllBtn');
  clearBtn.classList.toggle('hidden', !hasFilters());

  // Search clear
  const searchClear = document.getElementById('searchClear');
  searchClear.classList.toggle('hidden', !state.search);

  // Active filters
  const wrap = document.getElementById('activeFilters');
  const parts = [];
  if (state.yearFilter) {
    parts.push(
      `<span class="active-filter-tag active-filter-tag--red" data-remove="year">AÑO: ${state.yearFilter} <span data-icon="x"></span></span>`
    );
  }
  if (state.albumFilter) {
    parts.push(
      `<span class="active-filter-tag active-filter-tag--yellow" data-remove="album">${escapeHtml(
        state.albumFilter
      )} <span data-icon="x"></span></span>`
    );
  }
  if (parts.length) {
    wrap.innerHTML = parts.join('');
    wrap.classList.remove('hidden');
    injectIcons(wrap);
    wrap.querySelectorAll('[data-remove]').forEach((el) => {
      el.addEventListener('click', () => {
        const r = el.dataset.remove;
        if (r === 'year') state.yearFilter = null;
        if (r === 'album') state.albumFilter = null;
        renderAll();
      });
    });
  } else {
    wrap.innerHTML = '';
    wrap.classList.add('hidden');
  }
}

// ============================================================
// RENDER: TIMELINE
// ============================================================
function renderTimeline() {
  const container = document.getElementById('timeline');
  const years = [...new Set(DUKI_DATA.map((t) => t.year))].sort();
  const counts = years.map((y) => DUKI_DATA.filter((t) => t.year === y).length);
  const max = Math.max(...counts);

  container.innerHTML = years
    .map((year, i) => {
      const count = counts[i];
      const pct = (count / max) * 100;
      const isActive = state.yearFilter === year;
      return `
        <button class="timeline-bar ${isActive ? 'active' : ''}" data-year="${year}">
          <div class="timeline-count">${count}</div>
          <div class="timeline-bar-fill" style="height: ${pct}%;"></div>
          <div class="timeline-label">${String(year).slice(-2)}</div>
        </button>
      `;
    })
    .join('');

  container.querySelectorAll('.timeline-bar').forEach((btn) => {
    btn.addEventListener('click', () => {
      const y = Number(btn.dataset.year);
      state.yearFilter = state.yearFilter === y ? null : y;
      state.view = 'list';
      renderAll();
    });
  });
}

// ============================================================
// RENDER: ALBUMS GRID
// ============================================================
function renderAlbums() {
  const container = document.getElementById('albumsGrid');
  container.innerHTML = Object.entries(ALBUMS_INFO)
    .map(([name, info]) => {
      const isActive = state.albumFilter === name;
      return `
        <button class="album-card ${isActive ? 'active' : ''}" data-album="${escapeHtml(name)}">
          <div class="album-card-type">${escapeHtml(info.type)}</div>
          <div class="album-card-name">${escapeHtml(name)}</div>
          <div class="album-card-date">${escapeHtml(info.date)}</div>
          <div class="album-card-accent" style="background-color: ${info.color};"></div>
        </button>
      `;
    })
    .join('');

  container.querySelectorAll('.album-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.album;
      state.albumFilter = state.albumFilter === name ? null : name;
      state.view = 'list';
      renderAll();
    });
  });
}

// ============================================================
// RENDER: TOP COLLABORATORS
// ============================================================
function renderTopCollabs() {
  const container = document.getElementById('topCollabs');
  const counts = {};
  DUKI_DATA.forEach((t) => {
    t.collabs.forEach((c) => {
      counts[c] = (counts[c] || 0) + 1;
    });
  });
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const max = top[0] ? top[0][1] : 1;

  container.innerHTML = top
    .map(([name, count], i) => {
      const pct = (count / max) * 100;
      return `
        <div class="top-collab">
          <div class="top-collab-rank">${String(i + 1).padStart(2, '0')}</div>
          <div class="top-collab-body">
            <div class="top-collab-row">
              <span class="top-collab-name">${escapeHtml(name)}</span>
              <span class="top-collab-count">×${count}</span>
            </div>
            <div class="top-collab-bar">
              <div class="top-collab-bar-fill" style="width: ${pct}%;"></div>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
}

// ============================================================
// RENDER: ALBUMS FULL VIEW (sección dedicada)
// ============================================================
function renderAlbumsFull() {
  const container = document.getElementById('albumsFullList');
  // Orden cronológico descendente: más reciente primero
  const albumEntries = Object.entries(ALBUMS_INFO).sort((a, b) => {
    const dateA = DUKI_DATA.find((t) => t.album === a[0])?.date || '';
    const dateB = DUKI_DATA.find((t) => t.album === b[0])?.date || '';
    return dateB.localeCompare(dateA);
  });

  container.innerHTML = albumEntries
    .map(([name, info]) => {
      const tracks = DUKI_DATA
        .filter((t) => t.album === name && t.type === 'album')
        .sort((a, b) => (a.trackNum || 0) - (b.trackNum || 0));
      const collabsSet = new Set(tracks.flatMap((t) => t.collabs));

      const tracksHTML = tracks
        .map((t) => {
          const num = t.trackNum != null ? String(t.trackNum).padStart(2, '0') : '··';
          const collabs = t.collabs.length
            ? `<div class="album-track-collabs"><span class="feat">feat.</span> ${escapeHtml(t.collabs.join(' × '))}</div>`
            : '';
          return `
            <div class="album-track-row" data-id="${t.id}">
              <div class="album-track-num">${num}</div>
              <div class="album-track-info">
                <div class="album-track-title">${escapeHtml(t.title)}</div>
                ${collabs}
              </div>
              <div class="album-track-id">#${String(t.id).padStart(3, '0')}</div>
            </div>
          `;
        })
        .join('');

      // Cover: nombre estilizado sobre fondo del color del álbum
      const initials = name.length <= 4 ? name : name.split(/\s+/).map((w) => w[0]).join('').slice(0, 4);

      return `
        <div class="album-block" data-album="${escapeHtml(name)}">
          <div class="album-block-accent" style="background-color: ${info.color};"></div>
          <div class="album-block-header">
            <div class="album-block-cover" style="background-color: ${info.color};">${escapeHtml(initials.toUpperCase())}</div>
            <div class="album-block-info">
              <div class="album-block-meta">
                <span class="album-block-type-badge">${escapeHtml(info.type.toUpperCase())}</span>
                <span class="album-block-date">${escapeHtml(info.date)}</span>
              </div>
              <div class="album-block-name">${escapeHtml(name)}</div>
              <div class="album-block-counts">
                ${tracks.length} TRACKS
                <span class="count-divider">◆</span>
                ${collabsSet.size} COLABORADOR${collabsSet.size === 1 ? '' : 'ES'}
                <span class="count-divider">◆</span>
                ${info.year}
              </div>
            </div>
            <div class="album-block-toggle">+</div>
          </div>
          <div class="album-block-tracks">
            ${tracksHTML}
          </div>
        </div>
      `;
    })
    .join('');

  // Toggle expand
  container.querySelectorAll('.album-block-header').forEach((header) => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('expanded');
    });
  });

  // Click track → modal
  container.querySelectorAll('.album-track-row').forEach((row) => {
    row.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = Number(row.dataset.id);
      const track = DUKI_DATA.find((t) => t.id === id);
      if (track) openModal(track);
    });
  });
}

// ============================================================
// RENDER: VIEW TOGGLE
// ============================================================
function renderView() {
  document.querySelectorAll('.toggle-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === state.view);
  });
  document.getElementById('listView').classList.toggle('hidden', state.view !== 'list');
  document.getElementById('albumsView').classList.toggle('hidden', state.view !== 'albums');
  document.getElementById('statsView').classList.toggle('hidden', state.view !== 'stats');

  if (state.view === 'stats') {
    renderTimeline();
    renderAlbums();
    renderTopCollabs();
  }
  if (state.view === 'albums') {
    renderAlbumsFull();
  }
}

// ============================================================
// RENDER ALL
// ============================================================
function renderAll() {
  renderStatCards();
  renderCounter();
  renderFilters();
  renderTrackList();
  renderView();
  injectIcons();
}

// ============================================================
// MODAL
// ============================================================
function openModal(track) {
  state.selectedTrack = track;
  const modal = document.getElementById('detailModal');
  const body = document.getElementById('modalBody');
  const idLabel = document.getElementById('modalId');

  idLabel.textContent = '#' + String(track.id).padStart(3, '0');

  const dateStr = formatDate(track, true);
  const albumField = track.album
    ? `
      <div>
        <div class="modal-field-label">PROYECTO</div>
        <div class="modal-field-value">${escapeHtml(track.album)}</div>
      </div>
    `
    : '';
  const trackNumField = track.trackNum
    ? `
      <div>
        <div class="modal-field-label">TRACK #</div>
        <div class="modal-field-value">${track.trackNum}</div>
      </div>
    `
    : '';
  const collabsSection = track.collabs.length
    ? `
      <div class="modal-collabs">
        <div class="modal-collabs-label">COLABORADORES</div>
        <div class="modal-collabs-list">
          ${track.collabs.map((c) => `<span class="modal-collab-chip">${escapeHtml(c)}</span>`).join('')}
        </div>
      </div>
    `
    : '';

  body.innerHTML = `
    <div class="modal-body-type">${typeBadgeHTML(track.type)}</div>
    <h2 class="modal-title">${escapeHtml(track.title)}</h2>
    <div class="modal-divider"></div>
    <div class="modal-grid">
      <div>
        <div class="modal-field-label">FECHA DE LANZAMIENTO</div>
        <div class="modal-field-value">${escapeHtml(dateStr)}</div>
      </div>
      ${albumField}
      ${trackNumField}
      <div>
        <div class="modal-field-label">AÑO</div>
        <div class="modal-field-value">${track.year}</div>
      </div>
    </div>
    ${collabsSection}
    <div class="modal-footer">
      <div>SSJ RECORDS × DALE PLAY</div>
      <div>CLASIFICADO</div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  injectIcons(modal);
}

function closeModal() {
  document.getElementById('detailModal').classList.add('hidden');
  document.body.style.overflow = '';
  state.selectedTrack = null;
}

// ============================================================
// EVENT BINDING
// ============================================================
function bindEvents() {
  // Search
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    state.search = e.target.value;
    renderAll();
  });
  document.getElementById('searchClear').addEventListener('click', () => {
    state.search = '';
    searchInput.value = '';
    renderAll();
  });

  // Type chips
  document.querySelectorAll('#typeFilters .chip[data-type]').forEach((chip) => {
    chip.addEventListener('click', () => {
      state.typeFilter = chip.dataset.type;
      renderAll();
    });
  });

  // Clear all
  document.getElementById('clearAllBtn').addEventListener('click', () => {
    state.search = '';
    state.typeFilter = 'all';
    state.yearFilter = null;
    state.albumFilter = null;
    searchInput.value = '';
    renderAll();
  });

  // View toggle
  document.querySelectorAll('.toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.view = btn.dataset.view;
      renderAll();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Stat cards clickeables (DISCOS / EPS → vista álbumes)
  document.querySelectorAll('[data-goto]').forEach((card) => {
    card.addEventListener('click', () => {
      state.view = card.dataset.goto;
      renderAll();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.querySelector('#detailModal .modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('detailModal').classList.contains('hidden')) {
      closeModal();
    }
  });
}

// ============================================================
// POPUP UNA SOLA VEZ: "DUKI TE AMO SI VES ESTO"
// ============================================================
function showDukiPopupOnce() {
  const KEY = 'duki_te_amo_seen_v1';
  try {
    if (localStorage.getItem(KEY)) return;
    localStorage.setItem(KEY, String(Date.now()));
  } catch (_) {
    // si localStorage no está disponible, no mostramos para no spamear
    return;
  }

  const popup = document.getElementById('dukiPopup');
  if (!popup) return;
  popup.classList.remove('hidden');

  setTimeout(() => {
    popup.classList.add('fading');
    setTimeout(() => popup.classList.add('hidden'), 500);
  }, 5000);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  renderAll();
  showDukiPopupOnce();
});
