<script lang="ts">
	import { fade } from 'svelte/transition';
	import { focusAction } from 'svelte-legos';
	export let opened = true;
	export let urls: string[] = [];
	export let index: number;

	$: url = urls[index];
	const scaleOriginCenter = { x: 0.5, y: 0.5 };
	let cursorVisible = true;
	let cursorTimeout: ReturnType<typeof setTimeout>;
	let scale = 1;
	let scaleOrigin = scaleOriginCenter;

	const scaleActionOnEnter = (node: HTMLInputElement) => {
		const handleSetScale = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				if (node.value !== '') {
					scale = clampScale(+node.value / 100);
					if(scale < 1) {
						scaleOrigin = scaleOriginCenter

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
	/*
		1. image border-radius 주기
		2. scale
		3. scale-origin
		4. input으로 scale 바꾸기 handleDown으로 ..
		5. urls 받기..
	*/

	function clampScale(value: number) {
		return Math.max(0.5, Math.min(value, 2));
	}
</script>

<div class="notion-viewer-opener" on:dblclick={() => (opened = true)}>
	<img src={url} alt="asdf" />
</div>

{#if opened}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div
		tabindex="0"
		on:mousemove={handleHideCursorOnMouseStop}
		use:focusAction={opened}
		on:keydown={handleCloseOnEsc}
		transition:fade={{ duration: 200 }}
		class:hide-cursor={!cursorVisible}
		class="notion-viewer-container"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => (opened = false)} class="notion-viewer-overlay" />
		<img
			use:zoomInOutActionOnClick
			style="transform: scale({scale}); transform-origin: {scaleOrigin.x * 100}% {scaleOrigin.y *
				100}%;"
			class:hide-cursor={!cursorVisible}
			src={url}
			alt="asdf"
		/>

		<div class="tools">
			<input type="number" value={scale * 100} use:scaleActionOnEnter />
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
		cursor: pointer;
	}

	.tools {
		display: flex;
		position: absolute;
		bottom: 32px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
