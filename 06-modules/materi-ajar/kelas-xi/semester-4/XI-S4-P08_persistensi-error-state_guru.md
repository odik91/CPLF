# Materi Guru Lengkap — XI-S4-P08

**Handout siswa (bagikan):** [XI-S4-P08_persistensi-error-state_siswa.md](./XI-S4-P08_persistensi-error-state_siswa.md)

**Modul:** [XI-S4-P08_persistensi-error-state.md](../../../kelas-xi/semester-4/XI-S4-P08_persistensi-error-state.md)

**Materi pendukung sumber:** [XI-S4-P08_persistensi-error-state.md](../../../materi-pendukung/kelas-xi/semester-4/XI-S4-P08_persistensi-error-state.md)

---
## A. Modul pertemuan (referensi)

# XI-S4-P08 — Persistensi & Error State UI

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P08 |
| Unit | XI4.4 |
| Durasi | 2 JP = 90 menit |
| Capability | CXI-T4 |

## Learning Transformation

Dari save silent fail → **feedback** loading/success/error ke user.

---

## Timeline (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Quota exceeded demo (optional) atau corrupt JSON |
| 5–15 | Experience | **Tabungan Qurban** — bukti setor harus jelas |
| 15–25 | Trap | User klik save — tidak tahu berhasil atau tidak |
| 25–35 | Clarify | UI state: idle · saving · saved · error |
| 35–45 | Concept | Disable button saat save · toast/message |
| 45–70 | Practice | Lengkapi P07 dengan status UI + export JSON backup |
| 70–85 | Reflect | Beda error user vs error system |
| 85–90 | Exit | Screenshot 4 state |

---

## Formatif

**OBS**, **TEC**

---

## Catatan Guru

Jembatan ke PRJ absensi persistent / inventaris.


---
## B. Materi pendukung (lengkap)

# Materi Pendukung Guru — XI-S4-P08 Persistensi & Error State UI

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S4-P08 |
| Modul pertemuan | [XI-S4-P08_persistensi-error-state.md](../../../kelas-xi/semester-4/XI-S4-P08_persistensi-error-state.md) |
| Unit | XI4.4 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T4 |
| Formatif | OBS, TEC |
| Ada live code? | **Ya — UI idle/saving/saved/error + export backup live** |

---

## Pengetahuan Guru

| Konsep | Penjelasan guru |
|--------|-----------------|
| **UI persist status** | `idle` · `saving` · `saved` · `error` — user tahu apa yang terjadi |
| **State terpisah** | `state.ui.saveStatus` atau variabel `saveStatus` — jangan campur dengan domain data |
| **Disable saat saving** | Cegah double-submit / race overwrite |
| **Feedback visual** | Teks status + class CSS + optional toast |
| **Error user vs system** | Form kosong = user; quota/corrupt = system |
| **Export JSON backup** | `Blob` + download link — amanah data offline |
| **Spiral render** | Status UI di-update lewat `render()` atau `renderStatus()` kecil |
| **Async illusion** | localStorage sync — tetap bisa `setTimeout` 300ms demo "saving" untuk UX latihan |

**Builds on P07:** saveState sudah ada — hari ini **wrap dengan status** + handle gagal.

**Builds on S3 P08:** Domain state tetap single source — UI meta (`saveStatus`, `lastSavedAt`) bagian state atau sibling object.

**Builds on S4 P04:** Loading/error fetch — **polar sama** untuk storage (beda sumber).

**Jangan bagikan:** komponen status + export siap pakai lengkap.

---

## Recall Spiral

| Pertanyaan | Kunci |
|------------|-------|
| "P07 — save silent, user tahu berhasil?" | Tidak — hari ini feedback wajib |
| "P04 — loading saat fetch?" | idle → loading → success/error — parallel pattern |
| "S3 P04 — render setelah state berubah?" | saveStatus berubah → render status |
| "P06 — side effect di pure function?" | Save/export = side effect terkontrol, bukan di transform |

---

## Etika Penyampaian

| Aturan | Penerapan hari ini |
|--------|-------------------|
| **No copas** | Siswa lengkapi app P07 sendiri dengan 4 status |
| **Live coding** | Tambah `#save-status` + wrap saveState — demo error corrupt |
| **Per baris / scope** | saveStatus enum, renderStatus, try/catch — TTS |
| **Recall** | Tabungan Qurban — bukti setor harus jelas |
| **Membaca kode** | Snippet tanpa disable button — prediksi double save |
| **No starter file** | Lanjut file P07 — bukan template baru |
| **Amanah** | Export backup = tanggung jawab data kelompok |

