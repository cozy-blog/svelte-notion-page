<script lang="ts">
  import './notion.css'
	import { defaultProvider } from '../NotionComponentProvider';
	import {  notionComponentProviderContext } from '../context';
	import './notion.css';

	if (!notionComponentProviderContext.exist()) {
		notionComponentProviderContext.set(defaultProvider);
	}
</script>

<div class="notion">
  <slot/>
</div>