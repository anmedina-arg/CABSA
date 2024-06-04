import { Footer } from '@/components/footer/footer';
import type { Meta, StoryObj } from '@storybook/react';
import { footerItems } from '@/components/footer/footer';

const meta = {
  title: 'Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterComponent: Story = {
  args: {
    footerItems: footerItems
  }
};