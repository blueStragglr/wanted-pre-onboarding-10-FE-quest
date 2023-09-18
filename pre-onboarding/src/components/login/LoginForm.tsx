'use client';
import React, { useEffect, useState } from 'react';
import useInput from '../hooks/useInput';

export default function LoginForm() {
    const [user, onChange, reset] = useInput({ id: '', password: '' });
    // const [isEmail, setIsEmail] = useState(false);
    const handlerLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(user);
        reset();
    };

    // useEffect(() => {
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     setIsEmail(emailPattern.test(user.id));
    // }, [user.id]);

    return (
        <form className="flex flex-col gap-1 text-black my-6">
            <label htmlFor="id" className="text-white text-xs">
                아이디
            </label>
            <input
                className="h-10 pl-2 text-sm"
                type="text"
                name="id"
                value={user.id}
                onChange={onChange}
                placeholder="아이디를 입력해주세요"
            />
            <label htmlFor="password" className="text-white text-xs">
                비밀번호
            </label>
            <input
                className="h-10 text-sm pl-2"
                type="password"
                name="password"
                value={user.password}
                onChange={onChange}
                placeholder="비밀번호를 입력해주세요"
            />
            <button
                className={`w-full rounded-full py-3 px-6 text-white  mt-5 bg-cyan-500`}
                // className={`w-full rounded-full py-3 px-6 text-white  mt-5 ${isEmail ? 'bg-cyan-500' : 'bg-gray-500'}`}
                type="submit"
                onClick={handlerLogin}
                // disabled={!isEmail}
            >
                로그인
            </button>
        </form>
    );
}
