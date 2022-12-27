<script lang="ts">
	import type { Content } from '$lib/types';
	import NotionBlocks from '$lib/NotionBlocks.svelte';
	import { hasContext, setContext } from 'svelte';
	import { defaultProvider } from '$lib';
	import { PAGE_INFO_KEY, PROVIDER_KEY } from '$lib/context';

	export let content: Content;

	if (!hasContext(PROVIDER_KEY)) {
		setContext(PROVIDER_KEY, defaultProvider);
	}
	setContext(PAGE_INFO_KEY, {
		pageId: content.id
	});
</script>

<NotionBlocks depth={0} blocks={content.blocks} />
