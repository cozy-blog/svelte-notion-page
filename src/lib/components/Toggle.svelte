<script lang="ts">
	import type { ToggleProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { notionComponentProvierContext } from '$lib/core/context';
	export let props: ToggleProps;
	const {
		toggle: { color, text: texts }
	} = props;

	let open = false;
	const componentProvider = notionComponentProvierContext.get();
</script>

<details open={false} class={`notion-block notion-toggle ${getColorCss(color)}`}>
	<summary>
		<p class="notion-paragraph">
			{#if texts.length !== 0}
				{#each texts as text}
					<svelte:component this={componentProvider.resolve(text.type)} props={text} />
				{/each}
			{:else}
				&nbsp
			{/if}
		</p>
	</summary>
	<slot />
</details>
