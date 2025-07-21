import { Suspense } from 'react';
import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemeProvider';

import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <App/>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)