---

## Materi Inti

### Transformasi

**Dari:** Save silent / user bingung  
**Ke:** **Feedback eksplisit** — 4 state UI + backup export

### Bentuk state (contoh)

```javascript
let state = loadState(); // domain dari P07

let saveStatus = "idle"; // idle | saving | saved | error
let saveMessage = "";
```

### Pola save dengan status

```javascript
function persistState() {
  saveStatus = "saving";
  saveMessage = "Menyimpan...";
  renderStatus();

  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    saveStatus = "saved";
    saveMessage = "Tersimpan ✓";
  } catch (err) {
    saveStatus = "error";
    saveMessage = "Gagal menyimpan — coba export backup";
    console.error(err);
  }
  renderStatus();

  if (saveStatus === "saved") {
    setTimeout(function () {
      if (saveStatus === "saved") {
        saveStatus = "idle";
        saveMessage = "";
        renderStatus();
      }
    }, 2000);
  }
}
```

### renderStatus (ringan — bisa terpisah dari render utama)

```javascript
function renderStatus() {
  const el = document.getElementById("save-status");
  el.textContent = saveMessage;
  el.className = "status status-" + saveStatus;
  const disabled = saveStatus === "saving";
  document.getElementById("btn-add").disabled = disabled;
}
```

### Export backup

```javascript
function exportBackup() {
  const blob = new Blob([JSON.stringify(state, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = KEY + "-backup.json";
  a.click();
  URL.revokeObjectURL(url);
}
```

### 4 state visual (CSS minimal)

| Status | Tampilan | Button |
|--------|----------|--------|
| idle | Kosong / "Siap" | enabled |
| saving | "Menyimpan..." | disabled |
| saved | "Tersimpan ✓" hijau | enabled |
| error | Pesan merah + hint export | enabled |

---

## Alur Live Coding

> **Scaffold:** App P07 dengan load/save — tambah `<p id="save-status">` + tombol Export.

### Persiapan

- App P07 jalan
- DevTools corrupt JSON untuk demo error (opsional quota: isi dummy besar)

### Skrip TTS — ketik live baris demi baris

```text
[LANGKAH 0 — Opening silent save 0–5 menit]
App P07 — klik tambah — refresh OK — tapi tidak ada feedback.
Ucapkan: "User tidak tahu apakah save jalan — spiral P04 loading."
Demo corrupt → white screen jika belum try/catch lengkap.

[LANGKAH 1 — Experience 5–15 menit]
Tabungan Qurban — setor tanpa kwitansi — rasa tidak aman.
Tanya: "4 keadaan UI yang user perlu lihat?"

[LANGKAH 2 — Clarify 4 state 15–25 menit]
Papan: idle · saving · saved · error.
Bedakan error user (validasi) vs system (storage penuh).

[LANGKAH 3 — saveStatus vars 25–32 menit]
Ketik:
let saveStatus = "idle";
let saveMessage = "";
Ucapkan: "UI meta terpisah dari students[] — spiral S3 state object bisa digabung nanti."

[LANGKAH 4 — HTML status 32–36 menit]
<p id="save-status" class="status status-idle" aria-live="polite"></p>
<button type="button" id="btn-export">Export backup</button>
Ucapkan: "aria-live untuk screen reader — aksesibilitas ringan."

[LANGKAH 5 — renderStatus 36–48 menit]
Ketik renderStatus — text + className + disable btn-add saat saving.
Ucapkan: "Render status ringan — tidak perlu re-render seluruh list."

[LANGKAH 6 — persistState 48–62 menit]
Refactor saveState calls → persistState() dengan try/catch.
Set saving → setItem → saved atau error.
setTimeout reset saved → idle 2 detik.
Ucapkan: "try/catch tangkap QuotaExceededError."

[LANGKAH 7 — Wire CRUD 62–68 menit]
addStudent/toggle/remove panggil persistState() bukan saveState langsung.
Demo: klik cepat 3× — button disabled saat saving.

[LANGKAH 8 — exportBackup 68–78 menit]
Ketik exportBackup — klik — file JSON terunduh.
Ucapkan: "Backup = amanah — data kelompok bisa pulih manual."

[LANGKAH 9 — Demo error 78–85 menit]
Corrupt storage atau mock throw — status error + sarankan export.
Screenshot 4 state untuk exit ticket.

[LANGKAH 10 — Reflect 85–90 menit]
Tanya: "Fetch error vs storage error — UI sama atau beda?"
Hook P09: struktur JSON akan relational — backup makin penting.
```

