# Materi Guru Lengkap — BRG-03

**Handout siswa:** [BRG-03_siswa.md](./BRG-03_siswa.md)

**Sumber BRG:** [BRG-03_SPA_Vanilla_ke_Komponen.md](../../materi-pendukung/jalur-kelanjutan/BRG-03_SPA_Vanilla_ke_Komponen.md)

---
## Panduan mengajar

# BRG-03 — SPA Vanilla → Pola Komponen (Jembatan React)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU**  
**Durasi:** 1–2 JP · **Jalur:** B · **Setelah:** XI-S3-P09

## Learning Transformation

Dari multi-`section` show/hide → **fungsi render terpisah per “komponen”** (props = parameter).

## Yang sudah ada di CPLF

Silabus XI3.7: “SPA ringan / multi-section” — modul S3 **belum** memakai React (sengaja).

## Gap yang ditutup

| Konsep React | Persiapan vanilla BRG-03 |
|--------------|---------------------------|
| Component | `function StudentRow(props) { ... }` |
| Props | Argumen objek `{ item, onDelete }` |
| State lift | Satu `state.js` impor ke beberapa render |
| Re-render | Panggil `renderApp()` setelah setState |
| Routing (intro) | `hashchange` `#/list` `#/form` |

## Live modeling — struktur folder

```text
index.html
js/state.js      → export getState, setState
js/components/
  studentList.js → export renderStudentList(state, handlers)
  studentForm.js → export renderStudentForm(state, handlers)
js/app.js        → mount, hash router sederhana
```

## Trap

**Asumsi:** SPA = harus React.  
**Klarifikasi:** React = **otomatisasi** pola yang sudah kamu tulis manual di BRG-03.

## PR

Ubah project S3: minimal **2 komponen render** + router hash 2 halaman.

## Lanjut

[BRG-06 React](./BRG-06_React_SPA_Pengantar.md) — mapping 1:1 dari fungsi ke JSX.

[← Indeks BRG](./00_Index_Jalur_Kelanjutan.md)


---
## Modul CPLF terhubung

- XI-S3-P09
- XI-S3-P10

## Etika

Live demo — siswa praktik paralel, bukan copas file guru.
