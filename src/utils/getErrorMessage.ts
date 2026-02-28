export const getErrorMessage = (error: unknown): string => {
  if (error && typeof error === 'object' && 'response' in error) {
    const response = (error as { response?: { data?: { message?: unknown } } }).response;
    const data = response?.data;
    if (data?.message) {
      if (Array.isArray(data.message)) {
        return data.message.join(', ');
      }
      return String(data.message);
    }
    if ('message' in error && typeof error.message === 'string') {
        return error.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
      return error;
  }

  return 'An unexpected error occurred';
};
