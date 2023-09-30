import React, { useState } from 'react';
import styled from "styled-components";
const Input = ({label,name}:InputProps) => {
    const [data,setData] =useState("");
    const [isValid,setisValid]=useState(true);

    const type = name!=="password"?"text":"password";
    const placeholder = label ==="id"?"아이디를 입력하세요":"비밀번호를 입력하세요";

    function handleInput(){
        setData("");
    }

    return (
        <label>
            {label}
            <input 
            type={type} 
            value={data} 
            name ={name}
            placeholder = {placeholder}
            onChange={handleInput}
            />
            {isValid ||<span>잘못입력하셨습니다.</span>}
        </label>
    );
};
interface InputProps {
    label: string
    name: string
}
export default Input;