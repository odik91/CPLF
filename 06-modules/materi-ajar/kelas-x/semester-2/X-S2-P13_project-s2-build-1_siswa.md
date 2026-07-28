# Handout Siswa — X-S2-P13
**Mapel:** Multimedia (Pemrograman Web) · **CPLF**
**Modul acuan:** [X-S2-P13_project-s2-build-1.md](../../kelas-x/semester-2/X-S2-P13_project-s2-build-1.md)
---
## 1. Tujuan pembelajaran
_Lihat transformasi di modul pertemuan._

## 2. Materi
### Build week 1 S2 — core feature, bukan polish

Fokus hari ini: **progress terlihat** vs DoD PRJ — halaman bisa dibuka, fitur inti jalan, validasi minimal. Polish CSS & edge case = P14.

### Stand-up efektif (0–10 menit)

- Guru catat **blocker berulang** → jadi clarifying question atau station.
- Tanya cepat: "Struktur folder P12 sudah dipakai?"

### Build block (10–65 menit)

Prioritas per PRJ (contoh):

| PRJ | Core feature hari ini |
|-----|----------------------|
| PRJ-01 | Form + hitung + 1 pesan validasi |
| PRJ-02 | List jadwal render + tambah item |
| PRJ-03 | Form absensi + simpan ke array/state |
| PRJ-04 | Section profil + navigasi anchor/CSS |

Guru keliling — rotasi 2 menit/kelompok, **hanya clarifying questions**.

### Checkpoint demo 30 detik (65–75 menit)

Ke pasangan — bukan ke guru dulu. Pasangan jawab: "Satu requirement yang belum jelas dari demo teman."

### Debug clinic CSS/selector (75–85 menit)

1 error anonymous diprojeksi — pilih dari volunteer atau snippet generic di bawah.
Kelas: TTS baca error → hipotesis → volunteer fix sendiri.

### Exit blocker (85–90 menit)

1 kalimat untuk P14 — target freeze feature + polish.

---
## 5. Alur pertemuan (90 menit)
| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Stand-up |
| 10–65 | Build — prioritaskan core feature (DoD) |
| 65–75 | Checkpoint demo 30 detik |
| 75–85 | Debug clinic (CSS layout / JS selector) |
| 85–90 | Blocker list |

---

## 6. Lembar kerja / latihan
Untuk **debug clinic** — snippet proyeksi, siswa prediksi gejala (bukan copy):

```javascript
// Error anonymous — selector salah
document.querySelector("#btnHitung").addEventListener("click", hitung);
// HTML: <button id="btn-hitung">Hitung</button>
```

| Pertanyaan membaca (TTS) | Kunci jawaban |
|--------------------------|--------------|
| Gejala di console? | `Cannot read properties of null (reading 'addEventListener')` |
| Hipotesis? | Id mismatch: `#btnHitung` vs `btn-hitung` |
| Fix minimal? | Samakan id di HTML dan JS |

```css
/* Layout clinic — flex tanpa wrap */
.kartu-list {
  display: flex;
  gap: 1rem;
}
/* 6 kartu lebar 300px di layar 768px */
```

| Pertanyaan membaca | Kunci |
|--------------------|-------|
| Gejala visual? | Overflow horizontal / kartu terpotong |
| Saran (bukan fix guru)? | `flex-wrap: wrap` atau `max-width` parent |

**Etika:** jika pakai kode siswa volunteer, anonimkan — fokus proses, bukan malu.

---

## 8. Refleksi
1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

---
_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
