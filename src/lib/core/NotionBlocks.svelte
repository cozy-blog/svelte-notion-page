<script lang="ts">
	import type { Block } from '../types';
	import { getContext } from 'svelte';
	import type { NotionComponentProvider } from '$lib';
	import { NOTION_COMPONENT_PROVIDER_KEY } from './context';
	export let blocks: Block[];
	export let depth: number;
	const provider = getContext<NotionComponentProvider>(NOTION_COMPONENT_PROVIDER_KEY);
</script>

{#each blocks as block}
	<svelte:component this={provider.resolve(block.type)} {block} {depth} />
	{#if block.has_children === true}
		<svelte:self depth={++depth} blocks={block.blocks} />
	{/if}
{/each}
