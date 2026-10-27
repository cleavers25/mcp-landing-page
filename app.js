/**
 * Model Context Protocol (MCP) Landing Page Interactive Script
 * Features:
 * - Dual Language Support (ID / EN)
 * - Dark / Light Mode with LocalStorage
 * - Interactive Protocol Architecture Visualizer
 * - Live JSON-RPC 2.0 Playground & Simulator
 * - Filterable Server Directory with Config Modal
 * - Code Tabs & Copy-to-Clipboard
 * - FAQ Accordion
 */

// --- 1. TRANSLATION DICTIONARY ---
const translations = {
  id: {
    nav_about: "Tentang MCP",
    nav_arch: "Arsitektur",
    nav_primitives: "Primitives",
    nav_playground: "Playground",
    nav_directory: "Katalog Server",
    nav_quickstart: "Quickstart",
    nav_faq: "FAQ",
    nav_cta: "Mulai Sekarang",

    hero_badge: "Standar Terbuka Anthropic • Ekosistem AI Universal",
    hero_title: "Standar Terbuka yang Menghubungkan AI ke Seluruh Data & Tools Anda",
    hero_desc: "Model Context Protocol (MCP) adalah \"USB-C untuk aplikasi AI\". Protokol terbuka yang aman dan terstandarisasi untuk menjembatani LLM dengan database, berkas lokal, API bisnis, dan devtools tanpa integrasi kustom yang berulang.",
    hero_cta_primary: "Jelajahi Quickstart",
    hero_cta_secondary: "Coba Playground MCP",
    hero_stat_standard: "Open Standard",
    hero_stat_standard_sub: "JSON-RPC 2.0 & Transport Agnostik",
    hero_stat_servers: "100+ Servers",
    hero_stat_servers_sub: "Postgres, GitHub, Slack, SQLite, dll",
    hero_stat_community: "Didukung Ekosistem",
    hero_stat_community_sub: "Claude Desktop, Cursor, Antigravity, Zed",

    vis_title: "Simulator Alur Protokol MCP Interaktif",
    vis_subtitle: "Klik pada salah satu Host atau Server untuk melihat simulasi aliran paket data JSON-RPC 2.0 secara real-time.",
    vis_client_label: "MCP CLIENT / HOST",
    vis_protocol_label: "PROTOKOL MCP (JSON-RPC 2.0)",
    vis_server_label: "MCP SERVERS (DATA & TOOLS)",
    vis_packet_inspector: "Inspektor Paket Protokol",
    vis_transport: "Transportasi:",
    vis_status: "Status:",
    vis_ready: "Terhubung & Siap",

    prob_badge: "Mengapa MCP Dibutuhkan?",
    prob_title: "Mengakhiri Masalah Fragmentasi Integrasi AI (N × M)",
    prob_desc: "Sebelum MCP, setiap aplikasi AI harus membuat konektor custom untuk setiap sumber data. MCP mengubah kekacauan N×M menjadi standar universal N+M.",
    prob_before_title: "Sebelum MCP: Fragmentasi N × M",
    prob_before_desc: "Setiap model atau IDE harus membangun integrasi unik ke masing-masing API atau database. Rawan kesalahan, keamanan tidak terstandarisasi, dan sulit dirawat.",
    prob_after_title: "Dengan MCP: Standar Universal N + M",
    prob_after_desc: "Buat server MCP sekali, gunakan di semua client (Claude, Cursor, Antigravity, Zed, script custom). Keamanan berbasis izin lokal dan arsitektur modular.",

    prim_badge: "Empat Komponen Utama",
    prim_title: "Pondasi Arsitektur Model Context Protocol",
    prim_desc: "MCP dibangun di atas empat konsep fundamental yang memungkinkan AI berinteraksi secara aman dengan lingkungan eksternal.",
    prim_tools_title: "Tools (Alat Eksekusi)",
    prim_tools_desc: "Fungsi yang dapat dipanggil oleh model AI untuk melakukan tindakan nyata, seperti menjalankan query SQL, membuat commit Git, atau mengirim notifikasi.",
    prim_resources_title: "Resources (Sumber Data)",
    prim_resources_desc: "Konteks pasif berupa URI terstruktur (file://, db://) yang dapat dibaca LLM seperti berkas konfigurasi, log aplikasi, atau skema database.",
    prim_prompts_title: "Prompts (Template Kontekstual)",
    prim_prompts_desc: "Template prompt siap pakai yang disediakan server untuk membantu pengguna menjalankan alur kerja kompleks dengan panduan teruji.",
    prim_sampling_title: "Sampling (Agentic Loop)",
    prim_sampling_desc: "Fitur canggih di mana server dapat meminta model AI untuk melakukan penalaran berulang atau penalaran sub-tugas dalam batas aman.",

    play_badge: "Coba Langsung",
    play_title: "Interactive Protocol Playground",
    play_desc: "Simulasikan pesan JSON-RPC 2.0 antara MCP Client dan MCP Server. Pilih operasi atau ubah parameter untuk melihat respons langsung.",
    play_operation: "Pilih Operasi Protokol:",
    play_btn_send: "Kirim Request (JSON-RPC)",
    play_sending: "Mengirim...",
    play_req_header: "Request Payload (Client → Server via stdio/sse)",
    play_res_header: "Response Payload (Server → Client)",
    play_copied: "Tersalin!",
    play_copy: "Salin JSON",

    dir_badge: "Ekosistem Server",
    dir_title: "Katalog MCP Server Populer",
    dir_desc: "Pilih dari puluhan server MCP resmi dan komunitas yang siap dihubungkan ke asisten AI favorit Anda dalam hitungan detik.",
    dir_search_placeholder: "Cari server MCP (misal: postgres, github, slack, sqlite)...",
    dir_cat_all: "Semua",
    dir_cat_db: "Database",
    dir_cat_dev: "Developer Tools",
    dir_cat_web: "Web & Search",
    dir_cat_prod: "Produktivitas",
    dir_cat_ai: "AI Memory",
    dir_view_config: "Lihat Konfigurasi",

    quick_badge: "Mulai Membangun",
    quick_title: "Membuat MCP Server Pertama Anda dalam 3 Menit",
    quick_desc: "Ikuti langkah sederhana menggunakan SDK resmi TypeScript atau Python, atau langsung pasang server siap pakai ke Claude Desktop / Cursor.",
    quick_tab_ts: "TypeScript SDK",
    quick_tab_py: "Python SDK",
    quick_tab_config: "Konfigurasi Client JSON",

    faq_badge: "Tanya Jawab",
    faq_title: "Pertanyaan yang Sering Diajukan",
    faq_desc: "Semua yang perlu Anda ketahui mengenai lisensi, kompatibilitas, dan penerapan Model Context Protocol.",

    footer_tagline: "Model Context Protocol — Standar terbuka untuk mengintegrasikan konteks dan alat AI secara aman dan universal.",
    footer_quick_links: "Tautan Cepat",
    footer_resources: "Dokumentasi & Sumber Daya",
    footer_spec: "Spesifikasi Resmi MCP",
    footer_github: "GitHub Repository",
    footer_docs: "Dokumentasi Anthropic",
    footer_created_with: "Dibuat untuk Komunitas Pengembang AI",
  },
  en: {
    nav_about: "About MCP",
    nav_arch: "Architecture",
    nav_primitives: "Primitives",
    nav_playground: "Playground",
    nav_directory: "Server Catalog",
    nav_quickstart: "Quickstart",
    nav_faq: "FAQ",
    nav_cta: "Get Started",

    hero_badge: "Anthropic Open Standard • Universal AI Ecosystem",
    hero_title: "The Open Standard Connecting AI to All Your Data & Tools",
    hero_desc: "Model Context Protocol (MCP) is the \"USB-C for AI applications\". A secure, standardized open protocol bridging LLMs with databases, local files, business APIs, and devtools without brittle custom integrations.",
    hero_cta_primary: "Explore Quickstart",
    hero_cta_secondary: "Try MCP Playground",
    hero_stat_standard: "Open Standard",
    hero_stat_standard_sub: "JSON-RPC 2.0 & Transport Agnostic",
    hero_stat_servers: "100+ Servers",
    hero_stat_servers_sub: "Postgres, GitHub, Slack, SQLite, etc.",
    hero_stat_community: "Ecosystem Backed",
    hero_stat_community_sub: "Claude Desktop, Cursor, Antigravity, Zed",

    vis_title: "Interactive MCP Protocol Flow Visualizer",
    vis_subtitle: "Click any Host or Server to simulate live JSON-RPC 2.0 packet transmissions across the protocol bridge.",
    vis_client_label: "MCP CLIENT / HOST",
    vis_protocol_label: "MCP PROTOCOL (JSON-RPC 2.0)",
    vis_server_label: "MCP SERVERS (DATA & TOOLS)",
    vis_packet_inspector: "Protocol Packet Inspector",
    vis_transport: "Transport:",
    vis_status: "Status:",
    vis_ready: "Connected & Ready",

    prob_badge: "Why MCP Matters?",
    prob_title: "Ending the N × M AI Integration Fragmentation",
    prob_desc: "Before MCP, every AI app had to craft custom connectors for every data source. MCP turns N×M chaos into an N+M universal open standard.",
    prob_before_title: "Before MCP: N × M Fragmentation",
    prob_before_desc: "Every model or IDE builds siloed custom connectors for each API or database. Brittle, insecure, and painful to maintain.",
    prob_after_title: "With MCP: N + M Universal Standard",
    prob_after_desc: "Build an MCP server once, connect to any client (Claude, Cursor, Antigravity, Zed, custom agent). Local permission controls and modular architecture.",

    prim_badge: "Core Building Blocks",
    prim_title: "Foundations of the Model Context Protocol",
    prim_desc: "MCP is built on four core primitives enabling AI assistants to securely explore and act on external data environments.",
    prim_tools_title: "Tools (Executable Functions)",
    prim_tools_desc: "Functions called by AI models to take real actions, such as executing SQL queries, committing code to Git, or posting Slack updates.",
    prim_resources_title: "Resources (Data Context)",
    prim_resources_desc: "Passive structured URI data (file://, db://) readable by LLMs, such as config files, live application logs, or database schemas.",
    prim_prompts_title: "Prompts (Contextual Templates)",
    prim_prompts_desc: "Server-bundled prompt blueprints that guide users and models through battle-tested, structured engineering workflows.",
    prim_sampling_title: "Sampling (Agentic Loop)",
    prim_sampling_desc: "Advanced capability where servers request recursive reasoning or sub-task evaluations directly from the host AI model.",

    play_badge: "Live Sandbox",
    play_title: "Interactive Protocol Playground",
    play_desc: "Simulate JSON-RPC 2.0 communication between an MCP Client and Server. Choose operations or customize parameters to inspect live responses.",
    play_operation: "Select Protocol Operation:",
    play_btn_send: "Send Request (JSON-RPC)",
    play_sending: "Sending...",
    play_req_header: "Request Payload (Client → Server via stdio/sse)",
    play_res_header: "Response Payload (Server → Client)",
    play_copied: "Copied!",
    play_copy: "Copy JSON",

    dir_badge: "Server Ecosystem",
    dir_title: "Popular MCP Server Catalog",
    dir_desc: "Explore production-ready official and community MCP servers ready to connect with your favorite AI tools in seconds.",
    dir_search_placeholder: "Search MCP servers (e.g., postgres, github, slack, sqlite)...",
    dir_cat_all: "All",
    dir_cat_db: "Database",
    dir_cat_dev: "Developer Tools",
    dir_cat_web: "Web & Search",
    dir_cat_prod: "Productivity",
    dir_cat_ai: "AI Memory",
    dir_view_config: "View Config",

    quick_badge: "Start Building",
    quick_title: "Build Your First MCP Server in 3 Minutes",
    quick_desc: "Follow straightforward steps using the official TypeScript or Python SDK, or plug ready-made servers into Claude Desktop / Cursor.",
    quick_tab_ts: "TypeScript SDK",
    quick_tab_py: "Python SDK",
    quick_tab_config: "Client JSON Config",

    faq_badge: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Everything you need to know about licensing, security boundaries, and Model Context Protocol adoption.",

    footer_tagline: "Model Context Protocol — The open standard for securely connecting AI context, data, and tools everywhere.",
    footer_quick_links: "Quick Links",
    footer_resources: "Documentation & Resources",
    footer_spec: "Official MCP Specification",
    footer_github: "GitHub Repository",
    footer_docs: "Anthropic Docs",
    footer_created_with: "Crafted for the AI Developer Community",
  }
};

