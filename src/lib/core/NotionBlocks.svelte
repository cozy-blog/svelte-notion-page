<script lang="ts">
	import type { Block } from '../types';
	import type { NotionComponentProvider } from './NotionComponentProvider';
	export let blocks: Block[];
	export let depth: number;
	export let componentProvider: NotionComponentProvider;
</script>

{#each blocks as block}
	<svelte:component this={componentProvider.resolve(block.type)} {block} {depth} />
	{#if block.has_children === true}
		<svelte:self depth={++depth} blocks={block.blocks} />
	{/if}
{/each}
