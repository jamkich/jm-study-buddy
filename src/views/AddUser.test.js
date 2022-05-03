import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Bartosz' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '33%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getAllByText('Bartosz');
  });
});
