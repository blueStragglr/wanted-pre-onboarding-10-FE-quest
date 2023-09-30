import React, { useState } from 'react';
import {Container, Form, SignInTitle, InputWrapper, InputTitle,
    Input, Button} from './signIn-styled';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleLogIn = (e) => {
        e.preventDefault();

        try{
            console.log('Email: ', formData.email);
            console.log('Password: ', formData.password);
        } catch(error){
            console.log('로그인 실패: ', error);
        }

    };

    return (
        <div>
            <Container>
                <Form onSubmit={handleLogIn}>
                    <SignInTitle>로그인</SignInTitle>
                    <InputWrapper>
                        <InputTitle>이메일</InputTitle>
                        <Input
                        name="email"
                        type="email"
                        placeholder="abcd@email.com"
                        value={formData.email}
                        onChange={handleInput}/>
                        <InputTitle>패스워드</InputTitle>
                        <Input
                        name="password"
                        type="password"
                        placeholder="******"
                        value={formData.password}
                        onChange={handleInput}/>
                    </InputWrapper>
                    <Button type="submit">로그인</Button>
                </Form>
            </Container>
        </div>
    )
}

export default SignIn;