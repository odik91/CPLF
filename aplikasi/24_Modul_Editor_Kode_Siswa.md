# 24. Modul Editor Kode Siswa (Practice & Debug)

> Mencakup integrasi **editor kode** untuk materi/practice CPLF (JS, HTML, CSS): autocomplete, eval aman, penyimpanan ke DB, dan debugging — selaras modul Kelas X–XI yang heavy JavaScript.

## 1. Kebutuhan CPLF

| Konteks | Kebutuhan editor |
|---------|------------------|
| Practice in-class | Edit JS → run → lihat output |
| Materi interaktif | Blok kode editable di handout digital |
| Project build | Snippet percobaan sebelum commit ke Git |
| Ujian (opsional) | Soal coding dengan test case terbatas |
| Debug lesson (P13) | Error message + autocomplete bantu observasi |

## 2. Rekomendasi 3rd Party

### 2.1 Perbandingan Editor

| Library | Autocomplete | Multi-file | Bundle | Lisensi | Rekomendasi |
|---------|--------------|------------|--------|---------|-------------|
| **Monaco Editor** | ⭐⭐⭐ (sama VS Code) | ✅ | ~2–4 MB gzip | MIT | **Utama** — practice JS/TS/HTML |
| **CodeMirror 6** | ⭐⭐ (@codemirror/autocomplete) | ✅ | ~200 KB | MIT | Materi ringan, mobile-friendly |
| **Ace Editor** | ⭐⭐ | ✅ | ~300 KB | BSD | Legacy, kurang aktif |
| **Sandpack (CodeSandbox)** | ⭐⭐ | ✅ React preview | ~1 MB | MIT | Preview React — **overkill** untuk CPLF MA |
| **WebContainer (StackBlitz)** | ⭐⭐⭐ | ✅ full Node | Cloud | Proprietary | ❌ butuh internet, tidak untuk MA |

**Rekomendasi CPLF:**

```text
Editor utama:     Monaco Editor (@monaco-editor/react)
Editor ringan:    CodeMirror 6 (handout mobile / pertemuan X awal)
Syntax highlight: Shiki (read-only di materi) + Monaco (editable)
```

### 2.2 Eksekusi Kode (Eval) — Pemisahan Penting

| Opsi | Keamanan | Offline | Rekomendasi MA |
|------|----------|---------|----------------|
| **iframe sandbox + worker** | ⭐⭐⭐ | ✅ | **Default** — JS/HTML/CSS di browser |
| **Piston / Judge0** | ⭐⭐⭐ | ✅ | Defer — butuh Docker/container; **tidak** untuk VPS kecil |
| **eval() / new Function() langsung** | ❌ | — | **DILARANG** |
| **Remote cloud IDE** | ⭐ | ❌ | Hindari |

**Rekomendasi:**

- **Practice harian:** `SandboxedRunner` custom — iframe `sandbox="allow-scripts"` + CSP ketat, **tanpa** `allow-same-origin`.
- **Ujian soal coding (fase lanjutan):** subprocess terisolasi di VPS **native** (bukan Docker) — lihat §2.3.

### 2.3 Eksekusi Server-Side (Tanpa Docker)

> VPS resource terbatas — **tidak** deploy Piston/Judge0 container. Opsi berurutan:

| Opsi | Resource VPS | Keamanan | Rekomendasi |
|------|--------------|----------|-------------|
| Browser sandbox only | 0 (FE) | ⭐⭐⭐ | **MVP** — practice & ujian JS sederhana |
| `child_process` + `timeout` + `ulimit` | Rendah | ⭐⭐ | Ujian coding lanjutan; review security wajib |
| Piston binary native (systemd) | Sedang | ⭐⭐⭐ | Hanya jika VPS ≥ 4 GB RAM & benar-benar perlu multi-language |
| Docker Piston | Tinggi | ⭐⭐⭐ | ❌ **Tidak dipakai** |

