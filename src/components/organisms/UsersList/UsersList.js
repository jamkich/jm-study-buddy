import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import { Wrapper, StyledList } from './UserList.style';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log('Loading state has changed');
  }, [isLoading]);

  const deleteUser = (name) => {
    const filteredUser = users.filter((user) => user.name !== name);
    setUsers(filteredUser);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading....' : 'Users List'}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
