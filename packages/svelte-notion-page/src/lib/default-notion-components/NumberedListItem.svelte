<script lang="ts">
	import type { NumberedListItemArgs } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { numberedListItemMarker } from '$lib/utils/listItemMarker';
	import RichText from './base/richtext/RichText.svelte';

	export let props: NumberedListItemArgs;
	const {
		numbered_list_item: { rich_text: texts, color }
	} = props;
	const { marker, format } = numberedListItemMarker.getMarker(props);
</script>

<div
	data-notion-marker-format={format}
	class={`notion-block notion-list-numbered ${getColorCss(color)}`}
>
	<li class="notion-list-numbered-content">
		<div class="notion-list-marker">{marker}</div>
		<p>
			<RichText props={texts} />
		</p>
	</li>
	<slot />
</div>

<style>
	:global(.notion-list-numbered[data-notion-marker-format='romans'] > li > .notion-list-marker) {
		width: 3em !important;
		margin-right: 0em;
	}
	:global(.notion-list-numbered[data-notion-marker-format='romans'] > .notion-block) {
		margin-left: 2.9em;
	}

	.notion-list-marker::after {
		content: '.';
	}

	li > .notion-list-marker {
		width: 26px;
	}

	.notion-list-marker {
		display: inline-flex;
		flex-shrink: 0;
		justify-content: center;
		align-items: center;
		height: fit-content;
	}

	.notion-list-numbered-content {
		padding-top: 4px;
		padding-bottom: 4px;
		list-style-type: none;
		display: flex;
	}
</style>
