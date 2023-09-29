import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 93%; 
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-size: 16px;
  background-color: #f5f5f5;
`;

const SubmitButton = styled.button`
  width: 100%; /* 너비 100% 설정 */
  padding: 10px;
  background-color: #03c75a;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #028c49;
  }
`;

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="text"
          name="id"
          placeholder="아이디"
          {...register("id")}
        />
        <InputField
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        <SubmitButton type="submit">로그인</SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default LoginForm;
