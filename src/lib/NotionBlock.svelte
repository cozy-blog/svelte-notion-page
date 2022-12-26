<script lang="ts">
	import type { Block } from '$lib/types';
	import NotionBlocks from '$lib/NotionBlocks.svelte';
	import { defaultProvider } from '$lib/NotionComponentProvider';
	import Paragraph from '$lib/Paragraph.svelte';
	defaultProvider.register('paragraph', Paragraph);

	export let block: Block;
</script>

<svelte:component this={defaultProvider.resolve(block.type)} {block}>
	{#if block.has_children === true}
		<div class="pad"><NotionBlocks blocks={block.blocks} /></div>
	{/if}
</svelte:component>

<style lang="postcss">
	.pad {
		padding-left: 16px;
	}
</style>
