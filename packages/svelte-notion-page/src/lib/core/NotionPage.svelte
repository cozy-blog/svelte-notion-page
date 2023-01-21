<script lang="ts">
	import type { Block, ContextedBlock, Content, BlockContext } from '../types';
	import NotionBlocks from './NotionBlocks.svelte';
	import { setContext } from 'svelte';
	import { defaultProvider } from './NotionComponentProvider';
	import { NOTION_PAGE_INFO_KEY, notionComponentProviderContext } from './context';
	import './notion.css';

	export let content: Content;

	if (!notionComponentProviderContext.exist()) {
		notionComponentProviderContext.set(defaultProvider);
	}

	const componentProvider = notionComponentProviderContext.get();

	setContext(NOTION_PAGE_INFO_KEY, {
		pageId: content.id
	});

	function resolveToContextedBlock(
		block: Block,
		previous: ContextedBlock | null = null,
		parent: ContextedBlock | null = null
	): ContextedBlock {
		const { blocks: children } = block;
		const thisBlock: ContextedBlock = {
			...block,
			blocks: [],
			context: { previous, parent }
		};
		if (children == null) return thisBlock;

		const childContextBlocks = [] as ContextedBlock[];

		let previousChildBlock: ContextedBlock | null = null;

		children.forEach((child, i) => {
			const contextChildBlock = resolveToContextedBlock(child, previousChildBlock, thisBlock);
			childContextBlocks[i] = contextChildBlock;
			previousChildBlock = contextChildBlock;
		});

		thisBlock.blocks = childContextBlocks;

		return thisBlock;
	}

	function resolveToContextedBlocks(blocks: Block[]) {
		const contextedBlocks = blocks.map((block) => resolveToContextedBlock(block, null, null));
		contextedBlocks.forEach((current, i) => {
			if (i !== 0) {
				current.context.previous = contextedBlocks[i - 1];
			}
		});
		return contextedBlocks;
	}
</script>

<svelte:component this={componentProvider.resolve('theme')}>
	<svelte:component this={componentProvider.resolve('pageLayout')} {content}>
		<NotionBlocks blocks={resolveToContextedBlocks(content.blocks)} />
	</svelte:component>
</svelte:component>

<style>
</style>
