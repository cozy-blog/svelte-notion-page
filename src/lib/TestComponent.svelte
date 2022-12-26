<script lang="ts">
	import type { Block } from '$lib/types';

	export let block: Block;
</script>

<div>
	{block.type}
	<div>
		<slot />
	</div>
</div>
