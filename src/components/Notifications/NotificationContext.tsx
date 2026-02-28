import { createContext, useCallback, useState } from 'react';
import type { PropsWithChildren } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { AlertColor } from '@mui/material/Alert';

interface Notification {
  message: string;
  severity: AlertColor;
}

interface NotificationContextValue {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
}

export const NotificationContext = createContext<NotificationContextValue | null>(null);

const AUTO_HIDE_DURATION = 4000;

export const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [open, setOpen] = useState(false);

  const show = useCallback((message: string, severity: AlertColor) => {
    setNotification({ message, severity });
    setOpen(true);
  }, []);

  const showSuccess = useCallback((message: string) => show(message, 'success'), [show]);
  const showError = useCallback((message: string) => show(message, 'error'), [show]);

  const handleClose = useCallback((_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  }, []);

  return (
    <NotificationContext.Provider value={{ showSuccess, showError }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={AUTO_HIDE_DURATION}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity={notification?.severity ?? 'info'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification?.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};
