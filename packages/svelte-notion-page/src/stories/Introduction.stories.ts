/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/svelte';
import Example from './Example.svelte';

const meta = {
	title: 'Introduction',
	component: Example as any
} satisfies Meta<Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Introduction: Story = {
	args: {},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};