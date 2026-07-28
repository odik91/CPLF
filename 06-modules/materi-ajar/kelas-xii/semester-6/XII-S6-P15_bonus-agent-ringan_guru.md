# Materi Guru Lengkap — XII-S6-P15

**Handout siswa (bagikan):** [XII-S6-P15_bonus-agent-ringan_siswa.md](./XII-S6-P15_bonus-agent-ringan_siswa.md)

**Modul:** [XII-S6-P15_bonus-agent-ringan.md](../../../kelas-xii/semester-6/XII-S6-P15_bonus-agent-ringan.md)

**Materi pendukung sumber:** [XII-S6-P15_bonus-agent-ringan.md](../../../materi-pendukung/kelas-xii/semester-6/XII-S6-P15_bonus-agent-ringan.md)

---
## A. Modul pertemuan (referensi)

# XII-S6-P15 — Bonus AI Agent Ringan

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P15 |
| Unit | XII6.7 |
| Durasi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S6-05 AI Agent Bonus](../../../08-project/PRJ_XII_S6_05_AI_Agent_Bonus.md) |
| Status | **Opsional** — skip jika cohort belum selesai capstone |

## Learning Transformation

Dari chatbot generik → **agent** = LLM memicu aksi terbatas di web.

---

## Timeline (90 menit)

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

## Cognitive Trap

**Asumsi:** Jarvis = copy API tutorial tanpa batas.  
**Aman:** Agent ringan · aksi terbatas · etika sama seperti P07.

---

## Syarat Ikut

- Capstone P14 selesai **atau** guru setujui parallel track  
- API key via backend/proxy sekolah — **bukan** hardcode repo  

---

## Formatif

**REA**, **TEC** (bonus, tidak wajib backbone)

---

## Catatan Guru

**Bukan syarat kelulusan.** Prioritaskan P16–P18 jika jam sempit.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XII-S6-P15 Bonus AI Agent Ringan

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

> **Status pertemuan:** **OPSIONAL** — skip seluruh P15 jika cohort belum selesai capstone P14 atau jam sempit. **Bukan syarat kelulusan.**  
> **Panduan wajib (jika mengajar):** [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md)  
> **Project brief:** [PRJ-XII-S6-05 AI Agent Bonus](../../../../08-project/PRJ_XII_S6_05_AI_Agent_Bonus.md)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XII-S6-P15 |
| Modul pertemuan | [XII-S6-P15_bonus-agent-ringan.md](../../../kelas-xii/semester-6/XII-S6-P15_bonus-agent-ringan.md) |
| Semester | 6 · Pertemuan 15/18 |
| Unit | XII6.7 |
| Durasi referensi | 2 JP = 90 menit |
| PRJ | [PRJ-XII-S6-05](../../../../08-project/PRJ_XII_S6_05_AI_Agent_Bonus.md) — **BONUS, opsional** |
| Capability | Bonus (CXII-C2, T3) |
| Formatif | REA, TEC *(bonus — tidak wajib backbone)* |
| Ada live code? | **Demo guru** + practice opsional siswa |

---

## Keputusan Guru — Skip atau Jalan?

| Kondisi | Rekomendasi |
|---------|-------------|
| Capstone P14 belum selesai / E1 open | **Skip P15** — prioritaskan P16–P18 |
| Jam semester sempit | **Skip** — lihat [Panduan CV Etika](../../00_Panduan_Guru_CV_Etika.md) |
| Cohort kuat + backend sekolah ada | Jalan P15 sebagai **eksplorasi bonus** |
| Tidak ada proxy API sekolah | **Skip LLM branch** — cukup agent rule-based (DOM scroll) |

**Ingat:** P15 tidak menggantikan capstone. Nilai backbone tetap dari PRJ-XII-S6-01…04 + rubrik etika.

---

## Referensi Guru (baca sebelum mengajar)

