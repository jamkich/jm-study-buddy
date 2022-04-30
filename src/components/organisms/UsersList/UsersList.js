import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './UserList.styles';
import Title from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
