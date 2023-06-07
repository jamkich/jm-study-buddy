import React from 'react';
import { Wrapper } from 'views/Root/Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard/Dashboard';
import Notes from 'views/Notes/Notes';

const AuthenticatedApp = () => {
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
