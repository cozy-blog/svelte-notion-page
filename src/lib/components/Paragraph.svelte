<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { ParagraphProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	export let props: ParagraphProps;
	const {
		paragraph: { color, text: texts }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
</script>

<p class={`${getColorCss(color)} `}>
	{#each texts as text}
		<svelte:component this={componentProvider.resolve(text.type)} props={text} />
	{/each}
</p>

<style>
	p {
		width: 100%;
		padding: 3px 2px;
		white-space: pre-wrap;
	}
</style>
