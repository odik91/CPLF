# Handout Siswa — X-S2-P13

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [X-S2-P13_project-s2-build-1.md](../../../kelas-x/semester-2/X-S2-P13_project-s2-build-1.md)

---

## 1. Tujuan pembelajaran

_Lihat modul pertemuan._

## 2. Ringkasan konsep

- **Format build week S2:** stand-up → build core feature (DoD) → demo 30 detik → debug clinic (CSS/selector) → exit blocker.
- **Perbedaan S1 vs S2 build:** artefak = **halaman web terintegrasi** (HTML + CSS + JS), bukan console-only.
- **Stand-up (3 pertanyaan):** kemarin / hari ini / blocker — max 1 menit per kelompok.
- **Core feature first:** prioritaskan requirement wajib PRJ (form, validasi, render list, dll.) sebelum polish visual.
- **Checkpoint questions guru** (dari modul): requirement mana belum ✅? validasi user-friendly? siapa audience?
- **Debug clinic S2:** fokus **CSS layout** (flex/grid overflow) dan **JS selector** (`querySelector` null, event tidak terpasang).
- **Scaffolding stations** (jika >40% stuck):
  - A: struktur HTML semantik + wireframe
  - B: CSS layout (flex, spacing, responsive sederhana)
  - C: DOM + event + validasi JS
- **Catat siswa perlu scaffolding** dari P11/P12 — prioritaskan rotasi berkeliling.
- **Empat opsi PRJ S2:** [PRJ-01 Zakat UI](../../../08-project/PRJ_X_S2_01_Zakat_UI.md) · [PRJ-02 Jadwal](../../../08-project/PRJ_X_S2_02_Jadwal_Kegiatan.md) · [PRJ-03 Absensi](../../../08-project/PRJ_X_S2_03_Absensi_Mini.md) · [PRJ-04 Profil Ekskul](../../../08-project/PRJ_X_S2_04_Profil_Ekskul.md)

---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

| Menit | Aktivitas |
|-------|-----------|
| 0–10 | Stand-up |
| 10–65 | Build — prioritaskan core feature (DoD) |
| 65–75 | Checkpoint demo 30 detik |
| 75–85 | Debug clinic (CSS layout / JS selector) |
| 85–90 | Blocker list |

---

## 5. Lembar kerja / latihan

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

## 6. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 7. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Diri

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nahl 16:90 (adl wa ihsan)

**Kait di kelas hari ini:** Web & kolaborasi — manfaatkan untuk sesama.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
