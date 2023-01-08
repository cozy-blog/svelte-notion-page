<script lang="ts">
	import type { Heading_2_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_2_Props
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
