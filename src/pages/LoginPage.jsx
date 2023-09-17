import { useState } from "react";
import * as S from "../styles/LoginStyles"

export default function LoginPage() {
    const [info, setInfo] = useState({id: "", password: ""})

    const onChangeInput = (event) => {
        setInfo({...info, [event.target.id]: event.target.value});
    }

    const onClickLogin = (event) => {
        event.preventDefault();
        console.log(info);
    }

    return (
        <S.Wrapper>
            <S.Title>로그인</S.Title>
            <form>
                <S.Input type="text" placeholder="아이디" id="id" onChange={onChangeInput} />
                <S.Input type="password" placeholder="비밀번호" id="password" onChange={onChangeInput} />
                <S.Button onClick={onClickLogin}>로그인</S.Button>
            </form>
        </S.Wrapper>
    )
}