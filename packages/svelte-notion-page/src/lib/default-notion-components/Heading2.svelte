<script lang="ts">
	import type { Heading_2_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_2_Props;
	const {
		heading_2: { color, rich_text: texts, is_toggleable }
	} = props;
</script>

{#if is_toggleable}
	<details class={`notion-toggle notion-toggle-h2 ${getColorCss(color)}`}>
		<summary>
			<h2 class="notion-h notion-toggle-summary-content">
				<RichText props={texts} />
			</h2>
		</summary>
		<slot />
	</details>
{:else}
	<h2 class={`${getColorCss(color)} notion-h notion-h2`}>
		<RichText props={texts} />
	</h2>
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

	.notion-toggle-h2 {
		margin-bottom: 2px;
	}

	.notion-h2 {
		margin-bottom: 2px;
		font-size: 1.5em;
		margin-top: 1.1em;
	}

	.notion-toggle-h2 {
		margin-top: 24.5px;
	}

	.notion-toggle-h2 > summary > .notion-h {
		font-size: 1.5em;
	}
</style>
