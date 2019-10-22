import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import SignInContainer from './SignIn';

const SignInRoutes: React.FC = () => {
  return (
    <>
      <Link to='sign-in'>Sign In</Link>
      <Route
        exact
        path='/sign-in'
        component={SignInContainer}
      />
    </>
  );
};

export default SignInRoutes;
