import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleIdChange = (event) => {
    setId(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const saveCredentials = () => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Password", password);
    console.log("아이디와 비밀번호가 저장되었습니다.");
  };

  const handleSubmit = () => {
    console.log('아이디:', id);
    console.log('비밀번호:', password);

    if(id === "kidrauhl14" && password === "0000"){
      navigate("/result")
    } else{
      alert("다시해보세요!")
    }
  };

    const handleButtonClick = () => {
      saveCredentials();
      handleSubmit();
    };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="id">아이디:</label>
          <input type="text" id="id" value={id} onChange={handleIdChange} />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </form>
        <button onClick={handleButtonClick}>로그인!</button>
    </div>
  );
}
