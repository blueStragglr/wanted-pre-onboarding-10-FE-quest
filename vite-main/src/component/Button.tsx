import React from 'react';
interface ButtonProps{
    data: string;
    title?:string;
}
const Button : React.FC<ButtonProps>= ({data,title ="전송"}) => {
    function handleButton(){
        console.log(data);
    }
    return (
        <button onClick={handleButton} >{title}</button>
    );
};

export default Button;