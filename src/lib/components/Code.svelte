<script lang="ts">
	import type { CodeProps } from '$lib/types';
	import CopyIcon from './icons/copy.svg';
	import copyToClipboard from 'clipboard-copy';
	import { highlight, languages } from 'prismjs';
	import 'prismjs/themes/prism.css';
	import RichText from './base/richtext/RichText.svelte';

	export let props: CodeProps;

	const {
		code: { caption, text: texts, language }
	} = props;

	let copied = false;
	let codeEl: HTMLElement;
	$: content = texts.map(({ plain_text }) => plain_text).join('');
	$: {
		if (typeof window != 'undefined') {
		}
	}

	let copyTimeout: NodeJS.Timeout | null = null;
	const handleCopy = () => {
		copyToClipboard(content);
		if (copyTimeout != null) {
			clearTimeout(copyTimeout);
			copyTimeout = null;
		}

		copyTimeout = setTimeout(() => (copied = true), 1200);
	};
</script>

<div class="notion-block notion-code">
	<div class="notion-code-content">
		<div class="notion-code-copy">
			<button class="notion-code-copy-button" on:click={handleCopy}>
				<img src={CopyIcon} alt="copy" />
			</button>
			{#if copied}
				<div class="notion-code-copy-tooltip">
					<div>{'Copied'}</div>
				</div>
			{/if}
		</div>
		<code bind:this={codeEl}>
			{@html highlight(content, languages[language] || {}, language)}
		</code>
	</div>
	<div class="notion-asset-caption">
		<RichText props={caption} />
	</div>
</div>