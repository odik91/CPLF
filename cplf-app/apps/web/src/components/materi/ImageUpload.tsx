'use client';

import { useRef, useState } from 'react';
import api from '@/lib/api';
import { compressImage } from '@/lib/compress-image';

interface Props {
  onUploaded: (url: string) => void;
  compact?: boolean;
}

export function ImageUpload({ onUploaded, compact }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  const handleFile = async (file: File) => {
    setError('');
    setInfo('');
    setUploading(true);
    try {
      const compressed = await compressImage(file);
      if (compressed.size < file.size) {
        const pct = Math.round((1 - compressed.size / file.size) * 100);
        setInfo(`Dikompres ${pct}% (${Math.round(file.size / 1024)}KB → ${Math.round(compressed.size / 1024)}KB)`);
      }

      const form = new FormData();
      form.append('file', compressed);
      const { data } = await api.post<{ url: string }>('/files/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onUploaded(data.url);
    } catch {
      setError('Gagal upload gambar');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={compact ? 'inline' : ''}>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className={
          compact
            ? 'text-xs border rounded px-2 py-1 hover:bg-white disabled:opacity-50'
            : 'text-sm border rounded-lg px-3 py-1.5 hover:bg-slate-50 disabled:opacity-50'
        }
      >
        {uploading ? 'Mengupload...' : compact ? '🖼 Gambar' : 'Upload gambar'}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
      {info && !compact && <p className="text-xs text-green-600 mt-1">{info}</p>}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
