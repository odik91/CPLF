# Handout Siswa — XI-S3-P06

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S3-P06_alur-interaksi.md](../../../kelas-xi/semester-3/XI-S3-P06_alur-interaksi.md)

---

## 1. Tujuan pembelajaran

Dari satu layar penuh → **wizard / multi-view** dengan state navigasi.

---

## 2. Ringkasan konsep

**Dari satu layar penuh → wizard multi-view dengan state navigasi.** Persiapan langsung kuis interaktif / peminjaman (PRJ S3).

| Konsep | Penjelasan guru |
|--------|-----------------|
| **`currentStep` / `view`** | State navigasi — angka atau string enum (`'data'`, `'konfirmasi'`, `'selesai'`) |
| **State machine sederhana** | Hanya transisi valid — next/back mengubah step |
| **render(state)** | Tampilkan **satu view** sesuai step — hide/show atau rebuild section |
| **Next disabled if invalid** | Process gate — spiral P05 validasi per step |
| **Back tanpa reset total** | Data step 1 tetap saat kembali dari step 2 — edge case modul |
| **Cognitive overload** | Semua fitur 1 halaman = user bingung — wizard mengurangi beban |

**Metafora pendaftaran ekstrakurikuler 3 meja:** meja 1 data → meja 2 konfirmasi → meja 3 selesai — **antrian = currentStep**.

**Trap modul:** Semua fitur 1 halaman = overload — **demo:** bandingkan mockup 1 layar vs 3 step.

**Recall chain S3:** P02 state diagram → P04 render → P05 validasi/flow → **hari ini navigasi step**.

**PENTING:** Bangun wizard dari HTML minimal — **bukan** distribusi multi-page template.

---

## 3. Materi praktik

### Transformasi

**Dari:** Satu layar penuh form + tombol  
**Ke:** **Wizard 3 langkah** — data → konfirmasi → selesai

### State shape (target)

```javascript
const STEP = { DATA: 1, KONFIRMASI: 2, SELESAI: 3 };

let state = {
  currentStep: STEP.DATA,
  form: { nama: "", ekstra: "" },
};
```

### State machine (diagram papan)

```text
Step 1 DATA ──next(valid)──► Step 2 KONFIRMASI ──submit──► Step 3 SELESAI
     ▲                              │
     └──────── back ────────────────┘
```

### Syntax inti (target live coding)

```html
<div id="app"></div>
<script>
  const STEP = { DATA: 1, KONFIRMASI: 2, SELESAI: 3 };

  let state = {
    currentStep: STEP.DATA,
    form: { nama: "", ekstra: "" },
  };

  const app = document.querySelector("#app");

  function render() {
    app.replaceChildren();

    if (state.currentStep === STEP.DATA) {
      app.innerHTML = `
        <h2>Langkah 1 — Data</h2>
        <label>Nama <input id="nama" value="${state.form.nama}"></label>
        <label>Ekstra
          <select id="ekstra">
            <option value="">Pilih</option>
            <option value="Pramuka">Pramuka</option>
            <option value="PMR">PMR</option>
          </select>
        </label>
        <p id="err"></p>
        <button id="btnNext">Lanjut</button>
      `;
      document.querySelector("#ekstra").value = state.form.ekstra;
      document.querySelector("#btnNext").addEventListener("click", onNextData);
      return;
    }

    if (state.currentStep === STEP.KONFIRMASI) {
      const p = document.createElement("p");
      p.textContent = "Konfirmasi: " + state.form.nama + " — " + state.form.ekstra;
      const btnBack = document.createElement("button");
      btnBack.textContent = "Kembali";
      btnBack.addEventListener("click", function () {
        state.currentStep = STEP.DATA;
        render();
      });
      const btnSubmit = document.createElement("button");
      btnSubmit.textContent = "Daftar";
      btnSubmit.addEventListener("click", function () {
        state.currentStep = STEP.SELESAI;
        render();
      });
      app.appendChild(document.createElement("h2")).textContent = "Langkah 2";
      app.appendChild(p);
      app.appendChild(btnBack);
      app.appendChild(btnSubmit);
      return;
    }

    if (state.currentStep === STEP.SELESAI) {
      app.textContent = "Selesai! " + state.form.nama + " terdaftar di " + state.form.ekstra;
    }
  }

  function onNextData() {
    const nama = document.querySelector("#nama").value.trim();
    const ekstra = document.querySelector("#ekstra").value;
    const err = document.querySelector("#err");

    if (nama.length < 3 || !ekstra) {
      err.textContent = "Lengkapi nama (min 3) dan pilih ekstra.";
      return;
    }

    state.form.nama = nama;
    state.form.ekstra = ekstra;
    state.currentStep = STEP.KONFIRMASI;
    render();
  }

  render();
</script>
```

**Catatan guru — innerHTML di wizard:**
- Step DATA pakai innerHTML **sekali per masuk step** + listener di-attach setelah render — **beda** dengan P04 bug (re-render loop tanpa kontrol)
- Ideal MA: step 2–3 pakai `createElement` (P03) — step 1 innerHTML boleh sebagai kompromi live, **jelaskan tradeoff**
- Alternatif lebih aman: 3 `<section id="step1">` di HTML, render = toggle `hidden` — opsional adaptasi 1 JP

### Practice checklist (modul)

- [ ] State step tercatat (`currentStep`)
- [ ] Tombol next disabled jika invalid (atau validasi + pesan — setara)
- [ ] Bisa kembali **tanpa reset total** `state.form`

### Edge case exit: back di step 2

| Skenario | Perilaku target |
|----------|-----------------|
| User isi step 1 → next → back | Field step 1 **prefill** dari `state.form` |
| User back lalu ubah nama | Konfirmasi tampil data **baru** setelah next lagi |

---

## 4. Alur pertemuan (90 menit)

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

## 5. Lembar kerja / latihan

### Snippet A — Reset form saat back (bug)

```javascript
btnBack.addEventListener("click", function () {
  state = { currentStep: STEP.DATA, form: { nama: "", ekstra: "" } };
  render();
});
```

| Pertanyaan | Kunci |
|------------|-------|
| UX setelah back? | Data hilang — **melanggar** checklist modul |
| Fix? | Hanya ubah currentStep — jangan wipe form |

### Snippet B — Lupa render setelah step++

```javascript
state.currentStep = STEP.KONFIRMASI;
// render?
```

| Pertanyaan | Kunci |
|------------|-------|
| Layar? | Masih step 1 — UI stale (P04) |
| Fix? | render() setiap transisi |

### Snippet C — Invalid masih next

```javascript
function onNext() {
  state.form.nama = namaInput.value;
  state.currentStep = STEP.KONFIRMASI;
  render();
}
```

| Pertanyaan | Kunci |
|------------|-------|
| Bug? | Validasi dilewati — data kotor |
| Fix? | Gate P05 — return early jika invalid |

---

## 6. Exit ticket

1. Edge case: user klik back di step 2
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Allah

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Isra 17:36

**Kait di kelas hari ini:** Desain untuk pengguna lain — teliti sebelum rilis.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
