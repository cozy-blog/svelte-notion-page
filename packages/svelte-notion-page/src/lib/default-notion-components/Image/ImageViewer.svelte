<script lang="ts">
	import { fade } from 'svelte/transition';
	import { focusAction } from 'svelte-legos';
	import { onMount } from 'svelte';
	export let initialIndex: number;
	export let opened = true;
	export let urls: string[];

	$: imgIndex = initialIndex;
	$: [hasPrevious, hasNext] = [imgIndex > 0, imgIndex < urls.length - 1];
	const scaleOriginCenter = { x: 0.5, y: 0.5 };
	let url = urls[imgIndex];
	let cursorVisible = false;
	let cursorTimeout: ReturnType<typeof setTimeout>;
	let scale = 1;
	let scaleOrigin = scaleOriginCenter;

	const scaleActionOnEnter = (node: HTMLInputElement) => {
		const handleSetScale = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				if (node.value !== '') {
					scale = clampScale(Math.floor(+node.value) / 100);
					if (scale < 1) {
						scaleOrigin = scaleOriginCenter;
					}
				}
				node.value = `${scale * 100}`;
				node.blur();
			}
		};
		node.addEventListener('keydown', handleSetScale);
	};
	const zoomInOutActionOnClick = (node: HTMLElement) => {
		const handleZoomInOutOnClick = ({ clientX, clientY }: MouseEvent) => {
			if (scale === 1) {
				scale = 1.5;
				const { width, height, top, left } = node.getBoundingClientRect();
				const [relativeX, relativeY] = [clientX - left, clientY - top];
				scaleOrigin = { x: relativeX / width, y: relativeY / height };
			} else {
				scale = 1;
			}
		};
		node.addEventListener('click', handleZoomInOutOnClick);
	};
	const handleCloseOnEsc = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			opened = false;
		}
	};
	const handleHideCursorOnMouseStop = (e: MouseEvent) => {
		if (!cursorVisible) {
			cursorVisible = true;
		}
		clearTimeout(cursorTimeout);
		cursorTimeout = setTimeout(() => {
			cursorVisible = false;
		}, 3000);
	};

	function handleDownloadLoading() {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.responseType = 'blob';
		xhr.onload = function () {
			const blob = xhr.response;
			const link = document.createElement('a');
			link.href = window.URL.createObjectURL(blob);
			link.download = '';
			link.click();
			window.URL.revokeObjectURL(link.href);
		};
		xhr.send();
	}

	function clampScale(value: number) {
		return Math.max(0.5, Math.min(value, 2));
	}

	const handleZoomPlusClick = () => {
		let changedScale = scale + 0.5;
		if (changedScale >= 1.75) {
			scale = 2;
		} else if (changedScale >= 1.25) {
			scale = 1.5;
		} else if (changedScale >= 0.75) {
			scale = 1;
		}
	};
	const handleZoomMinusClick = () => {
		const changedScale = scale - 0.5;
		if (changedScale <= 0.75) {
			scale = 0.5;
		} else if (changedScale <= 1.25) {
			scale = 1;
		} else if (changedScale <= 1.75) {
			scale = 1.5;
		}
	};

	$: {
		[opened];
		onExitEffect();
	}
	$: {
		[scale];
		scaleUnderOneEffect();
	}
	function scaleUnderOneEffect() {
		if (scale < 1) {
			scaleOrigin = scaleOriginCenter;
		}
	}
	function onExitEffect() {
		if (!opened) {
			scaleOrigin = scaleOriginCenter;
			scale = 1;
			imgIndex = initialIndex;
		}
	}

	$: {
		[imgIndex];
		imgIndexChangeEffect();
	}
	function imgIndexChangeEffect() {
		scale = 1;
		url = urls[imgIndex];
	}
	onMount(() => {
		window.addEventListener('keydown', handleCloseOnEsc);
		return () => window.removeEventListener('keydown', handleCloseOnEsc);
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="notion-viewer-opener" on:click={() => (opened = true)}>
	<img src={url} alt="posting img" />
</div>

{#if opened}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div
		tabindex="0"
		on:mousemove={handleHideCursorOnMouseStop}
		use:focusAction={opened}
		transition:fade={{ duration: 200 }}
		class:hide-cursor={!cursorVisible}
		class="notion-viewer-container"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => (opened = false)} class="notion-viewer-overlay" />
		{#key url}
			<img
				use:zoomInOutActionOnClick
				style="transform: scale({scale}); transform-origin: {scaleOrigin.x * 100}% {scaleOrigin.y *
					100}%;"
				class:hide-cursor={!cursorVisible}
				src={url}
				alt="posting img"
			/>
		{/key}

		<div class="tools">
			<button on:click={() => (imgIndex -= 1)} disabled={!hasPrevious}>{'<'}</button>
			<button on:click={() => (imgIndex += 1)} disabled={!hasNext}>{'>'}</button>
			<button on:click={handleZoomMinusClick}>-</button>
			<input type="number" value={scale * 100} use:scaleActionOnEnter />
			<button on:click={handleZoomPlusClick}>+</button>
			<button on:click={handleDownloadLoading}>down</button>
			<button on:click={() => (opened = false)}>exit</button>
		</div>
	</div>
{/if}

<style>
	.hide-cursor {
		cursor: none !important;
	}
	.notion-viewer-opener {
		cursor: pointer;
	}

	.notion-viewer-container {
		display: flex;
		position: fixed;
		width: 100vw;
		height: 100vh;
		inset: 0;
		overflow: hidden;
		z-index: 999;
		justify-content: center;
		align-items: center;
		padding-top: 32px;
		padding-bottom: 32px;
		flex-direction: column;
	}

	@media screen and (min-width: 768px) {
		.notion-viewer-container {
			padding-left: 32px;
			padding-right: 32px;
		}
	}

	.notion-viewer-overlay {
		position: absolute;
		inset: 0;
		overflow: hidden;
		background-color: black;
		opacity: 0.8;
	}

	.notion-viewer-container > img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		position: relative;
		z-index: 0;
		pointer-events: auto;
		cursor: zoom-in;
		transition: transform 0.2s ease;
	}

	.notion-viewer-opener > img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		pointer-events: auto;
		cursor: default;
	}

	.tools {
		display: flex;
		position: absolute;
		bottom: 32px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
