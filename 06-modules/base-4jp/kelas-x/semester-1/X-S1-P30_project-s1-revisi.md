# X-S1-P30 — Project S1: Revisi Prioritas

| Field | Isi |
|---|---|
| Kode | X-S1-P30 |
| Basis | **4JP** · Pertemuan **30/34** |
| Unit | X1.8 |
| Durasi | **4 JP = 180 menit** |
| Status | **Isi penuh** |
| Batas | **Kerjakan antrian 1–3 dari P29; satu item lalu uji; tanpa fitur baru, tanpa polish P31** |

## Learning Transformation

Dari antrian tertulis → **janji yang diperbaiki**: satu prioritas, perubahan terkecil, uji AC itu, regresi fitur 1 — jejak tercatat, opini peer tidak diselundupkan.

## Capaian pembelajaran (Taksonomi Bloom revisi)

| Kode | Level | Siswa mampu … |
|---|---|---|
| **C1** | Mengingat | Menyebut antrian, perubahan terkecil, uji ulang, regresi, jejak revisi |
| **C2** | Memahami | Menjelaskan beda revisi terarah vs rewrite; beda item spek vs opini |
| **C3** | Menerapkan | Mengerjakan prioritas 1 (lalu 2–3 jika sempat) di project sendiri |
| **C4** | Menganalisis | Memilih lapisan yang benar (HTML/CSS/JS) untuk tiap item antrian |
| **C5** | Mengevaluasi | Memutuskan item selesai hanya setelah AC + regresi lulus |
| **C6** | Mencipta | Log revisi: sebelum → ubahan → sesudah, siap dibawa ke P32–P33 |

**Fokus:** C3–C5 · **Puncak:** C5–C6 · Polish UX/a11y → **P31**

## Bukan P29 / P31 / P32

| Pertemuan | Peran |
|---|---|
| **P29** | Antrian ditulis; kode belum diubah |
| **P30** | Antrian dikerjakan satu per satu + uji |
| **P31** | Sentuhan UX / aksesibilitas dasar — bukan hari ini |
| **P32** | Uji final DoD paket |

## Timeline (180 menit)

| Menit | Fase | Bloom | Aktivitas |
|---|---|---|---|
| 0–10 | Orientation | C1 | Antrian di meja · opini di laci |
| 10–30 | Scaffold | C2 | Siklus: pilih #1 → ubah satu lapisan → uji AC → regresi |
| 30–50 | Experience | C2–C3 | Live: perbaiki demo P28 **satu** item, uji, baru item berikutnya |
| 50–65 | Trap | C4 | Tiga file sekaligus · opini · rewrite · pelintir spek · polish dini |
| 65–85 | Concept | C2 | Log sebelum/sesudah · “selesai” = AC lulus, bukan “sudah kuubah” |
| 85–95 | Practice mini | C3 | Isi baris #1 log dari antrian sendiri (sebelum coding) |
| 95–105 | Transisi | — | Buka project + `rencana-revisi.md` |
| 105–120 | Scaffold praktik | C2–C3 | I do: suarakan satu perubahan terkecil |
| 120–165 | Practice | C3–C6 | Kerjakan #1 (wajib) · #2–3 jika sempat · log + uji |
| 165–180 | Reflect | C5 | Status antrian · preview P31 |

## Bukan / Melainkan

| Bukan | Melainkan |
|---|---|
| Rewrite / generate ulang | Perubahan terkecil pada item #1 |
| Mengerjakan opini (“warna lebih ramai”) | Hanya baris antrian terikat spek |
| Tiga lapisan sekaligus tanpa uji | Satu item → uji AC itu → regresi |
| Mengubah `spek.md` agar temuan hilang | Kode menyesuaikan janji |
| Polish tombol / a11y besar (P31) | Tutup gap AC yang sudah antri |
| Antrian kosong → fitur 3 | Uji regresi + rapikan log; jangan mengarang kerja |

## Konsep inti

| Istilah | Arti hari ini |
|---|---|
| **Antrian** | 1–3 item dari `rencana-revisi.md` (P29) + sisa P28 jika masih gagal |
| **Perubahan terkecil** | Satu lapisan, satu tujuan AC — bukan renovasi |
| **Uji ulang** | Setelah ubahan, AC itu dicentang dari browser (bukan dari rasa) |
| **Regresi** | Fitur 1 (dan AC yang tadi lulus) diuji lagi |
| **Log revisi** | Jejak: AC · sebelum · yang diubah · sesudah · L/G |
| **Selesai item** | AC lulus **dan** regresi lulus — “sudah kuedit” belum cukup |

```text
ANTRIAN #1 → UBAH SEKECIL MUNGKIN → UJI AC ITU → REGRESI → LOG → baru #2
```

## Paket kerja

1. Buka [rencana-revisi.md](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p29-peer-review/rencana-revisi.md) milikmu.
2. Salin [log-revisi.md](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p30-revisi/log-revisi.md) ke folder project.
3. Kerjakan prioritas 1 wajib. 2–3 jika waktu sisa.
4. Demo siklus (bukan kunci): [p28-checkpoint](../../../materi-ajar/base-4jp/kelas-x/semester-1/skill-js/p28-checkpoint/) diperbaiki hidup-hidup di kelas.

## Cognitive Trap

- Item #3 (biasanya CSS “biar kelihatan”) dikerjakan dulu.
- Opini peer diselundupkan “sekalian.”
- Tiga file diubah, baru diuji sekali — tidak tahu mana yang menolong, mana yang merusak.
- Antrian kosong dianggap izin menambah fitur.
- AI/rewrite karena “lebih cepat daripada satu `h2`.”

## Guiding Questions

1. Item #1 antrian: AC nomor berapa, lapisan apa?
2. Perubahan terkecil yang bisa disebut dalam satu kalimat?
3. Setelah ubahan: AC itu L atau G? Fitur 1 masih L?
4. Opini mana yang **tidak** kukerjakan?
5. Yang tidak sempat: tetap di antrian tertulis, atau sudah lulus?

## Kriteria penerimaan

- [ ] Antrian #1 dikerjakan
- [ ] Uji ulang AC #1 + regresi fitur 1
- [ ] Log revisi terisi (sebelum / ubahan / sesudah)
- [ ] Item #2–3 hanya jika #1 lulus
- [ ] Tanpa fitur baru / tanpa opini sebagai syarat / tanpa rewrite
- [ ] Sisa antrian jujur (ditunda P31/P32 jika perlu)

## Exit Ticket

1. Item #1: AC … · lapisan … · hasil uji …
2. Regresi fitur 1: lulus / gagal
3. Yang tidak kukerjakan (opini / sisa): …
4. Bekal P31: gap AC tersisa atau siap polish?

## Formatif

**Menerapkan · C3** · **Mengevaluasi · C5** — item antrian yang lulus uji, bukan jumlah baris yang diubah.

## Catatan Guru

Tanpa `rencana-revisi.md`: 10 menit susun antrian dari lembar P29/P28, baru coding. Yang antriannya kosong: regresi + log “tidak ada item spek”; larang fitur baru. P31 bukan pelarian dari AC yang masih gagal.
