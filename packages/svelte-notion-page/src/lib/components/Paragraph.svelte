<script lang="ts">
	import type { ParagraphProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	import RichText from './base/richtext/RichText.svelte';
	export let props: ParagraphProps;
	const {
		paragraph: { color, rich_text: texts }
	} = props;
</script>

<div class={`notion-block ${getColorCss(color)}`}>
	<p class="notion-paragraph">
		<RichText props={texts} />
	</p>
	<slot />
</div>
