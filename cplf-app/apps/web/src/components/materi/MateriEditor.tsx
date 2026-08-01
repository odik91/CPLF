'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlock from '@tiptap/extension-code-block';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { ReactNodeViewRenderer } from '@tiptap/react';
import type { MateriContent } from '@cplf/shared';
import { CodeBlockView } from './CodeBlockView';
import { ImageUpload } from './ImageUpload';
import { normalizeContent } from '@/lib/materi-content';

const CustomCodeBlock = CodeBlock.extend({
  addNodeView() {
    return ReactNodeViewRenderer(CodeBlockView);
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        if (this.editor.isActive('codeBlock')) {
          return this.editor.commands.insertContent('  ');
        }
        return false;
      },
    };
  },
});

function buildExtensions() {
  return [
    StarterKit.configure({
      codeBlock: false,
      heading: { levels: [1, 2, 3] },
    }),
    Underline,
    CustomCodeBlock,
    Image.configure({ inline: false, allowBase64: false }),
    Youtube.configure({ width: 640, height: 360, nocookie: true }),
    Placeholder.configure({ placeholder: 'Mulai menulis materi...' }),
  ];
}

interface Props {
  value: MateriContent;
  onChange: (v: MateriContent) => void;
}

export function MateriEditor({ value, onChange }: Props) {
  const initial = normalizeContent(value);
  const editor = useEditor({
    extensions: buildExtensions(),
    content: initial.doc,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-slate max-w-none min-h-[320px] px-4 py-3 focus:outline-none ' +
          '[&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg ' +
          '[&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-4',
      },
    },
    onUpdate: ({ editor: ed }) => {
      onChange({ format: 'tiptap', doc: ed.getJSON() as Record<string, unknown> });
    },
  });

  if (!editor) return <div className="p-4 text-slate-500">Memuat editor...</div>;

  const addYoutube = () => {
    const url = window.prompt('URL YouTube:');
    if (url) editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };

  const addImage = (url: string) => {
    editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <div className="flex flex-wrap gap-1 p-2 border-b bg-slate-50">
        <ToolbarBtn
          active={editor.isActive('heading', { level: 1 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          label="H1"
        />
        <ToolbarBtn
          active={editor.isActive('heading', { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          label="H2"
        />
        <ToolbarBtn
          active={editor.isActive('heading', { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          label="H3"
        />
        <span className="w-px h-6 bg-slate-300 mx-1 self-center" />
        <ToolbarBtn
          active={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
          label="B"
          bold
        />
        <ToolbarBtn
          active={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          label="I"
          italic
        />
        <ToolbarBtn
          active={editor.isActive('underline')}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          label="U"
          underline
        />
        <span className="w-px h-6 bg-slate-300 mx-1 self-center" />
        <ToolbarBtn
          active={editor.isActive('bulletList')}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          label="• List"
        />
        <ToolbarBtn
          active={editor.isActive('orderedList')}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          label="1. List"
        />
        <span className="w-px h-6 bg-slate-300 mx-1 self-center" />
        <ToolbarBtn
          active={editor.isActive('codeBlock')}
          onClick={() => editor.chain().focus().toggleCodeBlock({ language: 'javascript' }).run()}
          label="{ } Kode"
        />
        <button
          type="button"
          onClick={addYoutube}
          className="text-xs border rounded px-2 py-1 hover:bg-white"
        >
          ▶ YouTube
        </button>
        <ImageUpload onUploaded={addImage} compact />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

function ToolbarBtn({
  active,
  onClick,
  label,
  bold,
  italic,
  underline,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-xs border rounded px-2 py-1 ${
        active ? 'bg-blue-100 border-blue-300 text-blue-800' : 'hover:bg-white'
      } ${bold ? 'font-bold' : ''} ${italic ? 'italic' : ''} ${underline ? 'underline' : ''}`}
    >
      {label}
    </button>
  );
}
