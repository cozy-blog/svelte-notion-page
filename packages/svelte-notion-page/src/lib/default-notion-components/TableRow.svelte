<script lang="ts">
	import type { TableRowProps } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';
	export let props: TableRowProps;
	const {
		table_row: { cells }
	} = props;
	export let depth: number;
</script>

<div class="notion-table-row">
	<div class="notion-table-row-content">
		<slot />
	</div>
</div>

<style>
	.notion-table-row {
	}

	.notion-table-content {
	}
</style>
