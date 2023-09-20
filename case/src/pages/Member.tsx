import { useState } from 'react';
export const Member: React.FC = () => {
    const [userid, setUserid] = useState('');

    const [userpw, setUserpw] = useState('');

    const handleSubmit = (e) => {
        console.log('입력한 아이디 :' + userid);
        console.log('입력한 패스워드 :' + userpw);
        alert('입력이 완료되었습니다.');
        setUserid('');
        setUserpw('');
        e.preventDefault();
    };
    return (
        <div className="border rounded-xl">
            <h4 className="bg-blue-300">회원가입</h4>
            <form onSubmit={handleSubmit} className="border rounded-xl flex flex-col">
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
                <button type="submit" className="button">
                    가입
                </button>
            </form>
        </div>
    );
};

export default Member;
