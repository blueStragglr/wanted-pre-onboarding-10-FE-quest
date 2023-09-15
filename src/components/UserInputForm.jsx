import React, { useRef } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

import style from './UserInputForm.module.scss';
const UserInputForm = () => {
  const emailInputRef = useRef();
  const passwordRef = useRef();
  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  return (
    <Form className={style.UserInputForm}>
      <FormGroup>
        <Label for="email">이메일</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="이메일을 입력하세요."
          innerRef={emailInputRef}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">비밀번호</Label>
        <Input
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
          type="password"
          innerRef={passwordRef}
        />
      </FormGroup>
      <Button
        size="lg"
        color="primary"
        className={style.UserInputForm__button}
        onClick={loginHandler}
      >
        로그인
      </Button>
    </Form>
  );
};

export default UserInputForm;
