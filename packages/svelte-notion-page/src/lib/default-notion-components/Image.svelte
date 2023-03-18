<script lang="ts">
	import type { ImageProps } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';

	export let props: ImageProps;
	const { image } = props;
	const { type, caption } = image;

	const { url } =
		type === 'file' ? image.file : type === 'external' ? image.external : { url: null };
</script>

<div class="notion-block notion-image">
	<div class="notion-image-content">
		{#if url}
			<img alt={type} src={url} />
		{:else}
			unsupported type: ${type}
		{/if}
	</div>
	{#if caption.length !== 0}
		<div class="notion-asset-caption">
			<RichText props={caption} />
		</div>
	{/if}
</div>

<style>
	.notion-image:not(:last-child) {
		margin-bottom: 4px;
	}

	.notion-image:not(:first-child) {
		margin-top: 4px;
	}

	.notion-image-content {
		display: flex;
		flex-direction: column;
	}

	.notion-image-content img {
		width: 100%;
		margin: 0 auto;
    object-fit: contain;
	}
</style>
