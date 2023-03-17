<script lang="ts">
	import type { BulletedListItemProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { bulletedListItemMarker } from '$lib/utils/listItemMarker';
	import RichText from './base/richtext/RichText.svelte';

	export let props: BulletedListItemProps;
	export let depth: number;

	const {
		bulleted_list_item: { color, rich_text: texts }
	} = props;
	const { marker } = bulletedListItemMarker.getMarker(props);
</script>

<div class={`notion-block notion-list-bulleted ${getColorCss(color)}`}>
	<li class="notion-list-bulleted-content">
		<span class="notion-list-marker">{marker}</span>
		<RichText props={texts} />
	</li>
	<slot />
</div>

<style>
	.notion-list-bulleted-content {
		display: flex;
		align-items: center;
		padding-left: 2px;
		padding-top: 3px;
		padding-bottom: 3px;
		list-style-type: none;
	}

	.notion-list-marker {
		user-select: none;
		width: 24px;
		margin-right: 2px;
		line-height: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: Arial;
		font-size: 1.5em;
	}
</style>
