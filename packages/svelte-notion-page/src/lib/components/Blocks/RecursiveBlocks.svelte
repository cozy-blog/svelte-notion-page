<script lang="ts">
	import type { ContextedBlock } from '../../types';
	import { notionComponentProviderContext } from '../../context';
	export let blocks: ContextedBlock[];
	const componentProvider = notionComponentProviderContext.get();
</script>

{#each blocks as block, i}
	<svelte:component this={componentProvider.resolve(block.type)} props={block}>
		{#if block.has_children === true}
			<svelte:self  blocks={block.blocks} />
		{/if}
	</svelte:component>
{/each}
