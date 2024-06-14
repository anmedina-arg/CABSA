import CircleDecoratorHover from '@/components/decorators/circleDecoratorHover';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CircleDecoratorHover',
  component: CircleDecoratorHover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CircleDecoratorHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleWhitHover: Story = {};