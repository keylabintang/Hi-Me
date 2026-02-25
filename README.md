# Hi-Me — Mental Health Consultation Web App (Mobile Wireframe)

## Overview

Hi-Me adalah platform konsultasi kesehatan mental berbasis web app dengan pendekatan mobile-first. Platform ini memungkinkan pengguna untuk mendapatkan dukungan profesional dari psikolog, analyst, dan consultant melalui konsultasi online (chat dan call) maupun sesi offline (tatap muka).

Hi-Me juga menyediakan fitur Self Talk, yaitu diary privat untuk membantu pengguna memahami, mengekspresikan, dan mengelola kondisi emosional mereka secara mandiri.

Project ini merupakan wireframe interaktif berbasis HTML, CSS, dan JavaScript tanpa menggunakan framework atau backend, dan dapat dijalankan langsung secara lokal tanpa environment setup.

---

## Cara Menjalankan

1. Extract file zip
2. Buka folder `hi-me`
3. Buka file `index.html` langsung di browser (double-click)
4. Tidak perlu server, tidak perlu npm/pip/setup apapun

> Dioptimalkan untuk tampilan mobile (390px). Di desktop, tampilan akan muncul sebagai "phone frame" di tengah layar.

---

## Status Pengembangan

### ✅ Phase 1.1 — Fondasi & Alur Utama (SELESAI)

Fokus: Semua halaman inti untuk role **User** — autentikasi, beranda, bot chat, dan profil.

**Halaman yang sudah dibuat:**

| Halaman | Path | Status |
|---|---|---|
| Landing Page | `index.html` | ✅ Done |
| Login | `pages/auth/login.html` | ✅ Done |
| Register (3 step) | `pages/auth/register.html` | ✅ Done |
| Dashboard / Beranda | `pages/dashboard/index.html` | ✅ Done |
| Bot Chat (free, no login) | `pages/chat/bot.html` | ✅ Done |
| Profil User | `pages/profile/index.html` | ✅ Done |
| Edit Profil | `pages/profile/edit.html` | ✅ Done |

**Fitur Phase 1.1:**
- Landing page dengan hero, statistik, fitur unggulan, dan CTA
- Login dengan email/password + Google + Apple (simulasi)
- Register 3 langkah: info dasar → kata sandi (dengan strength indicator) → profil & tujuan
- Dashboard dengan mood check harian, upcoming session, quick actions, rekomendasi expert, artikel
- Bot chat AI dengan quick replies, typing indicator, upgrade prompt setelah 3 pesan, prompt login setelah 5 pesan
- Profil lengkap dengan statistik, menu akun, menu konsultasi, logout dengan konfirmasi
- Edit profil dengan validasi dan update state

---

### ✅ Phase 1.2 — Expert & Booking Sesi (SELESAI)

Fokus: Pencarian expert, detail profil, konsultasi home, dan booking sesi untuk role **User**.

**Halaman yang sudah dibuat:**

| Halaman | Path | Status |
|---|---|---|
| Daftar Expert | `pages/expert/list.html` | ✅ Done |
| Detail Expert | `pages/expert/detail.html` | ✅ Done |
| Konsultasi Home | `pages/consultation/index.html` | ✅ Done |
| Booking Sesi (3 step) | `pages/consultation/booking.html` | ✅ Done |

**Fitur Phase 1.2:**
- Daftar expert dengan search real-time, filter chip (Semua/Online/Psikolog/Konsultan/Anxiety/Depresi/Stres)
- Sort by: Rating Tertinggi / Harga Terendah / Harga Tertinggi / Banyak Sesi / Banyak Ulasan
- Filter sheet lanjutan: ketersediaan, jenis expert, spesialisasi, rating minimum
- Expert card lengkap: avatar inisial, online dot, spesialisasi, harga, jumlah sesi
- Detail expert: stats row (rating/ulasan/sesi/pengalaman), 3 tabs (Tentang / Jadwal / Ulasan)
- Tab Jadwal: pilih tanggal 7 hari ke depan + pilih slot waktu (ada unavailable) → tombol booking
- Tab Ulasan: summary dengan rating bar, 3 mock review
- Sticky CTA bawah dengan harga, tombol chat, dan tombol booking
- Konsultasi Home: type selector (Chat/Call/Offline), statistik sesi, sesi mendatang dengan aksi, mini scroll expert
- Booking 3 langkah dengan progress bar: pilih tipe & durasi & catatan → pilih jadwal → ringkasan + kode promo (HIME20)

---

### ✅ Phase 1.3 — Self Talk & Chat (SELESAI)

Fokus: Fitur diary Self Talk dan chat room konsultasi aktif.

**Halaman yang sudah dibuat:**

| Halaman | Path | Status |
|---|---|---|
| Chat List | `pages/chat/index.html` | ✅ Done |
| Chat Room (sesi aktif) | `pages/chat/room.html` | ✅ Done |
| Session Summary + Rating | `pages/consultation/summary.html` | ✅ Done |
| Self Talk Home | `pages/self-talk/index.html` | ✅ Done |
| Tulis Diary (questionnaire) | `pages/self-talk/new.html` | ✅ Done |
| Detail Diary | `pages/self-talk/detail.html` | ✅ Done |

