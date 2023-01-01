<script lang="ts">
	import { notionComponentProvierContext } from '$lib/core/context';
	import type { CalloutProps } from '$lib/types';
	import { getColorCss } from '$lib/utils/getColorCss';
	export let props: CalloutProps;
	const {
		callout: { color, text: texts, icon }
	} = props;
	const componentProvider = notionComponentProvierContext.get();
</script>

<div class={`notion-block notion-callout ${getColorCss(color)}`}>
	<div class="notion-callout-content">
		<div class="notion-page-icon-inline">
			{#if icon.type === 'emoji' && icon.emoji != null}
				<span>{icon.emoji}</span>
			{:else if icon.type === 'external' && icon.external != null}
				<img alt="callout-icon" src={icon.external.url} />
			{:else if icon.type === 'file' && icon.file != null}
				<img alt="callout-icon" src={icon.file.url} />
			{:else}
				<span />
			{/if}
		</div>
		<p class="notion-callout-text">
			{#if texts.length !== 0}
				{#each texts as text}
					<svelte:component this={componentProvider.resolve(text.type)} props={text} />
				{/each}
			{:else}
				&nbsp
			{/if}
		</p>
	</div>

	<slot />
</div>
