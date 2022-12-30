<script lang="ts">
	import Cover from '$lib/components/Cover.svelte';
	import Header from '$lib/components/Header.svelte';
	import PageIcon from '$lib/components/PageIcon.svelte';
	import type { Content } from '$lib/types';
	import { notionThemeContext } from '../core/context';
	export let content: Content;
</script>

<div class="notion notion-app">
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
         notion-page-${false ? 'has' : 'no'}-cover 
         notion-page-${false ? 'has' : 'no'}-icon 
         notion-page-${false ? 'has-text' : 'has-image'}-icon 
       `}
				class:notion-full-width={true}
				class:notion-small-text={false}
			>
				{#if false}
					<PageIcon />
				{/if}

				<div
					class="notion-page-content"
					class:notion-page-content-has-aside={false}
					class:notion-page-content-has-toc={false}
				>
					<article class="notion-page-content-inner">
						<slot />
					</article>

					<!-- {hasAside && (
                          <PageAside
                            toc={toc}
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                            hasToc={hasToc}
                            hasAside={hasAside}
                            pageAside={pageAside}
                          />
                        )} -->
				</div>
			</main>
		</div>
	</div>
</div>
