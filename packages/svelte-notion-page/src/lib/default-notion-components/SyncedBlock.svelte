<script lang="ts">
	import type {  SyncedBlock } from '$lib/types';
	export let props: SyncedBlock;
</script>

<div class="notion-synced-block">
  <div class="notion-synced-block-content">

  </div>
	<slot />
</div>

<style>
  .notion-synced-block-content {

  }

</style>