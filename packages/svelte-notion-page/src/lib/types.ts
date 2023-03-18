import type {
	GetPageResponse,
	BlockObjectResponse,
	PageObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

export type _Block = BlockObjectResponse & { blocks: Block[] };
export type ContentfulPage = PageObjectResponse & { blocks: Block[] };
export type Page = GetPageResponse;
export type Block = _Block;
export type ContextedBlock = _Block & BlockContext & { blocks?: ContextedBlock[] };
export type Content = ContentfulPage;

export type BlockContext = {
	context: {
		previous?: ContextedBlock | null;
		parent?: ContextedBlock | null;
	};
};

export type TextProps = {
	type: 'text';
	text: {
		content: string;
		link?: {
			url: string;
		};
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
		rich_text: TextProps[];
	};
} & ContextedBlock;

export type EquationProps = {
	type: 'equation';
	inline?: boolean;
	equation: {
		expression: string;
	};
};

export type CodeProps = {
	type: 'code';
	code: {
		caption: [];
		language: string;
		rich_text: TextProps[];
	};
} & ContextedBlock;

export type Heading_1_Props = {
	type: 'heading_1';
	heading_1: HeadingProps;
} & ContextedBlock;

export type Heading_2_Props = {
	type: 'heading_2';
	heading_2: HeadingProps;
} & ContextedBlock;

export type Heading_3_Props = {
	type: 'heading_3';
	heading_3: HeadingProps;
} & ContextedBlock;

export type HeadingProps = {
	is_toggleable: boolean;
	color: string;
	rich_text: TextProps[];
};

export type ColumnListProps = { type: 'column_list' } & Block;
export type ColumnProps = { type: 'column' } & Block;
export type BulletedListItemProps = {
	type: 'bulleted_list_item';
	bulleted_list_item: { color: string; rich_text: TextProps[] };
} & ContextedBlock;

export type NumberedListItemProps = {
	type: 'numbered_list_item';
	numbered_list_item: { color: string; rich_text: TextProps[] };
} & ContextedBlock;

export type TodoProps = {
	type: 'to_do';
	to_do: {
		color: string;
		checked: boolean;
		rich_text: TextProps[];
	};
} & ContextedBlock;

export type ToggleProps = {
	type: 'toggle';
	toggle: {
		color: string;
		rich_text: TextProps[];
	};
} & ContextedBlock;

export type QuoteProps = {
	type: 'quote';
	quote: {
		color: string;
		rich_text: TextProps[];
	};
} & ContextedBlock;

export type CalloutProps = {
	type: 'callout';
	callout: {
		icon: {
			type: 'emoji' | 'file' | 'external';
			emoji?: string;
			file?: {
				url: string;
			};
			external?: {
				url: string;
			};
		};
		color: string;
		rich_text: TextProps[];
	};
} & ContextedBlock;

export type ImageProps = {
	type: 'image';
	image:
		| {
				caption: TextProps[];
				type: 'file';
				file: {
					url: string;
				};
		  }
		| {
				caption: TextProps[];
				type: 'external';
				external?: {
					url: string;
				};
		  };
} & ContextedBlock;

export type VideoProps = {
	type: 'video';
	video: {
		caption: TextProps[];
		type: 'external' | 'file';
		file?: {
			url: string;
		};
		external?: {
			url: string;
		};
	};
} & ContextedBlock;

export type DividerProps = {
	type: 'divider';
	divider: {
		//
	};
} & ContextedBlock;

export type AudioProps = {
	type: 'audio';
	audio: {
		caption: TextProps[];
		type: 'external' | 'file';
		file?: {
			url: string;
		};
		external?: {
			url: string;
		};
	};
} & ContextedBlock;

export type TableProps = {
	table: {
		table_width: number;
		has_column_header: boolean;
		has_row_header: boolean;
	};
} & ContextedBlock;

export type TableRowProps = {
	table_row: {
		cells: TextProps[][];
	};
};

export type BookmarkProps = {
	type: 'bookmark';
	bookmark: {
		caption: TextProps[];
		url: string;
	};
} & ContextedBlock;

export type SyncedBlock = {
	type: 'synced_block';
};
