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

<div class={`notion-block ${getColorCss(color)}`}>
	<p class="notion-paragraph">
		{#if texts.length !== 0}
			{#each texts as text}
				<svelte:component this={componentProvider.resolve(text.type)} props={text} />
			{/each}
		{:else}
			&nbsp
		{/if}
	</p>
	<slot />
</div>
