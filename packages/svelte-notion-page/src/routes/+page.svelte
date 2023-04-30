<script lang="ts">
	import { Notion } from '$lib/components';
	import { json } from './notion-export';
	const { blocks } = json as any;
</script>

<!-- <Notion>
	<Notion.Body>
		<Notion.Blocks blocks={[...blocks, ...blocks]} />
	</Notion.Body>
</Notion> -->

<div class="viewer" />

<style>
	.viewer {
		margin-top: -3px;
		margin-right: 3px;
		position: fixed !important;
		width: 100vw;
		height: 100vh;
		background-color: green;
	}
</style>
