<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { Heading_2_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	export let props: Heading_2_Props;
	const {
		heading_2: { color, text: texts }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
</script>

<h2 class={`${getColorCss(color)} notion-h notion-h2`}>
	{#each texts as text}
		<svelte:component this={componentProvider.resolve(text.type)} props={text} />
	{/each}
</h2>