# Bacaan Pendamping — X-S1-P31
## Mimi & Robi: Outline yang Dipecat karena “Profesional”, Tombol Bernama “KLIK”, & Tab yang Hilang di Rumah Sendiri

| Field | Isi |
|---|---|
| Kode | X-S1-P31 — Polish UX / a11y dasar |
| Pertemuan | **31 / 34** · Basis **4JP** |
| Status | Naskah · sketch ditunda |

**Handout:** [X-S1-P31_project-s1-polish_siswa.md](./X-S1-P31_project-s1-polish_siswa.md)

---

Halo. Mimi.

AC Robi — katanya — sudah hijau. Ia merayakan dengan dua baris CSS:

```css
button {
  outline: none;
}
```

> “Sekarang profesional. Tidak ada kotak jelek saat diklik.”

Aku tutup mouse. Tekan **Tab**. Tab. Tab.

Saya tidak tahu saya di mana. Rumahnya ada. Lampunya ada. Alamatnya dihapus.

## Istilah dulu

| Istilah | Artinya hari ini |
|---|---|
| **Polish** | Sentuhan akhir yang menolong pemakaian, bukan kembang api |
| **UX ringan** | Nama jelas, klik tidak sesak, urutan Tab masuk akal |
| **Aksesibilitas dasar** | Bisa dipakai tanpa mouse; teks terbaca; bahasa dan judul dokumen jujur |
| **Fokus** | Tanda “kamu di sini” saat Tab |
| **Label aksi** | Teks tombol = apa yang terjadi |
| **`lang`** | Bahasa halaman, misalnya `id` |
| **`title`** | Nama di tab browser |

Bukan hari ini: kuliah ARIA, angka kontras laboratorium, animasi, tombol keempat.

## Learning Compass

| Arah | Hari ini |
|---|---|
| Tujuan | Halaman sopan: `lang`, `title`, label, Tab+fokus |
| Bukti | Uji Tab + regresi klik spek |
| Bukan | Fitur baru · `outline: none` · ganti `id` · pelarian AC |

## Adegan 1 — “KLIK”

Tombol utama bertuliskan `KLIK`. Tombol kedua `INI JUGA`.

> “Semua orang tahu harus diklik.”

> “Spekmu tidak menyuruh orang mengklik. Spekmu menyuruh **cek status menu**. Nama tombol adalah janji. ‘KLIK’ adalah teriakan tanpa isi.”

**UX ringan** sering satu kata yang tepat, bukan gradient.

## Plot twist #1 — Tab hilang, mouse masih pahlawan

Klik mouse: fitur 1 jalan. Robi ingin langsung P32.

Aku pakai keyboard. Enter di “tombol” yang tidak kelihatan fokusnya. Kadang mengenai tautan footer. Kadang tidak mengenai apa-apa karena ia mengganti `button` jadi `div` ber-CSS.

> “Mouse-mu bukan seluruh umat. `button` asli sudah bisa Tab, Space, Enter. `div` yang pura-pura tombol adalah hutang. `outline: none` tanpa `:focus` adalah mengunci pintu dari dalam lalu klaim rumah terbuka.”

## Plot twist #2 — ARIA sebagai stiker

Robi googling “accessibility.” Menempel `aria-label`, `role="button"`, `aria-hidden="false"` di hampir semua `div`. `lang` masih kosong. `<title>Document</title>`.

> “Stiker tidak mengganti alamat. `lang` dan `title` dulu. `aria-label` pada `nav` — kalau kamupunya `nav` — satu atribut, seperti P10. Bukan hujan atribut.”

Empat puluh menit hover bounce. Tab masih buta. Itu bukan polish. Itu pesta kostum.

## Adegan 2 — tiga sentuhan yang bisa dibela

```text
1. lang="id"           → halaman ini bahasa Indonesia
2. title spek          → tab browser tidak berbunyi Document
3. :focus kelihatan    → Tab punya lampu
   + teks tombol aksi  → janji spek terbaca sebelum diklik
```

Regresi: klik (dan Enter) fitur 1 masih menepati AC. Polish yang merusak saklar kemarin = renovasi ilegal.

## Reflect

P25 menjaga mata. P31 menjaga orang yang berjalan dengan Tab — termasuk kau saat mouse habis baterai. P32 besok menguji paket, bukan kembang api semalam.

## Exit

1. Saat Tab, kau tahu berada di mana?
2. Tiga sentuhan + siapa yang tertolong.
3. Apa yang kau *tolak* (animasi, ARIA ramai, ganti `id`)?

> **Polish yang adil membuat janji spek mudah dipakai, bukan sulit ditemukan.**

— **Mimi** 🐾
