import * as S from "./Login.styles";

export default function LoginUI(props) {
  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.LoginTitle>Login</S.LoginTitle>
        <S.IdInput type="text" placeholder="Id" onChange={props.onChangeId} />
        <S.PasswordInput
          type="password"
          placeholder="Password"
          onChange={props.onChangePassword}
        />
        <S.SaveWrapper>
          <S.SaveId type="checkbox" />
          <S.SaveIdText>아이디 저장</S.SaveIdText>
        </S.SaveWrapper>
        <S.LoginButton onClick={props.onClickLogin}>Login</S.LoginButton>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
