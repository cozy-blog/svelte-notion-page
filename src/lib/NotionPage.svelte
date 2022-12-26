<script lang="ts">
	import type { Content } from '$lib/types';
	import NotionBlocks from '$lib/NotionBlocks.svelte';

	export let content: Content;
</script>

<div>Start of doc</div>
<NotionBlocks blocks={content.blocks} />
<div>End of doc</div>
