<script lang="ts">
	import type { Content, NotionThemeStyle } from '../types';
	import NotionBlocks from './NotionBlocks.svelte';
	import { setContext } from 'svelte';
	import { defaultProvider, NotionComponentProvider } from './NotionComponentProvider';
	import {
		NOTION_PAGE_INFO_KEY,
		notionComponentProvierContext,
		notionThemeContext
	} from './context';
	import NotionPageLayout from './NotionPageLayout.svelte';
	import defaultTheme from '$lib/components/themeStyle';

	export let content: Content;
	export let theme: NotionThemeStyle = notionThemeContext.exist()
		? notionThemeContext.get()
		: defaultTheme;
	export let componentProvider: NotionComponentProvider = notionComponentProvierContext.exist()
		? notionComponentProvierContext.get()
		: defaultProvider;

	setContext(NOTION_PAGE_INFO_KEY, {
		pageId: content.id
	});
</script>

<NotionPageLayout {content} {theme}>
	<NotionBlocks {componentProvider} depth={0} blocks={content.blocks} />
</NotionPageLayout>
