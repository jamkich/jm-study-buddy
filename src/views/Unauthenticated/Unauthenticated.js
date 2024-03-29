import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { FormWrapper, Wrapper } from './Unauthenticated.styles';

const UnauthenticatedApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();
  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(signIn)}>
        {errors.login && <span>Login is required</span>}
        <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
        {errors.password && <span>password is required</span>}
        <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
        <Button type="submit">Sign in</Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default UnauthenticatedApp;
