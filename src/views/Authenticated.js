import React from 'react';
import { Wrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import Notes from './Notes';
import { useDispatch } from 'react-redux';
import { createNotification } from 'store';

const AuthenticatedApp = () => {
  const dispatch = useDispatch();
  // dispatch(createNotification({ type: 'info', message: 'You have been logged in' }));

  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="group" />} />
          <Route path="/group" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
