import React from 'react';
import { users } from 'data/users';
import { Wrapper, StyledList } from './UserList.style';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData) => (
        <UsersListItem key={userData.name} userData={userData} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
