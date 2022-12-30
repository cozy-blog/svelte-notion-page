<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { Heading_1_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	export let props: Heading_1_Props;
	const {
		heading_1: { color, text: texts }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
</script>

<h1 class={`${getColorCss(color)} notion-h notion-h1`}>
	{#each texts as text}
		<svelte:component this={componentProvider.resolve(text.type)} props={text} />
	{/each}
</h1>
