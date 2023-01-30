<script lang="ts">
	import type { Heading_1_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_1_Props;
	const {
		heading_1: { color, rich_text: texts, is_toggleable }
	} = props;
	export let depth: number
</script>

{#if is_toggleable}
	<details class={`notion-toggle notion-toggle-h1 ${getColorCss(color)}`}>
		<summary>
			<h1 class="notion-h notion-toggle-summary-content">
				<RichText props={texts} />
			</h1>
		</summary>
		<slot />
	</details>
{:else}
	<h1 class={`${getColorCss(color)} notion-h notion-h1`}>
		<RichText props={texts} />
	</h1>
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

	.notion-toggle-h1 {
		margin-bottom: 2px;
	}

	.notion-h1 {
		margin-bottom: 2px;
		font-size: 1.875em;
		margin-top: 1.08em;
	}

	.notion-toggle-h1 {
		margin-top: 32px;
	}

	.notion-toggle-h1 > summary > .notion-h {
		font-size: 1.875em;
	}
</style>
