<script lang="ts">
	import type { ToggleProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: ToggleProps;
	const {
		toggle: { color, rich_text: texts }
	} = props;
	export let depth: number
</script>

<details class={`notion-block notion-toggle ${getColorCss(color)}`}>
	<summary class="notion-toggle-content">
		<p>
			<RichText props={texts} />
		</p>
	</summary>
	<slot />
</details>

<style>
	.notion-toggle {
		--notion-toggle-padding-left: 9px;
		padding-left: var(--notion-toggle-padding-left);
	}

	p {
		display: inline-flex;
		padding: 3px 2px;
	}

	/* :global(.notion-toggle > .notion-block) {
		margin-left: calc(var(--notion-indent) - var(--notion-toggle-padding-left));
	} */
</style>
