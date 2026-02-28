import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";
import type { ReactNode } from "react";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7", // Deep Purple
      light: "#9a67ea",
      dark: "#320b86",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#009688", // Teal
      light: "#52c7b8",
      dark: "#00675b",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f6",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
