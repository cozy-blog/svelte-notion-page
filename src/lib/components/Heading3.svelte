<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { Heading_3_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	export let props: Heading_3_Props;
	const {
		heading_3: { color, text: texts }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
</script>

<div>
	<h3 class={`${getColorCss(color)} notion-h notion-h3`}>
		{#each texts as text}
			<svelte:component this={componentProvider.resolve(text.type)} props={text} />
		{/each}
	</h3>
  <slot/>
</div>
