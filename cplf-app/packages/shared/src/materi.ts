export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'code'
  | 'video'
  | 'image'
  | 'list';

export interface ContentBlock {
  type: BlockType;
  data: Record<string, unknown>;
}

export interface MateriContent {
  /** @deprecated legacy block format */
  blocks?: ContentBlock[];
  /** tiptap JSON document */
  format?: 'blocks' | 'tiptap';
  doc?: Record<string, unknown>;
}
