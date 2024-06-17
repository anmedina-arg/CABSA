import type { Meta, StoryObj } from '@storybook/react';
import CircleDecorator from '../components/decorators/circleDecorator';

const meta = {
  title: 'CircleDecorator',
  component: CircleDecorator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CircleDecorator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circle: Story = {};