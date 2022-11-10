import React from 'react';
import { useAuth } from 'hooks/useAuth';
import AuthenticatedApp from './Authenticated';
import UnauthenticatedApp from './Unauthenticated';

const Root = () => {
  const auth = useAuth();
  return <>{auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
};

export default Root;
