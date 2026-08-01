'use client';

import { useRef, useState } from 'react';
import api from '@/lib/api';

interface Props {
  onUploaded: (url: string) => void;
}

export function ImageUpload({ onUploaded }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (file: File) => {
    setError('');
    setUploading(true);
    try {
      const form = new FormData();
      form.append('file', file);
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
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="text-sm border rounded-lg px-3 py-1.5 hover:bg-slate-50 disabled:opacity-50"
      >
        {uploading ? 'Mengupload...' : 'Upload gambar'}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
