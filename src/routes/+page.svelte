<script lang="ts">
	import { defaultComponents, NotionComponentProvider } from '$lib/core/NotionComponentProvider';
	import NotionPage from '$lib/NotionPage.svelte';
	import { json } from './post.js';
	import { setContext } from 'svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import {
		NOTION_COMPONENT_PROVIDER_KEY,
		NOTION_PAGE_INFO_KEY,
		NOTION_THEME
	} from '$lib/core/context';
	import type { Content } from '$lib/types.js';

	const provider = new NotionComponentProvider({
		...defaultComponents,
		paragraph: Paragraph
	});

	setContext(NOTION_COMPONENT_PROVIDER_KEY, provider);

	const content = json as unknown as Content;
</script>

<NotionPage content={content} />
