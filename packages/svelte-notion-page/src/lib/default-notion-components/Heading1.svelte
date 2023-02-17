<script lang="ts">
	import type { Heading_1_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_1_Props;
	const {
		heading_1: { color, rich_text: texts, is_toggleable }
	} = props;
	export let depth: number;
	let open = false;
</script>

<h1 class={`${getColorCss(color)} notion-block notion-h1`}>
	{#if is_toggleable}
		<div class:notion-toggle-open={open} class="notion-h-content notion-h1-content notion-toggle">
			<button on:click={() => open = !open} class="notion-toggle-button" />
			<RichText props={texts} />
		</div>
		<div class="notion-toggle-child">
			<slot />
		</div>
	{:else}
		<div class="notion-h-content notion-h1-content">
			<RichText props={texts} />
		</div>
	{/if}
</h1>

<style>
	.notion-toggle {
		display: flex;
		align-items: center;
	}

	.notion-toggle-child {
		display: contents;
	}
	.notion-toggle-open .notion-toggle-child {
		display: contents;
	}

	.notion-toggle-h1 {
		margin-bottom: 2px;
	}

	summary::marker {
		font-size: 1rem;
	}

	.notion-h1:not(:last-child) {
		margin-bottom: 2px;
	}

	.notion-h1:not(:first-child) {
		margin-top: 1.08em;
	}

	.notion-h1-content {
		font-size: 1.875rem;
	}
</style>
