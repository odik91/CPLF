# 08. Modul Realtime WebSocket

> Menggunakan **Socket.IO** yang diintegrasikan dengan NestJS Gateway. WebSocket dipakai untuk update realtime yang tidak bisa ditangani oleh polling REST biasa.

## 1. Kapan WebSocket Dipakai?

| Event | Trigger | Penerima | Fungsi |
|-------|---------|----------|--------|
| `ujian:mulai` | Siswa mulai ujian | Guru (dashboard realtime) | Guru lihat siswa mana yang sedang ujian |
| `ujian:submit` | Siswa submit jawaban | Guru | Guru dapat notifikasi siswa selesai |
| `ujian:selesai` | Worker selesai scoring | Siswa | Siswa terima nilai realtime tanpa refresh |
| `import:progress` | Worker import CSV | Admin/Guru | Progress bar import siswa |
| `notifikasi:baru` | Event sistem | User | Notifikasi (mis. "Ujian akan dimulai 5 menit lagi") |
| `aktivitas:online` | User buka aplikasi | Guru | Deteksi kehadiran online siswa (untuk pengawasan) |

## 2. Arsitektur Socket.IO

### 2.1 NestJS Gateway

```ts
@WebSocketGateway({
  namespace: '/ws',
  cors: { origin: FE_ORIGIN, credentials: true }
})
export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  async handleConnection(client: Socket) {
    const token = client.handshake.auth?.token;
    if (!token) return client.disconnect();

    try {
      const payload = await this.jwtService.verifyAsync(token);
      const user = await this.userService.findById(payload.sub);
      if (!user) return client.disconnect();

      client.data.user = { id: user.id, roles: payload.roles };

      // Join room berdasarkan role & scope
      client.join(`user:${user.id}`);
      if (payload.roles.includes('GURU')) {
        client.join(`guru:${user.id}`);
        payload.scope?.kelasIds?.forEach(kelasId => client.join(`kelas:${kelasId}`));
      }
      if (payload.roles.includes('MURID')) {
        client.join(`murid:${user.id}`);
        // Broadcast ke guru bahwa siswa online
        this.server.to(`kelas:${kelasIdSiswa}`).emit('aktivitas:online', { userId: user.id, status: 'online' });
      }
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    if (client.data.user) {
      this.server.to(`kelas:${kelasIdSiswa}`).emit('aktivitas:online', { userId: client.data.user.id, status: 'offline' });
    }
  }
}
```

### 2.2 Room Strategy

| Room | Anggota | Tujuan |
|------|---------|--------|
| `user:{userId}` | User itu sendiri | Notifikasi personal |
| `guru:{guruId}` | Guru spesifik | Event untuk guru tertentu |
| `kelas:{kelasId}` | Semua user di kelas (guru & murid) | Event kelas (ujian, pengumuman) |
| `admin` | Semua admin | Event sistem |

### 2.3 Skalabilitas (Multi-Instance)

Redis Adapter (`@socket.io/redis-adapter`) digunakan agar event bisa dipropagasi ke semua instance BE:

```ts
import { createAdapter } from '@socket.io/redis-adapter';
const pubClient = redisClient.duplicate();
const subClient = redisClient.duplicate();
io.adapter(createAdapter(pubClient, subClient));
```

## 3. Event Definitions

### 3.1 Server → Client Events

```typescript
interface ServerToClientEvents {
  'ujian:mulai': (data: { ujianId: string, siswaId: string, nama: string }) => void;
  'ujian:submit': (data: { ujianId: string, siswaId: string, waktuSubmit: string }) => void;
  'ujian:selesai': (data: { ujianSesiId: string, nilaiAkhir: number, jumlahBenar: number, totalSoal: number }) => void;
  'import:progress': (data: { jobId: string, processed: number, total: number, skipped: number }) => void;
  'import:done': (data: { jobId: string, imported: number, skipped: number, errors: any[] }) => void;
  'notifikasi:baru': (data: { id: string, judul: string, tipe: string }) => void;
  'aktivitas:online': (data: { userId: string, status: 'online' | 'offline' }) => void;
}
```

### 3.2 Client → Server Events

```typescript
interface ClientToServerEvents {
  'join:kelas': (kelasId: string) => void;
  'leave:kelas': (kelasId: string) => void;
  'ping': (callback: (pong: string) => void) => void;
}
```

### 3.3 Client Side (FE)

```ts
// lib/ws/useSocket.ts
import { io, Socket } from 'socket.io-client';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(BE_URL + '/ws', {
  auth: { token: getAccessToken() },
  transports: ['websocket', 'polling'],
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 10,
});
```

## 4. Keamanan

- Autentikasi via JWT di `handshake.auth.token`.
- Token expired → client disconnect → FE reconnect dengan token baru.
- Rate limit event per client (maks 60 event/menit) untuk mencegah spam.
- Hanya events yang terdaftar yang diproses; event kustom dari client diabaikan.

## 5. Fallback

Jika koneksi WebSocket terputus:
- Socket.IO otomatis fallback ke HTTP long-polling.
- Event `ujian:selesai` tetap dikirim via WS; jika siswa offline, data bisa didapat via polling REST `GET /ujian/:id/hasil` saat kembali online.
- Untuk import CSV, FE bisa polling `GET /user/import-status/:jobId` sebagai fallback.

## 6. Referensi Silang

- Ujian event → [04_Modul_Bank_Soal_dan_Ujian.md](./04_Modul_Bank_Soal_dan_Ujian.md)
- Background processing event → [10_Modul_Background_Processing_Ujian.md](./10_Modul_Background_Processing_Ujian.md)
- Aktivitas online tracking → [11_Modul_Tracking_Aktivitas_Siswa.md](./11_Modul_Tracking_Aktivitas_Siswa.md)
- Auth JWT → [02_RBAC_IAM.md](./02_RBAC_IAM.md)
