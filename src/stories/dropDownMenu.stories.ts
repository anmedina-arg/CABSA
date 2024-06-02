import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Navbar } from '@/components/navbar/navbar';
import { itemsNavbar } from '@/components/navbar/navbar';
import mainLogo from '../assets/main-logo.png';
import DropDownMenu, { IconDD } from '@/components/dropDownMenu/dropDownMenu';

const meta = {
  title: 'Drop Down Menu',
  component: DropDownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropDownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;


export const DropDownMenuComponent: Story = {
  args: {
    children: 'prueba',
    title: 'structured notes',
  }
};