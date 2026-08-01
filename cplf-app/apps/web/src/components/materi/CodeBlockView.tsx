'use client';

import { useCallback, useState, type ChangeEvent } from 'react';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import type { NodeViewProps } from '@tiptap/react';

const RUNNABLE = new Set(['javascript', 'js', '']);
const LANG_LABEL: Record<string, string> = {
  javascript: 'JavaScript',
  js: 'JavaScript',
  html: 'HTML',
  css: 'CSS',
  python: 'Python',
  plaintext: 'Plain',
};

export function CodeBlockView({ node, updateAttributes, editor }: NodeViewProps) {
  const [output, setOutput] = useState('');
  const language = (node.attrs.language as string) ?? 'javascript';
  const readOnly = !editor.isEditable;
  const canRun = RUNNABLE.has(language);

  const runCode = useCallback(() => {
    const code = node.textContent;
    const logs: string[] = [];
    const origLog = console.log;
    console.log = (...args: unknown[]) => {
      logs.push(args.map(String).join(' '));
    };
    try {
      const fn = new Function(code);
      const result = fn();
      if (result !== undefined) logs.push(`→ ${String(result)}`);
      setOutput(logs.length ? logs.join('\n') : '(tidak ada output)');
    } catch (err) {
      setOutput(`Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      console.log = origLog;
    }
  }, [node.textContent]);

  return (
    <NodeViewWrapper className="my-4 rounded-lg border border-slate-300 overflow-hidden bg-white not-prose">
      <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 border-b border-slate-200">
        {readOnly ? (
          <span className="text-xs font-medium text-slate-600 px-1">
            {LANG_LABEL[language] ?? language}
          </span>
        ) : (
          <select
            value={language}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              updateAttributes({ language: e.target.value })
            }
            className="text-xs border rounded px-2 py-0.5 bg-white"
            contentEditable={false}
          >
            <option value="javascript">JavaScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
            <option value="plaintext">Plain</option>
          </select>
        )}
        {canRun && (
          <button
            type="button"
            onClick={runCode}
            className="text-xs bg-green-600 text-white px-2 py-0.5 rounded hover:bg-green-700"
            contentEditable={false}
          >
            ▶ Jalankan
          </button>
        )}
        {!readOnly && (
          <span className="text-xs text-slate-400 ml-auto">Tab = indent</span>
        )}
      </div>
      <pre className="m-0 bg-slate-900 text-slate-100 text-sm overflow-x-auto">
        <NodeViewContent
          className={`block p-4 font-mono min-h-16 outline-none whitespace-pre ${
            readOnly ? 'select-text cursor-text' : ''
          }`}
        />
      </pre>
      {output && (
        <pre className="m-0 bg-slate-800 text-green-300 text-xs p-3 border-t border-slate-700 whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </NodeViewWrapper>
  );
}
