import { useState } from 'react';
export const Member = () => {
    const [userid, setUserid] = useState('');

    const [userpw, setUserpw] = useState('');

    const handleSubmit = (e) => {
        console.log('입력한 아이디 :' + userid);
        console.log('입력한 패스워드 :' + userpw);
        e.preventDefault();
    };
    return (
        <div className="border">
            <h1 className="bg-blue-300">회원가입</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userid"
                    placeholder="아이디"
                    value={userid}
                    required
                    onChange={(e) => setUserid(e.target.value)}
                />

                <input
                    type="password"
                    name="userpw"
                    placeholder="비밀번호"
                    value={userpw}
                    required
                    onChange={(e) => setUserpw(e.target.value)}
                />
                <button type="submit">가입</button>
            </form>
        </div>
    );
};

export default Member;
