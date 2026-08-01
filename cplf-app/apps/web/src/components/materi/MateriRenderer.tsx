'use client';

import type { ContentBlock, MateriContent } from '@cplf/shared';

function CodeBlock({ language, code }: { language?: string; code: string }) {
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-slate-800">
      <div className="bg-slate-800 text-slate-300 text-xs px-3 py-1">{language ?? 'code'}</div>
      <pre className="bg-slate-900 text-slate-100 p-4 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function VideoEmbed({ platform, embedId }: { platform?: string; embedId: string }) {
  const src =
    platform === 'vimeo'
      ? `https://player.vimeo.com/video/${embedId}`
      : `https://www.youtube.com/embed/${embedId}`;
  return (
    <div className="my-4 aspect-video rounded-lg overflow-hidden bg-black">
      <iframe src={src} className="w-full h-full" allowFullScreen title="Video" />
    </div>
  );
}

export function MateriRenderer({ content }: { content: MateriContent }) {
  return (
    <article className="prose prose-slate max-w-none">
      {content.blocks.map((block, i) => {
        const d = block.data as Record<string, string>;
        switch (block.type) {
          case 'heading':
            return (
              <h2 key={i} className="text-xl font-semibold mt-6 mb-2">
                {d.text}
              </h2>
            );
          case 'paragraph':
            return (
              <p key={i} className="mb-3 leading-relaxed text-slate-700">
                {d.text}
              </p>
            );
          case 'code':
            return <CodeBlock key={i} language={d.language} code={d.code} />;
          case 'video':
            return <VideoEmbed key={i} platform={d.platform} embedId={d.embedId} />;
          case 'image':
            return (
              <figure key={i} className="my-4">
                <img src={d.url} alt={d.alt ?? ''} className="rounded-lg max-w-full" />
                {d.alt && <figcaption className="text-sm text-slate-500 mt-1">{d.alt}</figcaption>}
              </figure>
            );
          case 'list': {
            const items = (block.data.items as string[]) ?? [];
            const Tag = d.style === 'ordered' ? 'ol' : 'ul';
            return (
              <Tag key={i} className={`mb-3 pl-5 ${d.style === 'ordered' ? 'list-decimal' : 'list-disc'}`}>
                {items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </Tag>
            );
          }
          default:
            return null;
        }
      })}
    </article>
  );
}

export function emptyContent(): MateriContent {
  return { blocks: [] };
}

export function parseYoutubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return m?.[1] ?? null;
}
