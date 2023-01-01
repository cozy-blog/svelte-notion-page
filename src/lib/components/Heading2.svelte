<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { Heading_2_Props } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	export let props: Heading_2_Props;
	const {
		heading_2: { color, text: texts, is_toggleable }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
</script>

{#if is_toggleable}
	<details class={`notion-toggle notion-toggle-h2 ${getColorCss(color)}`}>
		<summary>
			<h2 class="notion-h notion-toggle-summary-content">
				{#if texts.length !== 0}
					{#each texts as text}
						<svelte:component this={componentProvider.resolve(text.type)} props={text} />
					{/each}
				{:else}
					&nbsp
				{/if}
			</h2>
		</summary>
		<slot />
	</details>
{:else}
	<h2 class={`${getColorCss(color)} notion-h notion-h2`}>
		{#each texts as text}
			<svelte:component this={componentProvider.resolve(text.type)} props={text} />
		{/each}
	</h2>
{/if}