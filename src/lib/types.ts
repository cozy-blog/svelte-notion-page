import type {
	BlockObjectResponse,
	GetPageResponse,
	PartialBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

export type Page = GetPageResponse;
export type Block = PartialBlockObjectResponse & BlockObjectResponse & { blocks?: Block[] };
export type Content = Page & { blocks: Block[] };
