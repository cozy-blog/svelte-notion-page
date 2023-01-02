<script lang="ts">
	import type { NumberedListItemProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { numberedListItemMarker } from '$lib/utils/listItemMarker';
	import RichText from './base/richtext/RichText.svelte';

	export let props: NumberedListItemProps;
	const {
		numbered_list_item: { text: texts, color }
	} = props;
	const { marker, format } = numberedListItemMarker.getMarker(props);
</script>

<div
	data-notion-marker-format={format}
	class={`notion-block notion-list notion-list-numbered ${getColorCss(color)}`}
>
	<li>
		<div class="notion-list-marker">{marker}</div>
		<RichText props={texts} />
	</li>
	<slot />
</div>
