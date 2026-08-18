# Materi Ajar Guru — X-S1-P28
## Project S1: Checkpoint Uji Acceptance (4JP)

> File guru lengkap. Jangan dibagikan apa adanya.

## A. Modul ringkas di kelas

| Field | Isi |
|---|---|
| Pertemuan | **28/34** · 180 menit |
| Transformasi | “Sudah diklik = selesai” → paket AC diuji, temuan berlapisan, perbaikan terarah, uji ulang |
| Fokus | Checkpoint · AC paket · lapisan HTML/CSS/JS · prioritas · regresi |
| Dilarang | Fitur baru · rewrite · mengubah AC agar lulus · peer review penuh (P29) |
| Handout | [X-S1-P28_project-s1-checkpoint_siswa.md](./X-S1-P28_project-s1-checkpoint_siswa.md) |
| Bacaan | [X-S1-P28_bacaan-mimi-robi.md](./X-S1-P28_bacaan-mimi-robi.md) |
| Lembar/demo | [skill-js/p28-checkpoint/](./skill-js/p28-checkpoint/) |
| Modul | [X-S1-P28_project-s1-checkpoint.md](../../../../base-4jp/kelas-x/semester-1/X-S1-P28_project-s1-checkpoint.md) |

### Capaian Bloom (sebut ke siswa)

| Kode | Level | Bukti di kelas |
|---|---|---|
| C1 | Mengingat | Istilah checkpoint, temuan, regresi |
| C2 | Memahami | P28 ≠ selesai ≠ P29 |
| C3 | Menerapkan | Lembar terisi dari spek sendiri |
| C4 | Menganalisis | Gagal → HTML / CSS / JS |
| C5 | Mengevaluasi | Prioritas 1–3, bukan semua sekaligus |
| C6 | Mencipta | Status jujur + sisa tertulis |

**Fokus C4–C5 · puncak C5–C6 · P29 = peer memakai spek**

### Timeline

| Menit | Fase | Bloom | Isi |
|---|---|---|---|
| 0–10 | Orientation | C1 | Pintu, bukan pesta |
| 10–30 | Scaffold | C2 | Lima urutan uji |
| 30–50 | Experience | C2–C4 | Demo gagal 3 AC |
| 50–65 | Trap | C4 | Hanya JS · rewrite · pelintir AC |
| 65–95 | Concept + mini | C2–C3 | Siklus · status awal AC sendiri |
| 95–120 | I do | C2–C3 | Satu temuan lengkap |
| 120–165 | Practice | C3–C6 | Uji · perbaiki · regresi · saksi 1 AC |
| 165–180 | Reflect | C5 | Exit · bekal P29 |

## B. Pendukung mengajar

### Persiapan

- Proyeksikan demo `p28-checkpoint` (sengaja rusak). Jangan buka `script.js` di awal.
- Siswa wajib punya `spek.md` + folder project. Tanpa spek: 10 menit tulis ulang AC terukur (P04), baru uji.
- Salin `lembar-checkpoint.md` ke project siswa.
- Kunci demo hanya di pendukung guru / bagian ini — prediksi dulu.

### Kunci demo (RAHASIA sampai setelah prediksi)

1. `#daftar-menu` tanpa `h2` → AC struktur gagal (HTML).
2. Tanpa `max-width`; teks pucat → AC keterbacaan gagal (CSS).
3. `#tombolCadangan` menulis ke `#pesan` → AC fitur 2 + regresi gagal (JS).
4. Klik `#tombolUtama` sendirian masih bisa lulus AC fitur 1 → trap uji sempit.

### Pengetahuan di lidah

- Checkpoint = uji paket janji P23–P27.
- Lapisan menuntun perbaikan: jangan “perbaiki CSS” untuk bug `id`.
- Satu perubahan → uji AC itu → uji regresi.
- Status **ditunda** lebih jujur daripada centang palsu.

### Recall satu kalimat

> “P12 kita belajar hakim AC, bukan hakim keren. Hari ini hakim itu kalian sendiri, pada project semester — sebelum teman menguji di P29.”

### Miskonsepsi

1. Checkpoint = presentasi.
2. Fitur terakhir yang diingat = seluruh project.
3. Gagal = buang karya / minta AI generate ulang.
4. Mengedit spek lebih cepat daripada mengedit bug.
5. Teman yang bilang “bagus” menggantikan lembar.

### Etika

Jangan sentuh keyboard siswa. Tunjuk baris AC. Jika macet: “Urutan uji nomor berapa yang di skip?”

### Skrip live

#### 0–10 · Orientation · Mengingat · C1

