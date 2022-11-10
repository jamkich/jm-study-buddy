import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createNotification } from 'store';

const AuthContext = React.createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
      dispatch(createNotification({ type: 'INFO', message: 'You have been logged in 😁.' }));
    } catch (e) {
      // TODO
      // naprawic przeladowywanie state noti kiedy trafia tam error, sprobuj wymusic wyswietlanie
      dispatch(createNotification({ type: 'ERROR', message: 'Invalid email or password.' }));
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw Error('useAuth needs to be inside AuthContext');
  }
  return auth;
};
