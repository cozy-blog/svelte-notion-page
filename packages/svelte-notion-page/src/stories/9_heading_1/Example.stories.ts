/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/svelte';
import Example from './Example.svelte';

const meta = {
	title: 'Example/9. Heading 1',
	component: Example as any
} satisfies Meta<Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
	args: {},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};

export const Mobile: Story = {
	args: {},
	parameters: {
		viewport: {
			defaultViewport: 'mobile'
		}
	}
};