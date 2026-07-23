# 07. Modul Materi Pembelajaran

> Mencakup kebutuhan: input materi seperti blog umumnya, dengan dukungan blok kode (syntax highlighting), embed video YouTube/Vimeo, dan paragraf biasa.

## 1. Konsep Block-Based Content

Materi disimpan dalam format **JSON blok** (mirip Notion, Editor.js, atau Tiptap). Setiap blok merepresentasikan satu elemen konten: paragraf, heading, code block, video embed, gambar, list, dll.

```json
{
  "blocks": [
    { "type": "heading", "data": { "level": 2, "text": "Pengenalan Algoritma" } },
    { "type": "paragraph", "data": { "text": "Algoritma adalah langkah-langkah sistematis untuk menyelesaikan masalah..." } },
    { "type": "code", "data": { "language": "javascript", "code": "console.log('Hello World');" } },
    { "type": "video", "data": { "platform": "youtube", "embedId": "dQw4w9WgXcQ", "caption": "Tutorial Algoritma" } },
    { "type": "image", "data": { "url": "https://storage.example.com/algoritma.png", "alt": "Diagram Algoritma" } },
    { "type": "list", "data": { "style": "ordered", "items": ["Langkah 1", "Langkah 2", "Langkah 3"] } }
  ]
}
```

## 2. Editor (Sisi Guru)

### 2.1 Rekomendasi Library

| Library | Kelebihan | Kekurangan |
|---------|-----------|------------|
| **Tiptap** (ProseMirror wrapper) | Extensible, Vue/React support, code block via CodeBlockLowlight, video embed via Node | Bundle agak besar |
| **Editor.js** | Ringan, block-based murni, plugin ecosystem | Kurang fleksibel untuk custom node |
| **Plate.js** (udecode) | React-native, banyak plugin siap pakai | Relatif baru |

**Rekomendasi: Tiptap** karena:
- Dukungan React/Next.js yang matang (`@tiptap/react`).
- Plugin `@tiptap/extension-code-block-lowlight` untuk syntax highlighting (Shiki/Prism).
- Mudah menambah custom node untuk video embed.
- Output JSON yang mudah disimpan & dirender ulang.

### 2.2 Fitur Editor

| Fitur | Keterangan |
|-------|------------|
| **Heading** | H1-H4 |
| **Paragraf** | Bold, italic, underline, strikethrough, link |
| **Code Block** | Syntax highlighting (mendukung JS, Python, HTML, CSS, SQL, dll) |
| **Video Embed** | Input URL YouTube/Vimeo → otomatis konversi ke embed ID |
| **Gambar** | Upload gambar → simpan ke S3 → embed di konten |
| **List** | Ordered & unordered, nested |
| **Blockquote** | Kutipan |
| **Table** | Tabel sederhana |
| **Divider** | Garis pemisah |
| **Math/Formula** | Opsional: LaTeX via KaTeX |

### 2.3 Alur Guru Membuat Materi

1. Pilih Mapel → Pilih Tema → "Buat Materi Baru".
2. Editor Tiptap muncul dengan toolbar.
3. Guru mengetik/menambahkan blok-blok konten.
4. Auto-save draft setiap 30 detik (ke BE via `PATCH /materi/:id`).
5. Guru klik "Publish" → status jadi `PUBLISHED`, siswa bisa melihat.

## 3. Renderer (Sisi Siswa)

### 3.1 Komponen Renderer

FE memiliki komponen `MateriRenderer` yang menerima `contentJson` dan me-render setiap blok:

```tsx
"use client";
function MateriRenderer({ contentJson }: { contentJson: Block[] }) {
  return (
    <div className="materi-content">
      {contentJson.blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph': return <p key={i}>{block.data.text}</p>;
          case 'heading': return <h2 key={i}>{block.data.text}</h2>;
          case 'code': return <CodeBlock key={i} language={block.data.language} code={block.data.code} />;
          case 'video': return <VideoEmbed key={i} platform={block.data.platform} embedId={block.data.embedId} />;
          case 'image': return <img key={i} src={block.data.url} alt={block.data.alt} />;
          // ... lainnya
        }
      })}
    </div>
  );
}
```

### 3.2 Code Block

- Menggunakan **Shiki** (atau Prism.js) untuk syntax highlighting di client.
- Menampilkan nomor baris.
- Tombol "Copy" untuk menyalin kode.
- Bahasa yang didukung: JavaScript, TypeScript, Python, HTML, CSS, SQL, Java, C++, PHP, Ruby, Go, Rust, Bash.

### 3.3 Video Embed

- Blok `video` di-render sebagai `<iframe>` dengan URL embed dari platform.
- YouTube: `https://www.youtube.com/embed/{embedId}`
- Vimeo: `https://player.vimeo.com/video/{embedId}`
- **Tidak diproxy oleh BE** — langsung dari browser siswa ke platform video (sesuai prinsip pengecualian 3rd party publik).

## 4. Endpoint

| Endpoint | Method | Role | Deskripsi |
|----------|--------|------|-----------|
| `GET /materi?temaId=` | GET | GURU, MURID | List materi per tema |
| `GET /materi/:slug` | GET | GURU, MURID | Detail materi (contentJson) |
| `POST /materi` | POST | GURU | Buat materi baru (draft) |
| `PATCH /materi/:id` | PATCH | GURU | Update materi (auto-save) |
| `POST /materi/:id/publish` | POST | GURU | Publish materi |
| `POST /materi/:id/archive` | POST | GURU | Archive materi |
| `DELETE /materi/:id` | DELETE | GURU | Hapus materi (hanya draft) |
| `POST /materi/upload-gambar` | POST | GURU | Upload gambar untuk materi |

## 5. Keamanan

- Hanya guru yang mengampu mapel/kelas terkait yang bisa CRUD materi (scoping via `GuruMapelKelas`).
- Upload gambar divalidasi: tipe file (jpg, png, webp, gif), ukuran maks (5MB), scan malware (opsional).
- Gambar disimpan di S3-compatible storage, bukan di DB.

## 6. Referensi Silang

- Entitas `Materi` & `Tema` → [03_Skema_Database.md](./03_Skema_Database.md)
- Tracking aktivitas siswa saat baca materi → [11_Modul_Tracking_Aktivitas_Siswa.md](./11_Modul_Tracking_Aktivitas_Siswa.md)
- Upload file → [01_Arsitektur_Sistem.md](./01_Arsitektur_Sistem.md) (FileModule)
