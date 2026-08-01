'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlock from '@tiptap/extension-code-block';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import Underline from '@tiptap/extension-underline';
import type { ContentBlock, MateriContent } from '@cplf/shared';
import { normalizeContent } from '@/lib/materi-content';

function buildReadExtensions() {
  return [
    StarterKit.configure({ codeBlock: false, heading: { levels: [1, 2, 3] } }),
    Underline,
    CodeBlock,
    Image.configure({ inline: false }),
    Youtube.configure({ width: 640, height: 360, nocookie: true }),
  ];
}

function LegacyRenderer({ content }: { content: MateriContent }) {
  const blocks = content.blocks ?? [];
  return (
    <article className="prose prose-slate max-w-none">
      {blocks.map((block, i) => (
        <LegacyBlock key={i} block={block} />
      ))}
    </article>
  );
}

function LegacyBlock({ block }: { block: ContentBlock }) {
  const d = block.data as Record<string, string | string[]>;
  switch (block.type) {
    case 'heading':
      return <h2 className="text-xl font-semibold mt-6 mb-2">{String(d.text)}</h2>;
    case 'paragraph':
      return <p className="mb-3 leading-relaxed text-slate-700">{String(d.text)}</p>;
    case 'code':
      return (
        <div className="my-4 rounded-lg overflow-hidden border border-slate-800">
          <div className="bg-slate-800 text-slate-300 text-xs px-3 py-1">{String(d.language ?? 'code')}</div>
          <pre className="bg-slate-900 text-slate-100 p-4 overflow-x-auto text-sm">
            <code>{String(d.code)}</code>
          </pre>
        </div>
      );
    case 'video': {
      const src = `https://www.youtube.com/embed/${String(d.embedId)}`;
      return (
        <div className="my-4 aspect-video rounded-lg overflow-hidden bg-black">
          <iframe src={src} className="w-full h-full" allowFullScreen title="Video" />
        </div>
      );
    }
    case 'image':
      return (
        <figure className="my-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={String(d.url)} alt={String(d.alt ?? '')} className="rounded-lg max-w-full" />
        </figure>
      );
    case 'list': {
      const items = (d.items as string[]) ?? [];
      const Tag = d.style === 'ordered' ? 'ol' : 'ul';
      return (
        <Tag className={`mb-3 pl-5 ${d.style === 'ordered' ? 'list-decimal' : 'list-disc'}`}>
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </Tag>
      );
    }
    default:
      return null;
  }
}

function TiptapReadView({ doc }: { doc: Record<string, unknown> }) {
  const editor = useEditor({
    extensions: buildReadExtensions(),
    content: doc,
    editable: false,
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <article className="prose prose-slate max-w-none px-1">
      <EditorContent editor={editor} />
    </article>
  );
}

export function MateriRenderer({ content }: { content: MateriContent }) {
  const normalized = normalizeContent(content);
  if (normalized.format === 'tiptap' && normalized.doc) {
    return <TiptapReadView doc={normalized.doc} />;
  }
  return <LegacyRenderer content={content} />;
}

export { emptyContent, normalizeContent } from '@/lib/materi-content';

export function parseYoutubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return m?.[1] ?? null;
}
