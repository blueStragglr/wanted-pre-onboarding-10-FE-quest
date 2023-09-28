import { useState } from 'react';

const Signin = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const onSubmit = () => {
    console.log(form);
  };
  return <form onSubmit={onSubmit}></form>;
};

export default Signin;
