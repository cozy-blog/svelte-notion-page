<script lang="ts">
	import type { ToggleProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: ToggleProps;
	const {
		toggle: { color, rich_text: texts }
	} = props;
	export let depth: number;
	let open = false;
</script>

<div
	class:notion-toggle-open={open}
	class={`${getColorCss(color)} notion-block notion-h1 notion-toggle`}
>
	<div class="notion-toggle-content">
		<button on:click={() => (open = !open)} class="notion-toggle-button">
			<div class:notion-toggle-button-arrow-opened={open} class="notion-toggle-button-arrow" />
		</button>
		<p>
			<RichText props={texts} />
		</p>
	</div>
	<slot/>
</div>

<style>
	.notion-toggle-content > p {
		padding: 3px 2px;
	}
</style>