// --- 2. DATA STORE ---
const serverCatalog = [
  {
    id: "postgres",
    name: "PostgreSQL MCP Server",
    category: "db",
    author: "@modelcontextprotocol",
    stars: "4.9k",
    verified: true,
    desc_id: "Akses skema read-only, jalankan query analitik yang aman, dan inspek tabel database PostgreSQL.",
    desc_en: "Read-only schema inspection, safe analytical query execution, and PostgreSQL database introspection.",
    install_cmd: "npx -y @modelcontextprotocol/server-postgres postgresql://localhost/mydb",
    config_json: {
      mcpServers: {
        postgres: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
        }
      }
    }
  },
  {
    id: "filesystem",
    name: "Local Filesystem Server",
    category: "dev",
    author: "@modelcontextprotocol",
    stars: "5.3k",
    verified: true,
    desc_id: "Membaca, menulis, mencari file, dan menelusuri direktori lokal dalam batas direktori yang Anda tentukan.",
    desc_en: "Read, write, search files, and browse directories safely restricted to explicitly allowed folder paths.",
    install_cmd: "npx -y @modelcontextprotocol/server-filesystem /Users/username/Desktop",
    config_json: {
      mcpServers: {
        filesystem: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"]
        }
      }
    }
  },
  {
    id: "github",
    name: "GitHub MCP Server",
    category: "dev",
    author: "@modelcontextprotocol",
    stars: "6.1k",
    verified: true,
    desc_id: "Kelola repositori GitHub, cari kode, buat Pull Request, tinjau issues, dan periksa commit log.",
    desc_en: "Interact with GitHub repos, search codebase, create Pull Requests, review issues, and inspect commit history.",
    install_cmd: "npx -y @modelcontextprotocol/server-github",
    config_json: {
      mcpServers: {
        github: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-github"],
          env: {
            GITHUB_PERSONAL_ACCESS_TOKEN: "<YOUR_TOKEN>"
          }
        }
      }
    }
  },
  {
    id: "brave-search",
    name: "Brave Search Server",
    category: "web",
    author: "@modelcontextprotocol",
    stars: "3.7k",
    verified: true,
    desc_id: "Beri model AI Anda kemampuan browsing web real-time dan pencarian artikel tanpa pelacakan data pribadi.",
    desc_en: "Empower your AI assistants with real-time web search and content discovery with privacy protection.",
    install_cmd: "npx -y @modelcontextprotocol/server-brave-search",
    config_json: {
      mcpServers: {
        "brave-search": {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-brave-search"],
          env: {
            BRAVE_API_KEY: "<YOUR_API_KEY>"
          }
        }
      }
    }
  },
  {
    id: "sqlite",
    name: "SQLite MCP Server",
    category: "db",
    author: "@modelcontextprotocol",
    stars: "3.1k",
    verified: true,
    desc_id: "Kueri berkas database SQLite lokal, pelajari skema tabel, dan lakukan analisis data tanpa server eksternal.",
    desc_en: "Query local SQLite files, analyze database schemas, and compute local data insights with zero server setup.",
    install_cmd: "uvx mcp-server-sqlite --db-path ./database.db",
    config_json: {
      mcpServers: {
        sqlite: {
          command: "uvx",
          args: ["mcp-server-sqlite", "--db-path", "./database.db"]
        }
      }
    }
  },
  {
    id: "slack",
    name: "Slack MCP Server",
    category: "prod",
    author: "@modelcontextprotocol",
    stars: "4.2k",
    verified: true,
    desc_id: "Membaca pesan channel, mencari riwayat percakapan tim, dan mengirim pembaruan kerja otomatis ke Slack.",
    desc_en: "Read channel messages, search conversational history, and dispatch automated team updates to Slack.",
    install_cmd: "npx -y @modelcontextprotocol/server-slack",
    config_json: {
      mcpServers: {
        slack: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-slack"],
          env: {
            SLACK_BOT_TOKEN: "xoxb-your-bot-token",
            SLACK_TEAM_ID: "T01234567"
          }
        }
      }
    }
  },
  {
    id: "puppeteer",
    name: "Puppeteer Browser Automation",
    category: "web",
    author: "@modelcontextprotocol",
    stars: "4.8k",
    verified: true,
    desc_id: "Otomasi navigasi web, ambil screenshot halaman, dan ekstrak konten HTML yang dinamis di balik Javascript.",
    desc_en: "Automate browser interactions, capture screenshots, and scrape dynamic client-rendered web pages.",
    install_cmd: "npx -y @modelcontextprotocol/server-puppeteer",
    config_json: {
      mcpServers: {
        puppeteer: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-puppeteer"]
        }
      }
    }
  },
  {
    id: "memory",
    name: "Knowledge Graph & Memory",
    category: "ai",
    author: "@modelcontextprotocol",
    stars: "5.9k",
    verified: true,
    desc_id: "Simpan entitas, relasi, dan memori jangka panjang melintasi berbagai percakapan dan sesi asisten AI.",
    desc_en: "Persist entities, relationships, and structured long-term memory graph across conversational sessions.",
    install_cmd: "npx -y @modelcontextprotocol/server-memory",
    config_json: {
      mcpServers: {
        memory: {
          command: "npx",
          args: ["-y", "@modelcontextprotocol/server-memory"]
        }
      }
    }
  }
];

