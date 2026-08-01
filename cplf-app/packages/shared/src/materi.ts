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
  blocks: ContentBlock[];
}
