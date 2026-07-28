# Handout Siswa — BRG-01

**Jalur pendamping CPLF** — melengkapi modul inti (bukan pengganti silabus).

---

## 1. Tujuan

_Lihat materi di bawah._

## 2. Materi & langkah

**Jalur:** A (wajib sebelum S5-P08)

## Tujuan

Memastikan cohort siap **tensor, fit, predict** — bukan hafal TF.js.

## Checklist gate (siswa ≥ 12/15 centang → lanjut S5 normal; else remedial BRG-02/08)

| # | Kemampuan | Bukti spiral CPLF |
|---|-----------|-------------------|
| 1 | Array of object; akses `.map` | X-S2-P09, XI-S3 |
| 2 | JSON.parse / stringify | XI-S4 fetch |
| 3 | async/await + try/catch fetch | XI-S4-P01–P04 |
| 4 | map/filter (setidaknya 2) | XI-S4-P03 |
| 5 | Satu sumber kebenaran state + render | XI-S3-P08 |
| 6 | Flowchart → kode urutan | X-S1-P05 |
| 7 | if/validasi input numerik | X-S1-P09, S2-P08 |
| 8 | Loop akumulasi (jumlah/rata) | X-S1-P11, S5-P05 |
| 9 | Baca error console (baris) | X-S1-P13 |
| 10 | Jelaskan “fitur vs label” dengan contoh MA | preview S5-P02 |
| 11 | Normalisasi teks: trim, lowercase | S5-P03 materi |
| 12 | Plot/list angka min–max manual | S5-P05 |
| 13 | Protokol klarifikasi AI 3 langkah | EXP_10, XII preview |
| 14 | Git clone / buka repo project | XI-S4 |
| 15 | Demo fetch JSON 1 endpoint | XI-S4-P04 |

## Diagnostik live (15 menit)

Proyeksikan snippet — siswa tulis jawaban di kertas:

```javascript
const rows = [{ skor: 80, lulus: 1 }, { skor: 55, lulus: 0 }];
// 1) map skor saja
// 2) filter lulus === 1
// 3) rata-rata skor (reduce atau loop)
```

## Remedial jika gagal

| Kekurangan | BRG / modul ulang |
|------------|-------------------|
| Array/map | X-S2-P09 + BRG-02 |
| Async/fetch | XI-S4-P01–P04 |
| State/render | XI-S3-P08 |
| Numerik/stat | BRG-08 sebelum P08 |

## Catatan guru

Gate **bukan** ujian tulis bobot rapor — alat keputusan diferensiasi. Dokumentasikan % lulus untuk pilot.

[← Indeks BRG](./00_Index_Jalur_Kelanjutan.md)

---

_Kerjakan sesuai arahan guru._

## Modul CPLF terhubung

- `XII-S5-P01` — [handout modul](../kelas-xii/semester-5/XII-S5-P01_ai-ml-dl-peta_siswa.md)
- `XII-S5-P11` — [handout modul](../kelas-xii/semester-5/XII-S5-P11_project-s5-kickoff_siswa.md)
