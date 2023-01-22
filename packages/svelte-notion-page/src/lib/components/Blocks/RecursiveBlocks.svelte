<script lang="ts">
	import type { ContextedBlock } from '../../types';
	import { notionComponentProviderContext } from '../../context';
	export let blocks: ContextedBlock[];
	export let depth: number = 0
	const componentProvider = notionComponentProviderContext.get();
</script>

{#each blocks as block, i}
	<svelte:component this={componentProvider.resolve(block.type)} props={block} {depth}>
		{#if block.has_children === true}
			<svelte:self depth={depth + 1} blocks={block.blocks} />
		{/if}
	</svelte:component>
{/each}
