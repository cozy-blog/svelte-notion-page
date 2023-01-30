<script lang="ts">
	import type { CodeProps } from '$lib/types';
	import CopyIcon from './icons/copy.svg';
	import copyToClipboard from 'clipboard-copy';
	import prismjs from 'prismjs';
	import 'prismjs/themes/prism.css';
	import RichText from './base/richtext/RichText.svelte';

	export let props: CodeProps;
	export let depth: number

	const {
		code: { caption, rich_text: texts, language }
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
			{@html prismjs.highlight(content, prismjs.languages[language] || {}, language)}
		</code>
	</div>
	{#if caption.length !== 0}
		<div class="notion-asset-caption">
			<RichText props={caption} />
		</div>
	{/if}
</div>

<style>
	.notion-code {
		position: relative;
		font-size: 85%;
	}

	.notion-code code {
		white-space: pre-wrap !important;
	}

	.notion-code-content {
		tab-size: 2;
		padding: 2.5em;
		background: var(--bg-color-1);
		border-radius: 3px;
		display: block;
		box-sizing: border-box;
		overflow: auto;
		font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace;
	}

	.notion-code-copy {
		position: absolute;
		top: 1em;
		right: 1em;
		user-select: none;
		z-index: 9;
		transition: opacity 0.2s cubic-bezier(0.3, 0, 0.5, 1);
	}

	.notion-code-copy-button {
		display: inline-block;
		padding: 0.6em;
		font-size: 1.25em;
		line-height: 1em;
		cursor: pointer;

		transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1),
			color 0.2s cubic-bezier(0.3, 0, 0.5, 1), border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
		box-shadow: 0 1px 0 rgba(27, 31, 36, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.25);
		background-color: #f6f8fa;

		color: #24292f;
		border: 1px solid rgba(27, 31, 36, 0.15);
		border-radius: 6px;
	}

	.notion-code-copy-button:hover {
		background-color: #f3f4f6;
		border-color: rgba(27, 31, 36, 0.15);
		transition-duration: 0.1s;
	}

	.notion-code-copy-button:active {
		background: hsla(220, 14%, 93%, 1);
		border-color: rgba(27, 31, 36, 0.15);
		transition: none;
	}

	.notion-code .notion-code-copy {
		opacity: 0;
	}

	.notion-code:hover .notion-code-copy {
		opacity: 1;
	}

	.notion-code-copy-button svg {
		display: block;
	}

	.notion-code-copy-tooltip {
		pointer-events: none;
		position: absolute;
		bottom: -38px;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		z-index: 99;
		font-size: 14px;
	}

	.notion-code-copy-tooltip > div {
		padding: 6px 8px;
		background: #222;
		color: #fff;
		border-radius: 6px;
	}
</style>
