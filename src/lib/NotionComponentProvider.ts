import type { ComponentType } from 'svelte';
import TestComponent from '$lib/TestComponent.svelte';

export class NotionComponentProvider {
	constructor(private map: { [key: string]: ComponentType }) {}

	register(key: string, component: ComponentType) {
		this.map[key] = component;
	}

	registerAll(map: { [key: string]: ComponentType }) {
		this.map = { ...this.map, ...map };
	}

	resolve(key: string): ComponentType {
		const target = this.map[key];
		if (target === undefined) {
			// TODO: Return fallback component
			return TestComponent;
		}
		return target;
	}
}

export const defaultProvider = new NotionComponentProvider({ test: TestComponent });
