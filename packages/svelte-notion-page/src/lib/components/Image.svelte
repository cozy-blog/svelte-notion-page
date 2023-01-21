<script lang="ts">
	import type { ImageProps } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';

	export let props: ImageProps;
	const {
		image: { type, file, external, caption }
	} = props;
</script>

<div class="notion-block notion-image">
	<div class="notion-image-content">
		{#if type === 'file' && file != null}
			<img alt="file" src={file.url} />
		{:else if type === 'external' && external != null}
			<img alt="external" src={external.url} />
		{:else}
			unsupported image
		{/if}
		{#if caption.length !== 0}
			<div class="notion-asset-caption">
				<RichText props={caption} />
			</div>
		{/if}
	</div>
</div>

<style>
	.notion-image {
		margin-top: 4px;
		margin-bottom: 4px;
	}

	.notion-image-content {
		display: flex;
		flex-direction: column;
	}

	.notion-image-content img {
		width: 100%;
		border-radius: 2px;
		margin: 0 auto;
	}
</style>
