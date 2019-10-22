import React from 'react';

interface Props { // extend React Router Props<>

}

const SignInForm: React.FC<Props> = (props) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState('');

  return (
    <form>
      <input
        type='email'
        value={email}
        onChange={
          (event) => setEmail(event.target.value)
        }
      />
      <input
        type='password'
        value={password}
        onChange={
          (event) => setPassword(event.target.value)
        }
      />
      <button type='submit'>Sign In!!!</button>
    </form>
  )
}

export default SignInForm
