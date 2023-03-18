<script lang="ts">
	import type { QuoteProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';

	export let props: QuoteProps;
	const {
		quote: { color, rich_text: texts }
	} = props;
</script>

<div class={`notion-block notion-quote ${getColorCss(color)}`}>
	<p class="notion-quote-content">
		<RichText props={texts} />
	</p>
</div>

<style>
	.notion-quote-content {
		display: block;
		word-break: break-word;
		border-left: 3px solid currentcolor;
		padding: 0.2em 0.9em;
		margin: 3px 0px 3px 1px;
		font-size: 1em;
	}
</style>
