import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  label: "아이디" | "비밀번호";
  name: "id"| "password";
  error?:boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue:string
}
const inputData ={
    "아이디" : {type: "text", placeholder : "아이디를 입력하세요." ,},
    "비밀번호" : {type: "password", placeholder : "비밀번호를 입력하세요."},
}

const Input: React.FC<InputProps> = ({ label,name,error,setInputValue,inputValue }) => {
    
    const type = inputData[label].type;
    const placeholder = inputData[label].placeholder;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <InputContainer>
      {label && <label>{label}</label>}
      <InputEl
        type={type}
        name= {name}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {error && <ErrorMessage >{error}</ErrorMessage>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
margin-bottom: 1rem;
`;

const InputEl = styled.input`
 padding: '0.5rem';
 font-size: '1rem' ;
`;

const ErrorMessage =styled.span`
color: 'red';
 font-size: '0.8rem';
`;

export default Input;
