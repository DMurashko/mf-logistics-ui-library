import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from 'storybook/test';
import { NotificationProvider } from './NotificationContext';
import { useNotification } from './useNotification';
import { Button } from '../Button/Button';
import Box from '@mui/material/Box';

const NotificationDemo = ({ type }: { type: 'success' | 'error' | 'both' }) => {
  const { showSuccess, showError } = useNotification();

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {(type === 'success' || type === 'both') && (
        <Button variant="contained" color="success" onClick={() => showSuccess('Operation completed successfully!')}>
          Show Success
        </Button>
      )}
      {(type === 'error' || type === 'both') && (
        <Button variant="contained" color="error" onClick={() => showError('Something went wrong!')}>
          Show Error
        </Button>
      )}
    </Box>
  );
};

const meta = {
  title: 'Components/Notification',
  component: NotificationDemo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <NotificationProvider>
        <Story />
      </NotificationProvider>
    ),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'both'],
    },
  },
} satisfies Meta<typeof NotificationDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /show success/i });
    await userEvent.click(button);
    const alert = await within(document.body).findByRole('alert');
    await expect(alert).toHaveTextContent('Operation completed successfully!');
  },
};

export const Error: Story = {
  args: {
    type: 'error',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /show error/i });
    await userEvent.click(button);
    const alert = await within(document.body).findByRole('alert');
    await expect(alert).toHaveTextContent('Something went wrong!');
  },
};

export const AllTypes: Story = {
  args: {
    type: 'both',
  },
};
