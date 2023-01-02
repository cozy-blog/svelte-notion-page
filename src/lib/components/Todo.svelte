<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { TodoProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	import CheckBox from './CheckBox.svelte';
	export let props: TodoProps;

	const {
		to_do: { color, text: texts, checked }
	} = props;
</script>

<div class={`notion-block ${getColorCss(color)}`}>
	<div aria-checked={checked} class:notion-to-do-checked={checked} class="notion-to-do">
		<CheckBox {checked} />
		<p class="notion-paragraph notion-to-do-content">
			<RichText props={texts} />
		</p>
	</div>
	<slot />
</div>
