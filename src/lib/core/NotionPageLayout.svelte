<script lang="ts">
	import Cover from '$lib/components/Cover.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageIcon from '$lib/components/PageIcon.svelte';
	import type { Content } from '$lib/types';
	import 'notion.css';

	export let content: Content;
	export let theme: Record<string, string>;
	$: themeStyle = Object.entries(theme).reduce(
		(acc, [key, value]) => acc + `${key}: ${value};`,
		''
	);
</script>

<div class="notion notion-app" style={themeStyle}>
	<div class="notion-viewport" />
	<div class="notion-frame">
		{#if false}
			<Header />
		{/if}
		<div class="notion-page-scroller">
			{#if false}
				<div class="notion-page-cover-wrapper">
					<Cover />
				</div>
			{/if}
			<main
				class={`
         notion-page-${true ? 'has' : 'no'}-cover 
         notion-page-${true ? 'has' : 'no'}-icon 
         notion-page-${true ? 'has-text' : 'has-image'}-icon 
         ${true ? 'notion-full-width' : ''}
         ${true ? 'notion-small-text' : ''}
       `}
			>
				{#if false}
					<PageIcon />
				{/if}
        <!-- {pageHeader} -->
        <h1 class="notion-title">
          TITLE


        </h1>

			</main>
		</div>
	</div>
</div>
