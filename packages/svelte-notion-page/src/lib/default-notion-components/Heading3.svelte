<script lang="ts">
	import type { Heading_3_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_3_Props;
	const {
		heading_3: { color, rich_text: texts, is_toggleable }
	} = props;
	export let depth: number
</script>

{#if is_toggleable}
	<details class={`notion-toggle notion-toggle-h3 ${getColorCss(color)}`}>
		<summary>
			<h3 class="notion-h notion-toggle-summary-content">
				<RichText props={texts} />
			</h3>
		</summary>
		<slot />
	</details>
{:else}
	<h3 class={`${getColorCss(color)} notion-h notion-h3`}>
		<RichText props={texts} />
	</h3>
{/if}

<style>
	.notion-h {
		position: relative;
		display: inline-block;

		font-weight: 600;
		line-height: 1.3;
		padding: 3px 2px;

		max-width: 100%;
		white-space: pre-wrap;
		word-break: break-word;
	}

	.notion-toggle-h3 {
		margin-bottom: 2px;
	}

	.notion-h3 {
		margin-bottom: 2px;
		font-size: 1.25em;
		margin-top: 1em;
	}

	.notion-toggle-h3 {
		margin-top: 1em;
		margin-top: 18px;
	}

	.notion-toggle-h3 > summary > .notion-h {
		font-size: 1.25em;
	}
</style>
