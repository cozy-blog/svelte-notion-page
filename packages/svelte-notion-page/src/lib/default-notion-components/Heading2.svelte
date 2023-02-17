<script lang="ts">
	import type { Heading_2_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_2_Props;
	const {
		heading_2: { color, rich_text: texts, is_toggleable }
	} = props;
	export let depth: number;
</script>

<h2 class={`${getColorCss(color)} notion-block notion-h2`}>
	{#if is_toggleable}
		<details>
			<summary class="notion-h-content notion-h2-content">
				<RichText props={texts} />
			</summary>
			<slot />
		</details>
	{:else}
		<div class="notion-h-content notion-h2-content">
			<RichText props={texts} />
		</div>
	{/if}
</h2>

<style>
	summary::marker {
		font-size: 1rem;
	}

	.notion-h2:not(:last-child) {
		margin-bottom: 2px;
	}

	.notion-h2:not(:first-child) {
		margin-top: 1.08em;
	}

	.notion-h2-content {
		font-size: 1.5rem;
	}
</style>
