import React from 'react';
import SignInForm from './Form';

interface Props { // extend React Router Props<>

}

const SignInContainer: React.FC<Props> = (props) => {
  return (
    <SignInForm />
  )
}

export default SignInContainer;
