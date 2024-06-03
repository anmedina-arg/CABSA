import type { Meta, StoryObj } from '@storybook/react';
import DropDownMenu from '@/components/dropDownMenu/dropDownMenu';
import { About } from '@/sections/about/about';

const meta = {
  title: 'Drop Down Menu',
  component: DropDownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof DropDownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;


export const DropDownMenuComponent: Story = {
  args: {
    title: 'structured notes',
    children: About()
  },
};