<script lang="ts">
	import type { AudioProps } from '$lib/types';
	import RichText from './base/richtext/RichText.svelte';

	export let props: AudioProps;
	export let depth: number
	const {
		audio: { type, file, external, caption }
	} = props;
</script>

<div class="notion-block notion-audio">
	<div class="notion-audio-content">
		{#if type === 'file' && file != null}
			<!-- svelte-ignore a11y-media-has-caption -->
			<audio controls preload="none" src={file.url} />
		{:else if type === 'external' && external != null}
			unsupported embeded audio
		{:else}
			unsupported audio
		{/if}
	</div>
	{#if caption.length !== 0}
		<div class="notion-asset-caption">
			<RichText props={caption} />
		</div>
	{/if}
</div>
