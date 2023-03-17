import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import 'assets/styles/fonts.css';
import Root from 'views/Root/Root';
import { worker } from 'mocks/browser';
import { AppProviders } from 'providers/AppProviders';

worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