// Playground Operations Simulation Data
const playgroundScenarios = {
  "tools/list": {
    name: "tools/list",
    description: "Minta daftar seluruh tool yang tersedia di server",
    request: {
      jsonrpc: "2.0",
      id: 1,
      method: "tools/list",
      params: {}
    },
    response: {
      jsonrpc: "2.0",
      id: 1,
      result: {
        tools: [
          {
            name: "query_database",
            description: "Execute a read-only SQL query on the PostgreSQL cluster",
            inputSchema: {
              type: "object",
              properties: {
                sql: { type: "string", description: "The SQL statement to run" }
              },
              required: ["sql"]
            }
          },
          {
            name: "fetch_github_pr",
            description: "Retrieve metadata, changed files, and reviews for a GitHub Pull Request",
            inputSchema: {
              type: "object",
              properties: {
                owner: { type: "string" },
                repo: { type: "string" },
                pull_number: { type: "number" }
              },
              required: ["owner", "repo", "pull_number"]
            }
          }
        ]
      }
    }
  },
  "tools/call": {
    name: "tools/call",
    description: "Panggil fungsi query_database pada PostgreSQL",
    request: {
      jsonrpc: "2.0",
      id: 2,
      method: "tools/call",
      params: {
        name: "query_database",
        arguments: {
          sql: "SELECT id, name, role, created_at FROM dev_team WHERE role = 'ai_engineer' LIMIT 2;"
        }
      }
    },
    response: {
      jsonrpc: "2.0",
      id: 2,
      result: {
        content: [
          {
            type: "text",
            text: JSON.stringify([
              { id: 101, name: "Aria Pratama", role: "ai_engineer", created_at: "2024-11-20T08:30:00Z" },
              { id: 102, name: "Siti Rahma", role: "ai_engineer", created_at: "2024-11-21T09:15:00Z" }
            ], null, 2)
          }
        ],
        isError: false
      }
    }
  },
  "resources/read": {
    name: "resources/read",
    description: "Baca konten berkas lokal terproteksi",
    request: {
      jsonrpc: "2.0",
      id: 3,
      method: "resources/read",
      params: {
        uri: "file:///workspace/infra/config.env"
      }
    },
    response: {
      jsonrpc: "2.0",
      id: 3,
      result: {
        contents: [
          {
            uri: "file:///workspace/infra/config.env",
            mimeType: "text/plain",
            text: "ENVIRONMENT=production\nCLUSTER_REGION=ap-southeast-1\nMAX_CONNECTIONS=100\nMCP_TRANSPORT=stdio"
          }
        ]
      }
    }
  },
  "prompts/get": {
    name: "prompts/get",
    description: "Ambil template prompt terstruktur untuk Git Commit Review",
    request: {
      jsonrpc: "2.0",
      id: 4,
      method: "prompts/get",
      params: {
        name: "git_diff_reviewer",
        arguments: {
          branch: "feature/mcp-integration",
          verbosity: "detailed"
        }
      }
    },
    response: {
      jsonrpc: "2.0",
      id: 4,
      result: {
        description: "Review uncommitted changes and format conventional commit",
        messages: [
          {
            role: "user",
            content: {
              type: "text",
              text: "Please inspect the git diff on branch 'feature/mcp-integration'. Verify edge-case handling for JSON-RPC error codes and format your recommendations."
            }
          }
        ]
      }
    }
  }
};

