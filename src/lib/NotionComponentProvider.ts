import type { ComponentType } from 'svelte';
import FallbackComponent from '$lib/FallbackComponent.svelte';

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
			return FallbackComponent;
		}
		return target;
	}
}

export const defaultComponents = {};

export const defaultProvider = new NotionComponentProvider(defaultComponents);
