# Handout Siswa — X-S1-P04

**Mapel:** Multimedia (Pemrograman Web) · **CPLF** · Basis **4JP** · Pertemuan **4/34**

**Modul:** [X-S1-P04_gambar-rumah-requirement.md](../../../base-4jp/kelas-x/semester-1/X-S1-P04_gambar-rumah-requirement.md)

**Bacaan:** [X-S1-P04_bacaan-mimi-robi.md](./X-S1-P04_bacaan-mimi-robi.md)

---

## 1. Tujuan

Dari “instruksi di kepala sudah jelas / ‘bagus’ sudah cukup” → “requirement spesifik + acceptance yang bisa dicentang ✅/❌.”

---

## 2. Konsep

| Istilah | Artinya |
|---------|---------|
| **Ambiguitas** | Instruksi bisa ditafsir banyak arah |
| **Requirement** | Daftar apa yang **harus ada** — spesifik |
| **Acceptance criteria (AC)** | Checklist uji: ✅ atau ❌ tanpa debat “suka/tidak” |
| **DoD (pengantar)** | Kapan boleh bilang *selesai* (mis. semua AC + 1 teman uji) |

### Trap hari ini

- “Instruksi sama = hasil sama” — **salah** kalau instruksi ambigu.  
- “Bagus / menarik / keren” — **bukan** AC.

### Hubungkan ke P03

Company profile beda-beda padahal prompt sama ≈ gambar rumah beda-beda padahal instruksi sama.  
Obatnya: **spek yang bisa diuji**.

---

## 3. Alur (180 menit)

```text
Orientation → contoh buruk vs baik
  → Gambar rumah (3') → kenapa beda?
  → Concept: requirement + AC
  → Brief 1 section → tukar → sketsa → centang
  → Bangun 1 section HTML sesuai spek
  → Exit
```

---

## 4. Lembar — gambar rumah (observasi)

Instruksi guru: **“Gambarlah rumah.”**

Setelah pajang hasil teman:

1. Apa yang **beda** antar gambar?  
2. Info apa yang **tidak** diberikan guru? (daftar minimal 5)  
3. Kalau diulang, 3 requirement yang akan kutambahkan: …

---

## 5. Lembar — spek 1 section halaman

Pilih **satu**: Hero / Tentang kami / Menu produk (lanjut konteks warung / profil MA).

### Requirement (5 poin)

1. …  
2. …  
3. …  
4. …  
5. …

### Acceptance criteria (3–5) — harus ✅/❌

- [ ] …  
- [ ] …  
- [ ] …  
- [ ] …  
- [ ] …

**Hapus** kata: bagus, menarik, keren, modern (kecuali diganti jadi terukur).

### Uji teman (sketsa atau HTML)

| AC | ✅/❌ | Catatan |
|----|------|---------|
| 1 | | |
| 2 | | |
| 3 | | |

---

## 6. Praktik HTML — 1 section saja

```html
<!-- SPEK: (ringkas 1 kalimat) -->
<!-- AC:
  [ ] ...
  [ ] ...
  [ ] ...
-->
<section>
  <h2>…</h2>
  <p>…</p>
</section>
```

Fokus: **sesuai spek**, bukan cantik CSS.

---

## 7. Pertanyaan pemandu

1. Info apa yang hilang saat “gambar rumah”?  
2. AC ini bisa dicentang tanpa debat selera?  
3. AC mana yang gagal di sectionku — kenapa?

---

## 8. Exit ticket

1. Poin requirement paling penting: …  
2. AC paling sulit: …  
3. Kata subjektif yang kuhapus: …

## 9. Preview P05

Spek masih bolong? Besok: **klarifikasi** (tanya sebelum anggap selesai) — termasuk ke AI.

---

_Tulis spek sendiri. Jangan copas brief teman utuh._
