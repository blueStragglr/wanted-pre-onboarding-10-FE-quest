import React from 'react';
interface ButtonProps{
    data: string;
}
const Button : React.FC<ButtonProps>= ({data}) => {
    function handleButton(){
        console.log(data);
    }
    return (
        <button onClick={handleButton}/>
    );
};

export default Button;