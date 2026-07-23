# EXP_07 — Perpustakaan (Nomor Buku)

**Kode:** EXP_07  
**Unit:** X1.5 / XI4.5  
**MM:** MM-08, MM-10  
**Capability:** CX-T2, CXI-B2  
**Elemen CP:** AP, AD  
**Durasi:** 10 menit  
**Props:** 5–6 buku karton dengan “nomor panggil” berbeda

## Learning Transformation

Dari “judul saja cukup” → “setiap entitas butuh identitas unik; menghapus identitas = chaos.”

## Experience

Perpustakaan mini. Setiap buku punya **nomor panggil** (mis. `297.8 ISL`).

Guru **menghapus** nomor dari satu buku (dramatis). Besok role-play: “Cari buku Fiqih kelas X” — buku tanpa nomor tidak ketemu / salah ambil.

## Cognitive Trap

**Asumsi:** Nama/judul cukup unik.  
**Realitas:** Judul bisa sama; **ID/key** menstabilkan sistem.

## Guiding Questions

1. Apa yang hilang saat nomor dihapus?
2. Bisa ada dua buku judul mirip?
3. Hubungan buku ↔ peminjam ↔ tanggal — butuh apa?
4. Di aplikasi, padanan “nomor panggil”?

## Clarification

- Bandingkan: cari by judul vs by ID.
- Diskusi: primary key, foreign key (bahasa sederhana: “nomor induk” & “nomor peminjam”).

## Concept

- **Primary key / ID unik**
- **Relasi** data (buku–peminjam)
- State: buku dipinjam vs tersedia

## Practice

- Object JS: `{ id, judul, dipinjam: false }`
- Array buku + cari by `id` bukan by judul saja.
- Skema ER mini untuk absensi/perpustakaan kelas.

## Reflection

- Kenapa NIS/NISN/NISN digital penting di sekolah?
- Pernah kehilangan file karena nama `dokumen(1).docx`?

## Transfer

- Database vs folder tanpa nama rapi.
- URL dengan `?id=123` vs judul halaman saja.

## Varian Rotasi (kasus beda, trap sama)

| Kode | Kasus |
|------|--------|
| [EXP_07_A](EXP_07_A_KTM_NIS.md) | KTM / NIS vs nama |
| [EXP_07_B](EXP_07_B_File_Tugas.md) | File tugas tanpa nama |
| [EXP_07_C](EXP_07_C_Antrian_Kantin.md) | Antrian kantin tanpa nomor |

## Catatan Guru

EXP ini bridge X→XI; di X fokus ID, di XI tambah relasi.

## Anti-Pattern

Langsung SQL tanpa merasakan chaos tanpa ID.
