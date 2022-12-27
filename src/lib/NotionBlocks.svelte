<script lang="ts">
	import type { Block } from '$lib/types';
	import NotionBlock from '$lib/NotionBlock.svelte';

	export let depth: number;
	export let blocks: Block[];
</script>

{#each blocks as block}
	<NotionBlock {depth} {block} />
{/each}
