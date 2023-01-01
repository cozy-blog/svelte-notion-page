<script lang="ts">
	import type { EquationProps } from '$lib/types';
	import Katex from 'svelte-katex';

	export let props: EquationProps;
	const {
		equation: { expression }
	} = props;

	const options = {
		throwOnError: false,
		strict: false
	};
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
		integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="notion-block notion-equation notion-equation-block">
	<Katex>{expression}</Katex>
</div>