// Architecture Visualizer Preset Flows
const visualizerFlows = {
  host_claude: {
    sender: "Claude Desktop (Host)",
    receiver: "MCP Client & Router",
    method: "initialize",
    transport: "stdio (Local IPC)",
    req: {
      jsonrpc: "2.0",
      method: "initialize",
      params: {
        protocolVersion: "2024-11-05",
        capabilities: { roots: { listChanged: true }, sampling: {} },
        clientInfo: { name: "claude-desktop", version: "1.0.0" }
      },
      id: 0
    },
    res: {
      jsonrpc: "2.0",
      result: {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {}, resources: {}, prompts: {} },
        serverInfo: { name: "mcp-core-hub", version: "1.2.0" }
      },
      id: 0
    }
  },
  host_cursor: {
    sender: "Cursor IDE (Host)",
    receiver: "MCP Client & Router",
    method: "tools/call (code_indexer)",
    transport: "stdio (Local Stream)",
    req: {
      jsonrpc: "2.0",
      method: "tools/call",
      params: { name: "search_symbol", arguments: { symbol: "MCPClient" } },
      id: 11
    },
    res: {
      jsonrpc: "2.0",
      result: {
        content: [{ type: "text", text: "Symbol 'MCPClient' defined in src/client.ts line 42" }]
      },
      id: 11
    }
  },
  server_postgres: {
    sender: "MCP Client",
    receiver: "Postgres MCP Server",
    method: "tools/call (execute_sql)",
    transport: "stdio (Subprocess Pipe)",
    req: {
      jsonrpc: "2.0",
      method: "tools/call",
      params: { name: "query", arguments: { sql: "SELECT version();" } },
      id: 20
    },
    res: {
      jsonrpc: "2.0",
      result: {
        content: [{ type: "text", text: "PostgreSQL 16.3 on x86_64-pc-linux-gnu" }]
      },
      id: 20
    }
  },
  server_filesystem: {
    sender: "MCP Client",
    receiver: "Filesystem MCP Server",
    method: "resources/read",
    transport: "stdio (Local Sandbox)",
    req: {
      jsonrpc: "2.0",
      method: "resources/read",
      params: { uri: "file:///project/src/index.ts" },
      id: 21
    },
    res: {
      jsonrpc: "2.0",
      result: {
        contents: [{ uri: "file:///project/src/index.ts", mimeType: "text/typescript", text: "export const startServer = () => { ... };" }]
      },
      id: 21
    }
  },
  server_github: {
    sender: "MCP Client",
    receiver: "GitHub MCP Server",
    method: "tools/call (list_pull_requests)",
    transport: "SSE (Server-Sent Events / HTTPS)",
    req: {
      jsonrpc: "2.0",
      method: "tools/call",
      params: { name: "list_prs", arguments: { state: "open" } },
      id: 22
    },
    res: {
      jsonrpc: "2.0",
      result: {
        content: [{ type: "text", text: "PR #14: Implement OAuth token refresh (Open, 2 approvals)" }]
      },
      id: 22
    }
  }
};

