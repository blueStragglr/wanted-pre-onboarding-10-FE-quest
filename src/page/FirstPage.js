import React, { useState } from 'react';

const FirstPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={() => {
          console.log(`id : ${id}`);
          console.log(`password : ${password}`);
        }}
      >
        콘솔에서 확인하기
      </button>
    </div>
  );
};

export default FirstPage;
