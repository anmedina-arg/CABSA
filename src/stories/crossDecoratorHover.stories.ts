import CrossDecoratorHover from '@/components/decorators/crossDecoratorHover';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CrossDecoratorHover',
  component: CrossDecoratorHover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CrossDecoratorHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CrossWithHover: Story = {};