# PRJ-XII-S6-04 — Asisten Info Madrasah

**Jenis:** Nilai · **Mode:** Tim · **Durasi:** 6–8 pertemuan  
**Capability:** CXII-T3, CXII-K1, CXII-C2 · **CP:** LD, AP · **MM:** MM-00, MM-22, MM-23

## Masalah

Tamu/siswa baru sering bertanya hal berulang (jam, lokasi, kontak) — butuh asisten web, **bukan** mengarang fakta.

## Learning Transformation

Dari “chatbot yang mengarang” → “asisten berbasis pengetahuan terbatas + klarifikasi saat di luar cakupan.”

## Requirement

- [ ] Knowledge base kecil (JSON/teks) berisi fakta yang **disetujui** pihak sekolah
- [ ] UI tanya-jawab: cocokkan intent sederhana ATAU pencarian kata kunci (+ opsional LLM dengan ground truth)
- [ ] Jika tidak tahu → jawab jujur + arahkan ke kontak manusia
- [ ] Log klarifikasi: contoh pertanyaan di luar cakupan
- [ ] Presentasi: AI partner, bukan pengganti humas

## Varian Rotasi

| Varian | Fokus KB |
|--------|----------|
| A | Jam pelajaran & lokasi ruang |
| B | Info PPDB / alur administrasi (fakta resmi) |
| C | Info ekskul & pembina |

## Definition of Done

- [ ] Tidak boleh “halusinasi” pada fakta sekolah
- [ ] Protokol “tidak tahu” terbukti di demo
- [ ] Persetujuan konten dari guru/koordinator jika memungkinkan
