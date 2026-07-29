# Handout Siswa — XI-S4-P16

**Mapel:** Multimedia (Pemrograman Web) · **CPLF**

**Modul acuan:** [XI-S4-P16_peer-review-git.md](../../../kelas-xi/semester-4/XI-S4-P16_peer-review-git.md)

---

## 1. Tujuan pembelajaran

Dari submit → **review + iterasi** wajib sebelum presentasi.

---

## 2. Ringkasan konsep

- **Transformasi hari ini:** dari submit tim → **review + iterasi wajib** + Git checkpoint sebelum P17 presentasi.
- **Spiral S3 P16:** protokol review SPD + rubrik — hari ini **+ dimensi Git/atribusi/kolaborasi**.
- **Timeline:** opening protokol → cross-team review rubrik → pleno 1 finding → implement ≥1 revisi + commit → retro mini tim → exit changelog.
- **Git checkpoint (modul):**
  - Semua anggota: commit visible
  - README: cara run + atribusi
  - No secret keys in repo
- **Rubrik peer:** 2 pujian spesifik + 2 saran actionable + pertanyaan klarifikasi opsional.
- **Implement wajib:** commit `fix: peer review ...` — bukti before/after.
- **Retro mini tim:** Start / Stop / Continue — 3 menit, fokus kolaborasi Git/async/data.
- **Prep P17:** assign demo script per anggota — semua bicara ≥30 detik.
- **Nilai MA:** gotong royong · kejujuran atribusi · amanah data.

---

## 3. Materi praktik

### Opening — protokol review spiral S3 (0–5 menit)

Recall P16 S3: code jalan ≠ kualitas. Hari ini + **Git sebagai bukti kolaborasi**.

### Cross-team review (5–25 menit)

Pasangan silang antar tim — hindari teman dekat yang selalu copas.
Worksheet [09_Rubrik_Peer_Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) lengkap.

**Dimensi review S4 tambahan:**

| Aspek | Observasi |
|-------|-----------|
| Async UI | loading/error/empty |
| Data | persist refresh · transform field |
| Git | author count · message · merge history |
| Kolaborasi | README atribusi · issue trace |
| Amanah | no secrets · scope data |

### Pleno — 1 finding penting (25–45 menit)

Setiap tim present **1 finding** dari review — bukan roast.
Guru facilitate: "Apa dampak ke user? Apa saran actionable?"

### Implement ≥1 revisi (45–70 menit)

Owner tim ketik sendiri — commit wajib:

```text
fix: peer review — [ringkas finding]
```

Bukti: diff/screenshot before/after.

### Retro mini tim (70–85 menit)

Start / Stop / Continue — 3 menit per tim (privat sticky atau oral ringkas):

| Prompt | Contoh |
|--------|--------|
| Start | "Pair before merge" |
| Stop | "Push tanpa pull" |
| Continue | "README update tiap fitur" |

### Exit — changelog 3 bullet (85–90 menit)

```text
- Fitur utama v0.1
- Revisi peer review hari ini
- Prep demo P17: siapa demo bagian apa
```

Assign demo script P17 — **semua anggota ≥30 detik**.

---

## 4. Alur pertemuan (90 menit)

| Menit | Fase | Aktivitas |
|-------|------|-----------|
| 0–5 | Opening | Protokol review (S3 P16 spiral) |
| 5–25 | Review | Cross-team: [Rubrik Peer Review](../../../09-rubrik/09_Rubrik_Peer_Review.md) |
| 25–45 | Clarify | Diskusi 1 finding penting per tim |
| 45–70 | Build | Implement ≥1 revisi + commit `fix: peer review ...` |
| 70–85 | Retro mini | Start/Stop/Continue 3 menit tim |
| 85–90 | Exit | Changelog 3 bullet |

---

## 5. Lembar kerja / latihan

Latihan **review via membaca** — proyeksi snippet + git log, siswa isi rubrik:

### Snippet async + log

```javascript
// fetch.js — no try/catch
export async function getNews() {
  const r = await fetch(URL);
  return r.json();
}
```

```text
git log --oneline (sample):
a1b2c3d fix
d4e5f6g update
g7h8i9j fix final
(semua Author: Ali)
```

| Pertanyaan membaca | Kunci diskusi |
|--------------------|---------------|
| Finding async? | No error path — offline crash atau hang |
| Finding Git? | Single author + vague messages — atribusi kolaborasi lemah |
| Saran SPD? | "Tanpa catch, fetch gagal silent — tambah error UI + commit message deskriptif per fitur." |

### Snippet README + secrets

```markdown

## 6. Exit ticket

1. Changelog 3 bullet
2. …


## 7. Refleksi

1. Satu asumsi yang kubongkar hari ini: …
2. Satu hal untuk pertemuan berikutnya: …

## 8. Nilai KBC (Kurikulum Berbasis Cinta)

**Panca cinta:** Sesama · Bangsa (integritas)

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:2 · QS Al-Hujurat 49:12

**Kait di kelas hari ini:** Review & merge tanpa gosip; gotong royong kebaikan.

_Matriks lengkap: [Mapping KBC CPLF](../../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._


---

_Handout ini boleh dibawa pulang. Kode ditulis sendiri di kelas — jangan copas project jadi._
