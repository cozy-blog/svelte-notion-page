<script lang="ts">
	import type { Content } from '$lib/types.js';
	import Notion from '$lib/components';
	export let content: Content;
	export let cover: string = '';
	export let title = 'Notion Title';
</script>

<Notion>
	{#if cover}
		<Notion.Cover src={cover} />
	{/if}
	<Notion.Body>
		<Notion.Title {title} />
		<Notion.Blocks blocks={content.blocks} />
	</Notion.Body>
</Notion>
