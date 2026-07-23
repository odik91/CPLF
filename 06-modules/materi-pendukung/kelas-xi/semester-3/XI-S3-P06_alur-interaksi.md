# Materi Pendukung Guru — XI-S3-P06 Alur Interaksi Multi-Step

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU** (jangan dibagikan ke siswa)

---

## Metadata

| Field | Isi |
|-------|-----|
| Kode | XI-S3-P06 |
| Modul pertemuan | [XI-S3-P06_alur-interaksi.md](../../../kelas-xi/semester-3/XI-S3-P06_alur-interaksi.md) |
| Unit | XI3.3 |
| Durasi referensi | 2 JP = 90 menit |
| Capability | CXI-T1, CXI-B1 |
| Formatif | REA, COM |
| Ada live code? | **Ya — mini wizard 3 langkah live** (`currentStep` + render) |

---

## Pengetahuan Guru

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

## Recall Spiral

| Pertanyaan | Jawaban/inti yang diharapkan |
|------------|------------------------------|
| "P05 — user flow 5 kotak — step wizard mapping?" | Isi → validasi → konfirmasi → selesai |
| "P04 — kenapa satu render()?" | Satu pintu sync DOM saat step/data berubah |
| "P02 — edge back di step 2?" | Blueprint harus jawab — hari ini implement |

---

## Etika Penyampaian

| Aturan | Penerapan spesifik hari ini |
|--------|----------------------------|
| **No copas** | Wizard HTML+JS diketik live — 3 section atau 1 container render |
| **Live coding** | `#app` kosong atau 3 `<section>` hide — bangun bareng |
| **Per baris / scope** | `currentStep` global · handler next/back · render switch |
| **Recall** | P05 flow diagram — tempel di papan sebelum coding |
| **Membaca kode** | Snippet switch step — prediksi tombol tampil step berapa |
| **No starter file** | Larangan wizard.html siap pakai |

---

## Materi Inti

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

## Alur Live Coding

> **Mulai minimal.** State object + render switch — tidak multi-file.

### Persiapan

- User flow P05 siswa (5 kotak)
- Peer checklist modul

### Skrip TTS

```text
[LANGKAH 0 — Opening 0–5]
Tampilkan mockup 1 layar penuh vs 3 step — tanya mana lebih jelas
Recall P05 flow — tempel di papan

[LANGKAH 1 — Experience ekstra 3 meja 5–15]
Role-play antrian meja — currentStep = meja ke-
Ucapkan: "Satu layar penuh = cognitive overload."

[LANGKAH 2 — State shape 15–25]
const STEP = {...}; let state = { currentStep, form: {...} };
Ucapkan: "Navigasi = state. Form data terpisah dari step."
Scope: state object global

[LANGKAH 3 — render() switch]
if step DATA → bangun UI step 1
if KONFIRMASI → ringkasan + back + submit
if SELESAI → pesan final
Ucapkan: "render = proyektor — tampilkan view sesuai currentStep."

[LANGKAH 4 — onNextData validasi]
Spiral P05 — if invalid return; else simpan form + step++
render()
Tanya: "Next disabled vs pesan error — pilih salah satu, konsisten."

[LANGKAH 5 — Back step 2]
btnBack: currentStep = DATA; render()
Test: data masih ada di input — prefill value="${state.form.nama}"
Edge case exit modul

[LANGKAH 6 — Submit step 3]
currentStep = SELESAI; render()

[LANGKAH 7 — Practice 45–70]
Siswa variasi tema sendiri — min 3 step
Checklist modul — guru stamp

[LANGKAH 8 — Peer walkthrough 70–85]
2 menit — teman isi checklist flow
COM: bisa jelaskan transisi?

[LANGKAH 9 — Exit 85–90]
Tulis jawaban edge case back step 2
Screenshot step konfirmasi
```

---

## Latihan Membaca Kode

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

## Praktik Mandiri Siswa

1. **Mini wizard 3 langkah** — tema ekstra / peminjaman / kuis intro
2. `currentStep` + `state.form` ( atau setara ) tercatat
3. **Validasi step 1** — next blocked atau pesan error
4. **Back dari step 2** — data tidak hilang total
5. **Peer:** walkthrough 2 menit + checklist modul
6. **Tidak boleh:** copy wizard.html guru

**Extension:** Step indicator `"Langkah 2 dari 3"` di render — MM-13 UX.

---

## Kesalahan Umum

| Siswa | Guru |
|-------|------|
| Tiga file HTML terpisah | Satu SPA sederhana — state navigasi |
| Back reset semua state | Hanya ubah currentStep |
| Semua section visible | Satu view aktif via render |
| Skip validasi step 1 | Spiral P05 gate |
| Wizard tanpa diagram | Gambar state machine 3 node dulu |
| innerHTML step tanpa attach listener | Listener setelah render step — atau createElement |

---

## Rujukan

- Modul: [XI-S3-P06](../../../kelas-xi/semester-3/XI-S3-P06_alur-interaksi.md)
- Sebelum: [P05 Event & User Flow](./XI-S3-P05_event-user-flow.md)
- Lanjut: [P07 Struktur Data Nested](./XI-S3-P07_struktur-data-nested.md)
- Spiral: [P02 Blueprint state diagram](./XI-S3-P02_blueprint-state.md) · [P04 render()](./XI-S3-P04_dom-update-aman.md)
- PRJ S3 prep: [XI-S3-P12 Kickoff](../../../kelas-xi/semester-3/XI-S3-P12_project-s3-kickoff.md)
- CXI-T1, CXI-B1
- Etika: [00_Panduan_Etika_Penyampaian.md](../../00_Panduan_Etika_Penyampaian.md)

---

## Checklist Exit

- [ ] Wizard 3 langkah live — currentStep + render
- [ ] Validasi step 1 — tidak lanjut jika invalid
- [ ] Back step 2 — data form **tidak** reset total
- [ ] Peer walkthrough + checklist flow
- [ ] Latihan baca snippet — prediksi bug back/validasi
- [ ] Recall P05 flow + P04 render + P02 state diagram
- [ ] Exit: edge case back + screenshot konfirmasi

[← Indeks materi XI-S3](./XI-S3_Materi_Index.md)
