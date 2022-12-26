<script lang="ts">
	import type { Block } from '$lib/types';
	import NotionBlock from '$lib/NotionBlock.svelte';

	export let blocks: Block[];
</script>

{#each blocks as block}
	<NotionBlock {block} />
{/each}
