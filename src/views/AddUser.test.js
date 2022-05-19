import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
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
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getAllByText('Bartosz');
  });

  it('Prevent adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Jan' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '33%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Jan');
    expect(newUser).not.toBeInTheDocument();
  });
});
