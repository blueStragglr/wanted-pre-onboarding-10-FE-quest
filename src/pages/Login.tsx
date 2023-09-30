import { useState } from "react";
import styled from "styled-components";

interface LoginInfo {
    id: string;
    password: string;
}

const Login: React.FC = () => {
    const [info, setInfo] = useState<LoginInfo>({ id: "", password: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLoginInfo = () => {
        console.log("ID:", info.id);
        console.log("Password:", info.password);
    }

    return (
        <MainDiv>
            <Border>
                <TitleDiv>
                    <Title>로그인</Title>
                </TitleDiv>

                <Container>
                    <InputBox
                        name="id"
                        placeholder="아이디를 입력해주세요."
                        type="text"
                        value={info.id}
                        onChange={handleChange}
                    />
                </Container>
                <Container>
                    <InputBox
                        name="password"
                        placeholder="비밀번호를 입력해주세요."
                        type="password"
                        value={info.password}
                        onChange={handleChange}
                    />
                </Container>

                <BtnDiv>
                    <LoginBtn onClick={handleLoginInfo}>로그인</LoginBtn>
                </BtnDiv>
            </Border>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    text-align: center;
`

const Border = styled.div`
    border: 1px solid black;
    padding: 10rem 8rem;
    border-radius: 2rem;
`

const TitleDiv = styled.div`
    padding-bottom: 3rem;
`

const Title = styled.h2`
    font-size: 3rem;
`

const Container = styled.div`
    padding: 1rem;
`

const InputBox = styled.input`
    width: 20rem;
    padding: 6px;
    border-bottom: 1px solid black;
`

const BtnDiv = styled.div`
    padding-top: 2rem;
`

const LoginBtn = styled.button`
    padding: 1rem 4rem;
    border-radius: 2rem;
    background-color: black;
    color: white;
    transition: transform 0.3s ease, background-color 0.3s ease;
    
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        background-color: #333;
    }
`

export default Login;