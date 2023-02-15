<script lang="ts">
	import type { TableProps } from '$lib/types';
	export let props: TableProps;
	const {
		table: {}
	} = props;
	export let depth: number;
</script>

<div class="notion-block notion-table">
	<div class="notion-table-content">
		<!--alsdf-->
	</div>
	<slot />
</div>

<style>
	.notion-table {
	}

	.notion-table-content {
	}
</style>