> “Ini pintu. Bukan garis finish. P29 teman yang menguji. P32 DoD. Hari ini: kalian vs `spek.md`. Klaim ‘selesai’ tanpa lembar tidak dihitung.”

Tulis di papan: **P28 uji sendiri · P29 peer · P30 revisi peer.**

#### 10–30 · Scaffold · Memahami · C2

Lima kotak urutan: HTML → CSS → JS1 → JS2/polish → regresi.
Tanya: “Kenapa JS tidak boleh pertama?” Jawaban yang ditunggu: struktur/`id` yang salah membuat listener tampak ‘rusak’ padahal HTML-nya yang salah alamat.

#### 30–50 · Experience · C2–C4

Buka demo. Siswa **tidak** melihat kode. Baca `spek.md` demo bersama. Isi tiga baris lembar: prediksi lulus/gagal.

Klik tombol 1. Klik tombol 2. Scroll: section menu tanpa judul. Lebarkan jendela: baris sepanjang layar.

Kumpulkan prediksi. Baru bongkar lapisan (bukan langsung kasih patch).

#### 50–65 · Trap · Menganalisis · C4

Tiga jebakan:

1. “Tombol utama sudah jalan, checkpoint lulus.” → AC lain belum diuji.
2. Guru pura-pura menambah tombol ketiga “biar lengkap.” Siswa harus menolak.
3. Guru pura-pura mengubah AC demo menjadi “teks boleh berubah di `#pesan`.” Tanya: “Ini perbaikan atau pelintiran janji?”

#### 65–95 · Concept + mini · C2–C3

Siklus di papan:

```text
UJI AC → TEMUAN + BUKTI + LAPISAN → PRIORITAS 1–3 → PERBAIKI SATU → UJI ULANG + REGRESI
```

Mini: siswa salin semua AC dari `spek.md` ke lembar. Isi kolom Hasil sebisanya **sebelum** coding perbaikan. Yang “belum uji” ditulis D atau kosong bertanda — jujur.

#### 95–120 · I do · C2–C3

Satu temuan live dari demo, suarakan:

> “AC: tiap section punya h2. Bukti: section menu tidak punya judul. Lapisan: HTML. Perbaikan terkecil: satu `h2`. Bukan ganti CSS. Bukan tombol baru.”

Lalu perbaikan JS target. Uji tombol 1 lagi: regresi.

#### 120–150 · Practice · C3–C6

Siswa pada project sendiri. Guru keliling dengan tiga pertanyaan: nomor AC, bukti, lapisan.

Cap waktu: 20' uji tanpa coding → 25' perbaikan 1–3 item. Yang sudah hijau semua: regresi + rapikan bukti di lembar.

#### 150–165 · Saksi 1 AC · C5

Pasangan: 5 menit, satu AC klaim lulus, tanpa kode. Jika saksi tidak melihat bukti yang sama, status dikembalikan gagal.

Ingatkan: ini latihan kejujuran, bukan P29.

#### 165–180 · Reflect · C5

Exit. Preview P29: lembar ini dibawa; peer tidak boleh diarahkan “klik yang ini dulu biar kelihatan bagus.”

### Diferensiasi

**Tanpa spek / AC selera:** 10 menit tulis 6 AC terukur bersama guru, baru uji.
**Banyak gagal:** wajib hanya prioritas 1 (biasanya `id`/fitur 1). Sisanya ditunda tertulis.
**Semua lulus cepat:** uji regresi + minta mereka merusak satu AC di salinan pikiran: “kalau `id` typo, AC mana yang gagal?” — tanpa menambah fitur.
**Fitur 1 belum jalan sejak P26:** checkpoint = temuan JS1 prioritas 1; jangan paksakan fitur 2.

### Asesmen

| Indikator | Belum | Tercapai |
|---|---|---|
| Cakupan | Hanya JS / hanya “rasa” | Semua AC bersstatus |
| Temuan | “Kurang keren” | Bukti + lapisan |
| Perbaikan | Rewrite / fitur baru / AC diubah | 1–3 item spek |
| Uji ulang | Lupa | AC itu + regresi |
| Kejujuran | Centang tanpa uji | Ditunda tertulis |

### Checklist guru

- [ ] Demo prediksi sebelum kunci
- [ ] Urutan HTML→CSS→JS ditegakkan
- [ ] Lembar ada di folder siswa
- [ ] Saksi 1 AC
- [ ] Tidak ada fitur 3
- [ ] Bekal P29 disebut

### KBC

**Kejujuran:** gagal yang tertulis adalah data. Lulus yang tidak diuji adalah klaim.

**Tanggung jawab pada janji P23:** checkpoint melindungi pengguna halaman, bukan ego “sudah sampai P27.”
