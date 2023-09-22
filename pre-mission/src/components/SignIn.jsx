import React, { useState } from 'react';
import {Container, Form, SignInTitle, Input} from './signIn-styled';

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

    }

    return (
        <div>
            <Container>
                <Form>
                    <SignInTitle>로그인</SignInTitle>
                </Form>
            </Container>
        </div>
    )
}

export default SignIn;