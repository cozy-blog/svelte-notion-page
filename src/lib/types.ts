import type { GetBlockResponse, GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

export type Page = GetPageResponse;
export type Block = GetBlockResponse & { blocks?: Block[] };
export type Content = Page & { blocks: Block[] };