// --- 3. STATE & APP CONTROLLER ---
const App = {
  currentLang: "id",
  currentTheme: "dark",
  currentCategory: "all",
  searchQuery: "",

  init() {
    this.initTheme();
    this.initLanguage();
    this.renderServerCatalog();
    this.initPlayground();
    this.initVisualizer();
    this.initCodeTabs();
    this.initFAQ();
    this.initMobileMenu();
    this.initModal();
    this.updateIcons();
  },

  // 3.1 Theme handling
  initTheme() {
    const savedTheme = localStorage.getItem("mcp_theme") || "dark";
    this.setTheme(savedTheme);

    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const newTheme = this.currentTheme === "dark" ? "light" : "dark";
        this.setTheme(newTheme);
      });
    }
  },

  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem("mcp_theme", theme);
    const htmlEl = document.documentElement;
    if (theme === "light") {
      htmlEl.classList.remove("dark");
      htmlEl.classList.add("light");
    } else {
      htmlEl.classList.remove("light");
      htmlEl.classList.add("dark");
    }

    const themeIcon = document.getElementById("theme-toggle-icon");
    if (themeIcon) {
      themeIcon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
      this.updateIcons();
    }
  },

  // 3.2 Language handling
  initLanguage() {
    const savedLang = localStorage.getItem("mcp_lang") || "id";
    this.setLanguage(savedLang);

    const langToggleBtn = document.getElementById("lang-toggle");
    if (langToggleBtn) {
      langToggleBtn.addEventListener("click", () => {
        const nextLang = this.currentLang === "id" ? "en" : "id";
        this.setLanguage(nextLang);
      });
    }
  },

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem("mcp_lang", lang);

    const langText = document.getElementById("lang-toggle-text");
    if (langText) {
      langText.textContent = lang === "id" ? "EN" : "ID";
    }

    const dict = translations[lang] || translations.id;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    this.renderServerCatalog();
  },

  // 3.3 Visualizer Controller
  initVisualizer() {
    const visualizerNodes = document.querySelectorAll("[data-vis-target]");
    visualizerNodes.forEach(node => {
      node.addEventListener("click", () => {
        const targetKey = node.getAttribute("data-vis-target");
        this.triggerVisualizerFlow(targetKey, node);
      });
    });

    // Default trigger first flow
    this.triggerVisualizerFlow("server_postgres");
  },

  triggerVisualizerFlow(flowKey, activeElement) {
    const flow = visualizerFlows[flowKey] || visualizerFlows.server_postgres;

    // Visual active highlight
    document.querySelectorAll("[data-vis-target]").forEach(n => {
      n.classList.remove("ring-2", "ring-indigo-500", "scale-[1.02]", "bg-indigo-950/40");
    });
    if (activeElement) {
      activeElement.classList.add("ring-2", "ring-indigo-500", "scale-[1.02]", "bg-indigo-950/40");
    }

    // Update status labels
    const senderEl = document.getElementById("vis-sender-name");
    const receiverEl = document.getElementById("vis-receiver-name");
    const transportEl = document.getElementById("vis-transport-name");
    const methodEl = document.getElementById("vis-method-name");

    if (senderEl) senderEl.textContent = flow.sender;
    if (receiverEl) receiverEl.textContent = flow.receiver;
    if (transportEl) transportEl.textContent = flow.transport;
    if (methodEl) methodEl.textContent = flow.method;

    // Render payload
    const reqViewer = document.getElementById("vis-req-payload");
    const resViewer = document.getElementById("vis-res-payload");

    if (reqViewer) reqViewer.innerHTML = this.syntaxHighlight(JSON.stringify(flow.req, null, 2));
    if (resViewer) resViewer.innerHTML = this.syntaxHighlight(JSON.stringify(flow.res, null, 2));

    // Flash animation on data line
    const flowLine = document.getElementById("vis-flow-line");
    if (flowLine) {
      flowLine.classList.remove("data-flow-line");
      void flowLine.offsetWidth; // re-flow
      flowLine.classList.add("data-flow-line");
    }
  },

  // 3.4 Playground Controller
  initPlayground() {
    const opSelect = document.getElementById("playground-op-select");
    const sendBtn = document.getElementById("playground-send-btn");
    const latencyBadge = document.getElementById("playground-latency");

    const updatePlaygroundView = () => {
      const selected = opSelect ? opSelect.value : "tools/list";
      const scenario = playgroundScenarios[selected] || playgroundScenarios["tools/list"];
      
      const reqEl = document.getElementById("playground-req-code");
      const resEl = document.getElementById("playground-res-code");

      if (reqEl) reqEl.innerHTML = this.syntaxHighlight(JSON.stringify(scenario.request, null, 2));
      if (resEl) resEl.innerHTML = this.syntaxHighlight(JSON.stringify(scenario.response, null, 2));
      if (latencyBadge) latencyBadge.textContent = "Latensi: 14ms (stdio)";
    };

    if (opSelect) {
      opSelect.addEventListener("change", updatePlaygroundView);
    }

    if (sendBtn) {
      sendBtn.addEventListener("click", () => {
        sendBtn.disabled = true;
        const origText = sendBtn.innerHTML;
        sendBtn.innerHTML = `
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          ${this.currentLang === "id" ? "Memproses..." : "Processing..."}
        `;

        const resEl = document.getElementById("playground-res-code");
        if (resEl) resEl.innerHTML = `<span class="text-slate-400">// Menunggu transmisi paket JSON-RPC 2.0...</span>`;

        const randomLatency = Math.floor(Math.random() * 25) + 12;

        setTimeout(() => {
          updatePlaygroundView();
          if (latencyBadge) {
            latencyBadge.textContent = `Latensi: ${randomLatency}ms (stdio/IPC)`;
          }
          sendBtn.disabled = false;
          sendBtn.innerHTML = origText;
          this.updateIcons();
        }, 350);
      });
    }

    // Copy buttons
    this.setupCopyButton("playground-copy-req", "playground-req-code");
    this.setupCopyButton("playground-copy-res", "playground-res-code");

    updatePlaygroundView();
  },

  // 3.5 Server Catalog Controller
  renderServerCatalog() {
    const container = document.getElementById("server-catalog-grid");
    if (!container) return;

    const filtered = serverCatalog.filter(server => {
      const matchCat = this.currentCategory === "all" || server.category === this.currentCategory;
      const q = this.searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        server.name.toLowerCase().includes(q) ||
        server.id.toLowerCase().includes(q) ||
        (server.desc_id && server.desc_id.toLowerCase().includes(q)) ||
        (server.desc_en && server.desc_en.toLowerCase().includes(q));

      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <i data-lucide="search-x" class="w-12 h-12 mx-auto mb-3 opacity-50"></i>
          <p class="text-lg font-medium">${this.currentLang === "id" ? "Tidak ditemukan server yang sesuai." : "No matching MCP servers found."}</p>
          <p class="text-sm text-slate-500 mt-1">${this.currentLang === "id" ? "Coba gunakan kata kunci pencarian lain." : "Try searching with different keywords."}</p>
        </div>
      `;
      this.updateIcons();
      return;
    }

    container.innerHTML = filtered.map(item => {
      const desc = this.currentLang === "id" ? item.desc_id : item.desc_en;
      const catLabels = {
        db: "Database",
        dev: "Developer",
        web: "Web/Search",
        prod: "Productivity",
        ai: "AI Memory"
      };

      return `
        <div class="glass-card rounded-2xl p-6 flex flex-col justify-between border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300">
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex items-center gap-2.5">
                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                  ${item.id.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 class="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 text-base leading-snug">${item.name}</h4>
                  <span class="text-xs text-slate-400 font-mono">${item.author}</span>
                </div>
              </div>
              <span class="badge-tag text-xs font-medium text-indigo-400 bg-indigo-500/10 border-indigo-500/20">
                ${catLabels[item.category] || item.category}
              </span>
            </div>

            <p class="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 line-clamp-2 mb-4 leading-relaxed">
              ${desc}
            </p>
          </div>

          <div class="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200/80 flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 text-xs text-amber-400/90 font-mono">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-current"></i>
              <span>${item.stars}</span>
            </div>

            <button 
              onclick="App.openConfigModal('${item.id}')"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 transition-all cursor-pointer">
              <i data-lucide="terminal" class="w-3.5 h-3.5"></i>
              <span>${this.currentLang === "id" ? "Konfigurasi" : "View Config"}</span>
            </button>
          </div>
        </div>
      `;
    }).join("");

    this.updateIcons();
  },

  filterCategory(cat) {
    this.currentCategory = cat;
    document.querySelectorAll(".cat-filter-btn").forEach(btn => {
      const isActive = btn.getAttribute("data-cat") === cat;
      btn.className = `cat-filter-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
        isActive 
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500" 
          : "glass-panel text-slate-400 hover:text-white border border-slate-800"
      }`;
    });
    this.renderServerCatalog();
  },

  handleSearch(e) {
    this.searchQuery = e.target.value;
    this.renderServerCatalog();
  },

  // 3.6 Config Modal
  initModal() {
    const modal = document.getElementById("config-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const backdrop = document.getElementById("modal-backdrop");

    if (closeBtn) closeBtn.addEventListener("click", () => this.closeConfigModal());
    if (backdrop) backdrop.addEventListener("click", () => this.closeConfigModal());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
        this.closeConfigModal();
      }
    });

    this.setupCopyButton("modal-copy-btn", "modal-config-code");
  },

  openConfigModal(serverId) {
    const server = serverCatalog.find(s => s.id === serverId);
    if (!server) return;

    const modal = document.getElementById("config-modal");
    const titleEl = document.getElementById("modal-server-title");
    const cmdEl = document.getElementById("modal-server-cmd");
    const codeEl = document.getElementById("modal-config-code");

    if (titleEl) titleEl.textContent = server.name;
    if (cmdEl) cmdEl.textContent = server.install_cmd;
    if (codeEl) codeEl.innerHTML = this.syntaxHighlight(JSON.stringify(server.config_json, null, 2));

    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
    this.updateIcons();
  },

  closeConfigModal() {
    const modal = document.getElementById("config-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  },

  // 3.7 Code Tabs & Snippets
  initCodeTabs() {
    const tabs = document.querySelectorAll("[data-quick-tab]");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-quick-tab");

        tabs.forEach(t => {
          t.classList.remove("border-indigo-500", "text-indigo-400");
          t.classList.add("border-transparent", "text-slate-400");
        });
        tab.classList.add("border-indigo-500", "text-indigo-400");
        tab.classList.remove("border-transparent", "text-slate-400");

        document.querySelectorAll(".quickstart-panel").forEach(p => p.classList.add("hidden"));
        const targetPanel = document.getElementById(`quick-panel-${target}`);
        if (targetPanel) targetPanel.classList.remove("hidden");
      });
    });

    this.setupCopyButton("copy-ts-quick", "code-ts-quick");
    this.setupCopyButton("copy-py-quick", "code-py-quick");
    this.setupCopyButton("copy-cfg-quick", "code-cfg-quick");
    this.setupCopyButton("hero-copy-cmd", "hero-cmd-text");
  },

  // 3.8 FAQ Accordion
  initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      const header = item.querySelector(".faq-header");
      const content = item.querySelector(".faq-content");
      const icon = item.querySelector(".faq-icon");

      if (header && content) {
        header.addEventListener("click", () => {
          const isOpen = content.classList.contains("open");

          // Close all
          document.querySelectorAll(".faq-content").forEach(c => c.classList.remove("open"));
          document.querySelectorAll(".faq-icon").forEach(i => i.classList.remove("rotate-180"));

          // Toggle clicked
          if (!isOpen) {
            content.classList.add("open");
            if (icon) icon.classList.add("rotate-180");
          }
        });
      }
    });
  },

  // 3.9 Mobile Navigation
  initMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });
    }
  },

  // 3.10 Helper: Copy Button Setup
  setupCopyButton(btnId, targetCodeId) {
    const btn = document.getElementById(btnId);
    const target = document.getElementById(targetCodeId);

    if (btn && target) {
      btn.addEventListener("click", () => {
        const textToCopy = target.innerText || target.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          const origHTML = btn.innerHTML;
          btn.innerHTML = `
            <svg class="w-3.5 h-3.5 text-emerald-400 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-emerald-400 text-xs font-semibold">${this.currentLang === "id" ? "Tersalin!" : "Copied!"}</span>
          `;
          setTimeout(() => {
            btn.innerHTML = origHTML;
            this.updateIcons();
          }, 2000);
        });
      });
    }
  },

  // 3.11 Helper: Simple JSON Syntax Highlighter
  syntaxHighlight(jsonStr) {
    if (!jsonStr) return "";
    jsonStr = jsonStr.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return jsonStr.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        let cls = "token-number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "token-key font-medium";
          } else {
            cls = "token-string";
          }
        } else if (/true|false/.test(match)) {
          cls = "token-boolean font-semibold";
        } else if (/null/.test(match)) {
          cls = "token-null italic";
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
  },

  // 3.12 Lucide icon renderer
  updateIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
};

// Initialize application on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
