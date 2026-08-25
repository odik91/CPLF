# XI-S3-P06 — Alur Interaksi Multi-Step

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P06 |
| Unit | XI3.3 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T1, CXI-B1 |

## Learning Transformation

Dari satu layar penuh → **wizard / multi-view** dengan state navigasi.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Tampilkan app 1 layar vs 3 step — mana lebih jelas? |
| 5–15 | Experience | **Pendaftaran ekstrakurikuler** 3 meja — simulasi antrian |
| 15–25 | Trap | Semua fitur 1 halaman = cognitive overload |
| 25–35 | Clarify | `currentStep` atau `view` di state |
| 35–45 | Concept | State machine sederhana (enum step) |
| 45–70 | Practice | Mini wizard 3 langkah (data → konfirmasi → selesai) |
| 70–85 | Peer | Walkthrough 2 menit — teman isi checklist flow |
| 85–90 | Exit | Edge case: user klik back di step 2 |

---

## Practice Checklist

- [ ] State step tercatat  
- [ ] Tombol next disabled jika invalid  
- [ ] Bisa kembali tanpa reset total  

---

## Formatif

**REA**, **COM**

---

## Catatan Guru

Persiapan langsung untuk kuis interaktif / peminjaman (PRJ S3).
