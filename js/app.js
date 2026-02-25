/* ─── Hi-Me App Core ─── */

// ── State ──
const App = {
  user: null,

  init() {
    const saved = localStorage.getItem('hime_user');
    if (saved) this.user = JSON.parse(saved);
    this._updateTime();
    setInterval(() => this._updateTime(), 30000);
  },

  login(user) {
    this.user = user;
    localStorage.setItem('hime_user', JSON.stringify(user));
  },

  logout() {
    this.user = null;
    localStorage.removeItem('hime_user');
    go('landing');
  },

  isLoggedIn() { return !!this.user; },

  _updateTime() {
    const els = document.querySelectorAll('.sb-time');
    const t = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false });
    els.forEach(el => el.textContent = t);
  }
};

// ── Router ──
function detectAppRoot() {
  const scriptEl = Array.from(document.scripts).find(s => /\/js\/app\.js(\?.*)?$/.test(s.src || ''));
  if (scriptEl) return (scriptEl.src || '').replace(/\/js\/app\.js(\?.*)?$/, '');
  const href = window.location.href;
  const pagesIdx = href.indexOf('/pages/');
  if (pagesIdx >= 0) return href.slice(0, pagesIdx);
  return href.replace(/\/[^/]*$/, '');
}

const APP_ROOT = detectAppRoot();
const CANONICAL_ROUTES = {
  landing: `${APP_ROOT}/index.html`,
  login: `${APP_ROOT}/pages/auth/login.html`,
  register: `${APP_ROOT}/pages/auth/register.html`,
  dashboard: `${APP_ROOT}/pages/dashboard/index.html`,
  'chat-bot': `${APP_ROOT}/pages/chat/bot.html`,
  profile: `${APP_ROOT}/pages/profile/index.html`,
  'profile-edit': `${APP_ROOT}/pages/profile/edit.html`,
  'profile-personal-info': `${APP_ROOT}/pages/profile/personal-info.html`,
  'profile-notifications': `${APP_ROOT}/pages/profile/notifications.html`,
  'profile-privacy': `${APP_ROOT}/pages/profile/privacy.html`,
  'profile-session-history': `${APP_ROOT}/pages/profile/session-history.html`,
  'profile-prescriptions': `${APP_ROOT}/pages/profile/prescriptions.html`,
  'profile-payment-history': `${APP_ROOT}/pages/profile/payment-history.html`,
  consultation: `${APP_ROOT}/pages/consultation/index.html`,
  'expert-list': `${APP_ROOT}/pages/expert/list.html`,
  'expert-detail': `${APP_ROOT}/pages/expert/detail.html`,
  booking: `${APP_ROOT}/pages/consultation/booking.html`,
  payment: `${APP_ROOT}/pages/payment/index.html`,
  'pay-success': `${APP_ROOT}/pages/payment/success.html`,
  'chat-list': `${APP_ROOT}/pages/chat/index.html`,
  'chat-room': `${APP_ROOT}/pages/chat/room.html`,
  'chat-call': `${APP_ROOT}/pages/chat/call.html`,
  'chat-start': `${APP_ROOT}/pages/chat/chat-start.html`,
  'chat-call-start': `${APP_ROOT}/pages/chat/call-start.html`,
  'chat-confirmation': `${APP_ROOT}/pages/chat/chat-start.html`,
  'chat-call-confirmation': `${APP_ROOT}/pages/chat/call-start.html`,
  'self-talk': `${APP_ROOT}/pages/self-talk/index.html`,
  'self-talk-new': `${APP_ROOT}/pages/self-talk/new.html`,
  'self-talk-detail': `${APP_ROOT}/pages/self-talk/detail.html`,
  summary: `${APP_ROOT}/pages/consultation/summary.html`,
  'profile-personal-info':   `${APP_ROOT}/pages/profile/personal-info.html`,
  'profile-notifications':   `${APP_ROOT}/pages/profile/notifications.html`,
  'profile-privacy':         `${APP_ROOT}/pages/profile/privacy.html`,
  'profile-session-history': `${APP_ROOT}/pages/profile/session-history.html`,
  'profile-prescriptions':   `${APP_ROOT}/pages/profile/prescriptions.html`,
  'profile-payment-history': `${APP_ROOT}/pages/profile/payment-history.html`,
};

const ROUTES = { ...CANONICAL_ROUTES };

function go(page, params = {}) {
  // Store params for next page
  if (Object.keys(params).length) {
    sessionStorage.setItem('hime_params', JSON.stringify(params));
  }
  const href = CANONICAL_ROUTES[page] || ROUTES[page];
  if (!href) { console.warn('Unknown route:', page); return; }
  const resolved = /^(https?:|file:|\/)/.test(href) ? href : new URL(href, window.location.href).href;
  window.location.href = resolved;
}

function goBack() { history.back(); }

function getParams() {
  const raw = sessionStorage.getItem('hime_params');
  return raw ? JSON.parse(raw) : {};
}

// ── Toast ──
function toast(msg, duration = 2800) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.querySelector('.phone')?.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), duration);
}

