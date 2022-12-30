<script lang="ts">
	import type { Block, ColumnListProps } from '$lib/types';
	export let props: ColumnListProps;
	const columnCount = props.blocks?.length || 0;
</script>

<!-- notion-row로 column count 전달 -->
<div style={`--notion-column-count: ${columnCount}`} class="notion-block notion-row">
	<slot />
</div>
