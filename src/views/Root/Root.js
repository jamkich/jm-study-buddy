import React from 'react';
import { useAuth } from 'hooks/useAuth';
import AuthenticatedApp from 'views/Authenticated/Authenticated';
import UnauthenticatedApp from 'views/Unauthenticated/Unauthenticated';
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
