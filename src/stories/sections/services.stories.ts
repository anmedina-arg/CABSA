import { Services } from '@/sections/services/services';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Sections/Services',
  component: Services,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ServicesSection: Story = {};