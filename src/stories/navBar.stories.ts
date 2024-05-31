import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Navbar } from '@/components/navbar/navbar';
import { itemsNavbar } from '@/components/navbar/navbar';
import mainLogo from '../assets/main-logo.png';

const meta = {
  title: 'Example/NavBar',
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
    logo: mainLogo
  }
};