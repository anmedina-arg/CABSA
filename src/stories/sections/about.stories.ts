import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import mainLogo from '../assets/main-logo.png';
import { ContactForm } from '@/components/contactForm/contactForm';
import { About } from '@/sections/about/about';

const meta = {
  title: 'Sections/About',
  component: About,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutSection: Story = {};