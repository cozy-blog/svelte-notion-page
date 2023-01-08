<script lang="ts">
	import type { ToggleProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: ToggleProps;
	const {
		toggle: { color, rich_text: texts }
	} = props;
</script>

<details class={`notion-block notion-toggle ${getColorCss(color)}`}>
	<summary>
		<p class="notion-paragraph notion-toggle-summary-content">
			<RichText props={texts} />
		</p>
	</summary>
	<slot />
</details>
