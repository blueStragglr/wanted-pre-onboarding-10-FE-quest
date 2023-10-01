import React from 'react';
import Input from '../component/Input';
const Page1 = () => {
    return (
        <div>
            <Input  name="id" label="아이디"/>
            <br/>
            <Input  name="password" label="비밀번호"/>
        </div>
    );
};

export default Page1;