```typescript
// BE worker — isolated subprocess (contoh konsep)
async executeCodeIsolated(dto: { source: string; stdin?: string }) {
  // Validasi: max 10KB, strip require/fs/child_process patterns
  // spawn: node --disallow-code-generation-from-strings -e "..." 
  // timeout 5s, maxBuffer 1MB, uid sandbox user (linux)
  return { stdout, stderr, exitCode };
}
```

FE kirim kode → BE validate → BE jalankan subprocess terkontrol → return hasil. **Jangan** expose endpoint exec ke FE langsung.

## 3. Penyimpanan Kode Siswa ke DB — Aman

### 3.1 Prinsip Keamanan

1. **Simpan sebagai TEXT/JSON murni** — PostgreSQL `TEXT` atau `Json`, **bukan** file executable.
2. **Jangan pernah** `eval()` / `exec()` kode siswa di server BE utama.
3. **Sanitasi input:** max size (50 KB per snippet), strip null bytes, validasi UTF-8.
4. **Tidak ada** path traversal — kode bukan file di filesystem server.
5. **Auth scoped** — siswa hanya CRUD snippet miliknya; guru read-only kelasnya.
6. **Audit log** untuk snippet ujian (immutable setelah submit).

### 3.2 Model Data

```prisma
model CodeSnippet {
  id          String   @id @default(uuid())
  siswaId     String
  temaId      String?  // konteks pertemuan
  materiId    String?  // blok practice di materi
  judul       String?
  bahasa      CodeLanguage @default(JAVASCRIPT)
  sourceCode  String   @db.Text  // plain text — NEVER execute on BE directly
  version     Int      @default(1)
  isSubmission Boolean @default(false) // true = locked (ujian/project)
  runHistory  CodeRunLog[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  siswa       User     @relation(...)
  @@index([siswaId, temaId])
}

enum CodeLanguage {
  JAVASCRIPT
  HTML
  CSS
  HTML_MIXED  // html+css+js satu snippet
}

model CodeRunLog {
  id          String   @id @default(uuid())
  snippetId   String
  runBy       String   // userId
  runTarget   String   // BROWSER_SANDBOX | PISTON
  stdout      String?  @db.Text
  stderr      String?  @db.Text
  exitCode    Int?
  durationMs  Int?
  createdAt   DateTime @default(now())
  snippet     CodeSnippet @relation(...)
}
```

### 3.3 Autosave

- Debounce 2 detik → `PATCH /code-snippet/:id` (draft only, `isSubmission=false`).
- Version increment opsional (keep last 5 versions — fase lanjutan).
- Conflict: last-write-wins untuk draft; submission lock permanent.

## 4. Arsitektur FE — Monaco + Sandbox

```text
┌─────────────────────────────────────────┐
│  CodeEditorPanel (Monaco)               │
│  - language: javascript                 │
│  - autocomplete: Monaco TS/JS service   │
│  - theme: vs-dark / light               │
├─────────────────────────────────────────┤
│  [Run] [Reset] [Save Draft]             │
├─────────────────────────────────────────┤
│  PreviewPanel (iframe sandbox)          │
│  srcdoc = wrap user HTML/JS safely      │
│  postMessage console.log → OutputPanel  │
└─────────────────────────────────────────┘
```

### 4.1 Sandbox Runner (Browser)

```typescript
// lib/code/sandbox-runner.ts
const SANDBOX_HTML = (userJs: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Security-Policy"
    content="default-src 'none'; script-src 'unsafe-inline';">
</head>
<body>
<script>
  const console = { log: (...a) => parent.postMessage({ type:'log', data:a }, '*') };
  try {
    ${userJs}  // injected — max 50KB, validated parent-side
  } catch(e) {
    parent.postMessage({ type:'error', data: e.message }, '*');
  }
</script>
</body>
</html>`;

