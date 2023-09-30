import React, { useState } from 'react';

const Input = ({label,name}:InputProps) => {
    const [data,setData] =useState("");
    const type = name!=="password"?"text":"password";

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
            onChange={handleInput}
            />
        </label>
    );
};
interface InputProps {
    label: string
    name: string
}
export default Input;