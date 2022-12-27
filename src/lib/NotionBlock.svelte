<script lang="ts">
	import type { Block } from '$lib/types';
	import NotionBlocks from '$lib/NotionBlocks.svelte';
	import { getContext } from 'svelte';
	import { NotionComponentProvider } from '$lib';
	import { PROVIDER_KEY } from '$lib/context';

	export let depth;
	export let block: Block;

	const provider = getContext<NotionComponentProvider>(PROVIDER_KEY);
</script>

<svelte:component this={provider.resolve(block.type)} {block} {depth}>
	{#if block.has_children === true}
		<NotionBlocks depth={depth + 1} blocks={block.blocks} />
	{/if}
</svelte:component>
