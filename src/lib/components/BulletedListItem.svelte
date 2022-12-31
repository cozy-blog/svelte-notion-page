<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { BulletedListItemProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { bulletedListItemMarker } from '$lib/utils/listItemMarker';

	export let props: BulletedListItemProps;
	const {
		bulleted_list_item: { text: texts, color }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
	const { marker, format } = bulletedListItemMarker.getMarker(props);
</script>

<div class={`notion-block notion-list notion-list-bulleted ${getColorCss(color)}`}>
	<li>
		<span data-notion-marker-format={format} class="notion-list-marker">{marker}</span>
		{#each texts as text}
			<svelte:component this={componentProvider.resolve(text.type)} props={text} />
		{/each}
	</li>
	<slot />
</div>
