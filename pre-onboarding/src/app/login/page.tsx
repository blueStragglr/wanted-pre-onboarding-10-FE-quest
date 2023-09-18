import LoginForm from '@/components/login/LoginForm';
import React from 'react';

export default function Login() {
    return (
        <div className="flex justify-center max-w-xl w-full flex-col items-center outline outline-offset-2 outline-blue-500 rounded-sm py-5">
            {/* 머리 */}
            <div className="text-center">
                <h1 className="my-5">Wanted</h1>
                <h2 className="my-4">
                    하나의 계정으로 <br /> 더욱 편리하게
                </h2>
                <p>
                    원티드가 제공하는 서비스를 <br />
                    하나의 계정으로 모두 이용할 수 있습니다.
                </p>
            </div>
            {/* 로그인폼 */}
            <LoginForm />
            {/* 꼬리 */}
            <div className="flex flex-col gap-3 items-center text-center border-t-2 w-3/4 pt-4">
                <p> 이용약관</p>
                <strong> 개인정보처리방침</strong>
                <p> @ Wantedlab, Inc.</p>
                <select className="text-black w-24" defaultValue={1}>
                    <option value={1}>한국어</option>
                    <option value={2}> 영어</option>
                    <option value={3}> 일본어</option>
                </select>
            </div>
        </div>
    );
}
