<script lang="ts">
	import '$lib/components/core/notion.css';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import { json } from '../post.js';
	import type { Content } from '$lib/types';

	const content = json as unknown as Content;
</script>

<PageLayout {content}>
	<p>hi</p>
</PageLayout>
