import { Contact } from '@/sections/contact/contact';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Sections/Contact',
  component: Contact,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactSection: Story = {};