<script lang="ts">
	import type { ImageProps, VideoProps } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';
	import Youtube from 'svelte-youtube-embed';
	import { getYoutubeId } from '$lib/utils/getYoutubeId';

	export let props: VideoProps;
	const {
		video: { type, file, external, caption }
	} = props;
</script>

<div class="notion-block notion-video">
	<div class="notion-video-content">
		{#if type === 'file' && file != null}
			<!-- svelte-ignore a11y-media-has-caption -->
			<video playsInline controls preload="metadata" src={file.url} />
		{:else if type === 'external' && external != null}
			<!-- svelte-ignore a11y-media-has-caption -->
			{@const youtubeId = getYoutubeId(external.url)}

			{#if youtubeId}
				<Youtube id={youtubeId} />
			{:else}
				unsupported embeded video
			{/if}
		{:else}
			unsupported video
		{/if}
	</div>
	{#if caption.length !== 0}
		<div class="notion-asset-caption">
			<RichText props={caption} />
		</div>
	{/if}
</div>

<style>
	.notion-video {
		margin-top: 2px;
		margin-bottom: 2px;
	}

	.notion-video-content {
		display: flex;
		flex-direction: column;
	}

	.notion-video-content video {
		width: 100%;
		border-radius: 2px;
		margin: 0 auto;
	}
</style>
