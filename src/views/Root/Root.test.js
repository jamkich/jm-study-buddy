import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);

    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Bad' } });
    fireEvent.change(password, { target: { value: 'Mad' } });

    fireEvent.click(screen.getByText('Sign in'));

    await screen.findByText(/Oops/);
  });

  it('Display authenticated application', async () => {
    render(<Root />);

    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: 'Test123!' } });

    fireEvent.click(screen.getByText('Sign in'));

    await screen.findByText(/info/i);
  });
});
