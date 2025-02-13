import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '@/components/navbar/navbar';
import { itemsNavbar } from '@/components/navbar/navbar';

const meta = {
  title: 'NavBar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBar: Story = {
  args: {
    items: itemsNavbar,
  }
};