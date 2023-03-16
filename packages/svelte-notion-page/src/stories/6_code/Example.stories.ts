/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/svelte';
import Example from './Example.svelte';
import { json } from './notion-export';
import { getCodeExampleJson } from './getCodeExampleJson';
import { java, javascript, dart, kotlin, typescript } from './support-code-examples';

const meta = {
	title: 'Example/6. Code',
	component: Example as any
} satisfies Meta<Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
	args: {
		cover: 'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk.jpg',
		content: json
	},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};

export const Mobile: Story = {
	args: {
		cover: 'https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk.jpg',
		content: json
	},
	parameters: {
		viewport: {
			defaultViewport: 'mobile'
		}
	}
};

export const Dart: Story = {
	args: {
		title: 'Dart',
		content: getCodeExampleJson(dart, 'dart')
	}
};

export const Java: Story = {
	args: {
		title: 'Dart',
		content: getCodeExampleJson(java, 'dart')
	}
};
