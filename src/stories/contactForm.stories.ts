import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import mainLogo from '../assets/main-logo.png';
import { ContactForm } from '@/components/contactForm/contactForm';

const meta = {
  title: 'Formulario',
  component: ContactForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Formulario: Story = {};