<script lang="ts">
	export let src: string;
	export let alt: string = 'notion cover';
</script>

<div class="notion-cover-wrapper">
	<img {src} {alt} />
</div>

<style>
	.notion-cover-wrapper {
		width: 100%;
		height: 30vh;
		min-height: 30vh;
		max-height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 100%;
		height: 100%;
	}
</style>
