<script lang="ts">
	import type { ImageProps } from '$lib/types';
	import RichText from '../base/richtext/RichText.svelte';
	import ImageViewer from './ImageViewer.svelte';

	export let props: ImageProps;
	const { image } = props;
	const { type, caption } = image;
	export let convertUrl: (url: string) => string = (url) => url;
	let opened = true;
	const { url } =
		type === 'file' ? image.file : type === 'external' ? image.external : { url: null };
	const urls = url ? [convertUrl(url)] : [];
	//lazy하게 계산하자 그때마다..
	$: {
		[opened];
		getUrlsEffect();
	}

	function getUrlsEffect() {
		if (!opened) return;
		if (!url) return;
		///
	}
</script>

<div class="notion-block notion-image">
	<div class="notion-image-content">
		{#if url}
			<ImageViewer bind:opened index={urls.findIndex((data) => data === url)} {urls} />
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
