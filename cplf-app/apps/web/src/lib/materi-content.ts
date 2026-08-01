import type { ContentBlock, MateriContent } from '@cplf/shared';

export function emptyContent(): MateriContent {
  return {
    format: 'tiptap',
    doc: { type: 'doc', content: [{ type: 'paragraph' }] },
  };
}

export function normalizeContent(raw: MateriContent | null | undefined): MateriContent {
  if (!raw) return emptyContent();
  if (raw.format === 'tiptap' && raw.doc) return raw;
  if (raw.blocks?.length) return { format: 'tiptap', doc: blocksToTiptap(raw.blocks) };
  return emptyContent();
}

function blocksToTiptap(blocks: ContentBlock[]): Record<string, unknown> {
  const content = blocks
    .map((block) => {
      const d = block.data as Record<string, string | string[]>;
      switch (block.type) {
        case 'heading':
          return {
            type: 'heading',
            attrs: { level: Number(d.level) || 2 },
            content: d.text ? [{ type: 'text', text: String(d.text) }] : [],
          };
        case 'paragraph':
          return {
            type: 'paragraph',
            content: d.text ? [{ type: 'text', text: String(d.text) }] : [],
          };
        case 'code':
          return {
            type: 'codeBlock',
            attrs: { language: d.language ?? 'javascript' },
            content: d.code ? [{ type: 'text', text: String(d.code) }] : [],
          };
        case 'video':
          if (d.embedId) {
            return { type: 'youtube', attrs: { src: `https://youtube.com/watch?v=${d.embedId}` } };
          }
          return null;
        case 'image':
          if (d.url) {
            return { type: 'image', attrs: { src: String(d.url), alt: String(d.alt ?? '') } };
          }
          return null;
        case 'list': {
          const items = (d.items as string[]) ?? [];
          const listType = d.style === 'ordered' ? 'orderedList' : 'bulletList';
          return {
            type: listType,
            content: items.map((item) => ({
              type: 'listItem',
              content: [{ type: 'paragraph', content: [{ type: 'text', text: item }] }],
            })),
          };
        }
        default:
          return null;
      }
    })
    .filter(Boolean);

  return { type: 'doc', content: content.length ? content : [{ type: 'paragraph' }] };
}

export function contentHasBody(content: MateriContent): boolean {
  const normalized = normalizeContent(content);
  const nodes = (normalized.doc?.content as unknown[]) ?? [];
  return nodes.some((node) => {
    const n = node as { type?: string; content?: unknown[] };
    if (n.type === 'paragraph') return (n.content?.length ?? 0) > 0;
    return n.type !== 'paragraph';
  });
}
