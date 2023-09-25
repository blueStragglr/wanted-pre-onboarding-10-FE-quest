import { useRouter } from 'next/router';
import SubmitForm from '@/components/login/SubmitForm';

function SignUp() {
  const fields = [
    { name: 'firstName', label: 'First Name', required: true, autoComplete: 'given-name' },
    { name: 'lastName', label: 'Last Name', required: true, autoComplete: 'family-name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, autoComplete: 'email' },
    { name: 'password', label: 'Password', type: 'password', required: true, autoComplete: 'new-password' },
  ];

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
    router.replace('/login/signin');
  };

  return <SubmitForm submitFormTitle='Sign up' fields={fields} onSubmit={handleSubmit} buttonText='Sign Up' />;
}

export default SignUp;
