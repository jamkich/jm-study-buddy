import { render, screen, fireEvent, waitFor } from 'test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { SearchBar } from './SearchBar';
import { toBeVisible } from '@testing-library/jest-dom';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Display users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });

    await screen.findByText(/Adam Ro/);
  });

  it('Hide results while input has no value', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Ro/);

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => expect(screen.getByLabelText('results')).not.toBeVisible());
  });
});
