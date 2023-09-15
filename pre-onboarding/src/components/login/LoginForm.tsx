'use client';
import React, { useEffect } from 'react';
import useInput from '../hooks/useInput';

export default function LoginForm() {
    const [user, onChange, reset] = useInput({ id: '', password: '' });
    const handlerLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(user);
        reset();
    };

    return (
        <form className="flex flex-col gap-1 text-black my-6">
            <input type="text" name="id" value={user.id} onChange={onChange} />
            <input type="text" name="password" value={user.password} onChange={onChange} />
            <button className="w-full text-white" type="submit" onClick={handlerLogin}>
                로그인
            </button>
        </form>
    );
}
