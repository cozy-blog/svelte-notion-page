<script lang="ts">
	import type { TableProps } from '$lib/types';
	export let props: TableProps;
	const {
		table: { has_column_header, has_row_header }
	} = props;
	export let depth: number;
	console.log(has_column_header);
</script>

<table class="notion-block notion-table">
	<tbody
		class="notion-table-content"
		class:has-column-header={has_column_header}
		class:has-row-header={has_row_header}
	>
		<slot />
	</tbody>
</table>

<style>
	.notion-table-content {
		width: 100%;
		overflow-x: visible;
		border-collapse: collapse;
		border-spacing: 0;
		font-size: 14px;
		border-spacing: 0;
		padding-bottom: 12px;
	}

	:global(.notion-table-content.has-column-header tr:first-child td) {
		background: var(--bg-color-1);
	}

	:global(.notion-table-content.has-row-header tr td:first-child) {
		background: var(--bg-color-1);
	}

	.notion-table {
		margin-top: 8px;
		margin-bottom: 4px;
	}
</style>
