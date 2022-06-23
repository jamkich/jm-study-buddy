import React from 'react';
import { Wrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="group" />} />
          <Route path="/group" element={<Dashboard />}>
            <Route path=":id" element={<Dashboard />} />
          </Route>
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};
const UnauthenticatedApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  return (
    <form
      onSubmit={handleSubmit(signIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      {errors.login && <span>Login is required</span>}
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.password && <span>password is required</span>}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      <Button type="submit">Sign in</Button>
      {/* {loginError && <span>{loginError}</span>} */}
    </form>
  );
};

const Root = () => {
  const auth = useAuth();
  return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
