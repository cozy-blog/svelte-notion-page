<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { NumberedListItemProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';

	export let props: NumberedListItemProps;
	const {
		numbered_list_item: { text: texts, color }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
</script>

<div class={`notion-block notion-list notion-list-numbered ${getColorCss(color)}`}>
	<li>
		{#each texts as text}
			<svelte:component this={componentProvider.resolve(text.type)} props={text} />
		{/each}
	</li>
	<slot />
</div>