// ── Modal ──
function openSheet(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeSheet(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}
function overlayClick(e, id) {
  if (e.target === document.getElementById(id)) closeSheet(id);
}

// ── Helpers ──
function formatRupiah(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function timeNow() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false });
}

// ── Standard Icons + Emoji Cleanup ──
const ICON_PATHS = {
  home: ['M3 9.5L12 3l9 6.5', 'M5 10v9h14v-9', 'M9 19v-6h6v6'],
  chat: ['M4 5h16v10H7l-3 3V5z'],
  stethoscope: ['M8 4v5a4 4 0 0 0 8 0V4', 'M16 13a4 4 0 0 0 4 4', 'M20 17a2 2 0 1 1-4 0'],
  journal: ['M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2V4z', 'M8 4v14'],
  user: ['M20 21a8 8 0 0 0-16 0', 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8'],
  phone: ['M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18.85a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.81.31 1.6.57 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.73-1.09a2 2 0 0 1 2.11-.45c.75.26 1.54.45 2.35.57A2 2 0 0 1 22 16.92z'],
  building: ['M4 21h16', 'M6 21V7l6-4 6 4v14', 'M9 11h.01', 'M12 11h.01', 'M15 11h.01', 'M9 15h.01', 'M12 15h.01', 'M15 15h.01'],
  bot: ['M9 3h6', 'M12 3v3', 'M5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z', 'M9 13h.01', 'M15 13h.01'],
  search: ['M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z', 'M21 21l-4.3-4.3'],
  settings: ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M4.9 4.9l1.4 1.4', 'M17.7 17.7l1.4 1.4', 'M2 12h2', 'M20 12h2', 'M4.9 19.1l1.4-1.4', 'M17.7 6.3l1.4-1.4', 'M12 2v2', 'M12 20v2'],
  lock: ['M7 11V8a5 5 0 0 1 10 0v3', 'M5 11h14v10H5z'],
  bell: ['M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8', 'M10 20a2 2 0 0 0 4 0'],
  card: ['M3 7h18v10H3z', 'M3 11h18'],
  bank: ['M3 10l9-5 9 5', 'M5 10v8', 'M9 10v8', 'M15 10v8', 'M19 10v8', 'M3 18h18'],
  qr: ['M4 4h6v6H4z', 'M14 4h6v6h-6z', 'M4 14h6v6H4z', 'M14 14h2', 'M18 14h2', 'M14 18h2', 'M18 18h2'],
  wallet: ['M3 7h18v12H3z', 'M16 13h5', 'M5 7V5h12v2'],
  calendar: ['M7 3v4', 'M17 3v4', 'M4 8h16', 'M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1z'],
  share: ['M16 6l5 5-5 5', 'M21 11H9', 'M9 11v8a2 2 0 0 0 2 2h7'],
  send: ['M22 2L11 13', 'M22 2l-7 20-4-9-9-4z'],
  upload: ['M12 16V4', 'M7 9l5-5 5 5', 'M4 20h16'],
  download: ['M12 4v12', 'M7 11l5 5 5-5', 'M4 20h16'],
  check: ['M20 6L9 17l-5-5'],
  paper: ['M6 2h9l5 5v15H6z', 'M15 2v5h5'],
  money: ['M3 10h18v8H3z', 'M7 14h.01', 'M12 14h.01', 'M17 14h.01'],
  shield: ['M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z'],
  star: ['M12 3l2.8 5.8L21 9.8l-4.5 4.4 1.1 6.3L12 17.8 6.4 20.5l1.1-6.3L3 9.8l6.2-1z'],
  info: ['M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z', 'M12 16v-4', 'M12 8h.01'],
  help: ['M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z', 'M9.1 9a3 3 0 1 1 4.9 2.3c-.9.6-2 1.2-2 2.7', 'M12 17h.01'],
  logout: ['M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', 'M16 17l5-5-5-5', 'M21 12H9'],
};

const EMOJI_ICON_MAP = {
  '🏠': 'home',
  '💬': 'chat',
  '🩺': 'stethoscope',
  '📓': 'journal',
  '👤': 'user',
  '📞': 'phone',
  '🏢': 'building',
  '🤖': 'bot',
  '🔍': 'search',
  '🎛': 'settings',
  '🎛️': 'settings',
  '🔒': 'lock',
  '🔔': 'bell',
  '💳': 'card',
  '🏦': 'bank',
  '📸': 'qr',
  '📱': 'wallet',
  '📅': 'calendar',
  '📤': 'share',
  '📥': 'download',
  '📋': 'paper',
  '💾': 'upload',
  '✅': 'check',
  '🛡': 'shield',
  '💰': 'money',
  '🎟': 'paper',
  '⭐': 'star',
  '🌟': 'star',
  '❓': 'help',
  'ℹ': 'info',
  'ℹ️': 'info',
  '🚪': 'logout',
};

const EMOJI_RE = /[\p{Extended_Pictographic}\uFE0F]/gu;
const EMOJI_TEST_RE = /[\p{Extended_Pictographic}\uFE0F]/u;

function iconSvg(name) {
  const paths = ICON_PATHS[name];
  if (!paths) return '';
  return `<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true">${paths.map((d) => `<path d="${d}"></path>`).join('')}</svg>`;
}

function cleanEmojiToken(text) {
  return (text || '').trim().replace(/\uFE0F/g, '');
}

function setElementIcon(el, iconName) {
  const svg = iconSvg(iconName);
  if (!svg) return;
  el.innerHTML = svg;
  el.dataset.iconified = '1';
}

function getNavIconName(label) {
  const txt = (label || '').trim().toLowerCase();
  if (txt.includes('home')) return 'home';
  if (txt.includes('chat')) return 'chat';
  if (txt.includes('konsultasi')) return 'stethoscope';
  if (txt.includes('self talk')) return 'journal';
  if (txt.includes('profil')) return 'user';
  return '';
}

function iconifyBottomNav() {
  document.querySelectorAll('.bottomnav .nav-item').forEach((item) => {
    const labelEl = item.querySelector('.nav-label');
    const iconEl = item.querySelector('.nav-icon');
    if (!iconEl || !labelEl) return;
    const iconName = getNavIconName(labelEl.textContent);
    if (!iconName) return;
    setElementIcon(iconEl, iconName);
  });
}

function iconifyEmojiOnlyElements() {
  const iconTargets = [
    '[class*="icon"]',
    '.menu-ico',
    '.eh-filter-btn',
    '.hero-share',
    '.cta-chat-btn',
    '.fo-emoji',
    '.cause-icon',
    '.act-btn',
  ].join(',');

  document.querySelectorAll(iconTargets).forEach((el) => {
    if (el.dataset.iconified === '1') return;
    if (el.children.length > 0) return;
    const token = cleanEmojiToken(el.textContent);
    const iconName = EMOJI_ICON_MAP[token];
    if (!iconName) return;
    setElementIcon(el, iconName);
  });
}

function stripEmojisFromText(root = document.body) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA' || tag === 'INPUT') {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest('.mood-card, .mood-options, .mood-opt, .mood-emoji')) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest('.nav-icon,[class*="icon"]')) return NodeFilter.FILTER_REJECT;
      if (!EMOJI_TEST_RE.test(node.nodeValue || '')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const cleaned = (node.nodeValue || '')
      .replace(EMOJI_RE, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s+([,.!?;:])/g, '$1');
    node.nodeValue = cleaned;
  });
}

