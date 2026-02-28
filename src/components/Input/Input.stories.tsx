import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'Outlined Input',
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    label: 'Filled Input',
    variant: 'filled',
  },
};

export const Standard: Story = {
  args: {
    label: 'Standard Input',
    variant: 'standard',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
  },
};
