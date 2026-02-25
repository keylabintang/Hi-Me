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

### ✅ Phase 1.4 — Payment System (SELESAI)

Fokus: Sistem pembayaran lengkap untuk menyelesaikan alur User end-to-end.

**Halaman yang sudah dibuat:**

| Halaman | Path | Status |
|---|---|---|
| Payment (multi-metode) | `pages/payment/index.html` | ✅ Done |
| Payment Success | `pages/payment/success.html` | ✅ Done |

**Fitur Phase 1.4:**
- **Payment Page:**
  - Countdown timer 15 menit dengan warning merah di 60 detik terakhir
  - Order summary card bergradient dengan detail expert, tipe sesi, jadwal
  - Kode promo interaktif: HIME20 (diskon 20%) & FIRSTIME (hemat Rp 50.000), badge diskon & harga coret
  - 4 metode pembayaran: Transfer Bank/VA (BCA, BNI, BRI, Mandiri), E-Wallet (GoPay, OVO, DANA, ShopeePay), QRIS, Kartu Debit/Kredit
  - Form kartu kredit dengan auto-formatting nomor kartu & expiry date
  - Processing overlay dengan spinner saat memproses pembayaran
  - CTA bar sticky dengan total akhir dan catatan keamanan SSL

- **Payment Success Page:**
  - Animasi confetti 28 partikel warna-warni saat halaman muncul
  - Checkmark bounce-in animation dengan hero gradient hijau
  - Invoice card dengan nomor unik otomatis (INV-YYYYMMDD-XXXXX), status LUNAS, detail lengkap
  - Ticket-style divider (berlubang di sisi kanan-kiri) memisahkan invoice detail & total
  - Expert row dengan detail sesi yang baru dikonfirmasi
  - Reminder card kuning untuk persiapan sesi
  - Checklist 4 langkah "Apa yang harus dilakukan selanjutnya"
  - 3 CTA: Lihat Sesi → Chat List, Bagikan Bukti (native share API), Kembali ke Beranda

---

### ✅ Phase 1.5 — Profile Completion (SELESAI)

Fokus: Melengkapi semua sub-halaman profil user agar alur akun terasa utuh dan production-ready.

**Halaman yang sudah dibuat:**

| Halaman | Path | Status |
|---|---|---|
| Informasi Pribadi | `pages/profile/personal-info.html` | ✅ Done |
| Notifikasi | `pages/profile/notifications.html` | ✅ Done |
| Privasi & Keamanan | `pages/profile/privacy.html` | ✅ Done |
| Riwayat Sesi | `pages/profile/session-history.html` | ✅ Done |
| Resep & Catatan Expert | `pages/profile/prescriptions.html` | ✅ Done |
| Riwayat Pembayaran | `pages/profile/payment-history.html` | ✅ Done |

**Fitur Phase 1.5:**

- **Informasi Pribadi:**
  - Avatar hero dengan gradient + tombol ganti foto
  - Form fields inline (tanpa border kotak) untuk nama, panggilan, tanggal lahir, gender, email, telepon, kota
  - Selector gender dengan chip interaktif (Laki-laki / Perempuan / Lainnya)
  - Multi-select tag kondisi kesehatan (Kecemasan, Stres Kerja, Depresi, Burnout, dll.)
  - Tombol "Ubah" dan "Verifikasi" inline untuk email & nomor telepon
  - Validasi + update App.user state saat simpan

- **Notifikasi:**
  - Kotak masuk (inbox) 5 notifikasi dengan state baca/belum, badge counter "3 Baru"
  - Tombol "Tandai Dibaca" massal
  - Toggle switch untuk 6 kategori push notifikasi: Pengingat Sesi, Pesan Expert, Self Talk, Promo, Pembayaran, Artikel
  - Chip pilihan waktu pengingat sesi: 30 menit / 1 jam / 2 jam / 1 hari
  - Toggle email notification: Invoice & Ringkasan Sesi

- **Privasi & Keamanan:**
  - Security score card bergradient hijau tua dengan ring indicator (80 → 100 setelah aktifkan 2FA)
  - Chip status: ✓ Password, ✓ Email, 2FA
  - Ubah kata sandi via bottom sheet dengan strength indicator 4-bar warna
  - Toggle Autentikasi 2 Faktor (badge Aktif/Nonaktif berubah real-time)
  - Log aktivitas akun dalam bottom sheet (login, pembayaran, perubahan profil)
  - Toggle privasi: Sembunyikan Profil & Analitik
  - Unduh Data Saya & link Kebijakan Privasi
  - Zona Berbahaya: Nonaktifkan Akun & Hapus Akun Permanen (dengan konfirmasi sheet detail)

