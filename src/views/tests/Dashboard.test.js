import React from 'react';
import { render, screen, fireEvent } from 'test-utils';
import Root from '../Root';

it('Display Modal after click StudentsListItem', async () => {
  render(<Root />);

  const login = screen.getByLabelText('login');
  const password = screen.getByLabelText('password');

  fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
  fireEvent.change(password, { target: { value: 'Test123!' } });

  fireEvent.click(screen.getByText('Sign in'));

  const faye = await screen.findByText(/faye/i);
  fireEvent.click(faye);
});