// iframe: sandbox="allow-scripts" WITHOUT allow-same-origin
```

**Catatan:** `'unsafe-inline'` di sandbox iframe terisolasi — acceptable karena origin opaque & no network.

### 4.2 Autocomplete & IntelliSense

Monaco built-in untuk JS:

```typescript
import * as monaco from 'monaco-editor';

monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.ES2020,
  allowNonTsExtensions: true,
});

// Extra: tambah CPLF helper types (console, document) — default DOM libs cukup
monaco.languages.typescript.javascriptDefaults.addExtraLib(
  `declare function bantuDebug(msg: string): void;`,
  'cplf-globals.d.ts'
);
```

Untuk HTML/CSS mixed: Monaco `html` language mode + embedded CSS/JS.

### 4.3 Debug UX (Selaras P13 Error = Informasi)

| Fitur | Implementasi |
|-------|--------------|
| Error underline | Monaco marker dari stderr sandbox |
| Line highlight | Parse stack trace `at line X` |
| Console panel | OutputPanel dari postMessage |
| Hint (opsional) | Guru-set `hintLevel` di materi — **bukan** jawaban |

## 5. Integrasi ke Materi (Block-Based)

Perluasan block type di dok 07:

```json
{
  "type": "code_practice",
  "data": {
    "language": "javascript",
    "starterCode": "console.log('Hello CPLF');",
    "solutionHint": "Coba ganti string",
    "readOnlyLines": [1],
    "allowRun": true,
    "saveToSnippet": true,
    "testCases": []
  }
}
```

Renderer: `<CodePracticeBlock />` → Monaco + Sandbox + autosave ke `CodeSnippet`.

## 6. Soal Ujian Coding (Opsional)

Perluasan `SoalTipe`:

```prisma
enum SoalTipe {
  PILIHAN_GANDA
  ESAI_SINGKAT
  BENAR_SALAH
  CODING          // baru
}
```

Scoring via subprocess terisolasi + test cases (hidden) — lihat §2.3:

```json
{
  "testCases": [
    { "input": "", "expectedOutput": "42\n", "hidden": true }
  ],
  "runTimeoutMs": 5000
}
```

Worker scoring (dok 10) jalankan test case via subprocess sandbox — **bukan** `eval()` langsung di worker.

## 7. API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/code-snippet?materiId=` | MURID — draft milik sendiri |
| POST | `/code-snippet` | MURID — buat draft |
| PATCH | `/code-snippet/:id` | MURID — autosave (if !isSubmission) |
| POST | `/code-snippet/:id/run` | MURID — BROWSER (practice) atau BE subprocess (ujian) |
| GET | `/code-snippet/:id/history` | MURID/GURU — run logs |
| GET | `/code-snippet/kelas/:kelasId?temaId=` | GURU — overview snippet kelas |

## 8. Rekomendasi Implementasi Bertahap

| Fase | Fitur |
|------|-------|
| MVP | Monaco + browser sandbox + autosave DB |
| 1b | CodeMirror ringan di mobile web |
| 2 | Subprocess sandbox native untuk ujian coding (tanpa Docker) |
| 3 | Version history + diff view |
| 4 | Collaborative pair programming (opsional, XI+) |

## 9. Anti-Pattern

- `eval()` di browser utama (bukan sandbox iframe)
- Simpan kode sebagai file `.js` di server filesystem
- Expose endpoint run code tanpa auth / rate limit
- Autocomplete yang inject jawaban ujian otomatis
- Cloud IDE dengan akun siswa di vendor pihak ketiga tanpa consent

## 10. Referensi Silang

- Materi block editor → [07_Modul_Materi_Pembelajaran.md](./07_Modul_Materi_Pembelajaran.md)
- Background worker → [10_Modul_Background_Processing_Ujian.md](./10_Modul_Background_Processing_Ujian.md)
- Modul P13 debugging → [06-modules/kelas-x/semester-1/X-S1-P13_error-debugging.md](../06-modules/kelas-x/semester-1/X-S1-P13_error-debugging.md)
