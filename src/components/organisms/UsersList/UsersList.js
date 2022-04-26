import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import { Wrapper, StyledList } from './UserList.style';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUser = users.filter((user) => user.name !== name);
    setUsers(filteredUser);
  };

  return (
    <Wrapper>
      <h1>Students list</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
