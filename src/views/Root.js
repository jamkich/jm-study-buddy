import React from 'react';
import { useAuth } from 'hooks/useAuth';
import AuthenticatedApp from './Authenticated';
import UnauthenticatedApp from './Unauthenticated';
import Notification from 'components/molecules/Notification/Notification';

const Root = () => {
  const auth = useAuth();
  return (
    <>
      <Notification />
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
