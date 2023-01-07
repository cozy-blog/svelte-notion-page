<script lang="ts">
	import type { ColumnProps } from "$lib/types";
  export let props: ColumnProps
</script>

<div class="notion-column">
  <slot/>
</div>
<div class="notion-column-spacer"/>