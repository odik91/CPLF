# Handout Siswa — XI-S4-P08

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P08_persistensi-error-state.md](../../../kelas-xi/semester-4/XI-S4-P08_persistensi-error-state.md)

---

## 1. Tujuan pembelajaran

Dari save silent fail → **feedback** loading/success/error ke user.

---

## 2. Ringkasan konsep

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


---

## 3. Materi praktik

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

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

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

## 6. Exit ticket

1. Screenshot 4 state
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
