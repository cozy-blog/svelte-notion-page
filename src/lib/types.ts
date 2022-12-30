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
} & Block;

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
} & Block;

export type CodeProps = {
	type: 'code';
	code: {
		caption: [];
		language: string;
		text: TextProps[];
	};
} & Block;

export type Heading_1_Props = {
	type: 'heading_1';
	heading_1: HeadingProps;
} & Block;

export type Heading_2_Props = {
	type: 'heading_2';
	heading_2: HeadingProps;
} & Block;

export type Heading_3_Props = {
	type: 'heading_3';
	heading_3: HeadingProps;
} & Block;

export type HeadingProps = {
	is_toggleable: boolean;
	color: string;
	text: TextProps[];
};

export type ColumnListProps = { type: 'column_list' } & Block;
export type ColumnProps = { type: 'column' } & Block;
