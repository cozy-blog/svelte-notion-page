<script lang="ts">
	import type { Block, ContextedBlock, Content, BlockContext } from '../types';
	import NotionBlocks from './NotionBlocks.svelte';
	import { setContext } from 'svelte';
	import { defaultProvider } from './NotionComponentProvider';
	import { NOTION_PAGE_INFO_KEY, notionComponentProvierContext } from './context';
	import './notion.css';

	export let content: Content;

	if (!notionComponentProvierContext.exist()) {
		notionComponentProvierContext.set(defaultProvider);
	}

	const componentProvider = notionComponentProvierContext.get();

	setContext(NOTION_PAGE_INFO_KEY, {
		pageId: content.id
	});

	function resovleToContextedBlock(
		block: Block,
		previous: ContextedBlock | null = null,
		parent: ContextedBlock | null = null
	): ContextedBlock {
		const { blocks: children } = block;
		const thisBlock: ContextedBlock = {
			...block,
			blocks: undefined,
			context: { previous, parent }
		};
		if (children == null) return thisBlock;

		const childContextBlocks = [] as ContextedBlock[];

		let previousChildBlock: ContextedBlock | null = null;

		children.forEach((child, i) => {
			const contextChildBlock = resovleToContextedBlock(child, previousChildBlock, thisBlock);
			childContextBlocks[i] = contextChildBlock;
			previousChildBlock = contextChildBlock;
		});

		thisBlock.blocks = childContextBlocks;

		return thisBlock;
	}
</script>

<svelte:component this={componentProvider.resolve('theme')}>
	<svelte:component this={componentProvider.resolve('pageLayout')} {content}>
		<NotionBlocks
			blocks={content.blocks.map((block) => resovleToContextedBlock(block, null, null))}
		/>
	</svelte:component>
</svelte:component>
