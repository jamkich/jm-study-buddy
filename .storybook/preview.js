import React from 'react';
import { AppProviders } from 'providers/AppProviders';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <AppProviders theme="default">
      <Story />
    </AppProviders>
  ),
];
