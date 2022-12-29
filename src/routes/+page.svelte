<script lang="ts">
	import {
		defaultComponents,
		NotionComponentProvider,
		defaultProvider
	} from '$lib/core/NotionComponentProvider';
	import NotionPage from '$lib/NotionPage.svelte';
	import { json } from './post.js';
	import type { Content } from '$lib/types.js';

	const content = json as unknown as Content;
</script>

<NotionPage {content} />
