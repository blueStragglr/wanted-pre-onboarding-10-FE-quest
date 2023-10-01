import React,{useState} from 'react';
import Input from '../component/Input';
import Button from '../component/Button';
const Page1 = () => {
    const [inputID, setInputID] = useState('');
    const [inputPW,setInputPW]= useState('');
    const printingData = inputID+inputPW;

    return (
        <div>
            <Input  name="id" label="아이디" setInputValue={setInputID} inputValue= {inputID}/>
            <br/>
            <Input  name="password" label="비밀번호"setInputValue={setInputPW} inputValue= {inputPW}/>
            
            <Button data = {printingData}/>
        </div>
    );
};

export default Page1;