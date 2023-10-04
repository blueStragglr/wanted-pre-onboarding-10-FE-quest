import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handlePrint = () => {
    console.log('ID: ', id);
    console.log('Password: ', password);
    navigate('/page2');
  };

  return (
    <div>
      <h1>Page 1: Login Form</h1>
      <form>
        <div>
          <label>ID:</label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handlePrint}>Print to Console</button>
      </form>
    </div>
  );
};

export default LoginForm;
