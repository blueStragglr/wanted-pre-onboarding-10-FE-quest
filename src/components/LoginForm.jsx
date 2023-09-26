import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        name='id'
        placeholder='아이디'
        {...register("id")}
      />
      <input
        type='password'
        name='password'
        placeholder='비밀번호'
        {...register("password")}
      />
      <button type='submit'>로그인</button>
    </form>
  )
}

export default LoginForm;