'use client';

import { useState } from 'react';
import { authClient } from '../../lib/auth-client';
import { useRouter } from 'next/navigation';

export const SignUp = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // EMAIL + PASSWORD SIGNUP
  const handleSignup = async () => {
    await authClient.signUp.email({
      email,
      password,
      name: username, // مهم: Better Auth معمولاً username را به اسم map می‌کند
      callbackURL: '/home',
    });
  };

  // GOOGLE LOGIN (هم signup هم login)
  const signupWithGoogle = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/home',
    });
  };

  // GITHUB LOGIN
  const signupWithGithub = async () => {
    await authClient.signIn.social({
      provider: 'github',
      callbackURL: '/home',
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* SIGNUP BUTTON */}
      <button onClick={handleSignup}>
        Sign Up
      </button>

      <hr />

      {/* SOCIAL BUTTONS */}
      <button onClick={signupWithGoogle}>
        Continue with Google
      </button>

      <button onClick={signupWithGithub}>
        Continue with GitHub
      </button>
    </div>
  );
};