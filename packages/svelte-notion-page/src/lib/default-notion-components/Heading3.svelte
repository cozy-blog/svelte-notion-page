<script lang="ts">
	import type { Heading_3_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_3_Props;
	const {
		heading_3: { color, rich_text: texts, is_toggleable }
	} = props;
	export let depth: number;
</script>

<h3 class={`${getColorCss(color)} notion-block notion-h3`}>
	{#if is_toggleable}
		<details>
			<summary class="notion-h-content notion-h3-content">
				<RichText props={texts} />
			</summary>
			<slot />
		</details>
	{:else}
		<div class="notion-h-content notion-h3-content">
			<RichText props={texts} />
		</div>
	{/if}
</h3>

<style>
	summary::marker {
		font-size: 1rem;
	}

	.notion-h3:not(:last-child) {
		margin-bottom: 2px;
	}

	.notion-h3:not(:first-child) {
		margin-top: 1em;
	}

	.notion-h3-content {
		font-size: 1.25em;
	}
</style>