<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { TodoProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
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
			<RichText props={texts} />
		</p>
	</div>
	<slot />
</div>
