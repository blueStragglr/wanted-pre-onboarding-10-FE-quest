import React from 'react';
import Input from '../component/Input';
const Page1 = () => {
    return (
        <div>
            <Input  name="id" label="id"/>
            <br/>
            <Input  name="비밀번호" label="password"/>
        </div>
    );
};

export default Page1;