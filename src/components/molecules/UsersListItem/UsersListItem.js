import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.style';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name} <Button />
      </p>

      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
