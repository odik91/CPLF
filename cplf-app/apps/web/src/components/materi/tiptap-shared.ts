import type { Extensions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlock from '@tiptap/extension-code-block';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { CodeBlockView } from './CodeBlockView';

export const TIPTAP_CONTENT_CLASS = 'tiptap-materi prose prose-slate max-w-none';

export const CustomCodeBlock = CodeBlock.extend({
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

export function buildMateriExtensions(options?: { placeholder?: boolean }): Extensions {
  const extensions: Extensions = [
    StarterKit.configure({
      codeBlock: false,
      heading: { levels: [1, 2, 3] },
    }),
    Underline,
    CustomCodeBlock,
    Image.configure({ inline: false, allowBase64: false }),
    Youtube.configure({ width: 640, height: 360, nocookie: true }),
  ];

  if (options?.placeholder) {
    extensions.push(
      Placeholder.configure({ placeholder: 'Mulai menulis materi...' }),
    );
  }

  return extensions;
}

export const tiptapEditorProps = {
  attributes: {
    class: `${TIPTAP_CONTENT_CLASS} min-h-[320px] px-4 py-3 focus:outline-none`,
  },
};

export const tiptapReadProps = {
  attributes: {
    class: `${TIPTAP_CONTENT_CLASS} px-1 py-2`,
  },
};
