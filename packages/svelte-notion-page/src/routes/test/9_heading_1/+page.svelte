<script lang="ts">
	import NotionPage from '$lib/components/NotionPage.svelte';
	import { json } from './notion-export';
	import type { Content } from '$lib/types.js';
	const content = json as unknown as Content;
</script>

<NotionPage {content} />
