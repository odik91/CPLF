'use client';

import { useState } from 'react';
import type { ContentBlock, MateriContent } from '@cplf/shared';
import { ImageUpload } from './ImageUpload';
import { parseYoutubeId } from './MateriRenderer';

interface Props {
  value: MateriContent;
  onChange: (v: MateriContent) => void;
}

const BLOCK_TYPES = [
  { type: 'heading', label: 'Heading' },
  { type: 'paragraph', label: 'Paragraf' },
  { type: 'code', label: 'Kode' },
  { type: 'video', label: 'Video' },
  { type: 'image', label: 'Gambar' },
  { type: 'list', label: 'List' },
] as const;

export function BlockEditor({ value, onChange }: Props) {
  const [videoUrl, setVideoUrl] = useState('');

  const updateBlock = (index: number, data: Record<string, unknown>) => {
    const blocks = [...value.blocks];
    blocks[index] = { ...blocks[index], data: { ...blocks[index].data, ...data } };
    onChange({ blocks });
  };

  const addBlock = (type: ContentBlock['type']) => {
    const defaults: Record<ContentBlock['type'], Record<string, unknown>> = {
      heading: { level: 2, text: '' },
      paragraph: { text: '' },
      code: { language: 'javascript', code: '' },
      video: { platform: 'youtube', embedId: '', caption: '' },
      image: { url: '', alt: '' },
      list: { style: 'unordered', items: [''] },
    };
    onChange({ blocks: [...value.blocks, { type, data: defaults[type] }] });
  };

  const removeBlock = (index: number) => {
    onChange({ blocks: value.blocks.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {BLOCK_TYPES.map((b) => (
          <button
            key={b.type}
            type="button"
            onClick={() => addBlock(b.type)}
            className="text-xs border rounded-lg px-2 py-1 hover:bg-slate-50"
          >
            + {b.label}
          </button>
        ))}
      </div>

      {value.blocks.map((block, i) => (
        <div key={i} className="border rounded-xl p-4 bg-white relative">
          <button
            type="button"
            onClick={() => removeBlock(i)}
            className="absolute top-2 right-2 text-xs text-red-600 hover:underline"
          >
            Hapus
          </button>
          <p className="text-xs text-slate-400 mb-2 uppercase">{block.type}</p>

          {block.type === 'heading' && (
            <input
              className="w-full border rounded-lg px-3 py-2 text-sm font-medium"
              placeholder="Judul section"
              value={(block.data.text as string) ?? ''}
              onChange={(e) => updateBlock(i, { text: e.target.value })}
            />
          )}

          {block.type === 'paragraph' && (
            <textarea
              className="w-full border rounded-lg px-3 py-2 text-sm min-h-[80px]"
              placeholder="Teks paragraf..."
              value={(block.data.text as string) ?? ''}
              onChange={(e) => updateBlock(i, { text: e.target.value })}
            />
          )}

          {block.type === 'code' && (
            <>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm mb-2"
                placeholder="Bahasa (javascript)"
                value={(block.data.language as string) ?? ''}
                onChange={(e) => updateBlock(i, { language: e.target.value })}
              />
              <textarea
                className="w-full border rounded-lg px-3 py-2 text-sm font-mono min-h-[100px]"
                placeholder="Kode..."
                value={(block.data.code as string) ?? ''}
                onChange={(e) => updateBlock(i, { code: e.target.value })}
              />
            </>
          )}

          {block.type === 'video' && (
            <>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm mb-2"
                placeholder="URL YouTube"
                value={videoUrl}
                onChange={(e) => {
                  setVideoUrl(e.target.value);
                  const id = parseYoutubeId(e.target.value);
                  if (id) updateBlock(i, { platform: 'youtube', embedId: id });
                }}
              />
              {(block.data.embedId as string) && (
                <p className="text-xs text-green-600">Embed ID: {block.data.embedId as string}</p>
              )}
            </>
          )}

          {block.type === 'image' && (
            <>
              <ImageUpload onUploaded={(url) => updateBlock(i, { url })} />
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm mt-2"
                placeholder="URL gambar (atau upload di atas)"
                value={(block.data.url as string) ?? ''}
                onChange={(e) => updateBlock(i, { url: e.target.value })}
              />
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm mt-2"
                placeholder="Alt text"
                value={(block.data.alt as string) ?? ''}
                onChange={(e) => updateBlock(i, { alt: e.target.value })}
              />
            </>
          )}

          {block.type === 'list' && (
            <textarea
              className="w-full border rounded-lg px-3 py-2 text-sm min-h-[80px]"
              placeholder="Satu item per baris"
              value={((block.data.items as string[]) ?? []).join('\n')}
              onChange={(e) =>
                updateBlock(i, {
                  items: e.target.value.split('\n').filter(Boolean),
                  style: block.data.style ?? 'unordered',
                })
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}
