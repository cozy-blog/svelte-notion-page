<script lang="ts">
	import { notionComponentProviderContext } from '$lib/core/context';
	import type { BulletedListItemProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { bulletedListItemMarker } from '$lib/utils/listItemMarker';
	import RichText from './base/richtext/RichText.svelte';

	export let props: BulletedListItemProps;
	const {
		bulleted_list_item: { color, rich_text: texts }
	} = props;
	const componentProvider = notionComponentProviderContext.get();
	const { marker } = bulletedListItemMarker.getMarker(props);
</script>

<div class={`notion-block notion-list notion-list-bulleted ${getColorCss(color)}`}>
	<li>
		<span class="notion-list-marker">{marker}</span>
		<div />
		<RichText props={texts} />
	</li>
	<slot />
</div>

<style>
	.notion-list-marker {
		display: inline-block;
	}

	.notion-list-numbered[data-notion-marker-format='romans'] > li > .notion-list-marker {
		width: 3em;
		margin-right: 0em;
	}
	.notion-list-numbered[data-notion-marker-format='romans'] > .notion-block {
		margin-left: 2.9em;
	}
	.notion-list-numbered .notion-list-marker::after {
		content: '.';
	}

	.notion-list-bulleted .notion-list-marker::after {
		content: '';
	}

	.notion-list-bulleted > li > .notion-list-marker {
		font-size: 1px;
		width: 26px;
		transform: scale(0.8);
		padding: 4px 0px;
	}

	.notion-list-numbered > li > .notion-list-marker {
		width: 26px;
	}

	.notion-list-marker {
		display: flex;
		justify-content: center;
		align-items: center;
		height: fit-content;
	}

	.notion-list > li {
		padding-top: 4px;
		padding-bottom: 4px;
		list-style-type: none;
		display: flex;
	}
</style>
