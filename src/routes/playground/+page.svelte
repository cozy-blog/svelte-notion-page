<script lang="ts">
	import '../../lib/core/notion.css';
</script>

<div class="notion">
	<div class="notion-block notion-row">
		<div class="notion-column">
			<div class="notion-block">
				<p class="notion-paragraph">
					<span>
						문대승@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
					</span>
				</p>
			</div>
		</div>
		<div class="spacer" />
		<div class="column">
			<span> 문대승 </span>
		</div>
		<div class="spacer hidden" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		background-color: lightblue;
		padding: 100px;
	}

	.column {
		display: flex;
		flex-direction: column;
		background-color: rebeccapurple;
	}

	.row {
		display: grid;
		grid-template-columns: repeat(2, 1fr fit-content(0px));
	}

	.spacer {
		width: 10px;
	}
span {
		display: inline-block;
		word-break: break-all;
		word-wrap: break-word;
	}
	.hidden {
		display: none;
	}

	.font {
		font-size: 30px;
	}
</style>
