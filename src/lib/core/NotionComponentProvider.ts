import type { ComponentType } from 'svelte';
import FallBackComponent from '$lib/components/FallbackComponent.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import Cover from '$lib/components/Cover.svelte';
import PageLayout from '$lib/components/PageLayout.svelte';
import Text from '$lib/components/Text.svelte';
import Theme from '$lib/components/Theme.svelte';
import Heading1 from '$lib/components/Heading1.svelte';
import Heading2 from '$lib/components/Heading2.svelte';
import Heading3 from '$lib/components/Heading3.svelte';

export class NotionComponentProvider {
	private map: { [key in string]: ComponentType };

	public fallBackComponent: ComponentType;
	constructor(map: { [key: string]: ComponentType }, fallbackComponent: ComponentType) {
		this.map = { ...map };
		this.fallBackComponent = fallbackComponent;
	}

	replaceFallbackCompoent(fallback: ComponentType) {
		this.fallBackComponent = fallback;
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
	text: Text,
	heading_1: Heading1,
	heading_2: Heading2,
	heading_3: Heading3,
	cover: Cover,
	pageLayout: PageLayout,
	theme: Theme
};

export const defaultProvider = new NotionComponentProvider(defaultComponents, FallBackComponent);
