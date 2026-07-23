# PRJ-XII-S6-05 — AI Agent Ringan (“Jarvis”) — BONUS

**Jenis:** Bonus · **Mode:** Individu / pasangan · **Durasi:** 3–5 pertemuan  
**Capability:** Bonus (CXII-C2, T3) · **CP:** LD, AP · **MM:** MM-22, MM-15  
**Syarat:** Project nilai utama (S6-01…04) sudah on track

## Masalah

Banyak yang mengira “agent” = chatbot. Padahal agent = **otak yang memicu aksi** di aplikasi.

## Learning Transformation

Dari “ngobrol dengan AI” → “perintah → niat → aksi terbatas di web.”

## Requirement

- [ ] 3–5 perintah terbatas (contoh: buka halaman pengumuman, hitung iuran, tampilkan jadwal)
- [ ] Parser intent sederhana (rule) ATAU LLM API dengan allowlist aksi
- [ ] **Allowlist wajib:** agent tidak boleh aksi di luar daftar
- [ ] Log: perintah → aksi → hasil
- [ ] Demo + batasan keamanan (jangan eksekusi kode bebas)

## Varian Rotasi

| Varian | Aksi |
|--------|------|
| A | Kontrol UI portal kelas (tampil/sembunyi panel) |
| B | Query data lokal (absensi/kas) lewat perintah |
| C | Gabungan suara (opsional) → teks → aksi |

## Definition of Done

- [ ] Aksi nyata di app, bukan hanya balasan teks
- [ ] Allowlist + penolakan perintah berbahaya terbukti
- [ ] Klarifikasi: ini eksperimen, bukan asisten produksi penuh

## Anti-Pattern

Agent dengan akses tak terbatas / menjalankan `eval` sembarangan.
