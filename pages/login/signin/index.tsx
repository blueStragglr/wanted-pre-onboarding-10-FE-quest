import SubmitForm from '@/components/login/SubmitForm';
import { useRouter } from 'next/router';

function SignIn() {
  const fields = [
    { name: 'email', label: 'Email Address', type: 'email', required: true, autoComplete: 'email' },
    { name: 'password', label: 'Password', type: 'password', required: true, autoComplete: 'current-password' },
  ];

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    router.replace('/result');
  };

  return (
    <SubmitForm
      submitFormTitle='Sign in'
      fields={fields}
      onSubmit={handleSubmit}
      buttonText='Sign In'
      checkboxLabel='Remember me'
    />
  );
}

export default SignIn;
