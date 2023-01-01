<script lang="ts">
	import type { ToggleProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import { notionComponentProvierContext } from '$lib/core/context';
	import RichText from './base/richtext/RichText.svelte';
	export let props: ToggleProps;
	const {
		toggle: { color, text: texts }
	} = props;

	let open = false;
	const componentProvider = notionComponentProvierContext.get();
</script>

<details open={false} class={`notion-block notion-toggle ${getColorCss(color)}`}>
	<summary>
		<p class="notion-paragraph notion-toggle-summary-content">
			<RichText props={texts} />
		</p>
	</summary>
	<slot />
</details>
