import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'index.css';
import 'assets/styles/fonts.css';
import Root from 'views/Root/Root';
import { worker } from 'mocks/browser';
import { AppProviders } from 'providers/AppProviders';

worker.start().then(() => {
  const container = document.getElementById('root');
  if (!container) throw new Error('Failed to find root element');

  const root = createRoot(container);
  root.render(
    <StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </StrictMode>
  );
});