---

## Latihan Membaca Kode

### Snippet A — Status flow

```javascript
saveStatus = "saving";
renderStatus();
localStorage.setItem(KEY, JSON.stringify(state));
saveStatus = "saved";
renderStatus();
```

| Pertanyaan | Kunci |
|------------|-------|
| Kenapa renderStatus 2×? | User lihat saving sebelum selesai |
| Tanpa saving? | Jump idle→saved — UX terasa instant/tidak jelas |

### Snippet B — Disable button

```javascript
btnAdd.disabled = saveStatus === "saving";
```

| Pertanyaan | Kunci |
|------------|-------|
| Mencegah apa? | Double write / race |
| Spiral P04? | Sama seperti disable submit saat fetch |

### Snippet C — Reset saved

```javascript
setTimeout(function () {
  if (saveStatus === "saved") {
    saveStatus = "idle";
    renderStatus();
  }
}, 2000);
```

| Pertanyaan | Kunci |
|------------|-------|
| Kenapa cek === "saved"? | User mungkin trigger error baru dalam 2 detik |
| Wajib? | Opsional UX — yang wajib 4 state ada |

---

## Praktik Mandiri

1. Lengkapi app P07 dengan 4 status UI + screenshot masing-masing
2. Tombol Export backup JSON — uji buka file di editor
3. Simulasi error (corrupt / try throw) — pesan jelas ke user
4. README: beda error user vs system — 2 contoh
5. **Tidak boleh:** copy CSS/HTML status block guru utuh

**Extension:** Import backup — `FileReader` + parse + confirm overwrite.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Hanya alert() untuk status | Demo alert ganggu — inline status lebih baik |
| Lupa disable saat saving | Double click demo |
| saved permanen — tidak reset idle | UI cluttered |
| Campur saveStatus ke student object | Pisah UI meta |
| Export tanpa revokeObjectURL | Memory leak ringan — tunjuk best practice |
| Error tanpa solusi | Selalu hint export / refresh |
| Guru ganti seluruh app siswa | Diff minimal dari P07 |

---

## Rujukan

- Modul: [XI-S4-P08](../../../kelas-xi/semester-4/XI-S4-P08_persistensi-error-state.md)
- Storage: [P07 localStorage CRUD](./XI-S4-P07_localstorage-crud.md)
- Fetch loading: [P04 Fetch JSON](./XI-S4-P04_fetch-json.md)
- Render: [S3 P04 DOM Update](../semester-3/XI-S3-P04_dom-update-aman.md)
- State: [S3 P08 State Aplikasi](../semester-3/XI-S3-P08_state-aplikasi.md)
- Lanjut: [P09 Model Data Relasi](./XI-S4-P09_model-data-relasi.md)
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] 4 state UI didemo live (screenshot exit)
- [ ] persistState + try/catch + renderStatus
- [ ] Button disable saat saving
- [ ] Export backup JSON jalan
- [ ] Error user vs system dibedakan oral
- [ ] Spiral P04 loading + P07 storage
- [ ] Tidak distribusi solusi lengkap

[← Indeks materi XI-S4](./XI-S4_Materi_Index.md)

---
## C. BRG & jalur kelanjutan
_Tidak ada BRG wajib untuk pertemuan ini._

## D. Etika penyampaian
- Live coding / modeling — siswa mengetik sendiri.
- Jangan kirim solusi project penuh.
- Lihat [../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md](../../../materi-pendukung/00_Panduan_Etika_Penyampaian.md)

---
## E. KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · amanah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS An-Nisa 4:58

**Kait di kelas hari ini:** Data kelompok disimpan = amanah — backup & consent.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan pada fase Clarify/Reflect; gunakan terjemahan resmi Kemenag. Hadits — sebut perawi & status sesuai kitab madrasah.
