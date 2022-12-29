<script lang="ts">
	import type { Content } from '../types';
	import NotionBlocks from './NotionBlocks.svelte';
	import { hasContext, setContext } from 'svelte';
	import { defaultProvider } from './NotionComponentProvider';
	import { NOTION_PAGE_INFO_KEY, NOTION_COMPONENT_PROVIDER_KEY, NOTION_THEME } from './context';
	import NotionPageLayout from './NotionPageLayout.svelte';

	export let content: Content;

	if (!hasContext(NOTION_COMPONENT_PROVIDER_KEY)) {
		setContext(NOTION_COMPONENT_PROVIDER_KEY, defaultProvider);
	}
	setContext(NOTION_PAGE_INFO_KEY, {
		pageId: content.id
	});
</script>

<NotionPageLayout {content}>
	<NotionBlocks depth={0} blocks={content.blocks} />
</NotionPageLayout>
