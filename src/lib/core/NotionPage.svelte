<script lang="ts">
	import type { Content } from '../types';
	import NotionBlocks from './NotionBlocks.svelte';
	import { setContext } from 'svelte';
	import { defaultProvider } from './NotionComponentProvider';
	import {
		NOTION_PAGE_INFO_KEY,
		notionComponentProvierContext,
	} from './context';
	import './notion.css';

	export let content: Content;

	if (!notionComponentProvierContext.exist()) {
		notionComponentProvierContext.set(defaultProvider);
	}

	const componentProvider = notionComponentProvierContext.get();

	setContext(NOTION_PAGE_INFO_KEY, {
		pageId: content.id
	});
</script>

<svelte:component this={componentProvider.resolve('theme')}>
	<svelte:component this={componentProvider.resolve('pageLayout')} {content}>
		<NotionBlocks depth={0} blocks={content.blocks} />
	</svelte:component>
</svelte:component>
