<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { NumberedListItemProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { numberedListItemMarker } from '$lib/utils/listItemMarker';

	export let props: NumberedListItemProps;
	const {
		numbered_list_item: { text: texts, color }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
	const { marker, format } = numberedListItemMarker.getMarker(props);
</script>

<div
	data-notion-marker-format={format}
	class={`notion-block notion-list notion-list-numbered ${getColorCss(color)}`}
>
	<li>
		<div class="notion-list-marker">{marker}</div>
		{#each texts as text}
			<svelte:component this={componentProvider.resolve(text.type)} props={text} />
		{/each}
	</li>
	<slot />
</div>
