import type { ComponentType } from 'svelte';
import FallbackComponent from '$lib/core/FallbackComponent.svelte';
import TestFallback from '$lib/components/Paragraph.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';

export class NotionComponentProvider {
	private map: { [key: string]: ComponentType };

	public fallBackComponent: ComponentType;
	constructor(map: { [key: string]: ComponentType }) {
		this.map = { ...map };
		this.fallBackComponent = FallbackComponent;
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

export const defaultProvider = new NotionComponentProvider(defaultComponents);
