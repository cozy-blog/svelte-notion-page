<script lang="ts">
	import { defaultComponents, NotionComponentProvider } from '$lib/NotionComponentProvider';
	import NotionPage from '$lib/NotionPage.svelte';
	import { json } from './post.js';
	import TestFallback from './TestFallback.svelte';
	import { setContext } from 'svelte';
	import { PROVIDER_KEY } from '$lib/context';

	const provider = new NotionComponentProvider({
		...defaultComponents,
		paragraph: TestFallback
	});

	setContext(PROVIDER_KEY, provider);
</script>

<NotionPage content={json} />
