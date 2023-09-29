'use client';

import { FormEvent, useState } from 'react';

import Input from '@components/Input';

export default function HomePage() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <form onSubmit={handleLoginSubmit} className="w-[400px] px-4 py-6">
      <h1 className="mb-5 text-3xl font-semibold text-center">Login</h1>
      <section className="mb-6">
        <Input
          type="email"
          name="Email"
          value={emailValue}
          setValue={setEmailValue}
        />
        <Input
          type="password"
          name="Password"
          value={passwordValue}
          setValue={setPasswordValue}
        />
      </section>
      <button type="submit" className="w-full btn">
        Login
      </button>
    </form>
  );
}
