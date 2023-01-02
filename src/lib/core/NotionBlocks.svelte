<script lang="ts">
	import type { Block, ContextedBlock } from '../types';
	import { notionComponentProvierContext } from './context';
	export let blocks: ContextedBlock[];
	export let depth: number = 0;
	const componentProvider = notionComponentProvierContext.get();
</script>

{#each blocks as block, i}
	<svelte:component this={componentProvider.resolve(block.type)} props={block} {depth}>
		{#if block.has_children === true}
			<svelte:self depth={depth + 1} blocks={block.blocks} />
		{/if}
	</svelte:component>
{/each}
