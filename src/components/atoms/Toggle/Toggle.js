import React from 'react';
import { Button } from '../Button/Button';
import { func, string } from 'prop-types';

const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch from {theme}</Button>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
