<script lang="ts">
	import type { QuoteProps } from "$lib/types";
	import { getColorCss } from "$lib/utils/getColorCss";
	import RichText from "./base/richtext/RichText.svelte";

  export let props: QuoteProps

  const {quote: {color, text: texts}} = props
</script>

<div class={`notion-block notion-quote ${getColorCss(color)}`}>
	<p class="notion-quote-content">
		<RichText props={texts} />
	</p>
</div>