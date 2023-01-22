import type { ComponentType } from 'svelte';
import FallBackComponent from '$lib/default-notion-components/FallbackComponent.svelte';
import Paragraph from '$lib/default-notion-components/Paragraph.svelte';
import Cover from '$lib/default-notion-components/layout/Cover.svelte';
import PageLayout from '$lib/default-notion-components/layout/PageLayout.svelte';
import Text from '$lib/default-notion-components/base/richtext/component/Text.svelte';
import Theme from '$lib/default-notion-components/layout/Theme.svelte';
import Heading1 from '$lib/default-notion-components/Heading1.svelte';
import Heading2 from '$lib/default-notion-components/Heading2.svelte';
import Heading3 from '$lib/default-notion-components/Heading3.svelte';
import Column from '$lib/default-notion-components/Column.svelte';
import ColumnList from '$lib/default-notion-components/ColumnList.svelte';
import NumberedListItem from '$lib/default-notion-components/NumberedListItem.svelte';
import BulletedListItem from '$lib/default-notion-components/BulletedListItem.svelte';
import Todo from '$lib/default-notion-components/Todo.svelte';
import CheckBox from '$lib/default-notion-components/base/CheckBox.svelte';
import Toggle from '$lib/default-notion-components/Toggle.svelte';
import Quote from '$lib/default-notion-components/Quote.svelte';
import Callout from '$lib/default-notion-components/Callout.svelte';
import Equation from '$lib/default-notion-components/Equation.svelte';
import Code from '$lib/default-notion-components/Code.svelte';
import Image from '$lib/default-notion-components/Image.svelte';
import Video from '$lib/default-notion-components/Video.svelte';
import Divider from '$lib/default-notion-components/Divider.svelte';
import Audio from '$lib/default-notion-components/Audio.svelte';

export type NotionComponentProviderOptions = {
	fallBackComponent?: ComponentType;
};

export class NotionComponentProvider {
	private map: { [key in string]: ComponentType };
	public fallBackComponent: ComponentType;

	constructor(
		map: { [key: string]: ComponentType },
		{ fallBackComponent = FallBackComponent }: NotionComponentProviderOptions = {}
	) {
		this.map = { ...defaultComponents, ...map };
		this.fallBackComponent = fallBackComponent;
	}

	register(key: string, component: ComponentType) {
		this.map[key] = component;
	}

	registerAll(map: { [key: string]: ComponentType }) {
		this.map = { ...this.map, ...map };
	}

	resolve(key: string): ComponentType {
		const target = this.map[key];
		if (target === undefined) {
			return this.fallBackComponent;
		}
		return target;
	}
}

export const defaultComponents: Record<string, ComponentType> = {
	paragraph: Paragraph,
	heading_1: Heading1,
	heading_2: Heading2,
	heading_3: Heading3,
	cover: Cover,
	pageLayout: PageLayout,
	theme: Theme,
	column: Column,
	column_list: ColumnList,
	numbered_list_item: NumberedListItem,
	bulleted_list_item: BulletedListItem,
	to_do: Todo,
	toggle: Toggle,
	quote: Quote,
	callout: Callout,
	equation: Equation,
	code: Code,
	image: Image,
	video: Video,
	divider: Divider,
	audio: Audio,

	// low level custom. 넣을까 말까 고민중.., 
	checkbox: CheckBox,
	text: Text,
};

export const defaultProvider = new NotionComponentProvider({});