function applyStandardIcons() {
  iconifyBottomNav();
  iconifyEmojiOnlyElements();
  stripEmojisFromText();
}

// ── Mock Data ──
const DATA = {
  experts: [
    { id: 1, name: 'Dr. Amara Wijaya', role: 'Psikolog Klinis', spec: ['Anxiety', 'Depresi', 'Trauma'], rating: 4.9, reviews: 128, sessions: 340, price: 150000, exp: '8 tahun', online: true, init: 'AW', color: '#D8F3DC', textColor: '#2D6A4F', bio: 'Psikolog klinis berpengalaman dengan fokus pada penanganan kecemasan, depresi, dan trauma. Menggunakan pendekatan CBT dan mindfulness dalam setiap sesi.' },
    { id: 2, name: 'Reza Mahardika, M.Psi', role: 'Mental Health Consultant', spec: ['Stres Kerja', 'Burnout', 'Relationship'], rating: 4.8, reviews: 94, sessions: 210, price: 120000, exp: '5 tahun', online: true, init: 'RM', color: '#DBEAFE', textColor: '#1E40AF', bio: 'Konsultan kesehatan mental spesialis stres kerja dan burnout pada profesional muda.' },
    { id: 3, name: 'Sari Dewanti, S.Psi', role: 'Analyst & Counselor', spec: ['Self-esteem', 'Komunikasi', 'Identitas'], rating: 4.7, reviews: 67, sessions: 155, price: 100000, exp: '3 tahun', online: false, init: 'SD', color: '#FEF3C7', textColor: '#92400E', bio: 'Analis dan konselor yang berfokus pada pengembangan diri dan peningkatan kepercayaan diri.' },
    { id: 4, name: 'Dr. Bagas Pratama', role: 'Psikolog Klinis', spec: ['Tidur', 'Fobia', 'OCD'], rating: 4.9, reviews: 156, sessions: 420, price: 175000, exp: '10 tahun', online: true, init: 'BP', color: '#EDE9FE', textColor: '#5B21B6', bio: 'Psikolog klinis senior dengan keahlian khusus dalam gangguan tidur, fobia, dan OCD.' },
  ],

  diary: [
    { id: 1, date: '2024-01-15', feeling: 'Tidak nyaman', cause: 'Pekerjaan', emotions: ['Pusing', 'Bingung'], text: 'Hari ini terasa berat sekali. Banyak deadline yang menumpuk dan aku tidak tahu harus mulai dari mana...', mood: 'low' },
    { id: 2, date: '2024-01-13', feeling: 'Nyaman', cause: 'Dalam diri sendiri', emotions: ['Ruwet'], text: 'Merasa lebih baik hari ini setelah meditasi pagi. Pikiran sedikit lebih jernih dan bisa fokus...', mood: 'mid' },
  ],
};

// Run on load
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  applyStandardIcons();
});
