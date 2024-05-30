import Anchor from '@/components/anchor/anchor';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Anchor',
  component: Anchor,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnchorButton: Story = {
  args: {
    label: 'contact us',
    to: '/'
  }
};