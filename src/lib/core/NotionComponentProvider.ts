import type { ComponentType } from 'svelte';
import FallBackComponent from '$lib/components/blocks/FallbackComponent.svelte';
import Paragraph from '$lib/components/blocks/Paragraph.svelte';

export class NotionComponentProvider {
	private map: { [key: string]: ComponentType };

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
	paragraph: Paragraph
};

export const defaultProvider = new NotionComponentProvider(defaultComponents, FallBackComponent);
