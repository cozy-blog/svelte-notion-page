import type { ComponentType } from 'svelte';
import FallBackComponent from '$lib/components/FallbackComponent.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import Cover from '$lib/components/layout/Cover.svelte';
import PageLayout from '$lib/components/layout/PageLayout.svelte';
import Text from '$lib/components/base/richtext/component/Text.svelte';
import Theme from '$lib/components/layout/Theme.svelte';
import Heading1 from '$lib/components/Heading1.svelte';
import Heading2 from '$lib/components/Heading2.svelte';
import Heading3 from '$lib/components/Heading3.svelte';
import Column from '$lib/components/Column.svelte';
import ColumnList from '$lib/components/ColumnList.svelte';
import NumberedListItem from '$lib/components/NumberedListItem.svelte';
import BulletedListItem from '$lib/components/BulletedListItem.svelte';
import Todo from '$lib/components/Todo.svelte';
import CheckBox from '$lib/components/CheckBox.svelte';
import Toggle from '$lib/components/Toggle.svelte';
import Quote from '$lib/components/Quote.svelte';
import Callout from '$lib/components/Callout.svelte';
import Equation from '$lib/components/Equation.svelte';
import Code from '$lib/components/Code.svelte';

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

	// low level custom. 넣을까 말까 고민중.., 
	checkbox: CheckBox,
	text: Text,
};

export const defaultProvider = new NotionComponentProvider({});
