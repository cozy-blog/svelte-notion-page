<article class="notion-body">
	<slot />
</article>

<style>
	.notion-body {
		width: 100%;
		max-width: var(--notion-max-width);
		margin-left: auto;
		margin-right: auto;
		display: flex;
		padding: 0px 4px;
		flex-direction: column;
		gap: 2px;
	}
</style>
