import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    variant: 'contained',
    children: 'Secondary Button',
  },
};

export const Outlined: Story = {
  args: {
    color: 'primary',
    variant: 'outlined',
    children: 'Outlined Button',
  },
};

export const Text: Story = {
  args: {
    color: 'primary',
    variant: 'text',
    children: 'Text Button',
  },
};
