<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { Heading_3_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: Heading_3_Props;
	const {
		heading_3: { color, text: texts, is_toggleable }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
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
