# EXP_08 — WhatsApp & Internet Mati

**Kode:** EXP_08  
**Unit:** XI4.2  
**MM:** MM-17, MM-16  
**Capability:** CXI-T2  
**Elemen CP:** LD, AP  
**Durasi:** 8–12 menit  
**Props:** mode pesawat / matikan WiFi (koordinasi IT sekolah)

## Learning Transformation

Dari “WA = langsung sampai” → “aplikasi client butuh jaringan & server; ada proses di belakang layar.”

## Experience

Siswa kirim pesan WA ke grup kelas (atau simulasi).

Guru: **matikan internet** (atau jadikan simulasi: pesan “tertahan”).

Tanya: “Kenapa centang satu? Kapan centang dua? Apa yang terjadi jika server down?”

## Cognitive Trap

**Asumsi:** Aplikasi = aksi instan di layar; tidak ada sistem di belakang.  
**Realitas:** **Client ↔ network ↔ server** — banyak kegagalan di tengah.

## Guiding Questions

1. Apa yang kamu lihat (UI) vs apa yang terjadi di belakang?
2. Input, proses, output untuk “kirim pesan”?
3. Kenapa pesan bisa pending?
4. Fetch API nanti — analoginya apa?

## Clarification

- Gambar diagram sederhana: HP → tower/WiFi → server WA → HP teman.
- **Uji:** apa bukti pesan benar terkirim? (centang, response server)

## Concept

- **Client / server**
- **Network** sebagai dependency
- **Async** — kita tidak menunggu instant; ada state pending/success/fail

## Practice

- Fetch API publik dengan loading spinner & error message.
- Pseudocode: `kirimPesan()` → `tunggu` → `sukses/gagal`.

## Reflection

- Pernah marah aplikasi lambat — tahukah kamu bottleneck-nya di mana?
- Mengapa graceful error message penting untuk user?

## Transfer

- Sholat/jamaah: sinkron butuh “protokol” sama — metafora longgar untuk diskusi komunikasi.
- AI API: prompt kirim → tunggu → response/error.

## Varian Rotasi (kasus beda, trap sama)

| Kode | Kasus |
|------|--------|
| [EXP_08_A](EXP_08_A_Game_Lag.md) | Game online lag |
| [EXP_08_B](EXP_08_B_Upload_Gagal.md) | Upload tugas gagal |
| [EXP_08_C](EXP_08_C_Email_Pending.md) | Email pending |

## Catatan Guru

Koordinasi kebijakan HP di MA; bisa pure diagram tanpa matikan jaringan nyata.

## Anti-Pattern

Fetch API tanpa siswa pernah merasakan “pending.”
