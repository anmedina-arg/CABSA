import { Hero } from '@/sections/hero/hero';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroSection: Story = {};