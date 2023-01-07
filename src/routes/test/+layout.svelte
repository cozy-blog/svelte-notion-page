<header id="test-header">
	<nav>
		<ul>
			<li><a href="/test/1_paragraph">1. paragraph</a></li>
			<li><a href="/test/2_column_list">2. column list</a></li>
			<li><a href="/test/3_numbered_list">3. numbered list</a></li>
			<li><a href="/test/4_bulleted_list">4. bulleted list</a></li>
			<li><a href="/test/5_callout">5. callout</a></li>
			<li><a href="/test/6_code">6. code</a></li>
			<li><a href="/test/7_equation">7. equation</a></li>
			<li><a href="/test/8_quote">8. quote</a></li>
			<li><a href="/test/9_heading_1">9. heading 1</a></li>
			<li><a href="/test/10_heading_2">10. heading 2</a></li>
			<li><a href="/test/11_heading_3">11. heading 3</a></li>
			<li><a href="/test/12_divider">12. divider </a></li>
			<li><a href="/test/13_todo">13. todo</a></li>
			<li><a href="/test/14_toggle">14. toggle</a></li>
		</ul>
	</nav>
</header>
<slot />

<style>
	header {
		z-index: 9999;
		position: fixed;
		top: 0;
		width: 100%;
	}
	li {
		list-style-type: none;
	}
	nav {
		background-color: lightgreen;
	}
	nav ul {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-around;
		height: 100px;
		gap: 10px;
		align-items: center;
	}
</style>
