# Handout Siswa — X-S1-P21

**Topik:** DOM & Event Pertama · **4JP** · Pertemuan **21/34**

**Modul:** [X-S1-P21_dom-event-pertama.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P21_dom-event-pertama.md)  
**Bacaan:** [X-S1-P21_bacaan-mimi-robi.md](./X-S1-P21_bacaan-mimi-robi.md)  
**Latihan:** [skill-js/p21-dom-event/](./skill-js/p21-dom-event/)

## Alur

```text
HTML id → getElementById → klik → listener → textContent berubah
```

```html
<p id="pesan">Belum diklik.</p>
<button id="tombolSapa" type="button">Klik</button>
<script src="script.js"></script>
```

```javascript
const pesan = document.getElementById("pesan");
const tombolSapa = document.getElementById("tombolSapa");

tombolSapa.addEventListener("click", function () {
  pesan.textContent = "Halo, pesan berubah.";
});
```

## Setup latihan

1. Salin folder [p21-dom-event](./skill-js/p21-dom-event/) ke folder proyekmu.  
2. Buka `index.html` di browser.  
3. Tekan F12 → Console.  
4. Klik tombol, lihat pesan dan bukti konsol.  
5. Komentar hanya DEFINISI/GUIDE.

## Trace

| Fase | Nilai / keadaan |
|---|---|
| Sebelum klik | |
| Event | |
| Listener | |
| Setelah klik | |
| Bukti konsol | |

## Trap

- `getElementById("pesan")`, bukan `getElementById("#pesan")`.  
- Cek `id` sama persis.  
- Jika `null`, cek typo dan posisi `<script>`.  
- `textContent` bukan CSS.

## Kriteria penerimaan

- [ ] Satu pesan + satu tombol  
- [ ] `id` unik dan cocok dengan JS  
- [ ] Klik mengubah teks  
- [ ] Bukti konsol  
- [ ] Uji sebelum/setelah  
- [ ] Tanpa form/if/selector kompleks

## Exit

1. DOM: …  
2. Fungsi `id`: …  
3. Urutan saat tombol diklik: …

**Preview P22:** satu artefak static+JS diuji dengan acceptance dan peer review.
