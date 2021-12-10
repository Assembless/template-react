import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RecoilRoot } from 'recoil';
import { AppRoutes } from './pages';
import { theme } from './config/theme';
import ErrorBoundary from './components/ErrorBoundry';
import FallbackPage from './pages/FallbackPage';
import { LitteraService } from './config.littera';

function App() {
  return (
    <ErrorBoundary>
      <RecoilRoot>
        <LitteraService initialLocale="pl_PL">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={<FallbackPage />}>
              <Router>
                <AppRoutes />
              </Router>
            </Suspense>
          </ThemeProvider>
        </LitteraService>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default App;
