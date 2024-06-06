import CrossDecorator from '@/components/decorators/crossDecorator';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CrossDecorator',
  component: CrossDecorator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CrossDecorator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cross: Story = {};