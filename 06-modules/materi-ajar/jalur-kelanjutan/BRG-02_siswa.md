# Handout Siswa — BRG-02
**Jalur pendamping CPLF** (melengkapi modul inti, bukan pengganti silabus)

**Modul CPLF terkait:** lihat bagian bawah — kerjakan setelah guru memberi arahan.

---
## Materi

# BRG-02 — ES6 Modern JS & Modul (Jembatan React / ML)


## Learning Transformation

Dari “variabel acak + mutasi” → **pola data modern** (spread, destructuring, immutability) yang dipakai React & pipeline data ML.

## Prasyarat CPLF

X-S1-P10, S2-P09, XI-S3-P09 (export/import).

## Materi inti guru

| Topik | Mengapa penting | Contoh MA |
|-------|-----------------|-----------|
| Template literals | String fitur + label | `` `Siswa ${nama}` `` |
| Destructuring array/obj | Tensor-like unpacking | `const [a,b] = row` |
| Spread copy array/obj | State update tanpa mutasi | `[...items, baru]` |
| Arrow function | Callback map/filter | `.map(x => x.skor)` |
| `const` default | Binding tidak di-reassign | prefer const |
| ES module `export/import` | Struktur proyek | `state.js`, `render.js` |

## Cognitive Trap

**Asumsi:** `items.push(x); render()` selalu aman.  
**Klarifikasi:** React/TF pipeline sering butuh **salinan baru** agar perubahan terdeteksi.

## Live coding (browser atau Node)

```javascript
// LANGKAH 1 — mutasi vs spread
let siswa = [{ nama: "A", hadir: true }];
// anti-pattern: siswa[0].hadir = false tanpa render trigger
const siswaBaru = siswa.map(s =>
  s.nama === "A" ? { ...s, hadir: false } : s
);
```

```javascript
// LANGKAH 2 — destructuring dataset row
const row = { fitur1: 0.8, fitur2: 0.2, label: 1 };
const { fitur1, fitur2, label } = row;
```

## PR siswa (tanpa file guru)

1. Refactor satu fungsi dari project XI jadi **export** terpisah.  
2. Tambah item CRUD dengan spread, bukan `.push` langsung pada state global (jika pakai pattern XI-S3).

## Etika

Siswa ketik ulang — tidak kirim `solution.js` lengkap.

## Kait RPP / KBC

Panca **Diri** (growth) + **Sesama** (kode terbaca untuk tim).

[← Indeks BRG](./00_Index_Jalur_Kelanjutan.md)

---
_Kerjakan bagian PR di kelas atau rumah sesuai petunjuk guru._

**Digunakan bersama modul CPLF:** `X-S2-P18`
