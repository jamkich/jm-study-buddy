import { render, screen, fireEvent } from 'test-utils';
import Modal from './Modal';
import { SearchBar } from '../SearchBar/SearchBar';

describe('Modal', () => {
  it('Display Modal when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Faye' } });
    const a = await screen.findByText('Faye Abshire');
    fireEvent.click(a);
    render(<Modal isOpen={true} />);
    screen.getByText('Course:');
  });
});