| # | Topik | Link |
|---|-------|------|
| 1 | **Opsional** — OpenAI function calling (jika pakai API) | → [OpenAI — Function calling](https://platform.openai.com/docs/guides/function-calling) |
| 2 | **Wajib jika API** — API key tidak di frontend | → [OWASP — API Security Top 10](https://owasp.org/www-project-api-security/) |
| 3 | **Wajib jika API** — Secrets management | → [OWASP — Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html) |
| 4 | MDN — fetch & CORS (proxy pattern) | → [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) |
| 5 | Google Responsible AI | → [Google AI — Responsible AI Practices](https://ai.google/responsibility/responsible-ai-practices/) |
| 6 | Rubrik etika E3 (klarifikasi AI) | → [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md) |
| 7 | Project brief bonus | → [PRJ-XII-S6-05](../../../../08-project/PRJ_XII_S6_05_AI_Agent_Bonus.md) |
| 8 | Panduan bonus agent CPLF | → [00_Panduan_Guru_CV_Etika.md](../../00_Panduan_Guru_CV_Etika.md) *(bagian P15)* |

---

## Pengetahuan Guru

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

## Recall Spiral

Opening **3 menit** — hanya jika P15 dijalankan.

| Pertanyaan | Kunci |
|------------|-------|
| P07: AI partner vs pengganti — agent di mana? | Partner — siswa paham aksi & batas |
| P05: fallback non-AI — agent perlu? | Tombol biasa sering cukup — agent ≠ default |
| Capstone: kenapa P15 opsional? | Nilai backbone = capstone + etika |
| Keamanan: API key di frontend? | **Tidak** — OWASP + proxy sekolah |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Jangan distribusi starter dengan API key placeholder "ganti sendiri" |
| **Live modeling** | Demo guru: allowlist + 1 perintah ditolak ("hapus semua data") |
| **Per baris / scope** | Setiap aksi: "Input → validasi → DOM — bukan eval" |
| **Recall** | Kaitkan P07 klarifikasi sebelum practice |
| **Skip OK** | Guru boleh jelaskan 15 menit konsep lalu lanjut P16 — **tidak ada malu cohort** |
| **No API pressure** | Rule-based agent = valid penuh untuk PRJ-05 bonus |

---

## Materi Inti

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

## Alur Facilitator / Demo

### Persiapan

- [ ] Putuskan: skip / rule-only / LLM via proxy
- [ ] Demo HTML sederhana: 3 section + 1 input perintah
- [ ] Contoh log: `perintah | intent | aksi | hasil`
- [ ] **Tidak boleh** di repo siswa: API key, starter copas tutorial OpenAI utuh

### Skrip fasilitator (90 menit — selaras modul)

```text
[LANGKAH 1 — Opening 0–5 menit]
Ucapkan: "Agent ≠ chat panjang. Tiga aksi terdefinisi — selebihnya ditolak."
Tanya: "Kenapa P15 opsional dan bukan syarat lulus?"

[LANGKAH 2 — Concept 5–15 menit]
Gambar pipeline: perintah → intent → allowlist → aksi → log
Referensi opsional: OpenAI function calling — HANYA via proxy sekolah

[LANGKAH 3 — Trap 15–25 menit]
Tampilkan: tutorial agent tanpa batas — biaya · injection · eval
Ucapkan: "Jarvis di film ≠ produk MA aman."

[LANGKAH 4 — Clarify 25–35 menit]
Allowlist di papan + larangan API key frontend
Ucapkan: "Key di GitHub = uang habis + data bocor."

[LANGKAH 5 — Demo 35–55 menit]
Guru live: "buka section pengumuman" → scroll DOM
Demo penolakan: perintah di luar allowlist
Scope: aksi nyata — bukan hanya balasan teks

[LANGKAH 6 — Practice 55–75 menit]
OPSIONAL — hanya tim capstone selesai / individu minat
1–2 aksi sendiri — rule-based cukup
Keliling: cek tidak ada key di source

[LANGKAH 7 — Reflect 75–85 menit]
Pleno: "Kapan agent overkill vs tombol?"
E3: log klarifikasi jika pakai LLM

[LANGKAH 8 — Exit 85–90 menit]
Jika pakai API: submit log klarifikasi
Jika skip practice: exit ticket — 1 alasan skip/tetap jalan P15
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri

**Hanya jika cohort siap:**

1. Definisikan allowlist 3–5 aksi pada app capstone atau mini HTML.
2. Implement 1 aksi nyata (scroll/toggle/query lokal).
3. Demo penolakan 1 perintah di luar allowlist.
4. Log: perintah → aksi → hasil (3 baris).
5. Jika LLM: log klarifikasi E3 — apa yang AI vs siswa pahami.
6. Refleksi: "Agent ini overkill atau justified?"

**Jika skip:** siswa lanjut persiapan portofolio P16 — **setara valid**.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Copy tutorial OpenAI utuh + key | Block — ajarkan proxy pattern |
| Agent hanya chat, tanpa aksi DOM | Gate DoD: aksi nyata wajib PRJ-05 |
| Allowlist kosong | Wajib 3 aksi + 1 demo tolak |
| P15 jadi prioritas vs capstone | Remind: bonus — P16–P18 dulu jika sempit |
| Overclaim "asisten pintar" | Kaitkan rubrik E1 — eksperimen terbatas |
| `eval` pada input | Larangan keras — tunjukkan risiko |

---

## Rujukan

- Modul: [XII-S6-P15](../../../kelas-xii/semester-6/XII-S6-P15_bonus-agent-ringan.md)
- Project: [PRJ-XII-S6-05](../../../../08-project/PRJ_XII_S6_05_AI_Agent_Bonus.md)
- Sebelumnya: [P14 Presentasi Nilai](./XII-S6-P14_presentasi-nilai.md)
- Lanjutan: [P16 Portofolio 3 Tahun](./XII-S6-P16_portofolio-3-tahun.md)
- Rubrik etika E3: [09_Rubrik_Etika_AI](../../../../09-rubrik/09_Rubrik_Etika_AI.md)
- Function calling (opsional): [OpenAI — Function calling](https://platform.openai.com/docs/guides/function-calling)

---

## Checklist Exit

- [ ] Keputusan skip/jalan dokumentasi (jika skip — alasan OK)
- [ ] Konsep agent vs chatbot + allowlist dijelaskan
- [ ] Catatan keamanan API — no key frontend
- [ ] Demo guru: 1 aksi + 1 penolakan (jika jalan)
- [ ] Practice opsional — tidak dipaksa jika capstone belum selesai
- [ ] Log klarifikasi jika pakai LLM API
- [ ] Siswa tahu P15 **bukan syarat kelulusan**

[← Indeks materi S6](./XII-S6_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)
