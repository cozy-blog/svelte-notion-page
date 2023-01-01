<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { Heading_1_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_1_Props;
	const {
		heading_1: { color, text: texts, is_toggleable }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
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
