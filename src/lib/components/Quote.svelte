<script lang="ts">
	import type { QuoteProps } from "$lib/types";
	import { getColorCss } from "$lib/utils/getColorCss";
	import { notionComponentProvierContext } from '$lib/core/context';

  export let props: QuoteProps

  const {quote: {color, text: texts}} = props
	const componentProvider = notionComponentProvierContext.get();
</script>

<div class={`notion-block notion-quote ${getColorCss(color)}`}>
	<p class="notion-quote-content">
		{#if texts.length !== 0}
			{#each texts as text}
				<svelte:component this={componentProvider.resolve(text.type)} props={text} />
			{/each}
		{:else}
			&nbsp
		{/if}
	</p>
</div>