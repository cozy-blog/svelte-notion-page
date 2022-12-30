import type {
	BlockObjectResponse,
	GetPageResponse,
	PartialBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

export type Page = GetPageResponse;
export type Block = PartialBlockObjectResponse & BlockObjectResponse & { blocks?: Block[] };
export type Content = Page & { blocks: Block[] };
export type NotionThemeStyle = Record<string, string>;
export type ComponentName =
	| 'pageLayout'
	| 'cover'
	| 'header'
	| 'pageIcon'
	| 'paragraph'
	| 'text'
	| 'title';
export type TextProps = {
	type: 'text';
	text: {
		content: string;
		link?: string | null;
	};
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: string;
	};
	plain_text: string;
	href?: string | null;
};

export type ParagraphProps = {
	paragraph: {
		color: string;
		text: TextProps[];
	};
};

export type EquationProps = {
	type: 'equation';
	equation: {
		expression: string;
	};
	annotations: {
		bold: boolean;
		italic: boolean;
		strikethrough: boolean;
		underline: boolean;
		code: boolean;
		color: string;
	};
	plain_text: string;
	href?: string | null;
};

export type CodeProps = {
	type: 'code';
	code: {
		caption: [];
		language: string;
		text: TextProps[];
	};
};
