# Handout Siswa — XII-S6-P15

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XII-S6-P15_bonus-agent-ringan.md](../../../kelas-xii/semester-6/XII-S6-P15_bonus-agent-ringan.md)

---

## 1. Tujuan pembelajaran

Dari chatbot generik → **agent** = LLM memicu aksi terbatas di web.

---

## 2. Ringkasan konsep

### Agent ringan ≠ chatbot panjang

| Chatbot generik | Agent ringan (PRJ-05) |
|-----------------|----------------------|
| Balasan teks panjang | **Aksi terbatas** di web (scroll, toggle panel, query lokal) |
| Intent tak terbatas | **Allowlist** 3–5 perintah |
| API key di frontend | **Proxy/backend sekolah** — key tidak di repo |
| `eval` / eksekusi bebas | **Dilarang** — anti-pattern PRJ |

### Pipeline konsep (guru hafalkan)

```text
Perintah pengguna → parse intent (rule ATAU LLM function call)
→ validasi allowlist → aksi DOM/data lokal → log (perintah → aksi → hasil)
→ UI update + penolakan jika di luar allowlist
```

### Keamanan API — catatan wajib guru

| Larangan | Alasan | Alternatif aman |
|----------|--------|-----------------|
| API key di `index.html` / repo Git | Key bocor = biaya & abuse | Backend/proxy sekolah |
| Agent tanpa allowlist | Prompt injection · aksi berbahaya | Daftar 3–5 aksi eksplisit |
| `eval()` / `Function()` pada input user | RCE di browser | DOM API terbatas saja |
| Log tanpa klarifikasi E3 | Overclaim "AI saya" | Log klarifikasi seperti P07 |

**Referensi opsional LLM:** [OpenAI Function calling](https://platform.openai.com/docs/guides/function-calling) — **hanya** jika sekolah punya proxy; jangan jadi default MA tanpa infrastruktur.

### Cognitive trap

**Asumsi siswa:** Jarvis = copy tutorial API tanpa batas.  
**Aman:** Agent ringan · aksi terbatas · etika sama seperti P07 · log klarifikasi wajib jika pakai API.

### Syarat ikut (jika cohort jalan)

- Capstone P14 selesai **atau** guru setujui parallel track
- API key via backend/proxy sekolah — **bukan** hardcode repo
- Siswa paham: **eksperimen**, bukan asisten produksi penuh

---

## 3. Materi praktik

### Transformasi belajar

**Dari:** Chatbot generik → **agent** = LLM/rule memicu **aksi terbatas** di web.

### Allowlist — template (papan)

```text
Aksi diizinkan:
  1. scrollToSection('pengumuman')
  2. togglePanel('jadwal')
  3. showLocalData('kas-bulan-ini')

Aksi DITOLAK (demo wajib):
  - "eval ..."
  - "hapus database"
  - perintah di luar daftar → pesan penolakan + log
```

### Kapan agent overkill vs tombol?

| Situasi | Pilihan |
|---------|---------|
| 1 aksi, selalu sama | **Tombol** |
| 3+ aksi, pengguna mobile | Agent/perintah bisa masuk akal |
| Tanpa backend aman | **Rule-based** — skip LLM |
| Capstone belum selesai | **Skip P15** |

---

## 4. Yang sering salah dipikir (Cognitive Trap)

**Asumsi:** Jarvis = copy API tutorial tanpa batas.  
**Aman:** Agent ringan · aksi terbatas · etika sama seperti P07.

---

## 5. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Agent ≠ chat panjang — 3 aksi terdefinisi saja |
| 5–15 | Concept | Perintah → parse intent → function call → UI update |
| 15–25 | Trap | Agent tanpa batas = risiko & biaya |
| 25–35 | Clarify | Allowlist aksi · no secret key di frontend |
| 35–55 | Demo | Guru: “buka section pengumuman” → DOM scroll |
| 55–75 | Practice | 1–2 aksi sendiri (opsional tim capstone selesai) |
| 75–85 | Reflect | Kapan agent overkill vs tombol biasa? |
| 85–90 | Exit | Log klarifikasi wajib jika pakai API |

---

## 6. Lembar kerja / latihan

### Snippet A — Anti-pattern keamanan

```javascript
const API_KEY = "sk-proj-xxxxx"; // TODO: ganti
fetch("https://api.openai.com/...", {
  headers: { Authorization: `Bearer ${API_KEY}` }
});
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| Masalah? | Key exposed — OWASP secrets violation |
| Perbaikan? | Proxy backend sekolah — frontend panggil `/api/chat` tanpa key |
| Boleh deploy? | **Tidak** — rotate key jika pernah commit |

### Snippet B — Allowlist pattern

```javascript
const ACTIONS = { pengumuman: () => scrollTo('#news') };
function runAgent(cmd) {
  if (cmd.includes('eval')) return reject('blocked');
  const fn = ACTIONS[parseIntent(cmd)];
  if (!fn) return reject('not in allowlist');
  return fn();
}
```

| Pertanyaan membaca | Kunci jawaban |
|--------------------|--------------|
| PRJ-05 DoD? | Mendekati — perlu log + demo penolahan |
| Intent parser? | Rule sederhana OK — LLM opsional |
| Etika? | Penolakan perintah berbahaya = bukti REA |

---

## 7. Exit ticket

1. Log klarifikasi wajib jika pakai API
2. …


## 8. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
