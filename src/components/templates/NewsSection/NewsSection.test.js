import MockAdapter from 'axios-mock-adapter';
import { screen } from '@testing-library/react';
import axios from 'axios';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import NewsSection, { query } from './NewsSection';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded correctly', async () => {
    mock.onPost('/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock
      .onPost('https://graphql.datocms.com/', { query })
      .reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }] } });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
