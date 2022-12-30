<script lang="ts">
	import type { Block } from '../types';
	import { notionComponentProvierContext } from './context';
	export let blocks: Block[];
	export let depth: number;
	const componentProvider = notionComponentProvierContext.get();
</script>

{#each blocks as block}
	<svelte:component this={componentProvider.resolve(block.type)} props={block} {depth}>
		{#if block.has_children === true}
			<svelte:self slot="child" depth={++depth} blocks={block.blocks} />
		{/if}
	</svelte:component>
{/each}
