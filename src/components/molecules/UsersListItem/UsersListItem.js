import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.style';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types';

const UsersListItem = ({ deleteUser, users: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name} <DeleteButton onClick={() => deleteUser(name)} />
      </p>

      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
);

UsersListItem.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersListItem;
