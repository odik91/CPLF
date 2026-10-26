# Bacaan Pendamping — X-S2-P02
## Mimi & Robi: Mengubah Tulisan Tanpa Menyuntik Halaman, Tag yang Jadi “Hantu”, & Power yang Tidak Diminta

| Field | Isi |
|-------|-----|
| Kode | X-S2-P02 — Update DOM Aman |
| Pertemuan | **2 / 32** · Basis **4JP** |
| Status | Naskah humor · **3 sketch menyusul** · Mimi syari |

**Handout:** [X-S2-P02_dom-update-aman_siswa.md](./X-S2-P02_dom-update-aman_siswa.md)

---

Halo. Mimi.

Kemarin Robi sudah bisa menunjuk cabang di pohon DOM. Hari ini ia ingin pohon itu **bergerak**.

> “Aku isi saja dengan HTML lengkap. Biar keren. `innerHTML`!”

> “Kalau yang kamu butuhkan hanya **tulisan**, jangan menyuntik rumah orang dengan kerangka baja. Pakai `textContent`.”

## Adegan 1 — satu label, satu perubahan

```html
<p id="status">Belum diubah.</p>
```

```javascript
status.textContent = "Sudah diubah dengan aman.";
```

Layar berubah. Tidak ada elemen baru yang “lahir diam-diam”.

<!-- sketch: p02-01-textcontent-bukan-sunting.jpg · Mimi syari menempel stiker teks; Robi membawa jarum suntik HTML -->

## Adegan 2 — string yang sama, nasib beda

Robi mencoba string: `"<b>Halo</b>"`.

Dengan `textContent`, halaman menampilkan tanda `<b>` apa adanya — jujur, agak jelek, aman.

Dengan `innerHTML`, huruf jadi **tebal**. Robi bersorak.

> “Lihat! Power!”

> “Power yang tidak kamu minta. Besok string itu bisa datang dari orang lain. Untuk pesan biasa, jangan buka pintu belakang.”

<!-- sketch: p02-02-string-sama-nasib-beda.jpg · dua pintu: textContent = tulisan mentah; innerHTML = tag hidup -->

## Adegan 3 — null tetap musuh

Robi mengubah sebelum memilih elemen. Konsol dingin. Layar diam.

> “Update tanpa alamat = berteriak ke rumah kosong. Pilih dulu (P01), baru ubah (P02).”

<!-- sketch: p02-03-update-tanpa-alamat.jpg · Robi berteriak ke pintu null; Mimi menunjuk querySelector -->

## Exit

1. Default untuk teks biasa?  
2. Apa yang berbahaya dari `innerHTML` sembarangan?  
3. Urutan aman: pilih → … → bukti?

> **Halaman hidup yang jujur mengubah tulisan — bukan menyelundupkan struktur.**

— **Mimi** 🐾 · **Robi** 🤖
