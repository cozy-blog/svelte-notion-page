<script lang="ts">
	import {
		defaultComponents,
		NotionComponentProvider,
		defaultProvider
	} from '$lib/core/NotionComponentProvider';
	import NotionPage from '$lib/core/NotionPage.svelte';
	import { get } from './(hero)blog/test/notion-export.js';
	import type { Content } from '$lib/types.js';

	const promise = get({ params: {} }) as unknown as Promise<{ body: { json: Content } }>;
</script>

{#await promise then { body: { json: content } }}
	<NotionPage {content} />
{/await}
