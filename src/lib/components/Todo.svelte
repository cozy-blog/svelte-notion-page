<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { TodoProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	export let props: TodoProps;

	const {
		to_do: { color, text: texts, checked }
	} = props;

	const componentProvider = notionComponentProvierContext.get();
</script>

<div class={`notion-block ${getColorCss(color)}`}>
	<div aria-checked={checked} class:notion-to-do-checked={checked} class="notion-to-do">
		<svelte:component this={componentProvider.resolve('checkbox')} {checked} />
		<p class="notion-paragraph notion-to-do-content">
			{#if texts.length !== 0}
				{#each texts as text}
					<svelte:component this={componentProvider.resolve(text.type)} props={text} />
				{/each}
			{:else}
				&nbsp
			{/if}
		</p>
	</div>
	<slot />
</div>
