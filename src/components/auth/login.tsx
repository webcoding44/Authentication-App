'use client';

import { useState } from 'react';
import { authClient } from '../../lib/auth-client';

export const Login = () => {
  const loginwithgoogle = async () =>
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/home',
    });

  const loginwithgithub = async () =>
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: '/home',
    });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login = async () => {
    await authClient.signIn.email({
      email,
      password,
      callbackURL: '/home',
    });
  };

  return (
    <>
      <div>
        <button onClick={loginwithgithub}>Github</button>
        <button onClick={loginwithgoogle}>Google</button>

        <input
          type='email'
          placeholder='Email or Username'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>
      </div>
    </>
  );
};
