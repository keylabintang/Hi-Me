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
  'self-talk': `${APP_ROOT}/pages/self-talk/index.html`,
  'self-talk-new': `${APP_ROOT}/pages/self-talk/new.html`,
  'self-talk-detail': `${APP_ROOT}/pages/self-talk/detail.html`,
  summary: `${APP_ROOT}/pages/consultation/summary.html`,
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
document.addEventListener('DOMContentLoaded', () => App.init());
