import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unauthenticated  user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);

    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Elo' } });
    fireEvent.change(password, { target: { value: 'masno' } });

    fireEvent.click(screen.getByText('Sign in'));

    await screen.findByText(/Oops/);
  });
});