- **Riwayat Sesi:**
  - Stats strip: Total Sesi / Selesai / Psikolog / Rata-rata Rating
  - Filter tabs: Semua / Mendatang / Selesai / Dibatalkan — hide/show kartu + month separator
  - Banner sesi mendatang bergradient dengan CTA langsung ke Chat
  - Kartu sesi dengan: avatar expert, status badge berwarna, grid meta 4 kolom (Tanggal/Waktu/Durasi/Tipe)
  - Footer kartu: rating + ulasan, tombol "Lihat Detail" menuju Session Summary
  - Kartu dibatalkan dengan info refund + tombol "Booking Ulang"

- **Resep & Catatan Expert:**
  - Filter tabs: Semua / Catatan / Tugas / Obat-Suplemen
  - Kartu Catatan dengan header gradient berwarna per expert, chip status Baru/Dibaca
  - Bullet observasi expert (🔍 diagnosis, 💡 insight, 🌟 kekuatan)
  - Kartu Tugas Mandiri (homework) dengan checklist interaktif — klik untuk centang/uncentang, badge "X/Y Selesai"
  - Kartu Suplemen dengan daftar item (ikon, nama, dosis, frekuensi), warning card kuning
  - Tombol "Unduh PDF" per kartu

- **Riwayat Pembayaran:**
  - Summary strip bergradient: Total Dikeluarkan / Jumlah Transaksi / Hemat Promo
  - Filter tabs: Semua / Berhasil / Menunggu / Refund — filter kartu + hide month separator kosong
  - 7 transaksi mock tersebar di 3 bulan (Nov–Jan) dengan status berbeda
  - Chip metadata per kartu: tanggal, metode bayar, kode promo yang dipakai
  - Bottom sheet detail invoice per transaksi: semua field lengkap, harga coret jika ada diskon, catatan
  - Aksi kontekstual per status: Unduh Invoice (sukses), Cara Bayar + Batalkan (pending), Bukti Refund + Booking Ulang (refund)

---



Fokus: Dashboard dan alur kerja untuk role **Expert** (Psikolog, Konsultan, Analyst).

**Halaman yang direncanakan:**

| Halaman | Path | Status |
|---|---|---|
| Expert Login | `pages/expert/auth/login.html` | 🔮 Planned |
| Expert Dashboard | `pages/expert/dashboard/index.html` | 🔮 Planned |
| Jadwal Konsultasi | `pages/expert/schedule/index.html` | 🔮 Planned |
| Terima Sesi / Chat | `pages/expert/chat/room.html` | 🔮 Planned |
| Profil Expert | `pages/expert/profile/index.html` | 🔮 Planned |
| Availability Setting | `pages/expert/availability/index.html` | 🔮 Planned |

**Rencana fitur Phase 2:**
- Login khusus expert (role selector di halaman login)
- Dashboard expert: sesi hari ini, pendapatan, statistik, rating
- Manajemen jadwal & availability (set jam tersedia per hari)
- Notifikasi sesi masuk, terima/tolak request konsultasi
- Chat room dari sisi expert dengan tools: kirim catatan, end session, tulis summary
- Profil expert dengan edit bio, spesialisasi, foto, harga

---

### 🔮 Phase 3 — Admin Role (PLANNED)

Fokus: Dashboard admin dengan layout **desktop** untuk kelola seluruh platform.

**Rencana fitur Phase 3:**
- Dashboard statistik: total user, expert, sesi, pendapatan
- Kelola & verifikasi expert (approve/reject, edit profil)
- Kelola konsultasi (monitor sesi aktif, riwayat)
- Kelola pembayaran & laporan keuangan
- Manajemen konten (artikel, notifikasi platform)

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
        ├── edit.html
        ├── personal-info.html   ← Phase 1.5
        ├── notifications.html   ← Phase 1.5
        ├── privacy.html         ← Phase 1.5
        ├── session-history.html ← Phase 1.5
        ├── prescriptions.html   ← Phase 1.5
        └── payment-history.html ← Phase 1.5
```