**Fitur Phase 1.3:**
- Self Talk Home: mood tracker bar mingguan, streak stats (hari berturut/total/mood positif%), insight mingguan berbasis AI, daftar diary dengan preview & chip emosi
- Tulis Diary: questionnaire 4 langkah (perasaan → penyebab → emosi multi-select → teks bebas), progress bar, validasi per langkah, tombol rekam suara (simulasi), banner "Need Support" ke expert
- Detail Diary: visualisasi emosi dengan gradient, mood level indicator bar, catatan diary lengkap, quick actions (bagikan/edit/hapus), rekomendasi konsultasi & teknik relaksasi
- Chat List: filter Semua/Aktif/Mendatang/Selesai, banner sesi berlangsung dengan countdown timer, status badge per chat (berlangsung/mendatang/selesai), bot AI shortcut
- Chat Room: topbar expert + status online, session timer countdown, gelembung chat dengan typing indicator, auto-reply simulasi, tombol akhiri sesi
- Session Summary: hero dengan stats sesi, catatan & rekomendasi dari expert, grid "Langkah Selanjutnya" (4 opsi), form rating bintang interaktif + textarea ulasan

---

### 🔜 Phase 1.4 — Payment & Halaman Lanjutan (PLANNED)

Fokus: Sistem pembayaran lengkap dan halaman-halaman pendukung.

**Halaman yang akan dibuat/disempurnakan:**

| Halaman | Path | Status |
|---|---|---|
| Payment (multi-metode) | `pages/payment/index.html` | 🔜 Planned |
| Payment Success | `pages/payment/success.html` | 🔜 Planned |

**Rencana fitur Phase 1.4:**
- Payment: pilih metode (Virtual Account/E-Wallet/Debit/Credit), timer countdown pembayaran, instruksi langkah-per-langkah
- Payment Success: konfirmasi, booking details, tombol ke chat room

---

### 🔮 Phase 2 — Expert Role (PLANNED)
### 🔮 Phase 3 — Admin Role (PLANNED)

---

## Purpose

- Membuat wireframe interaktif web app dengan layout mobile
- Mensimulasikan alur aplikasi mental health consultation platform
- Menyediakan prototype interaktif untuk UI/UX design, testing, dan portfolio
- Menjadi foundation untuk pengembangan aplikasi production
- Mensimulasikan sistem dengan multi-role (User, Expert, Admin)

---

## Target Users

Target utama: Gen Z (usia 16–30 tahun) yang membutuhkan dukungan kesehatan mental.

Secondary: Psikolog, mental health consultant, analyst, admin platform.

---

## User Roles

### 1. User (Mobile Layout)
Login/register · Chat bot · Konsultasi online (chat & call) · Booking offline · Self Talk diary · Pembayaran · Session summary · Rating & feedback

### 2. Expert (Mobile Layout) — Phase 2
Login · Jadwal konsultasi · Availability · Terima konsultasi · Chat dengan user · Profil

### 3. Admin (Desktop Layout) — Phase 3
Dashboard · Kelola user · Kelola & verifikasi expert · Kelola konsultasi · Kelola pembayaran · Laporan

---

## Core Features

### Authentication
Landing page → Login / Register / Bot (tanpa login)
- Email + password
- Google login (simulasi)
- Apple login (simulasi)
- Register 3 langkah dengan strength indicator

### User Dashboard
- Personal greeting + initials avatar
- Mood check harian
- Upcoming consultation card
- Quick action grid (4 aksi)
- Rekomendasi expert (horizontal scroll)
- Artikel kesehatan mental

### Bot Chat (Free)
- Tanpa login
- AI responses kontekstual (stres, tidur, cemas, cari psikolog)
- Quick reply chips
- Typing indicator
- Upgrade prompt setelah 3 pesan
- Login prompt setelah 5 pesan

### Self Talk — Phase 1.2
Questionnaire: perasaan (nyaman/tidak) → penyebab (internal/external) → emosi (8 pilihan) → tulis diary → text + voice (simulasi) → Need Support button

### Online Consultation — Phase 1.2
Pilih jenis (chat/call) → pilih expert → pilih jadwal → sesi aktif → summary → rating

### Offline Booking — Phase 1.2
Pilih expert → pilih lokasi → pilih jadwal → booking → bayar → summary → rating → resep (opsional)

### Payment System — Phase 1.2
Virtual Account · E-Wallet · Debit Card · Credit Card · Invoice · Konfirmasi

---

## Navigation Structure

### User (Mobile Bottom Nav)
🏠 Home · 💬 Chat · 🩺 Konsultasi · 📓 Self Talk · 👤 Profil

---

## Design System

- **Font:** Plus Jakarta Sans (body) + DM Serif Display (heading/accent)
- **Primary Color:** #2D6A4F (green-700)
- **Background:** #F5F7F5
- **Card:** #FFFFFF
- **Border Radius:** 6px / 10px / 14px / 20px / 26px / 32px / 44px
- **Shadows:** xs, sm, md, lg
- **Animations:** fadeUp, fadeIn, scaleIn, bounceIn dengan stagger delay

---

## Project Structure

```
hi-me/
├── index.html                    ← Entry point (Landing Page)
├── css/
│   └── global.css               ← Design system & global styles
├── js/
│   └── app.js                   ← Router, state, data, utilities
└── pages/
    ├── auth/
    │   ├── login.html
    │   └── register.html
    ├── dashboard/
    │   └── index.html
    ├── chat/
    │   ├── bot.html             ← Free AI chat (Phase 1.1)
    │   ├── index.html           ← Chat list (Phase 1.2)
    │   └── room.html            ← Chat room (Phase 1.2)
    ├── consultation/
    │   ├── index.html           ← Phase 1.2
    │   ├── booking.html         ← Phase 1.2
    │   └── summary.html         ← Phase 1.2
    ├── expert/
    │   ├── list.html            ← Phase 1.2
    │   └── detail.html          ← Phase 1.2
    ├── payment/
    │   ├── index.html           ← Phase 1.2
    │   └── success.html         ← Phase 1.2
    ├── self-talk/
    │   ├── index.html           ← Phase 1.2
    │   ├── new.html             ← Phase 1.2
    │   └── detail.html          ← Phase 1.2
    └── profile/
        ├── index.html
        └── edit.html
```
