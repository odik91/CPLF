# Materi Guru Lengkap — BRG-06

**Handout siswa:** [BRG-06_siswa.md](./BRG-06_siswa.md)

**Sumber BRG:** [BRG-06_React_SPA_Pengantar.md](../../materi-pendukung/jalur-kelanjutan/BRG-06_React_SPA_Pengantar.md)

---
## Panduan mengajar

# BRG-06 — React SPA Pengantar (Ekstrakurikuler / Pasca XII)

**Version:** 0.1 · **Audiens:** Guru MA — **RAHASIA GURU**  
**Durasi:** 6–8 JP total · **Jalur:** B · **Prasyarat:** BRG-02, BRG-03, BRG-05

## Learning Transformation

Dari fungsi render manual → **JSX + state hook** dengan mental model CPLF tetap (satu sumber kebenaran, klarifikasi).

## Mapping CPLF → React

| CPLF (XI S3) | React |
|--------------|-------|
| `state.js` | `useState` |
| `renderApp()` | return JSX |
| props ke fungsi | props komponen |
| `map` → DOM | `{list.map(...)}` |
| effect setelah fetch | `useEffect` + fetch |

## Proyek starter (Vite + React)

```bash
npm create vite@latest ma-react-absen -- --template react
cd ma-react-absen && npm install && npm run dev
```

## Komponen contoh (guru live — siswa mengetik paralel)

```jsx
// App.jsx — pola absensi mini (spiral PRJ XI-S3)
import { useState } from 'react';

function StudentRow({ nama, onHapus }) {
  return (
    <li>
      {nama}
      <button type="button" onClick={onHapus}>Hapus</button>
    </li>
  );
}

export default function App() {
  const [nama, setNama] = useState('');
  const [daftar, setDaftar] = useState([]);

  function tambah(e) {
    e.preventDefault();
    if (!nama.trim()) return;
    setDaftar(prev => [...prev, { id: crypto.randomUUID(), nama: nama.trim() }]);
    setNama('');
  }

  return (
    <main>
      <form onSubmit={tambah}>
        <input value={nama} onChange={e => setNama(e.target.value)} />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {daftar.map(s => (
          <StudentRow
            key={s.id}
            nama={s.nama}
            onHapus={() => setDaftar(prev => prev.filter(x => x.id !== s.id))}
          />
        ))}
      </ul>
    </main>
  );
}
```

## Trap

**Asumsi:** React mengganti JS — **tidak**; hanya UI layer. Reasoning CPLF (REA, ITR) tetap dinilai.

## Etika AI

Jika Copilot generate komponen — protokol klarifikasi per baris (MM-00).

## Capstone lanjutan (opsional)

Portofolio: rewrite 1 fitur project S4 jadi React + fetch ke [BRG-07](./BRG-07_Node_Express_REST_Minimal.md) API.

[← Indeks BRG](./00_Index_Jalur_Kelanjutan.md)


---
## Modul CPLF terhubung


## Etika

Live demo — siswa praktik paralel, bukan copas file guru.

---
## KBC — dalil & tafsir ringkas

**Panca cinta:** Sesama · Bangsa

**Dalil tematik (usulan — validasi tim agama/KBC madrasah):** QS Al-Maidah 5:2 (ta‘awanu)

**Kait di kelas hari ini:** React SPA tim — gotong royong komponen, bukan monolith ego.

_Matriks lengkap: [Mapping KBC CPLF](../../../05-silabus/05_Mapping_Kurikulum_Berbasis_Cinta.md) §6._

**Catatan guru:** Sisipkan saat bridge ke modul CPLF; validasi dalil/hadits dengan tim KBC.
