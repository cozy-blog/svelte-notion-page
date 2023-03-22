<script lang="ts">
	import { Notion } from '$lib/components';
	import { json } from './notion-export';
	const { blocks } = json as any;
</script>

<Notion>
	<Notion.Body>
		<Notion.Blocks blocks={[...blocks, ...blocks]} />
	</Notion.Body>
</Notion>
