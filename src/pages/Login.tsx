import styled from 'styled-components';
import Input from '../common/components/Input';
import colors from '../style/colors';
import Txt from '../common/components/Txt';
import Spacing from '../common/components/Spacing';
import Button from '../common/components/Button';
import { useRef, useState } from 'react';
import { useModalContext } from '../common/components/Modal';
import { isValidId, isValidPassword } from '../common/utils/validateLogin';

const Login = () => {
  const [errorText, setErrorText] = useState({
    id: '',
    password: '',
  });
  const idRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const { openModal } = useModalContext();

  const isIdError = !!errorText.id;
  const isPasswordError = !!errorText.password;

  const handleLogin = () => {
    const idValidationResult = isValidId(idRef.current?.value!);
    const pwValidationResult = isValidPassword(passwordRef.current?.value!);

    if (!idValidationResult) {
      setErrorText((prev) => ({
        ...prev,
        id: '아이디는 2글자 이상 8글자 이하 영어 소문자만 가능합니다.',
      }));
    } else {
      setErrorText((prev) => ({
        ...prev,
        id: '',
      }));
    }

    if (!pwValidationResult) {
      setErrorText((prev) => ({
        ...prev,
        password:
          '비밀번호 6글자 이상이며, 영어 대문자 1글자 이상 포함되어야 합니다.',
      }));
    } else {
      setErrorText((prev) => ({
        ...prev,
        password: '',
      }));
    }

    if (idValidationResult && pwValidationResult) {
      openModal({
        variant: '2-button',
        title: '로그인 정보',
        message: `아이디는 "${idRef.current?.value!}"\n비밀번호는 "${'*'.repeat(
          passwordRef.current?.value?.length!,
        )}" 입니다.\n정말 로그인하시겠습니까?`,
        buttonSpan: ['취소', '확인'],
        onConfirm: () => {
          console.log(`id: ${idRef.current?.value!}`);
          console.log(`pw: ${passwordRef.current?.value!}`);

          // @ts-ignore
          idRef.current.value = '';
          // @ts-ignore
          passwordRef.current.value = '';
        },
      });
    }
  };

  return (
    <Container>
      <Txt typography={'h2'}>Login</Txt>
      <Spacing direction="vertical" size={16} />
      <Input label="Username" bottomText={errorText.id}>
        <Input.TextField ref={idRef} error={isIdError} maxLength={8} />
      </Input>
      <Spacing direction="vertical" size={8} />
      <Input label="Password" bottomText={errorText.password}>
        <Input.TextField
          ref={passwordRef}
          type="password"
          error={isPasswordError}
        />
      </Input>
      <Spacing direction="vertical" size={24} />
      <Button style={{ width: '100%' }} onClick={handleLogin}>
        로그인 하기
      </Button>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  width: 600px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${colors.grey500};
`;
