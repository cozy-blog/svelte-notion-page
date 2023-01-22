<script lang="ts">
	import type { Block, ContextedBlock, Content, BlockContext } from '../types';
	import NotionBlocks from './Blocks';
	import { setContext } from 'svelte';
	import { defaultProvider } from '../NotionComponentProvider';
	import { NOTION_PAGE_INFO_KEY, notionComponentProviderContext } from '../context';
	import './notion.css';

	export let content: Content;

	if (!notionComponentProviderContext.exist()) {
		notionComponentProviderContext.set(defaultProvider);
	}

	const componentProvider = notionComponentProviderContext.get();

	setContext(NOTION_PAGE_INFO_KEY, {
		pageId: content.id
	});
</script>

<svelte:component this={componentProvider.resolve('theme')}>
	<svelte:component this={componentProvider.resolve('pageLayout')} {content}>
		<NotionBlocks blocks={content.blocks} />
	</svelte:component>
</svelte:component>