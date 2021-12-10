import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: `#ffffff`,
    },
    secondary: {
      main: `#6046A4`,
    },
    background: {
      default: `pink`,
    },
  },
  typography: {
    fontFamily: `Add your font`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: `100vh`,
        },
      },
    },
  },
});
