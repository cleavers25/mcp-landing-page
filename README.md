# Model Context Protocol (MCP) Landing Page

Landing page modern, interaktif, dan informatif untuk **Model Context Protocol (MCP)** — standar terbuka yang diperkenalkan oleh Anthropic untuk menghubungkan asisten AI (seperti Claude, Cursor, Antigravity, dan AI Agents) dengan database, file lokal, API eksternal, dan perkakas developer.

---

## ✨ Fitur Utama Landing Page

1. **Desain Modern & Responsif**:
   - Skema warna gelap/terang premium (*dark tech / obsidian & electric indigo/cyan*).
   - Glassmorphism, efek glow, grid pattern subtle, dan tipografi Plus Jakarta Sans & JetBrains Mono.
   - Responsif di desktop, tablet, dan smartphone dengan mobile drawer navigation.

2. **Dukungan Dua Bahasa (Bilingual ID / EN)**:
   - Bahasa Indonesia sebagai bahasa utama dengan terminologi teknis yang akurat.
   - Tombol toggle instan ke Bahasa Inggris (`ID` / `EN`) dengan persistensi state (`localStorage`).

3. **Mode Gelap & Terang (Dark / Light Mode)**:
   - Switch tema satu-klik dengan transisi warna halus dan penyimpanan pilihan pengguna.

4. **Interactive Architecture Visualizer**:
   - Papan simulasi visual interaktif yang menghubungkan **MCP Hosts** (Claude Desktop, Cursor, Agent) ↔ **Protokol MCP (JSON-RPC 2.0)** ↔ **MCP Servers** (PostgreSQL, Filesystem, GitHub).
   - Klik pada komponen mana saja untuk melihat animasi paket data dan **Inspektor Paket JSON-RPC 2.0 real-time**.

5. **Live Protocol Playground (JSON-RPC 2.0 Simulator)**:
   - Simulator pengiriman request protokol langsung di browser:
     - `tools/list` (Daftar tools server)
     - `tools/call` (Pemanggilan query PostgreSQL)
     - `resources/read` (Pembacaan file konfigurasi lokal terproteksi)
     - `prompts/get` (Template panduan review kode Git)
   - Dilengkapi latensi simulasi (`14ms`), visualizer request/response berdampingan, dan tombol salin JSON.

6. **Katalog & Direktori MCP Server Populer**:
   - Pencarian instan (*instant live search*) berdasarkan nama, kata kunci, atau deskripsi.
   - Filter kategori: **Semua**, **Database**, **Developer Tools**, **Web & Search**, **Produktivitas**, **AI Memory**.
   - Modal Konfigurasi interaktif dengan satu-klik salin JSON untuk file `claude_desktop_config.json` atau Cursor.

7. **Quickstart & Developer Walkthrough**:
   - Tab kode interaktif untuk:
     - **TypeScript SDK** (`@modelcontextprotocol/sdk`)
     - **Python SDK** (`mcp` / FastMCP)
     - **Konfigurasi Client JSON**
   - Tombol salin kode satu-klik.

8. **Pilar Inti & Komparasi N×M vs N+M**:
   - Penjelasan mendalam mengenai 4 Primitives MCP: *Tools*, *Resources*, *Prompts*, dan *Sampling*.
   - Komparasi visual mengapa MCP menyelesaikan masalah fragmentasi integrasi AI.

9. **Keamanan Enterprise & FAQ Accordion**:
   - Pembahasan mengenai kontrol izin lokal (*Human-in-the-loop*), sandbox direktori, dan transportasi stdio vs SSE.
   - Accordion interaktif untuk pertanyaan umum seputar MCP.

---

## 🚀 Cara Menjalankan Secara Lokal

Anda dapat membuka file `index.html` langsung di browser mana saja, atau menjalankan server lokal:

### Cara 1: Menggunakan Python (Bawaan)
```bash
python3 -m http.server 3000
```
Buka browser di: [http://localhost:3000](http://localhost:3000)

### Cara 2: Menggunakan npm
```bash
npm start
```

### Cara 3: Membuka Berkas Langsung
Klik dua kali pada file `index.html` atau buka melalui browser pilihan Anda.

---

## 📁 Struktur Berkas

```
.
├── index.html       # Markup HTML5 semantik, terstruktur, dan komponen UI
├── style.css        # Custom styles, glassmorphism, glow, animations, scrollbar
├── app.js           # State management, bilingual dictionary, visualizer, playground, search
├── package.json     # Script utilitas dan metadata proyek
└── README.md        # Dokumentasi proyek
```

---

## 📜 Lisensi
Proyek landing page ini dirilis di bawah lisensi [MIT License](LICENSE).
Spesifikasi Model Context Protocol dilisensikan secara terbuka oleh Anthropic.
