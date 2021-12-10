import { theme } from "../src/config/theme";
import { LitteraService } from '../config.littera'
import { ThemeProvider as MuiThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { ThemeProvider } from "emotion-theming";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <LitteraService initialLocale="pl_PL">
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={{}} />
          <Story />
        </ThemeProvider>
      </MuiThemeProvider>
    </LitteraService>
  )
];